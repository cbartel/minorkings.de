import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://minorkings.de',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
});
