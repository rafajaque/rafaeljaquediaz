# Plan de implementación: preparación del portafolio para producción

## Objetivo

Implementar la especificación aprobada en `docs/superpowers/specs/2026-10-09-preparacion-produccion-portafolio.md` sin rediseñar el sitio ni alterar los datos profesionales.

## Regla de ejecución

Cada comportamiento nuevo se desarrolla mediante una porción vertical: prueba que falla, implementación mínima, prueba que pasa. Los cambios de configuración que no admiten una prueba unitaria directa se validan mediante sus comandos públicos y una compilación limpia.

## 1. Fijar y sanear las herramientas

Archivos: `package.json`, `pnpm-lock.yaml`, `biome.json`, `.gitignore`.

1. Declarar `packageManager` con pnpm 10 y `engines` para Node.js 22 y pnpm 10.
2. Añadir scripts independientes para generación de rutas, formato, lint, pruebas unitarias, pruebas de navegador, accesibilidad y verificación completa.
3. Instalar Biome, Vitest, Playwright y axe para Playwright.
4. Eliminar dependencias directas sin importaciones y duplicados entre dependencias de ejecución y desarrollo.
5. Regenerar el lockfile con pnpm 10.
6. Confirmar que una instalación congelada y una compilación de producción terminan con código cero.

## 2. Crear la capa compartida de metadatos

Archivos: `src/lib/seo.ts`, `src/lib/seo.test.ts`, `src/data/site.ts`.

1. Escribir una prueba que describa la URL canónica, el título, la descripción, Open Graph y Twitter esperados para una ruta conocida.
2. Ejecutar la prueba y confirmar que falla porque el helper no existe.
3. Implementar el helper mínimo de metadatos.
4. Añadir pruebas para normalización de `/`, rutas internas y URL de imagen absoluta.
5. Exportar desde los datos del sitio la URL canónica y la información pública necesaria para JSON-LD.
6. Ejecutar las pruebas hasta obtener resultado verde.

## 3. Aplicar SEO por ruta y datos estructurados

Archivos: `src/routes/__root.tsx`, todas las rutas públicas de `src/routes/`.

1. Sustituir metadatos duplicados por el helper compartido.
2. Añadir descripciones específicas a inicio, experiencia, proyectos, certificaciones, perfil y contacto.
3. Insertar JSON-LD `Person` y `ProfilePage` en el documento raíz sin incluir información no publicada previamente.
4. Verificar mediante build y pruebas de navegador que los títulos, descripciones y canonical son correctos.

## 4. Añadir descubrimiento e imagen social

Archivos: `public/robots.txt`, `public/sitemap.xml`, `public/img/rafael-jaque-social.svg` o imagen raster final equivalente.

1. Crear una prueba de integridad que espere robots, sitemap, todas las rutas públicas y la URL canónica.
2. Confirmar el fallo inicial.
3. Crear los archivos mínimos y una imagen social de 1200 × 630 que siga la identidad azul/naranja.
4. Conectar la imagen al helper SEO y comprobar que la URL producida es absoluta.

## 5. Mejorar navegación, 404 y privacidad

Archivos: `src/routes/__root.tsx`, `src/routes/$.tsx` o mecanismo equivalente de TanStack, `src/routes/contact.tsx`, `src/routes/gallery.tsx`, `src/styles.css`, `public/contact.html` si cambia el formulario.

1. Escribir pruebas de navegador para el enlace de salto, una ruta inexistente y los textos de privacidad/verificación.
2. Confirmar los fallos iniciales.
3. Añadir el enlace “Saltar al contenido”, el identificador del contenido principal y sus estilos de foco.
4. Implementar la página 404 en español.
5. Añadir la nota de privacidad del formulario y la explicación de certificados públicos completos.
6. Mantener sincronizados los campos React y Netlify.
7. Ejecutar la porción de pruebas hasta obtener resultado verde.

## 6. Probar el contenido y el formulario

Archivos: `src/data/site.test.ts`, `tests/contact-form.test.ts` o ubicación equivalente, configuración de Vitest.

