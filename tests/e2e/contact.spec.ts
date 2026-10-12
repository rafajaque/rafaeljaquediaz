import { expect, test } from '@playwright/test'

test('el formulario envía los campos esperados sin contactar a Netlify', async ({ page }) => {
  let submittedBody = ''
  const pageErrors: string[] = []
  page.on('pageerror', (error) => pageErrors.push(error.message))
  await page.route('**/contact.html', async (route) => {
    submittedBody = route.request().postData() ?? ''
    await route.fulfill({ status: 200, contentType: 'text/html', body: 'ok' })
  })

  await page.goto('/contact')
  await expect(page.locator('html')).toHaveAttribute('data-hydrated', 'true')
  await page.getByText('Análisis de datos', { exact: true }).click()
  await expect(page.getByRole('radio', { name: 'Análisis de datos' })).toBeChecked()
  await page.getByLabel('Tu nombre').fill('Ana Pérez')
  await page.getByLabel('Email').fill('ana@example.com')
  await page.getByLabel('Tu mensaje').fill('Quisiera conversar sobre un proyecto de datos.')
  await page.getByRole('button', { name: 'Enviar mensaje' }).click()

  await expect.poll(() => submittedBody).not.toBe('')
  expect(pageErrors).toEqual([])
  await expect(page.getByRole('heading', { name: /Mensaje recibido/i })).toBeVisible()
  const params = new URLSearchParams(submittedBody)
  expect(Object.fromEntries(params)).toMatchObject({
    'form-name': 'contact',
    'project-type': 'Análisis de datos',
    name: 'Ana Pérez',
    email: 'ana@example.com',
    message: 'Quisiera conversar sobre un proyecto de datos.',
  })
})
