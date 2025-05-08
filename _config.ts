import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import metas from "lume/plugins/metas.ts";
import prism from "lume/plugins/prism.ts";
import commandLine from "./plugins/command-line.ts";

// @ts-types="npm:@types/prismjs"
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/components/prism-tsx.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-sql.js";

const site = lume({
  location: new URL("https://thiagojedi.github.io"),
  src: "./src/",
});

site.add([".css"]);
site.add("assets", ".");

site.use(jsx());
site.use(metas());
site.use(prism());
site.use(commandLine());

export default site;
