import { Octokit } from "@octokit/core";

const github = new Octokit();
const getGithubRepos = () =>
  github.request("GET /users/{username}/repos", { username: "thiagojedi" })
    .then((r) => r.data)
    .catch(() => []);

const codeberg = new Octokit({ baseUrl: "https://codeberg.org/api/v1" });
const getCodebergRepos = () =>
  codeberg.request("GET /users/{username}/repos", { username: "thiagojedi" })
    .then((r) => r.data)
    .catch(() => []);

export async function getPublicRepositories() {
  try {
    const codebergRequest = getCodebergRepos();
    const githubRequest = getGithubRepos();

    const codeberg = await codebergRequest;

    const mainRepos = (await githubRequest).map((repo) => {
      const repoOnCodeberg = codeberg.find(({ name }) => name === repo.name);
      return repoOnCodeberg ?? repo;
    });

    return [
      ...mainRepos,
      ...codeberg.filter((repo) => !mainRepos.includes(repo)),
    ].slice(0, 6);
  } catch (e) {
    console.error(e);
    console.error("error trying to get repos from github");
  }

  return [];
}
