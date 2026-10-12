import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const root = resolve(import.meta.dirname, '..')

describe('configuración de producción', () => {
  it('declara los headers de seguridad requeridos en Netlify', () => {
    const config = readFileSync(resolve(root, 'netlify.toml'), 'utf8')
    const requiredHeaders = [
      'Content-Security-Policy',
      'X-Content-Type-Options',
      'Referrer-Policy',
      'Permissions-Policy',
      'X-Frame-Options',
      'Cross-Origin-Opener-Policy',
    ]

    for (const header of requiredHeaders) expect(config).toContain(header)
    expect(config).toContain("frame-ancestors 'none'")
    expect(config).toContain("form-action 'self'")
  })
})
