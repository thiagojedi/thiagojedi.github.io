---
draft: true
image: /images/typescript.png
metas:
  title: Explaining the new comment system
  image: /images/typescript.png
  lang: en-US
  description:
    So, using Mastodon replies as comments are all the rage this past few months. 
    And I too wanted to be like the cool kids. In this post I want to tell you 
    how I did it.
---

_Post image: A snippet of generic typescript code. Black background, cian, green
and white font colors._

Here's the deal, a few people asked me how I wrote the comment section you'll
find on the end of the page. Sure, I could just point people the giant whose
shoulders I'm standing (as I did on a previous post), but I believe I've now
made enough changes to deserve a post on its own.

## The task at hand

The challenge was simple: I wanted to have comments on each post without using
any dedicated comment system. Those normally are paid and I want to use my
current funds with another endeavor. The problem is that I use an static site
generator, [Lume][lume01], that doesn't allow me to use my favorite ui library,
[Preact][preact01], on the client side, only during the compile phase.

That's when I stumble on a post of [Julian Fietkau][fietkau01] where he uses
Mastodon's public API to get the replies of a post and display them as comments,
using only plain javascript and DOM manipulation, like the good ol' days. That's
exactly what I needed! And you should check his post for all the details and his
thoughts on the fediverse.

But I digress...

I took his code and, with a few modifications, I had a comment system working in
no time!

## Making it my own

I intended to leave that way, but my pride as a developer didn't allow me to
leave it as a copy: it needs to be a reinterpretation! So I started making small
changes here and there, and now it is very different from Julian's.

Let me go through all the code.

## Getting the replies

First, let's see how we get the data we need:

```js
async function loadComments(url, postId) {
  const context = await fetch(url).then((response) => response.json());

  if (Array.isArray(context.descendants) === false) {
    return [];
  }

  const tempMap = new Map();
  return context.descendants
    .filter((comment) => comment.visibility === "public")
    .map((comment) => ({ ...comment, children: [] }))
    .filter((comment) => {
      const parent = tempMap.get(comment.in_reply_to_id);
      if (parent) {
        parent.children.push(comment);
      }
      tempMap.set(comment.id, comment);
      return comment.in_reply_to_id === postId;
    });
}
```

This is the part of the code that I left mostly untouched, as it is pretty
straight forward. The function calls the an url and processes the response to
create a tree of replies, with the direct replies to given `postId` on the root.

I did change the iterations from `for` loops to Array methods as I like
functional style more.

It's important to note that the code first filters to only process comments with
`"public"` visibility. The Mastodon API returns, for anonymous calls,
`"unlisted"` posts too, that are technically public, but should not be on public
listings. Let's respect the users rights and choices of privacy, shall we?

Now, what to do with this data?

### HyperScript

Directly manipulating the DOM is ok. It works. Julian's implementation even used
a `<template/>` HTML tag that I didn't know, and was very instructive for me to
learn how it works.

But I'm a components guy. I told you my favorite UI lib is Preact, but I didn't
want to introduce another build pipeline or complicate the code with another
syntax.

Then I remembered an blog post from [Jason Miller][developit01], who
coincidentally is the creator of Preact, where he explains that JSX is just
syntax sugar for a thing called hypescript (not exactly, but still).

So I let's see how I did it.

```js
function h(tag, attributes, ...args) {
  return { tag, attributes, children: args.length ? [...args] : null };
}

function render(component) {
  if (component.appendChild) {
    // Component already rendered. Do nothing with it.
    return component;
  }
  if (typeof component === "string") {
    return document.createTextNode(component);
  } else {
    const element = document.createElement(component.tag);

    Object.entries(component.attributes || {}).forEach(
      ([k, v]) => (element[k] = v),
    );

    (component.children || []).forEach((child) => {
      if (child !== null && typeof child !== "boolean") {
        element.appendChild(render(child));
      }
    });

    return element;
  }
}
```

The first function, `h()` is a builder function that helps me create a component
tree in the format of a JSON object. Then this tree is passed to the `render()`
function to be translated to a DOM Element to be append on the page's HTML. The
only real difference from the Jason's example is that the `render()` handles
already rendered components, and does nothing with them. You'll see why later in
the text.

With this functions, I can create my own UI "components".

```js
function Placeholder() {
  return h("p", undefined, "Loading...");
}

function EmptyList() {
  return h("p", undefined, "No comments so far");
}

function Avatar({ avatar_static, display_name }) {
  return h("img", {
    src: avatar_static,
    alt: display_name.replace(/:.+?:/g, "").trim() + "'s avatar",
  });
}

function UserInfo({ url, acct, display_name, emojis }) {
  let account = acct;
  if (account.indexOf("@") === -1) {
    account = account + "@" + new URL(url).hostname;
  }
  return h("h3", {
    innerHTML: `${formatEmojisOnText(emojis, display_name)}&nbsp;@${account}`,
  });
}

function Timestamp({ created_at, edited_at, url }) {
  return h(
    "a",
    { href: url },
    h("time", { dateTime: created_at }, formatIsoDate(created_at)),
    edited_at &&
      h(
        "time",
        {
          title: "Last edited: " + formatIsoDate(edited_at),
          dateTime: edited_at,
        },
        "*",
      ),
  );
}

function Article(comment) {
  return h(
    "article",
    undefined,
    h(
      "header",
      undefined,
      Avatar(comment.account),
      UserInfo(comment.account),
      Timestamp(comment),
    ),
    h("p", { innerHTML: formatEmojisOnText(comment.emojis, comment.content) }),
  );
}

function ReplyList(comments, mentionFilter) {
  return h(
    "ul",
    undefined,
    ...comments.map((comment) =>
      h(
        "li",
        undefined,
        formatComment(comment, mentionFilter),
        ReplyList(comment.children, [comment.account.url]),
      )
    ),
  );
}
```

