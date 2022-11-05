import { Fragment } from "preact";
import { NormalPageData } from "./types.ts";

export const layout = "layouts/default.tsx";

const Index = async (
  {
    comp: {
      HighlightPost,
      RepoList,
      Sidebar,
      Footer,
    },
    search,
    getPublicRepositories,
  }: NormalPageData,
) => {
  const highlightPosts = search.pages("blog", "date=desc", 3);
  const repos = await getPublicRepositories();

  return (
    <Fragment>
      <nav aria-label="breadcrumb">
        <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
        </ul>
      </nav>

      <main>
        <div>
          <section>
            <h2>Blog</h2>
            <div>
              {highlightPosts.map((post) => <HighlightPost post={post} />)}
            </div>
            <a href="/blog" title="More posts">Mais postagens</a>
          </section>

          <RepoList repos={repos} />
        </div>

        <aside>
          <Sidebar />
        </aside>
      </main>
    </Fragment>
  );
};

export default Index;
