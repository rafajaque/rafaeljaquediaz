# AGENTS.md

Personal portfolio for Rafael Andrés Jaque Díaz, an IT engineer and technology project manager. TanStack Start + React 19 + Tailwind 4, configured for Netlify.

## Content

- src/data/site.ts is the source of truth for identity, experience, education, skills, certifications and social links.
- Keep all visitor-facing content in Spanish.
- Preserve factual details from Rafael's CV. Do not invent employers, qualifications, project outcomes or credential verification URLs.
- /projects displays professional experience; /gallery displays certifications. Preserve these existing URLs.
- public/img/google-data-driven-decision-making.png is the original badge supplied by Rafael. Preserve its official colors and proportions.

## Design and implementation

- Keep the existing blue theme tokens and typography. The official badge is exempt from the blue-only palette.
- Render images through Picture, with the original asset as a fallback when Netlify Image CDN is unavailable.
- Keep content readable at mobile widths and respect reduced motion.
- Contact submissions are URL-encoded POST requests to /contact.html. Keep React fields and public/contact.html synchronized.
- Run the production build and TypeScript checks when dependencies are available. Do not commit generated build files or node_modules.
