import type { PageData } from "lume/core.ts";
import { Fragment } from "preact";

export const layout = "layouts/default.tsx";

const BlogPage = ({ search, comp: { BlogList, Footer } }: PageData) => {
  const posts = search.pages("blog", "date=desc");

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
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default BlogPage;
