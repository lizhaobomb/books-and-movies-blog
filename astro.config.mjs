import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://lizhaobomb.github.io',
  base: '/books-and-movies-blog',
  output: 'static',
  integrations: [
    tailwind(),
    mdx(),
  ],
});