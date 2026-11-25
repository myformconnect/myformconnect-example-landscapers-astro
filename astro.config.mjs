import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://evergreenlandscapers.vercel.app',
  output: 'static',
  compressHTML: true,
});
