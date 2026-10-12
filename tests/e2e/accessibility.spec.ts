import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const publicRoutes = ['/', '/projects', '/proyectos', '/gallery', '/about', '/contact']

for (const route of publicRoutes) {
  test(`${route} no presenta infracciones críticas o graves de accesibilidad`, async ({ page }) => {
    await page.goto(route)
    const results = await new AxeBuilder({ page }).analyze()
    const blockingViolations = results.violations.filter((violation) => violation.impact === 'critical' || violation.impact === 'serious')

    expect(blockingViolations, JSON.stringify(blockingViolations, null, 2)).toEqual([])
  })
}
