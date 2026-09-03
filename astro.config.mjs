import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: switch to the production domain before go-live.
export default defineConfig({
  site: 'https://cceg.org.uk',
  integrations: [sitemap()],
});
