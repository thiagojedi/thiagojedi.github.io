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
  return [];
};
