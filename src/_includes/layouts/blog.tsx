import { FunctionComponent as FC } from "preact";
import { PostData } from "../../types.ts";
import { formatDate, longDate } from "../../helpers/date.ts";

const BlogLayout: FC<PostData> = (
  {
    image,
    imageDescription,
    date,
    metas: {
      title,
      description,
      lang = "pt-br",
    } = {},
    children,
    comp: { BaseHead, Footer, Header, Sidebar },
  },
) => {
  return (
    <html lang={lang}>
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

            {date && (
              <small>
                <time pubdate datetime={date.toISOString()}>
                  {longDate(date, lang)}
                </time>
              </small>
            )}

            {description && <p>{description}</p>}

            {image && (
              <figure>
                <img src={image} alt={imageDescription} />
                {imageDescription && (
                  <figcaption>{imageDescription}</figcaption>
                )}
              </figure>
            )}

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
