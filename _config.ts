import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import metas from "lume/plugins/metas.ts";
import prism from "lume/plugins/prism.ts";
import commandLine from "./plugins/command-line.ts";

import "npm:prismjs@1.29.0/components/prism-javascript.js";
import "npm:prismjs@1.29.0/components/prism-typescript.js";
import "npm:prismjs@1.29.0/components/prism-jsx.js";
import "npm:prismjs@1.29.0/components/prism-tsx.js";
import "npm:prismjs@1.29.0/components/prism-json.js";
import "npm:prismjs@1.29.0/components/prism-markup.js";
import "npm:prismjs@1.29.0/components/prism-sql.js";

const site = lume({
  // location: new URL("https://thiagojedi.github.io"),
  src: "./src/",
});

site.add([".css"]);
site.add("assets", ".");

site.use(jsx());
site.use(metas());
site.use(prism());
site.use(commandLine());

export default site;
