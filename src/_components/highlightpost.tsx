import { formatDate } from "../helpers/date.ts";
import type { FC, PostData } from "../types.ts";

const HighlightPost: FC<{ post: PostData }> = ({ post }) => (
  <article>
    <small class="text-muted">
      <time dateTime={post.date?.toDateString()}>
        {formatDate(post.date)}
      </time>
    </small>
    <h3>
      {post.url
        ? <a href={post.url}>{post.metas?.title}</a>
        : post.metas?.title}
    </h3>

    {post.metas?.description
      ? <p>{post.metas?.description}</p>
      : <p>{post.content.split("\n\n")[0]}</p>}

    {post.url && (
      <p>
        <a href={post.url} title="Keep reading">
          Continuar lendo...
        </a>
      </p>
    )}
  </article>
);

export default HighlightPost;
