import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import metas from "lume/plugins/metas.ts";
import prism from "lume/plugins/prism.ts";

const site = lume({
  location: new URL("https://thiagojedi.github.io"),
  src: "./src/",
}).ignore("helpers", "services", "types")
  .loadAssets([".css"])
  .copy('assets', '.');

site.use(jsx_preact());
site.use(metas());
site.use(prism());

export default site;
