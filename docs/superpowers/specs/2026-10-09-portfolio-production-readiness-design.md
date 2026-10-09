# Portfolio production-readiness design

## Purpose

Raise Rafael Andrés Jaque Díaz's public portfolio to a professional, maintainable baseline for recruiters, clients, and technical reviewers. The work preserves the current visual identity, Spanish content, public certificates, routes, and Netlify deployment while improving reproducibility, automated quality, SEO, accessibility, privacy disclosure, and repository hygiene.

The canonical production URL is `https://rafaeljaquediaz.netlify.app`.

## Constraints and decisions

- Preserve the existing blue visual system, warm orange accent, interactions, and reduced-motion behavior.
- Preserve `/projects` for professional experience and `/gallery` for certifications.
- Keep all 34 certificate PDFs public and complete as professional verification documents.
- Do not add analytics, cookies, advertising, or user tracking.
- Keep Netlify Forms and the existing URL-encoded `POST /contact.html` flow.
- Keep `src/data/site.ts` as the source of truth for portfolio content.
- The source is all rights reserved; publication on GitHub does not grant reuse rights.
- Do not invent professional claims, qualifications, metrics, or credential URLs.

## Toolchain and dependency model

The project will declare Node.js 22 and pnpm 10 as its supported toolchain. The package manager version will be pinned through `packageManager`; `engines` will document the supported runtime. Scripts will ensure route-tree generation occurs before standalone TypeScript checks so a fresh clone can run every documented command independently.

Unused and duplicate direct dependencies will be removed after verifying imports and completing a clean production build. Runtime packages will remain in `dependencies`; build, test, lint, and type packages will remain in `devDependencies`.

Biome will provide linting and formatting with a small repository-specific configuration. Generated output, the generated TanStack route tree, certificates, and third-party binary assets will not be reformatted.

## Public-site changes

### Metadata and discovery

Every public route will provide a distinct title and description. A shared metadata helper will generate canonical, Open Graph, and Twitter metadata from the canonical site URL. The root document will include `Person` and `ProfilePage` JSON-LD using only already-public profile details.

The public directory will include:

- `robots.txt` pointing crawlers to the sitemap;
- `sitemap.xml` containing all canonical routes;
- a dedicated 1200 by 630 social-preview image representing the portfolio rather than a single certificate badge.

### Accessibility and navigation

The root layout will add a keyboard-visible “Saltar al contenido” link and a stable main-content target. A catch-all route will render a Spanish 404 page with navigation back to the home page and projects. Existing keyboard focus, ARIA labeling, and reduced-motion behavior will be preserved.

### Contact privacy

The contact page will state that submitted name, email, contact reason, and message are used only to respond to the inquiry. It will not request marketing consent because no marketing processing is performed. The existing email fallback and error state remain available.

The certifications page or its introductory text will state that complete certificates are intentionally public for professional verification.

## Security headers

`netlify.toml` will define a conservative production header set:

- Content Security Policy compatible with the application, Netlify Forms, local images, and the currently loaded Google font;
- `X-Content-Type-Options: nosniff`;
- a privacy-preserving `Referrer-Policy`;
- `Permissions-Policy` denying unused device capabilities;
- frame-embedding protection;
- an appropriate cross-origin opener policy where it does not break external links.

The CSP will be verified against a production build and browser tests. It must not block application hydration, local assets, fonts, images, or form submission.

## Test seams

Tests exercise public behavior rather than component internals.

### Content seam

Vitest will verify structured portfolio invariants: expected canonical routes, valid local certificate paths, certification totals, valid external URLs, stable project identifiers, and synchronization between the React contact form and Netlify's static form registration.

### Browser seam

Playwright will run against the production-style application and verify:

- `/`, `/projects`, `/proyectos`, `/gallery`, `/about`, and `/contact` render their primary heading;
- each public route exposes the expected title, description, and canonical URL;
- an unknown route renders the custom 404;
- the skip link reaches the main content;
- desktop and mobile navigation expose the expected destinations;
- the contact form produces the expected URL-encoded payload without sending a real Netlify submission;
- axe reports no critical or serious accessibility violations on the public routes.

### Repository seam

CI will verify a frozen installation, formatting, linting, unit tests, TypeScript, production build, end-to-end/accessibility tests, and link integrity. Browser tests will run separately from fast static checks so failures are diagnosable.

## GitHub and documentation

Dependabot will monitor pnpm and GitHub Actions weekly. The README will document the pinned toolchain, commands, test strategy, production URL, privacy behavior, public certificates, deployment, and reserved-rights status. A source license notice will make the reserved-rights intent explicit.

When repository permissions permit, GitHub metadata will be updated with a description, production homepage, and relevant topics. Administrative protections—required reviews, protected `main`, secret scanning, and required checks—will be enabled only where the available GitHub permissions expose the corresponding controls; otherwise they will be documented for manual activation.

## Error handling and non-goals

Automated tests will intercept form submission and never create real messages. The application retains its visible send-error state and direct-email fallback. Link checking will distinguish local repository/site links from third-party endpoints so temporary external failures do not make ordinary development nondeterministic.

This effort does not redesign the portfolio, redact certificates, introduce a CMS, add analytics, add user accounts, or create a release-management system.

## Completion criteria

The work is complete when a clean checkout using the pinned toolchain can install with a frozen lockfile and pass formatting, linting, unit tests, TypeScript, production build, browser/accessibility tests, and deterministic link checks; the public metadata and security headers are present; documentation matches the implementation; and the final diff contains no generated build output.
