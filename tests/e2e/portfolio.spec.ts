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
