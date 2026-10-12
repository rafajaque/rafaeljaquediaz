import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { PageTransition } from '@/components/PageTransition'
import { ReadingProgress } from '@/components/ReadingProgress'
import { HydrationStatus } from '@/components/HydrationStatus'
import { site, socials } from '@/data/site'
import { siteUrl } from '@/lib/seo'

import '../styles.css'

const profileSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}#perfil`,
      url: siteUrl,
      name: `${site.name} — ${site.role}`,
      mainEntity: { '@id': `${siteUrl}#rafael-jaque` },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}#rafael-jaque`,
      name: site.name,
      url: siteUrl,
      description: site.description,
      jobTitle: site.role,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CL',
      },
      sameAs: socials.map((social) => social.href),
    },
  ],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'theme-color',
        content: '#eef7fd',
      },
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;600&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        <script type="application/ld+json">{JSON.stringify(profileSchema)}</script>
      </head>
      <body className="grain">
        <HydrationStatus />
        <a href="#contenido-principal" className="skip-link">
          Saltar al contenido
        </a>
        <ReadingProgress />
        <SiteHeader />
        <main id="contenido-principal" className="site-canvas" tabIndex={-1}>
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}
