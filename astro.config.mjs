// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Vercel sets VERCEL=1 for every build it runs. GitHub Pages serves this project
// under a subpath (/ej-nexus-portfolio/); Vercel serves it from the domain root, so
// the base path has to differ per target or every internal link/asset breaks.
const isVercel = !!process.env.VERCEL;
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

// https://astro.build/config
export default defineConfig({
  site: isVercel
    ? `https://${vercelUrl ?? 'ej-nexus-portfolio.vercel.app'}`
    : 'https://eddy-jordan.github.io',
  base: isVercel ? '/' : '/ej-nexus-portfolio/',
  vite: {
    plugins: [tailwindcss()],
  },
});
