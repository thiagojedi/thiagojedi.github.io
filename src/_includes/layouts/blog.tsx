import { Fragment, FunctionComponent as FC } from "preact";
import { PostData } from "../../types.ts";
import { longDate } from "../../helpers/date.ts";

const BlogLayout: FC<PostData> = ({
  image,
  imageDescription,
  date,
  metas: { title, description, lang = "pt-br", mastodonLink } = {},
  children,
  comp: { BaseHead, Footer, Header, Sidebar, CommentList },
}) => {
  return (
    <html lang={lang}>
      <BaseHead title={title}>
        <link rel="stylesheet" href="/code-highlight.css" />
        {mastodonLink && (
          <Fragment>
            <link rel="stylesheet" href="/comments.css" />
            <script async src="/mastodon_comments.js"></script>
          </Fragment>
        )}
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
            /<li aria-current="page">Post</li>
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

          <CommentList mastodonLink={mastodonLink} language={lang} />

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
