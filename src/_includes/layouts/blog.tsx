import { FunctionComponent as FC } from "preact";
import { PostData } from "../../types.ts";

const BlogLayout: FC<PostData> = (
  { title, description, lang, children, comp: { Footer, Header, Sidebar } },
) => {
  return (
    <html lang={lang ?? "pt-br"}>
      <head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <link rel="stylesheet" href="/global.css" />
        <link rel="stylesheet" href="/code-highlight.css" />
      </head>
      <body>
        <header>
          <Header />
        </header>
        <nav aria-label="breadcrumb">
          <ul>
            <li>
              <a href="/">Página Inicial</a>
            </li>
            /
            <li>
              <a href="/blog/">Blog</a>
            </li>
            /
            <li aria-current="page">Post</li>
          </ul>
        </nav>

        <main>
          <article>
            <h1>{title}</h1>

            {description && <p>{description}</p>}

            {children}
          </article>
          <aside>
            <Sidebar/>
          </aside>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default BlogLayout;
