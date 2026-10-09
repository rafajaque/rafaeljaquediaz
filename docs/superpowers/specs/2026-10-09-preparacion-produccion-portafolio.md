# Diseño de preparación del portafolio para producción

## Propósito

Elevar el portafolio público de Rafael Andrés Jaque Díaz a una base profesional y mantenible para reclutadores, clientes y revisores técnicos. El trabajo conserva la identidad visual actual, el contenido en español, los certificados públicos, las rutas y el despliegue en Netlify, mientras mejora la reproducibilidad, la calidad automatizada, el SEO, la accesibilidad, la información de privacidad y la organización del repositorio.

La URL canónica de producción es `https://rafaeljaquediaz.netlify.app`.

## Restricciones y decisiones

- Conservar el sistema visual azul, el acento naranja cálido, las interacciones y el comportamiento de movimiento reducido.
- Conservar `/projects` para la experiencia profesional y `/gallery` para las certificaciones.
- Mantener públicos y completos los 34 PDF de certificados como documentos de verificación profesional.
- No añadir analítica, cookies, publicidad ni seguimiento de usuarios.
- Mantener Netlify Forms y el flujo actual de envío codificado mediante `POST /contact.html`.
- Mantener `src/data/site.ts` como fuente única del contenido del portafolio.
- El código queda con todos los derechos reservados; su publicación en GitHub no concede derechos de reutilización.
- No inventar afirmaciones profesionales, títulos, métricas ni URL de verificación de credenciales.

## Herramientas y modelo de dependencias

El proyecto declarará Node.js 22 y pnpm 10 como herramientas compatibles. La versión del gestor de paquetes se fijará mediante `packageManager` y `engines` documentará el entorno admitido. Los scripts garantizarán que el árbol de rutas se genere antes de una comprobación independiente de TypeScript, de modo que un clon limpio pueda ejecutar cada comando documentado por separado.

Se eliminarán las dependencias directas sin uso y duplicadas después de verificar las importaciones y completar una compilación limpia de producción. Los paquetes de ejecución permanecerán en `dependencies`; los de compilación, pruebas, lint y tipos permanecerán en `devDependencies`.

Biome proporcionará lint y formato mediante una configuración pequeña y específica para el repositorio. Los archivos generados, el árbol de rutas generado por TanStack, los certificados y los recursos binarios de terceros no se reformatearán.

## Cambios en el sitio público

### Metadatos y descubrimiento

Cada ruta pública tendrá un título y una descripción propios. Un helper compartido generará metadatos canonical, Open Graph y Twitter desde la URL canónica del sitio. El documento raíz incluirá datos estructurados `Person` y `ProfilePage` usando exclusivamente datos de perfil que ya son públicos.

El directorio público incluirá:

- `robots.txt`, que indicará a los rastreadores la ubicación del sitemap;
- `sitemap.xml`, con todas las rutas canónicas;
- una imagen social específica de 1200 por 630 píxeles que represente el portafolio en lugar de una sola insignia de certificación.

### Accesibilidad y navegación

El layout raíz añadirá un enlace “Saltar al contenido” visible mediante teclado y un destino estable para el contenido principal. Una ruta comodín mostrará una página 404 en español con navegación de regreso al inicio y a los proyectos. Se conservarán el foco por teclado, las etiquetas ARIA y el comportamiento de movimiento reducido existentes.

### Privacidad del contacto

La página de contacto indicará que el nombre, correo, motivo de contacto y mensaje enviados se utilizan únicamente para responder la consulta. No solicitará consentimiento de marketing porque no se realiza ese tratamiento. La alternativa de correo directo y el estado de error existentes seguirán disponibles.

La página de certificaciones o su introducción indicará que los certificados completos son públicos deliberadamente para su verificación profesional.

## Headers de seguridad

`netlify.toml` definirá un conjunto conservador de headers de producción:

- Content Security Policy compatible con la aplicación, Netlify Forms, imágenes locales y la fuente de Google utilizada actualmente;
- `X-Content-Type-Options: nosniff`;
- una `Referrer-Policy` que preserve la privacidad;
- `Permissions-Policy` para denegar capacidades del dispositivo que no se utilizan;
- protección frente a la inclusión del sitio dentro de marcos externos;
- una política adecuada de apertura entre orígenes, siempre que no rompa los enlaces externos.

La CSP se verificará con una compilación de producción y pruebas de navegador. No deberá bloquear la hidratación de la aplicación, los recursos locales, las fuentes, las imágenes ni el envío del formulario.

## Fronteras de prueba

Las pruebas comprobarán el comportamiento público y no detalles internos de los componentes.

### Frontera de contenido

Vitest verificará invariantes del contenido estructurado: rutas canónicas esperadas, rutas locales válidas para los certificados, totales de certificaciones, URL externas válidas, identificadores estables de proyectos y sincronización entre el formulario React y el registro estático de Netlify.

### Frontera de navegador

Playwright se ejecutará contra la aplicación con configuración equivalente a producción y verificará que:

- `/`, `/projects`, `/proyectos`, `/gallery`, `/about` y `/contact` muestran su encabezado principal;
- cada ruta pública expone el título, descripción y URL canonical esperados;
- una ruta desconocida muestra la página 404 personalizada;
- el enlace para saltar contenido conduce al contenido principal;
- la navegación de escritorio y móvil ofrece los destinos esperados;
- el formulario de contacto produce el cuerpo codificado esperado sin enviar un mensaje real a Netlify;
- axe no informa infracciones críticas o graves de accesibilidad en las rutas públicas.

### Frontera del repositorio

La integración continua verificará instalación congelada, formato, lint, pruebas unitarias, TypeScript, compilación de producción, pruebas de navegador y accesibilidad, e integridad de enlaces. Las pruebas de navegador se ejecutarán separadas de las verificaciones estáticas rápidas para que los fallos sean fáciles de diagnosticar.

## GitHub y documentación

Dependabot supervisará semanalmente pnpm y GitHub Actions. El README documentará las herramientas fijadas, los comandos, la estrategia de pruebas, la URL de producción, el tratamiento de privacidad, los certificados públicos, el despliegue y la condición de derechos reservados. Un aviso de licencia hará explícita la reserva de derechos del código fuente.

Cuando los permisos del repositorio lo permitan, se actualizarán la descripción, la página principal y los topics de GitHub. Las protecciones administrativas —revisiones obligatorias, protección de `main`, detección de secretos y checks requeridos— sólo se activarán cuando los permisos disponibles expongan los controles correspondientes; en caso contrario, se documentarán para su activación manual.

## Manejo de errores y objetivos excluidos

Las pruebas automatizadas interceptarán el envío del formulario y nunca crearán mensajes reales. La aplicación conservará su estado visible de error de envío y la alternativa de correo directo. La comprobación de enlaces distinguirá los enlaces locales del repositorio y del sitio de los destinos de terceros, para que fallos externos temporales no vuelvan inestable el desarrollo normal.

Este trabajo no rediseña el portafolio, no censura certificados, no incorpora un CMS, no añade analítica, no crea cuentas de usuario ni establece un sistema de gestión de versiones.

## Criterios de finalización

El trabajo se considerará terminado cuando un clon limpio con las herramientas fijadas pueda realizar una instalación congelada y superar formato, lint, pruebas unitarias, TypeScript, compilación de producción, pruebas de navegador y accesibilidad, y comprobaciones deterministas de enlaces; los metadatos públicos y headers de seguridad estén presentes; la documentación coincida con la implementación; y el diff final no contenga resultados generados de compilación.
