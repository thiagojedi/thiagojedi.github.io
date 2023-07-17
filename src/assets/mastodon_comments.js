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
  const result = document
    .querySelector("template")
    .content.cloneNode(true);

  const avatar = result.querySelector("header img");
  avatar.src = comment.account.avatar_static;
  avatar.alt = `${comment.account.display_name}'s avatar`;

  result.querySelector("header small a").href = comment.account.url;

  let account = comment.account.acct;
  if (account.indexOf("@") === -1) {
    account = account + "@" + comment.account.url.split("/")[2];
  }

  const displayName = result.querySelector("header h4");
  displayName.innerText = comment.account.display_name;
  formatEmojis(comment.account.emojis, displayName);
  displayName.innerHTML += `&nbsp;@${account}`;

  result.querySelector("header a").href = comment["url"];

  const time = result.querySelector("time");
  time.innerText = formatIsoDate(comment.created_at);
  time.setAttribute("datetime", comment.created_at);

  if (comment.edited_at) {
    const edited = document.createElement("time");
    edited.innerText = "*";
    edited.setAttribute(
      "title",
      "Last edited: " + formatIsoDate(comment.edited_at),
    );
    edited.setAttribute("datetime", comment.edited_at);
    time.innerHTML += "&nbsp;";
    time.appendChild(edited);
  }

  const contentElem = result.querySelector("article div");
  contentElem.innerHTML = comment.content;
  const firstMention = contentElem.querySelector(".mention");
  if (
    firstMention &&
    firstMentionFilter.includes(firstMention.href) &&
    firstMention.parentNode === firstMention.parentNode.parentNode.firstChild
  ) {
    let removalCandidate = firstMention;
    while (
      (removalCandidate === firstMention ||
        removalCandidate.childNodes.length === 0) &&
      removalCandidate !== result.querySelector("article div")
    ) {
      const next = removalCandidate.parentNode;
      removalCandidate.remove();
      removalCandidate = next;
    }
  }
  formatEmojis(comment.emojis, contentElem);

  return result;
}

function renderComments(comments, firstMentionFilter) {
  comments.sort((a, b) => a.created_at > b.created_at);
  const result = document.createElement("ul");

  for (let i = 0; i < comments.length; i++) {
    const container = document.createElement("li");
    container.appendChild(renderComment(comments[i], firstMentionFilter));
    if (comments[i].children.length > 0) {
      container.appendChild(
        renderComments(comments[i].children, [
          comments[i].account.url,
        ]),
      );
    }
    result.appendChild(container);
  }
  return result;
}

function showComments(comments) {
  const commentsElem = document.querySelector("section#comments");
  const contentElem = commentsElem.querySelector(".placeholder");
  if (comments.length === 0) {
    contentElem.classList.remove("placeholder");
    contentElem.innerText = "No comments so far.";
    return;
  }
  // List of mentions that should be stripped if a top-level comment starts with one of them.
  // Insert your fedi ID here!
  const defaultInitialMentionFilter = ["https://cuscuz.in/@jedi"];
  const result = renderComments(comments, defaultInitialMentionFilter);
  contentElem.remove();
  commentsElem.appendChild(result);
}

function loadComments(url) {
  const rootId = url.split("/")[6];
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const comments = [];
      if (data.descendants && Array.isArray(data.descendants)) {
        const tempDict = {};
        data.descendants.forEach((comment) => {
          if (comment.visibility !== "public") return;
          comment.children = [];
          if (comment.in_reply_to_id === rootId) {
            comments.push(comment);
          } else {
            if (tempDict[comment.in_reply_to_id]) {
              tempDict[comment.in_reply_to_id].children.push(comment);
            }
          }
          tempDict[comment["id"]] = comment;
        });
      }
      showComments(comments);
    })
    .catch((err) => {
      console.error(err);
      document.querySelector("section#comments .placeholder").innerText =
        "Could not load comments because of: " + err.message;
    });
}

function initComments() {
  const commentsElem = document.querySelector("#comments");
  if (!commentsElem) return;
  const placeholder = document.createElement("p");
  placeholder.classList.add("placeholder");
  placeholder.innerText = "Loading...";
  commentsElem.appendChild(placeholder);
  const urlParts = commentsElem.dataset.url.split("/");
  loadComments(
    "https://" + urlParts[2] + "/api/v1/statuses/" + urlParts[4] + "/context",
  );
}

if ("loading" === document.readyState) {
  document.addEventListener("DOMContentLoaded", initComments);
} else {
  initComments();
}
