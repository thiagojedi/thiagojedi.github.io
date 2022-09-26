import { getPublicRepositories } from "./services/github.ts";

const data = {
  layout: "layouts/default.tsx",
  getPublicRepositories,
  metas: {
    site: "JediComp",
    twitter: "@Jedi_Thiago",
    lang: "pt-br",
    generator: true,
    image: "/images/x-wing.jpg",
  },
  mergedKeys: {
    metas: "object",
  },
};

export default data;
