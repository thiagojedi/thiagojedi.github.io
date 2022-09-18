import { Fragment } from "https://deno.land/x/lume@v1.11.4/deps/preact_runtime.ts"

const BlogLayout = ({title, description, children}) => {
    return <html>
        <body>
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
    </main>
        </body>
    </html>;
}

export default BlogLayout;