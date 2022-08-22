import { Fragment, FunctionComponent as FC } from 'preact';
import dayjs from 'dayjs';

const RepoList: FC<{ repos: Repository[] }> = ({ repos }) => (
  <section>
    <h2>Open-Source</h2>
    <div>
      {repos.map((repo) => (
        <div>
          {repo.language && <small>{repo.language}</small>}
          <h4>
            <a href="" title="">
              {repo.name}
            </a>
          </h4>
          <p>{repo.description}</p>
          <p title="Last commit">
            {repo.pushed_at && (
              <Fragment>
                {repo.fork && <Fragment>Contribuição - </Fragment>}Último
                commit:
                <time dateTime={repo.pushed_at}>
                  {dayjs(repo.pushed_at).format('DD/MM/YYYY')}
                </time>
              </Fragment>
            )}
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
