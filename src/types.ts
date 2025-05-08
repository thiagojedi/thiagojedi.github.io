import type { getPublicRepositories } from "./services/github.ts";
import type { Endpoints } from "@octokit/types";

export interface NormalPageData extends Lume.Data {
  getPublicRepositories: typeof getPublicRepositories;
}

export interface PostData extends NormalPageData {
  content: string;
  image?: string;
  draft?: boolean;
}

export type PropsWithChildren<Props> = Props & { children: JSX.Children };

export type FC<Props> = (props: Props) => unknown;

export type Repository =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];
