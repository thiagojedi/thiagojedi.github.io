/*
  Mastodon comment integration code by Thiago 'Jedi' Cerqueira, 2023.

  Closely inspired by:
  Jan Wildeboer - https://jan.wildeboer.net/2023/02/Jekyll-Mastodon-Comments/
  Cassidy Blade - https://mastodon.blaede.family/@cassidy/110623574992080570
  Julian Fietkau - https://fietkau.blog/2023/another_blog_resurrection_fediverse_new_comment_system

  This is just the JavaScript code, you'll need to supply your own HTML
  container (including a template for comment rendering) and CSS.

  Released under the terms of the MIT license.
*/

function h(tag, attributes, ...args) {
  return { tag, attributes, children: args.length ? [...args] : null };
}

/**
 * Renders an object into a html element
 * @param {{tag: string, attributes?: object, children?: object[]} | string| HTMLElement} component
 */
function render(component) {
  if (component.appendChild) {
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

function formatIsoDate(isoDate) {
  return new Date(
    Date.UTC(
      parseInt(isoDate.slice(0, 4), 10),
      parseInt(isoDate.slice(5, 7), 10) - 1,
      parseInt(isoDate.slice(8, 10), 10),
      parseInt(isoDate.slice(11, 13), 10),
      parseInt(isoDate.slice(14, 16), 10),
      parseInt(isoDate.slice(17, 19), 10),
    ),
  ).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}

function formatEmojis(emojis, element) {
  emojis.forEach(({ shortcode, static_url, url }) => {
    element.innerHTML = element.innerHTML.replace(
      `:${shortcode}:`,
      `<picture><source srcset="${url}" media="(prefers-reduced-motion: no-preference)"><img src="${static_url}" alt=":${shortcode}:" title=":${shortcode}:"></picture>`,
    );
  });
}

function renderComment(comment, firstMentionFilter) {
  const userDisplayName = comment.account.display_name;

  const displayNameWithoutEmoji = userDisplayName.replace(/:.+?:/g, "").trim();

  const avatar = h("img", {
    src: comment.account.avatar_static,
    alt: `${displayNameWithoutEmoji}'s avatar`,
  });

  let account = comment.account.acct;
  if (account.indexOf("@") === -1) {
    account = account + "@" + new URL(comment.account.url).hostname;
  }

  const displayName = h("h3", {
    innerHTML: `${userDisplayName}&nbsp;@${account}`,
  });

  const time = h(
    "time",
    { dateTime: comment.created_at },
    formatIsoDate(comment.created_at),
    comment.edited_at &&
      h(
        "time",
        {
          title: "Last edited: " + formatIsoDate(comment.edited_at),
          dateTime: comment.edited_at,
        },
        "*",
      ),
  );

  const link = h("a", { href: comment.url }, time);

  const header = h("header", undefined, avatar, displayName, link);

  const content = h("p", { innerHTML: comment.content });

  const article = h("article", undefined, header, content);

  const articleElement = render(article);

  firstMentionFilter.forEach((mention) => {
    const element = articleElement.querySelector(`.mention[href='${mention}']`);
    if (element) {
      element.remove();
    }
  });

  formatEmojis(
    new Set([...comment.emojis, ...comment.account.emojis]),
    articleElement,
  );

  return articleElement;
}

function renderComments(comments, mentionFilter) {
  return h(
    "ul",
    undefined,
    ...comments.map((comment) =>
      h(
        "li",
        undefined,
        renderComment(comment, mentionFilter),
        renderComments(comment.children, [comment.account.url]),
      )
    ),
  );
}

function showComments(comments) {
  const commentsElem = document.querySelector("section#comments");

  let commentList;
  if (comments.length === 0) {
    commentList = h("p", undefined, "No comments so far");
  } else {
    // List of mentions that should be stripped if a top-level comment starts with one of them.
    // Insert your fedi ID here!
    const defaultInitialMentionFilter = ["https://cuscuz.in/@jedi"];

    commentList = renderComments(comments, defaultInitialMentionFilter);
  }

  commentsElem.appendChild(render(commentList));
}

/** @type {Map<string,any>} */
const tempMap = new Map();

async function loadComments(url) {
  const rootId = url.split("/")[6];

  const response = await fetch(url);
  const data = await response.json();

  /** @type {Array<{in_reply_to_id: string, visibility: string}>} */
  const descendants = data.descendants;

  if (Array.isArray(descendants) === false) {
    return [];
  }

  return descendants
    .filter((comment) => comment.visibility === "public")
    .map((comment) => ({ ...comment, children: [] }))
    .filter((comment) => {
      const parent = tempMap.get(comment.in_reply_to_id);
      if (parent) {
        parent.children.push(comment);
      }
      tempMap.set(comment.id, comment);
      return comment.in_reply_to_id === rootId;
    });
}

const urlRegex = /\/@\w+\/(\d+)$/;

async function initComments() {
  const commentsElem = document.querySelector("section#comments");
  if (!commentsElem) {
    return;
  }

  const placeholder = render(
    h("p", { className: "placeholder" }, "Loading..."),
  );

  commentsElem.appendChild(placeholder);

  const commentsUrl = commentsElem.dataset.url;
  const urlParts = urlRegex.exec(commentsUrl);

  let comments;
  try {
    const commentContext = commentsUrl.replace(
      urlRegex,
      `/api/v1/statuses/${urlParts[1]}/context`,
    );
    comments = await loadComments(commentContext);

    placeholder.remove();
  } catch (err) {
    console.error(err);
    document.querySelector("section#comments .placeholder").innerText =
      "Could not load comments because of: " + err.message;
  }

  if (comments) {
    showComments(comments);
  }
}

if ("loading" === document.readyState) {
  document.addEventListener("DOMContentLoaded", initComments);
} else {
  initComments();
}
