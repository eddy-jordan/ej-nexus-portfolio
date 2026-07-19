# ej_nexus — Portfolio

Personal portfolio for **Oluwamurewa Oyetoro (Eddy Jordan)** — Machine Learning Engineer,
Full-Stack Developer, Designer, and Artist.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com),
deployed as a static site to both GitHub Pages and Vercel.

## Project Structure

```
src/
├── assets/art/     artwork image files, optimized via astro:assets
├── components/     Header, Hero, About, Skills, Projects, ArtGallery, Resume, Contact, Footer, ScrollEffects
├── data/           projects.ts, art.ts — edit these to add/update content
├── layouts/        Layout.astro — shared <head>, fonts, global styles
└── pages/          index.astro (home), resume.astro (full CV)
public/
└── resume/         downloadable resume .docx
```

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`      | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`   |
| `npm run build`     | Build the production site to `./dist/`       |
| `npm run preview`   | Preview the production build locally          |

## Editing content

- **Projects** — edit `src/data/projects.ts`. Each entry needs a `categories` array
  (`"ml"`, `"fullstack"`, `"design"`) which drives the filter buttons on the homepage.
  Use `featured: true` to span a card full-width with a badge, and `demos: [{ label, url }]`
  instead of `liveUrl` for a project with more than one deployed service.
- **Artwork** — drop the image file into `src/assets/art/`, then add a matching entry to
  `src/data/art.ts` referencing it by filename (`file: "your-file.jpg"`). Both steps are
  required — the gallery build fails if an entry has no matching asset.
- **Resume** — the full CV lives directly in `src/pages/resume.astro`; the downloadable
  file is `public/resume/Oluwamurewa_Oyetoro_Resume.docx` (swap in a new version any time,
  just keep the filename or update the links that reference it).

## Contact form setup (required)

The contact form posts to [Formspree](https://formspree.io) but ships with a placeholder
endpoint. To make it actually deliver emails:

1. Create a free account at [formspree.io](https://formspree.io) and add a new form.
2. Copy the form ID it gives you (looks like `https://formspree.io/f/abcd1234`).
3. Open `src/components/Contact.astro` and replace `YOUR_FORM_ID` in the
   `FORMSPREE_ENDPOINT` constant with your real ID.

Until that's done, submitting the form shows a friendly fallback message pointing visitors
to your email instead of silently failing.

## Deploying to both GitHub Pages and Vercel

`astro.config.mjs` sets `base` and `site` based on whether `process.env.VERCEL` is set
(Vercel sets this automatically on every build; GitHub Actions doesn't). This matters
because GitHub Pages serves this project under a subpath
(`https://eddy-jordan.github.io/ej-nexus-portfolio/`) while Vercel serves it from its own
domain root, so the two builds need different `base` values or every internal link/image
path breaks. You don't need to touch this switch when deploying to either target, it's
automatic; only edit it if the GitHub Pages repo name or the Vercel production domain
changes.

### GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds
and deploys automatically on every push to `main`.

1. Push this project to a GitHub repo. The config here assumes the repo is named
   `ej-nexus-portfolio` under the `eddy-jordan` account, deploying to
   `https://eddy-jordan.github.io/ej-nexus-portfolio/`.
   - If you use a different repo name, update the GitHub Pages branch of `base` in
     `astro.config.mjs` to match (`'/your-repo-name/'`).
   - If you deploy to a root user/org site (`eddy-jordan.github.io` repo itself), set that
     branch to `'/'` instead.
2. In the GitHub repo settings, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` — the workflow builds the site and publishes `./dist` automatically.

### Vercel

No adapter or extra config is required beyond the `base`/`site` switch above and the
included `vercel.json` (pins the framework and build output so Vercel doesn't have to
guess).

1. In the [Vercel dashboard](https://vercel.com/new), import this GitHub repo. Vercel
   auto-detects Astro; leave the build command and output directory as-is.
2. No environment variables are required, the site is fully static and the contact form
   posts client-side straight to Formspree.
3. Deploy. Every push to `main` triggers a new production deployment automatically; every
   other branch/PR gets its own preview URL.
4. If you attach a custom domain or the assigned `*.vercel.app` domain changes, update the
   Vercel branch of `site` in `astro.config.mjs` to match (cosmetic only, used for
   canonical URLs, `base` stays `'/'` regardless of domain).

## Local development

```sh
npm install
npm run dev
```

Visit `http://localhost:4321/ej-nexus-portfolio/` (note the base path, it matches the
GitHub Pages production build so links behave the same locally; this is unrelated to how
the site behaves once deployed to Vercel, where it serves from `/`).
