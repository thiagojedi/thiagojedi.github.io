import { Octokit } from "@octokit/core";

const github = new Octokit();
const getGithubRepos = () =>
  github.request("GET /users/{username}/repos", {
    username: "thiagojedi",
    sort: "updated",
    direction: "desc",
  })
    .then((r) => r.data)
    .catch(() => []);

const codeberg = new Octokit({ baseUrl: "https://codeberg.org/api/v1" });
const getCodebergRepos = () =>
  codeberg.request("GET /users/{username}/repos", { username: "thiagojedi" })
    .then((r) => r.data)
    .catch(() => []);

export async function getPublicRepositories() {
  try {
    const [codeberg, githubRepos] = await Promise.all([
      getCodebergRepos(),
      getGithubRepos(),
    ]);

    const mainRepos = githubRepos.map((repo) =>
      codeberg.find(({ name }) => name === repo.name) ?? repo
    );

    const fillRepos = codeberg.filter((repo) => !mainRepos.includes(repo));

    return [
      ...mainRepos,
      ...fillRepos,
    ].slice(0, 6);
  } catch (e) {
    console.error(e);
    console.error("error trying to get repos from github");
  }

  return [];
}
