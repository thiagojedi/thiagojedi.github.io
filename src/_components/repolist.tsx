import { Fragment } from "lume/jsx-runtime";
import dayjs from "dayjs";
import type { FC, Repository } from "../types.ts";

const RepoList: FC<{ repos: Repository[] }> = ({ repos }) => (
  <section>
    <h2>Open-Source</h2>
    <div>
      {repos.map((repo) => (
        <div>
          {repo.language && <small>{repo.language}</small>}
          <h4>
            <a href={repo.html_url} title={repo.name}>
              {repo.name}
            </a>
          </h4>
          <p>{repo.description}</p>
          <p title="Last commit">
            {repo.fork && <Fragment>Contribuição -</Fragment>}Último commit:
            {" "}
            <time dateTime={repo.updated_at ?? undefined}>
              {dayjs(repo.updated_at).format("DD/MM/YYYY")}
            </time>
          </p>
        </div>
      ))}
    </div>
    Mais{" "}
    <a href="https://github.com/thiagojedi">
      GitHub
    </a>{" "}
    e <a href="https://codeberg.org/thiagojedi">Codeberg</a>
  </section>
);

export default RepoList;
