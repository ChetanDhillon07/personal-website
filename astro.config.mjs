// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ubiquitous-cobbler-3828e7.netlify.app/',
  vite: {
    css: {
      transformer: 'lightningcss', // 👈 Required for optimal Tailwind v4 processing
    },
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), sitemap()]
});