Now I can take that comment tree and transform it directly to a component tree,
to be rendered into DOM Elements later.

But what are those `formatThing` functions? Well... They format things!

Just kidding. Here are they:

```js
function formatIsoDate(isoDate) {
  return new Date(isoDate).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}
```

The first one is pretty simple, it only translated the date for a more readable
format.

```js
function formatEmojisOnText(emojis, text) {
  return emojis.reduce(
    (acc, { shortcode, static_url, url }) =>
      acc.replace(
        new RegExp(`\\B:${shortcode}:\\B`),
        `<picture><source srcset="${url}" media="(prefers-reduced-motion: no-preference)"><img src="${static_url}" alt=":${shortcode}:" title=":${shortcode}:"></picture>`,
      ),
    text,
  );
}
```

This one is also simple. It iterates on an array of custom emojis, and replaces
each one's `short_code` with its image url. So I can show that rolling Bulbasaur
that you proudly wear on your display name.

Now the fun one:

```js
const defaultFilter = ["https://cuscuz.in/@jedi"];
function formatComment(comment, firstMentionFilter = defaultFilter) {
  const articleElement = render(Article(comment));

  firstMentionFilter.forEach((mention) => {
    const element = articleElement.querySelector(
      `.mention[href='${mention}']:first-child`,
    );
    if (element) {
      element.remove();
    }
  });
  articleElement
    .querySelectorAll(".invisible")
    .forEach((element) => element.remove());

  return articleElement;
}
```

You see, there are two interesting behaviors on Mastodon's posts. And in this
formatter function I handle both.

The first one is that, when you start compose a reply to a post, Mastodon apps
add to the start of the text all the accounts mentioned on the original post so
it can notify each participant. That's ok for Mastodon, but Julian's
implementation correctly assumes that it would clutter the comments content and
removes the author of the post that the reply refers to, so I kept his logic
here.

The other behavior is that Mastodon marks the start and end of a long URL with a
CSS class so client's can hide them. I'd like to keep my blog with a
[classless][csstricks01] css style. So I just remove it.

As those are info inside a HTML response from Mastodon API, I need to first
render the `Article` component. That's why my `render()` needs to handle already
rendered components.

## All together now!

Let's put all the code and render the comments.

```js
if ("loading" === document.readyState) {
  document.addEventListener("DOMContentLoaded", initComments);
} else {
  initComments();
}

async function initComments() {
  const wrapper = document.querySelector("section#comments");
  if (!wrapper) {
    return;
  }

  const placeholder = render(Placeholder());
  wrapper.appendChild(placeholder);

  try {
    const idRegex = /\/@\w+\/(\d+)$/;

    const url = wrapper.dataset.url;
    const postId = idRegex.exec(url)[1];
    const commentContext = url.replace(idRegex, `/api/v1/statuses/$1/context`);

    const comments = await loadComments(commentContext, postId);
    const commentsList = render(
      comments.length === 0 ? EmptyList() : ReplyList(comments),
    );
    placeholder.replaceWith(commentsList);
  } catch (err) {
    console.error(err);
    placeholder.innerText =
      `Could not load comments because of: ${err.message}`;
  }
}
```

On page load, we check if there's a comment section and render a Placeholder
component inside this section, to indicate the comments are loading. I use
[Lume's front matter][lume02] to conditionally add this section with a data
attribute with an url to a Mastodon post, if it exists.

Then I get this url, process it to get only the post ID and create the final API
call, and with the result, I replace the placeholder with the right component.

## Simple as that

That's all I wanted to share with you. You may find the final and complete code
[here][jedi01]. And the CSS for the comments are in a dedicated file
[here][jedi02]. Feel free to use them.

My current flow today is as follows: I publish an article on my blog, then I
post a toot on my Mastodon profile promoting the post. With that toot url, I
update my blog article connecting both. Et voilà! Replies are now comments.

Besides my take, and Julian's that I mentioned a lot on this text, there are a
lot of different ones doing the same in different ways, with different languages
and technologies. I'd like to mention Óscar Otero's (creator of Lume) take with
[webcomponents version][oscarotero01], where he lists all the "inspiration
chain" that led to his version.

God, how I love the open source community!

I hope that you too will be inspired to create your own version. And please let
me know!

May the Force be with y'all!

[csstricks01]: https://css-tricks.com/no-class-css-frameworks/
[developit01]: https://jasonformat.com/wtf-is-jsx/
[fietkau01]: https://fietkau.blog/2023/another_blog_resurrection_fediverse_new_comment_system
[jedi01]: https://github.com/thiagojedi/thiagojedi.github.io/blob/main/src/assets/mastodon_comments.js
[jedi02]: https://github.com/thiagojedi/thiagojedi.github.io/blob/main/src/comments.css
[lume01]: https://lume.land/
[lume02]: https://lume.land/docs/creating-pages/page-data/
[oscarotero01]: https://github.com/oom-components/mastodon-comments
[preact01]: https://preactjs.com/
