import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://majdolen7.github.io',
  base: '/githelp',
  integrations: [sitemap()],
});
