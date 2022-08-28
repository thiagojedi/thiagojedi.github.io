import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://thiagojedi.github.io',
  integrations: [mdx(), sitemap(), preact()],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});