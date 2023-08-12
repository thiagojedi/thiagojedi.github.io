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

// List of mentions that should be stripped if a top-level comment starts with one of them.
// Insert your fedi ID here!
const defaultInitialMentionFilter = ["https://cuscuz.in/@jedi"];

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

async function loadComments(url, postId) {
  /** @type {{descendants: Array<{in_reply_to_id: string, visibility: string}>}} */
  const context = await fetch(url).then((response) => response.json());

  if (Array.isArray(context.descendants) === false) {
    return [];
  }

  /** @type {Map<string,any>} */
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

//#region Hypescript

/**
 * @param {string} tag Name of the HTML tag
 * @param {object|undefined} attributes Html attributes to be added to final element
 * @param {any} [args] Children elements
 * @returns {{tag: string, attributes?: object, children: any[]|null}} Tree representation of an element
 */
function h(tag, attributes, ...args) {
  return { tag, attributes, children: args.length ? [...args] : null };
}

/**
 * Renders an object into a html element
 * @param {{tag: string, attributes?: object, children?: object[]} | string| HTMLElement} component
 * @returns {Text | HTMLElement} an DOM node to be added to the page
 */
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

//#endregion

//#region Components

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

//#endregion

//#region Formatters

/**
 * @param {string} isoDate Date in ISO format to be parsed
 * @returns {string} Formatted string
 */
function formatIsoDate(isoDate) {
  return new Date(isoDate).toLocaleString(undefined, {
    dateStyle: "long",
    timeStyle: "short",
  });
}

/**
 * Gets the comment custom emojis and display them as HTML
 * @param {Array<{shortcode: string, static_url: string, url: string}>} emojis The list of emojis
 * @param {string} text The raw string with emoji notation
 * @return {string} A HTML string with the emojis as pictures
 */
function formatEmojisOnText(emojis, text) {
  return emojis.reduce(
    (acc, { shortcode, static_url, url }) =>
      acc.replaceAll(
        `:${shortcode}:`,
        `<picture><source srcset="${url}" media="(prefers-reduced-motion: no-preference)"><img src="${static_url}" alt=":${shortcode}:" title=":${shortcode}:"></picture>`,
      ),
    text,
  );
}

function formatComment(
  comment,
  firstMentionFilter = defaultInitialMentionFilter,
) {
  const articleElement = render(Article(comment));

  firstMentionFilter
    .map((filter) => `.mention[href='${filter}']:first-child`)
    .map(articleElement.querySelector)
    .forEach((mention) => mention?.remove());

  articleElement
    .querySelectorAll(".invisible")
    .forEach((element) => element.remove());

  return articleElement;
}

//#endregion
