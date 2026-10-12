import { describe, expect, it } from 'vitest'
import { buildSeo, siteUrl } from './seo'

describe('metadatos públicos', () => {
  it('genera metadatos completos y URL absolutas para una ruta', () => {
    const head = buildSeo({
      title: 'Proyectos — Rafael Andrés Jaque Díaz',
      description: 'Proyectos tecnológicos y de análisis de datos.',
      path: '/proyectos',
    })

    expect(siteUrl).toBe('https://rafaeljaquediaz.netlify.app')
    expect(head.links).toContainEqual({ rel: 'canonical', href: `${siteUrl}/proyectos` })
    expect(head.meta).toEqual(
      expect.arrayContaining([
        { title: 'Proyectos — Rafael Andrés Jaque Díaz' },
        { name: 'description', content: 'Proyectos tecnológicos y de análisis de datos.' },
        { property: 'og:url', content: `${siteUrl}/proyectos` },
        { property: 'og:image', content: `${siteUrl}/img/rafael-jaque-social.svg` },
        { name: 'twitter:card', content: 'summary_large_image' },
      ]),
    )
  })

  it('normaliza la portada sin una barra final duplicada', () => {
    const head = buildSeo({ title: 'Portafolio', description: 'Inicio', path: '/' })

    expect(head.links).toContainEqual({ rel: 'canonical', href: `${siteUrl}/` })
  })
})
