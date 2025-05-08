import { Octokit } from "octokit";

export async function getPublicRepositories() {
  try {
    const octokit = new Octokit({
      // baseUrl: "https://codeberg.org/api/v1",
    });

    const repos = await octokit.rest.repos.listForUser({
      username: "thiagojedi",
      per_page: 6,
      sort: "updated",
      direction: "desc",
    });

    return repos.data;
  } catch (e) {
    console.error(e);
    console.error("error trying to get repos from github");
  }

  return [];
}
