import type { Page, PageData } from "lume/core.ts";
import { GithubRepos } from "./services/github.ts";

export interface NormalPageData extends PageData {
  getPublicRepositories: () => Promise<GithubRepos>;
}

export interface PostData extends NormalPageData {
  title: string;
  url: string;
  description?: string;
  content: string;
  lang?: string;
  image?: string;
  draft?: boolean;
  date?: Date;
}

export interface Post extends Page {
  data: PostData;
}
