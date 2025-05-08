import { Octokit } from "octokit";

const octokit = new Octokit();

export type GithubRepo = {
  language?: string | null;
  html_url: string;
  name: string;
  description?: string | null;
  fork: boolean;
  updated_at?: string | null;
};

export async function getPublicRepositories(): Promise<GithubRepo[]> {
  try {
    const repos = await octokit.rest.repos.listForUser({
      username: "thiagojedi",
      per_page: 6,
      sort: "updated",
      direction: "desc",
    });

    return repos.data;
  } catch (e) {
    console.error(e)
    console.error("error trying to get repos from github");
  }

  return [];
}
