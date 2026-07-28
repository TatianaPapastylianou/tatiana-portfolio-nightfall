// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://tatiana-papastylianou-portfolio.netlify.app',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  markdown: {
    // GitHub-flavoured markdown (tables in the case Snapshot blocks) is on by default.
    gfm: true,
    smartypants: true,
  },
});