1. Probar rutas locales de los 34 certificados contra archivos reales.
2. Probar total de certificados, horas declaradas, identificadores de proyectos y formato de URL externas.
3. Probar que los nombres de campos del formulario React coinciden con `public/contact.html`.
4. Extraer sólo la mínima constante compartida si la prueba revela duplicación insegura.
5. Confirmar que las pruebas responden a una mutación temporal o a la ausencia de un campo antes de restaurar la implementación correcta.

## 7. Configurar pruebas de navegador y accesibilidad

Archivos: `playwright.config.ts`, `tests/e2e/portfolio.spec.ts`, `tests/e2e/contact.spec.ts`, `tests/e2e/accessibility.spec.ts`.

1. Configurar Playwright contra el servidor local de producción o preview.
2. Probar encabezado principal y metadatos de cada ruta pública.
3. Probar navegación de escritorio y móvil.
4. Interceptar `POST /contact.html`, completar el formulario y validar el cuerpo URL-encoded sin enviar datos reales.
5. Ejecutar axe en cada ruta y fallar ante infracciones críticas o graves.
6. Probar la página 404 y el enlace de salto.

## 8. Añadir headers de seguridad de Netlify

Archivos: `netlify.toml`, prueba de configuración o script de validación.

1. Escribir una prueba o comprobación determinista que lea `netlify.toml` y espere los headers aprobados.
2. Añadir CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, protección de marcos y política de apertura entre orígenes.
3. Ejecutar build y pruebas de navegador con la configuración de producción aplicable.
4. Confirmar que fuentes, imágenes, hidratación, navegación y formulario no quedan bloqueados.

## 9. Ampliar integración continua y mantenimiento

Archivos: `.github/workflows/quality.yml`, `.github/dependabot.yml`.

1. Separar el workflow en verificaciones rápidas y pruebas de navegador.
2. Ejecutar instalación congelada, formato, lint, unitarias, TypeScript y build en el job rápido.
3. Instalar Chromium y ejecutar Playwright/axe en el job de navegador.
4. Añadir una comprobación determinista de enlaces locales.
5. Configurar Dependabot semanal para pnpm y GitHub Actions.
6. Mantener permisos mínimos de lectura en Actions.

## 10. Documentar derechos y operación

Archivos: `LICENSE`, `README.md`, opcionalmente `CONTRIBUTING.md` si aporta información no duplicada.

1. Añadir un aviso de todos los derechos reservados, sin declarar una licencia permisiva.
2. Actualizar README con URL pública, versiones requeridas, instalación, comandos, pruebas, despliegue, privacidad, certificados completos y mantenimiento.
3. Documentar que los PDF se publican para verificación y que no se concede permiso de reutilización del código.
4. Documentar los controles administrativos que deban activarse manualmente en GitHub si la API no permite configurarlos.

## 11. Actualizar metadatos del repositorio

Superficie: configuración de GitHub mediante API.

1. Establecer una descripción breve en español.
2. Establecer `https://rafaeljaquediaz.netlify.app` como homepage.
3. Añadir topics relevantes como `portfolio`, `react`, `typescript`, `tanstack-router`, `netlify` y `data-analytics` si GitHub permite la operación.
4. Leer nuevamente la configuración para verificar el resultado.

## 12. Verificación final

1. Eliminar únicamente resultados generados por las comprobaciones, conservando archivos fuente y lockfile.
2. Ejecutar desde el estado final:
   - instalación congelada con pnpm 10;
   - formato en modo comprobación;
   - lint;
   - pruebas unitarias;
   - TypeScript desde un clon equivalente sin árbol de rutas previo;
   - build de producción;
   - pruebas Playwright y axe;
   - auditoría de dependencias de producción;
   - `git diff --check`.
3. Revisar el diff contra la especificación, comprobar que no hay contenido generado ni datos profesionales alterados y revisar el estado de Git.
4. Crear commits temáticos en español.
5. Subir la rama y abrir un pull request hacia `main` con resumen, verificaciones y cualquier ajuste administrativo pendiente.

## Resultado esperado

Un portafolio reproducible y verificable, con controles automáticos suficientes para detectar regresiones de contenido, navegación, formulario, SEO y accesibilidad, sin aumentar innecesariamente la complejidad ni introducir seguimiento de visitantes.
