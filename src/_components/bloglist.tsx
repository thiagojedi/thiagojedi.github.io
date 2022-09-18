import dayjs from "dayjs";

import { Fragment, FunctionalComponent as FC } from "preact";
import { formatDate } from "../helpers/date.ts";
import { Post } from "../types.ts";

type BlogListProps = {
  posts: Array<Post>;
};

const BlogList: FC<BlogListProps> = ({ posts }) => {
  return (
    <Fragment>
      {posts.map((post) =>
        post.data && (
          <article class="post">
            <h2>
              <a href={post.data.url}>{post.data.title}</a>{" "}
              <small class="text-muted">
                {post.data.draft && "Draft - "}

                <time dateTime={post.data.date?.toDateString()}>
                  {formatDate(post.data.date)}
                </time>
              </small>
            </h2>

            {post.data.description
              ? <p>{post.data.description}</p>
              : <p>{post.data.content.split("\n\n")[0]}</p>}

            <p>
              <a title="Keep reading" href={post.data.url}>
                Continuar lendo...
              </a>
            </p>
          </article>
        )
      )}
    </Fragment>
  );
};

export default BlogList;
