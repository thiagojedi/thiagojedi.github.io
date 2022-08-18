import { Fragment, FunctionalComponent, h } from 'preact';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Excerpt from './excerpt';
dayjs.extend(customParseFormat);

const BlogList: FunctionalComponent<{ posts: any[] }> = ({ posts }) => (
  <Fragment>
    {posts.map((post) => (
      <article class="post">
        <h2>
          <a href={post.url}>{post.frontmatter.title}</a>{' '}
          <small class="text-muted">
            {post.frontmatter.draft ? (
              'Draft'
            ) : (
              <time datetime={post.frontmatter.pubDate}>
                {dayjs(post.frontmatter.pubDate, 'DD/MM/YYYY').format(
                  'DD/MM/YY',
                )}
              </time>
            )}
          </small>
        </h2>
        <Excerpt content={post.compiledContent()} />

        <p>
          <a href={post.url}>Continuar lendo...</a>
        </p>
      </article>
    ))}
  </Fragment>
);

export default BlogList;
