# Luz Marín — Portfolio

A personal portfolio for a photographer and visual designer, built around one idea: **everything is blue**. The design borrows from the cyanotype print process — celeste paper, ultramarine and Prussian-blue ink, film grain, darkroom-style captions and an "exposure test strip" as a recurring motif.

## Pages

- **Home** (`/`) — hero with editorial type, featured projects, a scrollable contact-sheet teaser and a short manifesto.
- **Work** (`/projects`) — project showcase with large imagery, role, client, year and tags.
- **Gallery** (`/gallery`) — masonry photo gallery filterable by series, with a full-screen lightbox (keyboard ← → Esc).
- **About** (`/about`) — portrait, bio, four-step process, timeline and clients.
- **Contact** (`/contact`) — Netlify Forms contact form with project type and budget, copy-to-clipboard email, and social links.

## Tech

- [TanStack Start](https://tanstack.com/start) + React 19, file-based routing
- Tailwind CSS 4 with a custom blue palette (`src/styles.css`)
- Content Collections for projects (`content/projects/*.md`)
- **Netlify Image CDN** — every image is served resized as WebP with responsive `srcset`
- **Netlify Forms** — contact submissions appear in the Netlify dashboard

## Run locally

```bash
pnpm install
netlify dev        # or: pnpm dev
```

Netlify Forms and the Image CDN are best tested with `netlify dev` or on a deploy preview.

## Editing content

- Name, email, socials and gallery photos: `src/data/site.ts`
- Projects: add a markdown file to `content/projects/`
- Images: drop them into `public/img/` and reference them as `/img/<file>`
