import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.dreamshelf.cc.cd',
  base: '/',
  output: 'static',
  integrations: [
    tailwind(),
    mdx(),
  ],
});