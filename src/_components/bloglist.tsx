import { Fragment } from "lume/jsx-runtime";
import { formatDate } from "../helpers/date.ts";
import type { FC, PostData } from "../types.ts";

type BlogListProps = {
  posts: Array<PostData>;
};

const BlogList: FC<BlogListProps> = ({ posts }) => (
  <Fragment>
    {posts.map((post) => (
      <article class="post">
        <h2>
          {post.url
            ? <a href={post.url}>{post.metas?.title}</a>
            : post.metas?.title}{" "}
          <small class="text-muted">
            {post.draft && "Draft - "}

            <time dateTime={post.date?.toDateString()}>
              {formatDate(post.date)}
            </time>
          </small>
        </h2>

        {post.metas?.description
          ? <p>{post.metas?.description}</p>
          : <p>{post.content.split("\n\n")[0]}</p>}

        {post.url &&
          (
            <p>
              <a title="Keep reading" href={post.url}>
                Continuar lendo...
              </a>
            </p>
          )}
      </article>
    ))}
  </Fragment>
);

export default BlogList;
