import { getPublicRepositories } from "./services/github.ts";

const data = {
  layout: "layouts/default.tsx",
  getPublicRepositories,
};

export default data;
