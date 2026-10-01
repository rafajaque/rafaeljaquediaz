# Rafael Andrés Jaque Díaz — Portafolio

Portafolio profesional de Rafael Jaque, Ingeniero Informático y Gestor de Proyectos Tecnológicos. El sitio presenta su experiencia en análisis de datos y procesos, soporte TI, seguridad electrónica e integración de sistemas. Todo el contenido está basado en su CV.

El diseño conserva la identidad visual azul del proyecto original, ahora aplicada a una presentación profesional centrada en tecnología, datos y gestión. La insignia oficial **Google Data-Driven Decision Making** mantiene sus colores originales.

## Páginas

- **Inicio** (`/`) — presentación profesional, áreas de enfoque, habilidades técnicas, experiencia reciente e insignia de Google.
- **Experiencia** (`/projects`) — trayectoria laboral entre 2017 y 2026, con cargos, empresas y periodos.
- **Certificaciones** (`/gallery`) — 34 certificaciones y 229,5 horas de formación, con fecha, PDF y enlace público de Coursera cuando está disponible.
- **Sobre mí** (`/about`) — perfil profesional, formación académica, habilidades técnicas e inglés avanzado.
- **Contacto** (`/contact`) — correo, teléfono, GitHub, LinkedIn y formulario de contacto mediante Netlify Forms.

Las rutas `/projects` y `/gallery` se conservan para mantener compatibles los enlaces existentes, aunque ahora representan experiencia y certificaciones.

## Tecnologías

- [TanStack Start](https://tanstack.com/start) y React 19 con rutas basadas en archivos.
- TypeScript y Tailwind CSS 4 con una paleta azul personalizada en `src/styles.css`.
- [Lucide](https://lucide.dev/) para iconos.
- **Netlify Image CDN** para entregar la insignia en WebP y tamaños adaptables, con el archivo local como respaldo.
- **Netlify Forms** para recibir los mensajes enviados desde el formulario de contacto.

## Ejecutar localmente

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Para comprobar la versión de producción:

```bash
pnpm build
```

El formulario y Netlify Image CDN funcionan de forma completa con `netlify dev` o en una vista previa de despliegue. Los enlaces directos de correo y teléfono funcionan de manera independiente.

## Editar el contenido

- Identidad, datos de contacto, experiencia, habilidades, formación y certificaciones: `src/data/site.ts`.
- Insignia de Google: `public/img/google-data-driven-decision-making.png`.
- PDFs de respaldo: `public/certificados/`.
- Contenido y estructura de las páginas: `src/routes/`.
- Navegación y pie de página: `src/components/SiteHeader.tsx` y `src/components/SiteFooter.tsx`.
- Formulario estático que Netlify utiliza para registrar los campos: `public/contact.html`.

Los campos de `public/contact.html` deben coincidir con los del formulario React en `src/routes/contact.tsx`. Las certificaciones reproducen los nombres, instituciones y horas del archivo `Certificados.xlsx`. Los certificados de Coursera enlazan a su verificación pública; los demás muestran el PDF y su número de serie, sin atribuirles una verificación externa no disponible.

