import { Octokit } from "https://cdn.skypack.dev/octokit?dts";

const octokit = new Octokit();

export type GithubRepos = Array<{
  language?: string;
  html_url: string;
  name: string;
  description: string;
  fork: boolean;
  updated_at: string;
}>;

export const getPublicRepositories = async () => {
  const repos = await octokit.rest.repos.listForUser({
    username: 'thiagojedi',
    per_page: 6,
    sort: 'updated',
    direction: 'desc',
  });

  return repos.data as GithubRepos;
};
