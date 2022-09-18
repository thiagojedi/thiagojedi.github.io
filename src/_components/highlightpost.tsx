import type { FunctionalComponent as FC } from "preact";

import { formatDate } from "../helpers/date.ts";
import { Post } from "../types.ts";

const HighlightPost: FC<{ post: Post }> = ({ post }) => {
  return (
    <article>
      <small class="text-muted">
        <time dateTime={post.data.date?.toDateString()}>
          {formatDate(post.data.date)}
        </time>
      </small>
      <h3>
        <a href={post.data.url}>{post.data.title}</a>
      </h3>

      {post.data.description
        ? <p>{post.data.description}</p>
        : <p>{post.data.content.split("\n\n")[0]}</p>}

      <p>
        <a href={post.data.url} title="Keep reading">
          Continuar lendo...
        </a>
      </p>
    </article>
  );
};

export default HighlightPost;
