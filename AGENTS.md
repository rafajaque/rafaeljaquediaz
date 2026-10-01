# AGENTS.md

Portfolio site for "Luz Marín", a (fictional placeholder) photographer & visual designer. TanStack Start + React 19 + Tailwind 4, deployed on Netlify.

## Structure

```
content/projects/*.md     Projects (content-collections; schema in content-collections.ts)
public/img/               Source images (large PNGs — never link directly, use the Image CDN)
public/contact.html       Hidden static form so Netlify registers the "contact" form at build time
src/data/site.ts          Identity, social links, gallery photos (with intrinsic width/height)
src/lib/image.ts          cdn() / srcSet() helpers that build /.netlify/images URLs
src/components/
  Picture.tsx             Responsive <img> via Image CDN (webp, srcset, lazy, width/height)
  SiteHeader.tsx          Floating pill nav + full-screen mobile menu
  SiteFooter.tsx          "Let's talk" CTA + socials
  PageIntro.tsx           Shared page hero (number, eyebrow, huge serif title)
  ProjectRow.tsx          Alternating project showcase row
  ExposureScale.tsx       Signature cyanotype exposure-strip motif
src/routes/               index, projects, gallery, about, contact, __root (layout, fonts, meta)
src/styles.css            Theme tokens (ink/azul/cerulean/celeste/paper), .label, .display, .sky, .night, .grain
```

## Conventions & decisions

- **Palette is blue-only by design.** Use theme colors (`ink`, `azul`, `azul-deep`, `cerulean`, `celeste`, `celeste-soft`, `paper`, `foam`). Don't introduce greys or other hues.
- Type: `font-display` (Instrument Serif, often italic `<em>` accents in `text-azul`), `font-sans` (Familjen Grotesk), `.label` (IBM Plex Mono caps) for captions/metadata. Fonts load from Google Fonts in `__root.tsx`.
- Always render images through `<Picture>` or `cdn()` — originals are full-resolution model output. Image files are PNG.
- Contact form posts URL-encoded to `/contact.html` (not `/`, which SSR would intercept). If you add fields, add them to `public/contact.html` too.
- Social URLs and email in `src/data/site.ts` are placeholders to replace with real ones.
