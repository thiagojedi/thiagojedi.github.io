/*
  Mastodon comment integration code by Thiago 'Jedi' Cerqueira, 2023.

  Closely inspired by:
  Jan Wildeboer - https://jan.wildeboer.net/2023/02/Jekyll-Mastodon-Comments/
  Cassidy Blade - https://mastodon.blaede.family/@cassidy/110623574992080570
  Julian Fietkau - https://fietkau.blog/2023/another_blog_resurrection_fediverse_new_comment_system

  This is just the JavaScript code, you'll need to supply your own HTML
  container and CSS.

  Released under the terms of the MIT license.
*/

// List of mentions that should be stripped if a top-level comment starts with one of them.
// Insert your fedi ID here!
const defaultInitialMentionFilter = [
  "https://cuscuz.in/@jedi",
  "https://mastodon.com.br/@jedi",
  "https://bolha.us/@jedi",
];

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

  const placeholder = Placeholder();
  wrapper.appendChild(placeholder);

  try {
    const idRegex = /\/@.+?\/(\d+)$/;

    const { url, fallback } = wrapper.dataset;
    const postId = idRegex.exec(url)[1];
    const commentContext = fallback ??
      url.replace(idRegex, `/api/v1/statuses/$1/context`);

    const comments = await loadComments(commentContext, postId);
    const commentsList = comments.length === 0
      ? EmptyList()
      : ReplyList(comments);

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

//#region Components

function Placeholder() {
  const p = document.createElement("p");
  p.innerText = "Loading...";
  return p;
}

function EmptyList() {
  const p = document.createElement("p");
  p.innerText = "No comments so far";
  return p;
}

function Avatar({ avatar_static, display_name }) {
  const img = document.createElement("img");
  img.src = avatar_static;
  img.alt = display_name.replace(/:.+?:/g, "").trim() + "'s avatar";
  return img;
}

function UserInfo({ url, acct, display_name, emojis }) {
  let account = acct;
  if (account.indexOf("@") === -1) {
    account = account + "@" + new URL(url).hostname;
  }
  const h3 = document.createElement("h3");
  h3.innerHTML = `${formatEmojisOnText(emojis, display_name)}&nbsp;@${account}`;
  return h3;
}

function Timestamp({ created_at, edited_at, url }) {
  const a = document.createElement("a");
  a.href = url;

  const createdTime = document.createElement("time");
  createdTime.dateTime = created_at;
  createdTime.innerText = formatIsoDate(created_at);

  a.appendChild(createdTime);

  if (edited_at) {
    const editedTime = document.createElement("time");
    editedTime.dateTime = created_at;
    editedTime.title = "Last edited: " + formatIsoDate(edited_at);
    editedTime.innerText = "*";

    a.appendChild(editedTime);
  }

  return a;
}

function Article(comment) {
  const header = document.createElement("header");
  header.appendChild(Avatar(comment.account));
  header.appendChild(UserInfo(comment.account));
  header.appendChild(Timestamp(comment));

  const content = document.createElement("p");
  content.innerHTML = formatEmojisOnText(comment.emojis, comment.content);

  const article = document.createElement("article");
  article.appendChild(header);
  article.appendChild(content);

  return article;
}

function ReplyList(comments, mentionFilter) {
  const list = document.createElement("ul");

  comments.forEach((comment) => {
    const listItem = document.createElement("li");
    listItem.appendChild(formatComment(comment, mentionFilter));
    listItem.appendChild(ReplyList(comment.children, [comment.account.url]));

    list.appendChild(listItem);
  });

  return list;
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
  const articleElement = Article(comment);

  firstMentionFilter
    .map((filter) => `.mention[href='${filter}']:first-child`)
    .map((selector) => articleElement.querySelector(selector))
    .forEach((mention) => mention?.remove());

  articleElement
    .querySelectorAll(".invisible")
    .forEach((element) => element.remove());

  return articleElement;
}

//#endregion
