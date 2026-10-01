# Rafael Andrés Jaque Díaz

Portafolio profesional en español de Rafael Jaque, Ingeniero Informático y Gestor de Proyectos Tecnológicos. El contenido está basado en su CV.

## Páginas

- Inicio: presentación, áreas de enfoque, habilidades, experiencia reciente e insignia de Google.
- Experiencia (/projects): cargos y empresas de 2017 a 2026.
- Certificaciones (/gallery): cursos del CV e insignia Google Data-Driven Decision Making.
- Sobre mí (/about): perfil, formación académica, habilidades e idiomas.
- Contacto (/contact): correo, teléfono, perfiles profesionales y formulario de Netlify.

Se conservan las rutas originales para mantener los enlaces existentes. No se atribuyen proyectos, fotografías, logros cuantitativos ni instituciones educativas que no figuren en el CV.

## Desarrollo

TanStack Start, React 19, TypeScript, Tailwind CSS 4 y Netlify.

    pnpm install --frozen-lockfile
    pnpm dev
    pnpm build

El formulario requiere Netlify Forms habilitado en el despliegue. Los enlaces de correo y teléfono funcionan de forma independiente. La insignia utiliza Picture y Netlify Image CDN en producción, con el archivo local como respaldo si el CDN no está disponible.

## Editar el contenido

- Perfil, experiencia, habilidades, formación y certificaciones: src/data/site.ts.
- Insignia original: public/img/google-data-driven-decision-making.png.
- Presentación y secciones: src/routes/.
- Formulario estático de registro para Netlify: public/contact.html. Sus campos deben coincidir con los del formulario React.

Las certificaciones conservan los títulos del CV; la insignia adjunta se presenta por separado, sin inventar fecha ni enlace de validación.
