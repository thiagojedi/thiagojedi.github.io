import type { FunctionalComponent as FC } from "preact";

import { formatDate } from "../helpers/date.ts";
import { Post } from "../types.ts";

const HighlightPost: FC<{ post: Post }> = ({ post }) => (
  <article>
    <small class="text-muted">
      <time dateTime={post.data.date?.toDateString()}>
        {formatDate(post.data.date)}
      </time>
    </small>
    <h3>
      {post.data.url
        ? <a href={post.data.url}>{post.data.metas?.title}</a>
        : post.data.metas?.title}
    </h3>

    {post.data.metas?.description
      ? <p>{post.data.metas?.description}</p>
      : <p>{post.data.content.split("\n\n")[0]}</p>}

    {post.data.url && (
      <p>
        <a href={post.data.url} title="Keep reading">
          Continuar lendo...
        </a>
      </p>
    )}
  </article>
);

export default HighlightPost;
