import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { certificationHours, certifications, githubProjects, socials } from './site'

const root = resolve(import.meta.dirname, '../..')

describe('integridad del contenido público', () => {
  it('mantiene disponibles los 34 certificados y su total de horas', () => {
    expect(certifications).toHaveLength(34)
    expect(certifications.reduce((total, certificate) => total + certificate.hours, 0)).toBe(certificationHours)

    for (const certificate of certifications) {
      expect(certificate.pdf).toMatch(/^\/certificados\/.+\.pdf$/)
      expect(existsSync(resolve(root, 'public', certificate.pdf.slice(1))), certificate.pdf).toBe(true)
    }
  })

  it('usa identificadores únicos y URL externas válidas', () => {
    expect(new Set(githubProjects.map((project) => project.id)).size).toBe(githubProjects.length)

    const externalUrls = [
      ...socials.map((social) => social.href),
      ...githubProjects.map((project) => project.href),
      ...certifications.flatMap((certificate) =>
        'verificationUrl' in certificate && typeof certificate.verificationUrl === 'string' ? [certificate.verificationUrl] : [],
      ),
    ]

    for (const url of externalUrls) expect(() => new URL(url)).not.toThrow()
  })

  it('mantiene sincronizados los campos del formulario React y Netlify', () => {
    const reactForm = readFileSync(resolve(root, 'src/routes/contact.tsx'), 'utf8')
    const netlifyForm = readFileSync(resolve(root, 'public/contact.html'), 'utf8')
    const expectedFields = ['form-name', 'bot-field', 'project-type', 'name', 'email', 'message']

    for (const field of expectedFields) {
      expect(reactForm).toContain(`name="${field}"`)
      expect(netlifyForm).toContain(`name="${field}"`)
    }
  })

  it('publica archivos de descubrimiento con todas las rutas canónicas', () => {
    const robots = readFileSync(resolve(root, 'public/robots.txt'), 'utf8')
    const sitemap = readFileSync(resolve(root, 'public/sitemap.xml'), 'utf8')
    const routes = ['/', '/projects', '/proyectos', '/gallery', '/about', '/contact']

    expect(robots).toContain('Sitemap: https://rafaeljaquediaz.netlify.app/sitemap.xml')
    for (const route of routes) expect(sitemap).toContain(`<loc>https://rafaeljaquediaz.netlify.app${route}</loc>`)
  })
})
