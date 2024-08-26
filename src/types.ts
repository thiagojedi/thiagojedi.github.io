import type { getPublicRepositories } from "./services/github.ts";

export interface NormalPageData extends Lume.Data {
  getPublicRepositories: typeof getPublicRepositories;
}

export interface PostData extends NormalPageData {
  content: string;
  image?: string;
  draft?: boolean;
}
