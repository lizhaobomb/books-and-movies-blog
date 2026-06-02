import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://lizhaobomb.github.io',
  base: process.env.NODE_ENV === 'production' ? '/books-and-movies-blog' : '/',
  output: 'static',
  integrations: [
    tailwind(),
    mdx(),
  ],
});