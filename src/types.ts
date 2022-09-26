import type { Page, PageData } from "lume/core.ts";
import { GithubRepo } from "./services/github.ts";

export interface NormalPageData extends PageData {
  getPublicRepositories: () => Promise<GithubRepo[]>;
}

export interface PostData extends NormalPageData {
  content: string;
  image?: string;
  draft?: boolean;
}

export interface Post extends Page {
  data: PostData;
}
