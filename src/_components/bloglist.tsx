import type { Page } from 'lume/core.ts'
import { Fragment, FunctionalComponent as FC } from 'preact';
import {formatDate} from '../helpers/date.ts'

type BlogListProps = {
  posts: Array<Page>;
};

const BlogList: FC<BlogListProps> = ({ posts }) => (
  <Fragment>
    {posts.map(post => post.data && (
      <article class='post'>
        <h2>
          <a href={post.data.url as string}>
            {post.data.title as string}
          </a> <small class='text-muted'>
            {post.data.draft && 'Draft'} 
            {post.data.date && 
            <span>
              {
                post.data.date
              }</span>}
          </small>
        </h2>
      </article>
    ))}
    {/* {posts.map((post) => (
      <article class="post">
        <h2>
          <a href={post.url}>{post.frontmatter.title}</a>{' '}
          <small class="text-muted">
            {post.frontmatter.draft ? (
              'Draft'
            ) : (
              <time dateTime={post.frontmatter.pubDate}>
                {formatDate(post.frontmatter.pubDate)}
              </time>
            )}
          </small>
        </h2>

        <p>{post.frontmatter.description || excerpt(post.compiledContent())}</p>

        <p>
          <a title="Keep reading" href={post.url}>
            Continuar lendo...
          </a>
        </p>
      </article> 
    ))}
    */}
  </Fragment>
);

export default BlogList;
