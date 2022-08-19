import { Fragment, FunctionalComponent as FC } from 'preact';
import Excerpt from './excerpt';
import { formatDate } from '../helpers/date';

type BlogListProps = {
  posts: Array<Post>;
};

const BlogList: FC<BlogListProps> = ({ posts }) => (
  <Fragment>
    {posts.map((post) => (
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
        <Excerpt content={post.compiledContent()} />

        <p>
          <a title="Keep reading" href={post.url}>
            Continuar lendo...
          </a>
        </p>
      </article>
    ))}
  </Fragment>
);

export default BlogList;
