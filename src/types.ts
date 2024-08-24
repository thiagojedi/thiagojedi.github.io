import type { GithubRepo } from "./services/github.ts";

export interface NormalPageData extends Lume.Data {
  getPublicRepositories: () => Promise<GithubRepo[]>;
}

export interface PostData extends NormalPageData {
  content: string;
  image?: string;
  draft?: boolean;
}
