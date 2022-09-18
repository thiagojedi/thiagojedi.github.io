import { Fragment, FunctionComponent as FC } from 'preact';
import dayjs from 'dayjs';
import type { GithubRepos } from '../services/github.ts';

const RepoList: FC<{ repos: GithubRepos }> = ({ repos }) => (
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
            {repo.fork && <Fragment>Contribuição - </Fragment>}Último commit:{' '}
            <time dateTime={repo.updated_at}>
              {dayjs(repo.updated_at).format('DD/MM/YYYY')}
            </time>
          </p>
        </div>
      ))}
    </div>
    <a href="https://github.com/thiagoabreu" title="More at Github">
      Mais no GitHub
    </a>
  </section>
);

export default RepoList;
