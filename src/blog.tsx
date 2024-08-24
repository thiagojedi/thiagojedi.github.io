import { Fragment } from "preact";
import type { PostData } from "./types.ts";

export const layout = "layouts/default.tsx";
export const title = "Blog";

export const meta = {
  title,
};

const BlogPage = ({ search, comp: { BlogList, Sidebar } }: Lume.Data) => {
  const posts = search.pages<PostData>("blog", "date=desc")
    .filter((p) => p.url);

  return (
    <Fragment>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li aria-current="page">Blog</li>
        </ul>
      </nav>

      <main>
        <div>
          <BlogList posts={posts} />
        </div>

        <aside>
          <Sidebar />
        </aside>
      </main>
    </Fragment>
  );
};

export default BlogPage;
