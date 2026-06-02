import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://lizhaobomb.github.io',
  base: isProduction ? '/books-and-movies-blog' : '/',
  output: 'static',
  integrations: [
    tailwind(),
    mdx(),
  ],
});