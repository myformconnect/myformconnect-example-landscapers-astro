import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://evergreenlandscapes.example',
  output: 'static',
  compressHTML: true,
});
