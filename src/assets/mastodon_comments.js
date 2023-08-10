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

/**
 * Renders an object into a html element
 * @param {{tag: string, attributes?: object, children?: object[]} | string} component
 */
function render(component) {
    if (typeof component === "string") {
        return document.createTextNode(component);
    } else {
        const element = document.createElement(component.tag);

        Object.entries(component.attributes || {}).forEach(([k, v]) => element.setAttribute(k, v));

        (component.children || []).forEach((child) => element.appendChild(render(child)));

        return element
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
    emojis.forEach(({shortcode, static_url, url}) => {
        element.innerHTML = element.innerHTML.replace(
            `:${shortcode}:`,
            `<picture><source srcset="${url}" media="(prefers-reduced-motion: no-preference)"><img src="${static_url}" alt=":${shortcode}:" title=":${shortcode}:"></picture>`,
        );
    });
}

function renderComment(comment) {

    const avatar = {
        tag: 'img',
        attributes: {
            src: comment.account.avatar_static,
            alt: `${comment.account.display_name}'s avatar`
        }
    }

    let account = comment.account.acct;
    if (account.indexOf("@") === -1) {
        account = account + "@" + new URL(comment.account.url).hostname;
    }

    const displayName = {
        tag: "h3",
        children: [
            comment.account.display_name,
            "&nbsp;",
            `@${account}`
        ]
    }
    

    const time = {
        tag: "time",
        attributes: {datetime: comment.created_at}, children: [
            formatIsoDate(comment.created_at)
        ]
    };
    const link = {
        tag: "a", attributes: {href: comment.url}, children: [
            time
        ]
    }

    const header = {
        tag: "header",
        children: [
            avatar,
            displayName,
            link
        ]
    }


    
    // if (comment.edited_at) {
    //     const edited = document.createElement("time");
    //     edited.innerText = "*";
    //     edited.setAttribute(
    //         "title",
    //         "Last edited: " + formatIsoDate(comment.edited_at),
    //     );
    //     edited.setAttribute("datetime", comment.edited_at);
    //     time.innerHTML += "&nbsp;";
    //     time.appendChild(edited);
    // }
    
    const content = {
        tag: "div",
        children: [
            comment.content,
        ]
    }
    
    const article = {
        tag: "article",
        children: [
            header,
            content,
        ]
    }


    return article;
}

function renderComments(comments) {
    
    const result = {
        tag: 'ul',
        children: comments.map(comment => {
            return {tag: 'li', children: [renderComment(comment)]}
        })
    }
    
    // comments.sort((a, b) => a.created_at > b.created_at);
    // const result = document.createElement("ul");
    //
    // for (let i = 0; i < comments.length; i++) {
    //     const container = document.createElement("li");
    //     container.appendChild(renderComment(comments[i], firstMentionFilter));
    //     if (comments[i].children.length > 0) {
    //         container.appendChild(
    //             renderComments(comments[i].children, [
    //                 comments[i].account.url,
    //             ]),
    //         );
    //     }
    //     result.appendChild(container);
    // }
    return result;
}

function showComments(comments) {
    const commentsElem = document.querySelector("section#comments");

    commentsElem.querySelector(".placeholder").remove();

    if (comments.length === 0) {
        const noComments = render({tag: "p", attributes: {}, children: "No comments so far"});
        commentsElem.appendChild(noComments)
        return;
    }
    
    const commentList = renderComments(comments)
    commentsElem.appendChild(render(commentList));
    //
    // // List of mentions that should be stripped if a top-level comment starts with one of them.
    // // Insert your fedi ID here!
    // const defaultInitialMentionFilter = ["https://cuscuz.in/@jedi"];
    // renderComments(comments, defaultInitialMentionFilter);
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

    return descendants.filter((comment) => comment.visibility === "public")
        .map((comment) => ({...comment, children: []}))
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
    // const placeholder = document.createElement("p");
    // placeholder.classList.add("placeholder");
    // placeholder.innerText = "Loading...";

    const placeholder = render({
        tag: "p",
        attributes: {class: "placeholder"},
        children: ["Loading..."],
    });
    
    commentsElem.appendChild(placeholder);

    // commentsElem.appendChild(placeholder);

    const commentsUrl = commentsElem.dataset.url;

    const urlParts = urlRegex.exec(commentsUrl);

    let comments;
    try {
        const commentContext = commentsUrl.replace(
            urlRegex,
            `/api/v1/statuses/${urlParts[1]}/context`,
        );
        comments = await loadComments(commentContext);

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
