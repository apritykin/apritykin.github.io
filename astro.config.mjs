import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const isProd = process.env.NODE_ENV === 'production';
const site = isProd
  ? "https://apritykin.github.io"
  : "http://localhost:4321";

export default defineConfig({
  site,
  integrations: [tailwind(), icon(), mdx(), sitemap()]
});