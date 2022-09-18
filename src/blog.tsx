import type { Page, PageData } from "lume/core.ts";

const BlogPage = ({ search, comp }: PageData) => {
  const posts = search.pages("blog", "date=desc");

  return (
    <html lang='pt-br'>
      <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </head>

      <body>
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
            <comp.BlogList posts={ posts }/>
          </div>
        </main>
      </body>
    </html>
  );
};

export default BlogPage;
