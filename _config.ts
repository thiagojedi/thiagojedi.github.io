import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import metas from "lume/plugins/metas.ts";
import prism from "lume/plugins/prism.ts";
import extractDate from "lume/plugins/extract_date.ts";
import commandLine from "./plugins/command-line.ts";

import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/components/prism-tsx.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-sql.js";

const site = lume({
  location: new URL("https://thiagojedi.codeberg.pages"),
  src: "./src/",
});

site.add([".css"]);
site.add("assets", ".");

site.use(jsx());
site.use(metas());
site.use(prism());
site.use(commandLine());
site.use(extractDate());

export default site;
