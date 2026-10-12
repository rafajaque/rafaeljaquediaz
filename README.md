# Rafael Andrés Jaque Díaz — Portafolio

Portafolio profesional de Rafael Jaque, Ingeniero Informático y Gestor de Proyectos Tecnológicos. El sitio presenta su experiencia en análisis de datos y procesos, soporte TI, seguridad electrónica e integración de sistemas. Todo el contenido está basado en su CV.

El diseño conserva la identidad visual azul del proyecto original y suma un acento naranja cálido para acciones importantes. Degradados suaves, superficies translúcidas, sombras difusas y geometrías ambientales aportan profundidad sin reducir la legibilidad. La insignia oficial **Google Data-Driven Decision Making** mantiene sus colores originales.

**Sitio público:** [rafaeljaquediaz.netlify.app](https://rafaeljaquediaz.netlify.app/)

## Páginas

- **Inicio** (`/`) — presentación profesional con mensajes rotativos, botones magnéticos, contadores activados al entrar en pantalla, barras técnicas progresivas, experiencia reciente e insignia de Google.
- **Experiencia** (`/projects`) — línea de tiempo animada entre 2018 y 2026, con cargos, empresas, duración, funciones y tecnologías que aparecen progresivamente con el desplazamiento.
- **Proyectos** (`/proyectos`) — caso de estudio interactivo de Colchagua, filtros animados por tecnología y tarjetas expandibles para los repositorios públicos, con desafío, enfoque, estado, tecnologías y datos verificables.
- **Certificaciones** (`/gallery`) — 34 certificaciones y 229,5 horas de formación, con tarjetas que responden al cursor, fecha, PDF y enlace público de Coursera cuando está disponible.
- **Sobre mí** (`/about`) — perfil profesional, formación académica, habilidades técnicas e inglés avanzado.
- **Contacto** (`/contact`) — correo, teléfono, GitHub, LinkedIn y formulario de contacto mediante Netlify Forms.

Las rutas `/projects` y `/gallery` se conservan para mantener compatibles los enlaces existentes, aunque ahora representan experiencia y certificaciones.

## Tecnologías

- [TanStack Start](https://tanstack.com/start) y React 19 con rutas basadas en archivos.
- TypeScript y Tailwind CSS 4 con una paleta azul, un acento naranja accesible y un sistema de superficies en `src/styles.css`.
- [Lucide](https://lucide.dev/) para iconos.
- Componentes React propios para contadores animados, apariciones al hacer scroll y visualización interactiva de datos, con soporte para `prefers-reduced-motion`.
- Indicador global de lectura y transiciones suaves entre rutas, sin bloquear la navegación ni ocultar contenido esencial.
- **Netlify Image CDN** para entregar la insignia en WebP y tamaños adaptables, con el archivo local como respaldo.
- **Netlify Forms** para recibir los mensajes enviados desde el formulario de contacto.

## Ejecutar localmente

Requisitos:

- Node.js 22.
- pnpm 10.28.0, fijado mediante **packageManager**.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Comprobaciones disponibles:

~~~bash
pnpm format:check  # formato
pnpm lint          # calidad estática
pnpm test          # pruebas unitarias e integridad del contenido
pnpm typecheck     # generación de rutas y TypeScript
pnpm build         # compilación de producción
~~~

Para preparar Chromium y ejecutar las pruebas de navegación y accesibilidad:

~~~bash
pnpm exec playwright install chromium
pnpm test:e2e
~~~

**pnpm check** ejecuta las comprobaciones rápidas y **pnpm check:all** añade Playwright y axe. El formulario y Netlify Image CDN funcionan de forma completa con el plugin local de Netlify o en una vista previa de despliegue. Los enlaces directos de correo y teléfono funcionan de manera independiente.

## Arquitectura y despliegue

- `src/components/` contiene piezas reutilizables de interfaz, animación, navegación e imágenes.
- `src/data/site.ts` separa el contenido profesional de la presentación.
- `src/routes/` define las páginas mediante el enrutamiento de TanStack Start.
- Netlify construye automáticamente cada actualización de `main`; los pull requests permiten revisar los cambios antes de publicarlos.
- GitHub Actions ejecuta formato, lint, pruebas unitarias, TypeScript, build, auditoría de dependencias, Playwright y axe en cada pull request y actualización de **main**.
- Dependabot revisa semanalmente las dependencias de pnpm y GitHub Actions.
- El SEO incluye metadatos propios por ruta, canonical, Open Graph, Twitter, JSON-LD, sitemap, robots e imagen social.
- Netlify aplica headers de seguridad mediante **netlify.toml**.
- El proyecto se valida localmente con **pnpm check:all** y **git diff --check** antes de integrar cambios.

## Calidad y pruebas

- **Vitest** comprueba metadatos, rutas canónicas, certificados, horas de formación, URL públicas, proyectos, formulario estático y archivos de descubrimiento.
- **Playwright** recorre todas las páginas públicas, la navegación móvil, el enlace de salto, la página 404 y el formulario.
- **axe** bloquea infracciones críticas o graves de accesibilidad.
- Los envíos del formulario se interceptan durante las pruebas y nunca crean mensajes reales.
- **Biome** mantiene el formato y las reglas estáticas del código.

## Privacidad y certificados

El formulario utiliza el nombre, correo, motivo y mensaje exclusivamente para responder la consulta enviada. El sitio no incorpora analítica, cookies publicitarias ni seguimiento de visitantes.

Los 34 certificados se publican completos deliberadamente para permitir su revisión y verificación profesional. Las insignias, marcas y certificados pertenecen a sus respectivos titulares.

## Caso de BI: Colchagua

La página de proyectos presenta el problema, enfoque, datos y conclusiones del análisis de resiliencia agrícola en Colchagua. Incluye una visualización interactiva de prioridad y dependencia agrícola, además de enlaces directos al [notebook ejecutado](https://github.com/rafajaque/Investigaci-n-Colchagua-/blob/main/Colchagua_Resiliencia.ipynb), el archivo de Power BI, el informe y el repositorio reproducible.

Las conclusiones distinguen correlación de causalidad y explican las limitaciones de los datos. El índice sirve para priorizar diagnósticos; no representa una probabilidad de pérdida ni identifica empresas individuales vulnerables.

## Uso de inteligencia artificial

ChatGPT y Codex se utilizaron como apoyo para auditoría, programación, extracción y redacción. Rafael revisa los datos, valida los resultados y es responsable de las decisiones técnicas y del contenido publicado. El repositorio del caso Colchagua conserva fuentes, hashes, verificaciones y código reproducible para facilitar su revisión y defensa.

## Editar el contenido

- Identidad, datos de contacto, experiencia, proyectos, habilidades, formación y certificaciones: `src/data/site.ts`.
- Insignia de Google: `public/img/google-data-driven-decision-making.png`.
- PDFs de respaldo: `public/certificados/`.
- Contenido y estructura de las páginas: `src/routes/`.
- Navegación y pie de página: `src/components/SiteHeader.tsx` y `src/components/SiteFooter.tsx`.
- Formulario estático que Netlify utiliza para registrar los campos: `public/contact.html`.

Los campos de `public/contact.html` deben coincidir con los del formulario React en `src/routes/contact.tsx`. Las certificaciones reproducen los nombres, instituciones y horas del archivo `Certificados.xlsx`. Los certificados de Coursera enlazan a su verificación pública; los demás muestran el PDF y su número de serie, sin atribuirles una verificación externa no disponible.

## Derechos

Copyright © 2026 Rafael Andrés Jaque Díaz. Todos los derechos reservados.

El repositorio se publica como demostración profesional y no concede permiso para copiar, modificar, distribuir o reutilizar su código, diseño, textos o recursos. Consulta [LICENSE](LICENSE).

## Configuración administrativa recomendada

En GitHub conviene mantener activadas la protección de **main**, las revisiones mediante pull request, los checks requeridos, la detección de secretos y la eliminación automática de ramas integradas. Estas opciones dependen de los permisos y del plan del repositorio, por lo que se verifican desde la configuración de GitHub.
