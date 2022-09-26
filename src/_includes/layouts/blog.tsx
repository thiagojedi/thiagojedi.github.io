import { FunctionComponent as FC } from "preact";
import { PostData } from "../../types.ts";

const BlogLayout: FC<PostData> = (
  {
    image,
    metas: {
      title,
      description,
      lang,
    } = {},
    children,
    comp: { BaseHead, Footer, Header, Sidebar },
  },
) => {
  return (
    <html lang={lang ?? "pt-br"}>
      <BaseHead title={title}>
        <link rel="stylesheet" href="/code-highlight.css" />
      </BaseHead>
      <body>
        <Header />

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

            {image && <img src={image} alt="" />}

            {children}
          </article>
          <aside>
            <Sidebar />
          </aside>
        </main>

        <Footer />
      </body>
    </html>
  );
};

export default BlogLayout;
