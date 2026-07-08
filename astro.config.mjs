// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://eddy-jordan.github.io',
  base: '/ej-nexus-portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
