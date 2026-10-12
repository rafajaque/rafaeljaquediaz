import { expect, test } from '@playwright/test'

const routes = [
  { path: '/', heading: /Integro tecnología, datos y gestión/i, title: /Rafael Andrés Jaque Díaz/ },
  { path: '/projects', heading: /Mi experiencia/i, title: /Experiencia/ },
  { path: '/proyectos', heading: /Mis proyectos/i, title: /Proyectos/ },
  { path: '/gallery', heading: /Mis certificaciones/i, title: /Certificaciones/ },
  { path: '/about', heading: /Soy Rafael/i, title: /Sobre mí/ },
  { path: '/contact', heading: /Escríbeme/i, title: /Contacto/ },
] as const

for (const route of routes) {
  test(`${route.path} expone contenido y metadatos propios`, async ({ page }) => {
    await page.goto(route.path)

    await expect(page.getByRole('heading', { level: 1, name: route.heading })).toBeVisible()
    await expect(page).toHaveTitle(route.title)
    const description = await page.locator('meta[name="description"]').getAttribute('content')
    expect(description?.length).toBeGreaterThan(30)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://rafaeljaquediaz.netlify.app${route.path}`)
  })
}

test('las respuestas SSR incluyen los headers de seguridad', async ({ page }) => {
  const response = await page.goto('/')

  expect(response).not.toBeNull()
  if (!response) throw new Error('La navegación SSR no devolvió una respuesta HTTP')
  const headers = response.headers()

  expect(headers['content-security-policy']).toContain("frame-ancestors 'none'")
  expect(headers['cross-origin-opener-policy']).toBe('same-origin-allow-popups')
  expect(headers['permissions-policy']).toBe('camera=(), geolocation=(), microphone=(), payment=(), usb=()')
  expect(headers['referrer-policy']).toBe('strict-origin-when-cross-origin')
  expect(headers['strict-transport-security']).toBe('max-age=31536000; includeSubDomains')
  expect(headers['x-content-type-options']).toBe('nosniff')
  expect(headers['x-frame-options']).toBe('DENY')
})

test('el enlace de salto lleva el foco al contenido principal', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  const skipLink = page.getByRole('link', { name: 'Saltar al contenido' })
  await expect(skipLink).toBeFocused()
  await skipLink.press('Enter')
  await expect(page.locator('#contenido-principal')).toBeFocused()
})

test('una dirección desconocida muestra la página 404', async ({ page }) => {
  await page.goto('/direccion-inexistente')
  await expect(page.getByRole('heading', { level: 1, name: /Esta página no existe/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /Volver al inicio/i })).toBeVisible()
})

test('el menú móvil conserva todos los destinos principales', async ({ page }) => {
  const pageErrors: string[] = []
  page.on('pageerror', (error) => pageErrors.push(error.message))
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('data-hydrated', 'true')
  const menuButton = page.locator('button[aria-controls="mobile-navigation"]')
  await menuButton.click()
  expect(pageErrors).toEqual([])
  await expect(menuButton).toHaveAccessibleName('Cerrar menú')

  for (const label of ['Experiencia', 'Proyectos', 'Certificaciones', 'Sobre mí', 'Contacto']) {
    await expect(page.getByRole('navigation', { name: 'Móvil' }).getByRole('link', { name: label })).toBeVisible()
  }
})
