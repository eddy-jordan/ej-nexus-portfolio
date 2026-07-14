# ej_nexus — Portfolio

Personal portfolio for **Oluwamurewa Oyetoro (Eddy Jordan)** — Machine Learning Engineer,
Full-Stack Developer, Designer, and Artist.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com),
deployed as a static site to GitHub Pages.

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

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds
and deploys automatically on every push to `main`.

1. Push this project to a GitHub repo. The config here assumes the repo is named
   `ej-nexus-portfolio` under the `eddy-jordan` account, deploying to
   `https://eddy-jordan.github.io/ej-nexus-portfolio/`.
   - If you use a different repo name, update `base` in `astro.config.mjs` to match
     (`base: '/your-repo-name'`).
   - If you deploy to a root user/org site (`eddy-jordan.github.io` repo itself), set
     `base: '/'` instead.
2. In the GitHub repo settings, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` — the workflow builds the site and publishes `./dist` automatically.

## Local development

```sh
npm install
npm run dev
```

Visit `http://localhost:4321/ej-nexus-portfolio/` (note the base path — it matches
production so links behave the same locally).
