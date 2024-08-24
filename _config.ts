import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
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
    location: new URL("https://thiagojedi.github.io"),
    src: "./src/",
});

site.loadAssets([".css"]);
site.copy("assets", ".");

site.use(jsx_preact());
site.use(metas());
site.use(prism());
site.use(commandLine());

export default site;
