import type { FunctionalComponent as FC } from 'preact';

import { formatDate } from '../helpers/date.ts';
import { excerpt } from '../helpers/text.ts';

const HighlightPost: FC<{ post: Post }> = ({ post }) => (
  <article>
    <small class="text-muted">
      <time dateTime={post.frontmatter.pubDate}>
        {formatDate(post.frontmatter.pubDate!)}
      </time>
    </small>
    <h3>
      <a href={post.url}>{post.frontmatter.title}</a>
    </h3>
    <p>{post.frontmatter.description || excerpt(post.compiledContent())}</p>
    <p>
      <a href={post.url} title="Keep reading">
        Continuar lendo...
      </a>
    </p>
  </article>
);

export default HighlightPost;
