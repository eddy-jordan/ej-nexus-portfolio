# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio site for Oluwamurewa Oyetoro (Eddy Jordan) — ML Engineer, Full-Stack
Developer, Designer, and Artist. Astro + Tailwind CSS v4, built as a fully static site and
deployed to GitHub Pages under a non-root path.

## Commands

```sh
npm install       # install dependencies
npm run dev       # dev server at localhost:4321 (serves under the /ej-nexus-portfolio/ base path)
npm run build     # production build to ./dist/
npm run preview   # preview the production build locally
```

There is no test suite or linter configured in this project.

## Architecture

**Single-page site, component-per-section.** `src/pages/index.astro` assembles the entire
homepage by importing and stacking section components from `src/components/` in order
(Header, Hero, About, Skills, Projects, ArtGallery, Resume, Contact, Footer). Each section
component owns its own `id` (e.g. `id="projects"`) that the nav bar scrolls to. There's a
second real page, `src/pages/resume.astro`, which reuses `Header`/`Footer` and renders the
full CV inline.

**Content lives in `src/data/`, not hardcoded in components.** `projects.ts` and `art.ts`
export typed arrays that `Projects.astro` and `ArtGallery.astro` map over. To add/edit a
project or artwork, edit the data file — don't touch the component markup. Project entries
carry a `categories` array (`"ml"` / `"fullstack"` / `"design"`) that drives the client-side
filter buttons in `Projects.astro`.

**Critical gotcha: the site is deployed under a base path, not root.**
`astro.config.mjs` sets `base: '/ej-nexus-portfolio/'` (GitHub Pages project site, not a
custom domain). Every internal link/asset reference in the codebase must be built from
`import.meta.env.BASE_URL`, never a bare `/path` or bare `#hash`:

- Bare `href="#about"` only works from the homepage — it silently no-ops on any other page
  (this broke nav on `/resume` once already; fixed by prefixing every nav link with
  `${BASE}#about`, see `Header.astro`).
- Asset paths must be `${BASE}${path.replace(/^\//, "")}`, and `base` in
  `astro.config.mjs` must end in a trailing slash — Astro does not add one automatically,
  so `BASE_URL` + a path without careful slash handling produces broken concatenations
  like `/ej-nexus-portfolioimages/...` (this exact bug shipped once and broke every art
  image, the resume download, and the favicon simultaneously).

When adding any new internal link, image `src`, or download href, follow the existing
pattern (`const BASE = import.meta.env.BASE_URL` at the top of the component) rather than
hand-writing a path.

**Client-side interactivity is vanilla JS in `<script>` tags**, not a UI framework — there's
no React/Vue/Svelte integration installed. See `Header.astro` (mobile menu toggle),
`Projects.astro` (category filter buttons, toggles `display: none` on card elements), and
`ArtGallery.astro` (lightbox with keyboard nav, built with `<script define:vars>` to pass
the `art.ts` data into plain JS).

**Contact form posts directly to Formspree** (no backend in this repo). The endpoint is a
hardcoded constant `FORMSPREE_ENDPOINT` in `Contact.astro`; the submit handler does a
`fetch()` and falls back to an inline message if the endpoint still contains the
`YOUR_FORM_ID` placeholder.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`
via `actions/deploy-pages`. Two things this workflow does **not** handle, because they're
one-time repo settings rather than code:

- GitHub Pages must be manually set to **Source: GitHub Actions** in repo Settings → Pages
  before the first deploy will succeed (a push before this is done builds fine but fails at
  the deploy step).
- If the repo is ever renamed or forked under a different name/owner, both `site` and
  `base` in `astro.config.mjs` need to be updated to match, or every internal link breaks.
