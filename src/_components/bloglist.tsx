import { Fragment, FunctionalComponent as FC } from "preact";
import { formatDate } from "../helpers/date.ts";
import { Post } from "../types.ts";

type BlogListProps = {
  posts: Array<Post>;
};

const BlogList: FC<BlogListProps> = ({ posts }) => (
  <Fragment>
    {posts.map((post) =>
      post.data && (
        <article class="post">
          <h2>
            {post.data.url
              ? <a href={post.data.url}>{post.data.metas?.title}</a>
              : post.data.metas?.title}{" "}
            <small class="text-muted">
              {post.data.draft && "Draft - "}

              <time dateTime={post.data.date?.toDateString()}>
                {formatDate(post.data.date)}
              </time>
            </small>
          </h2>

          {post.data.metas?.description
            ? <p>{post.data.metas?.description}</p>
            : <p>{post.data.content.split("\n\n")[0]}</p>}

          {post.data.url &&
            (
              <p>
                <a title="Keep reading" href={post.data.url}>
                  Continuar lendo...
                </a>
              </p>
            )}
        </article>
      )
    )}
  </Fragment>
);

export default BlogList;
