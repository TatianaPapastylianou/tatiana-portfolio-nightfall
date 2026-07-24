// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://tatiana-portfolio.netlify.app',
  build: {
    inlineStylesheets: 'auto',
  },
  markdown: {
    // GitHub-flavoured markdown (tables in the case Snapshot blocks) is on by default.
    gfm: true,
    smartypants: true,
  },
});
