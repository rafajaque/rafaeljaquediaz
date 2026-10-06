/** Public profile transcribed from Rafael's CV. */
export const site = {
  name: 'Rafael Andrés Jaque Díaz',
  shortName: 'Rafael Jaque',
  role: 'Ingeniero Informático · Gestor de Proyectos Tecnológicos',
  location: 'Chile',
  email: 'rafajaqued@gmail.com',
  phone: '+56 9 7495 8527',
  phoneHref: 'tel:+56974958527',
  description: 'Ingeniero Informático y Gestor de Proyectos Tecnológicos enfocado en integración de sistemas, seguridad integral y decisiones basadas en datos.',
  profile: 'Soy Gestor de Proyectos Tecnológicos e Ingeniero Informático, enfocado en crear valor a través de la integración de sistemas y la seguridad integral. Analizo problemas complejos desde una perspectiva multidisciplinaria para implementar soluciones que incrementen la productividad organizacional. Mi enfoque combina gestión estratégica, trabajo ágil y decisiones basadas en datos.',
}
export const socials = [
  { label: 'GitHub', handle: '@rafajaque', href: 'https://github.com/rafajaque' },
  { label: 'LinkedIn', handle: 'Rafael Jaque Díaz', href: 'https://www.linkedin.com/in/rafael-andrés-jaque-díaz/' },
]
export const experience = [
  {
    role: 'Analista de selectores ópticos',
    company: 'Minuto Verde',
    period: 'Ene. 2026 – jul. 2026',
    duration: '7 meses',
    description: 'Análisis de información operativa en el área de selectores ópticos mediante el uso de sistemas ERP y scripts en Python. Envío de datos de análisis en tiempo real a un asistente de inteligencia artificial para apoyar la interpretación de la información y el seguimiento de los procesos.',
    areas: ['ERP', 'Python', 'Análisis en tiempo real', 'Asistentes de IA'],
    employment: 'Jornada completa',
    location: 'San Fernando, Chile',
    modality: 'Presencial',
  },
  {
    role: 'Analista de datos',
    company: 'Ranco Cherries',
    period: 'May. 2025 – ene. 2026',
    duration: '9 meses',
    description: 'Gestión y análisis de información operativa mediante sistemas ERP, plataformas en la nube, Excel y herramientas de inteligencia de negocios (BI). Organización, procesamiento y visualización de datos para apoyar el seguimiento de procesos y la elaboración de información para la toma de decisiones.',
    areas: ['ERP', 'Plataformas en la nube', 'Excel', 'Inteligencia de negocios (BI)'],
    employment: 'Jornada completa',
    location: 'Chimbarongo, Chile',
    modality: 'Presencial',
  },
  {
    role: 'Programador informático',
    company: 'Municipalidad de Placilla',
    period: 'Feb. 2024 – mar. 2025',
    duration: '1 año y 2 meses',
    description: 'Desarrollo de páginas web y soporte informático para las necesidades del municipio. Diagnóstico y reparación de computadores, configuración de equipos y sistemas, y administración de bases de datos, combinando tareas de desarrollo con la atención de requerimientos técnicos.',
    areas: ['Desarrollo web', 'Administración de bases de datos', 'Reparación de computadores', 'Configuración de sistemas'],
    employment: 'Jornada completa',
    location: 'Chile',
    modality: 'Híbrido',
  },
  {
    role: 'Técnico',
    company: 'ISEG Chile',
    period: 'Ene. 2020 – ene. 2023',
    duration: '3 años y 1 mes',
    description: 'Monitoreo de sistemas de videovigilancia y soporte técnico de cámaras de seguridad. Diagnóstico y reparación de equipos, junto con la implementación y configuración de redes para su conectividad y funcionamiento.',
    areas: ['CCTV', 'Videovigilancia', 'Reparación de cámaras', 'Implementación y configuración de redes'],
    employment: 'Jornada completa',
    location: 'San Fernando, Chile',
    modality: 'Híbrido',
  },
  {
    role: 'Coordinador administrativo',
    company: 'Universidad Finis Terrae',
    period: 'Mar. 2018 – jun. 2021',
    duration: '3 años y 4 meses',
    description: 'Apoyo a la gestión administrativa y a las actividades de difusión de la oferta académica. Realización de charlas y participación en ferias estudiantiles, junto con labores de oficina y organización de información en Excel para respaldar el trabajo del área de admisión.',
    areas: ['Excel', 'Gestión administrativa', 'Charlas y ferias estudiantiles', 'Difusión académica'],
    employment: 'Jornada parcial',
    location: 'Santiago, Chile',
    modality: 'Híbrido',
  },
]
export const skills = [
  { title: 'Programación', items: ['Java', 'Python', 'Kotlin', 'SQL', 'JavaScript'] },
  { title: 'Desarrollo y herramientas', items: ['Android Studio', 'Visual Studio Code', 'Firebase', 'GitHub', 'Manejo de ERP'] },
  { title: 'Sistemas y plataformas', items: ['Windows', 'Google Console', 'Microsoft Office', 'Power BI'] },
  { title: 'Metodologías y prácticas', items: ['Control de versiones', 'Prototipado', 'Trabajo ágil', 'Análisis de requerimientos'] },
]
export const education = [
  { title: 'Ingeniería en Informática', detail: 'Mención Desarrollo de Sistemas' },
  { title: 'Programador Analista', detail: '2024 · Egresado con Excelencia Académica' },
]

export type GitHubProject = {
  id: string
  name: string
  category: string
  description: string
  problem: string
  approach: string
  status: string
  href: string
  language: string
  technologies: string[]
  highlights: { value: string; label: string }[]
  visual: 'data' | 'device' | 'profile' | 'portfolio' | 'game'
  caseStudyHref?: string
}

export const githubProjects: GitHubProject[] = [
  {
    id: 'investigacion-colchagua',
    name: 'Investigación Colchagua',
    category: 'Business Intelligence · Datos',
    description: 'Sistema de apoyo a decisiones sobre resiliencia agrícola: ETL reproducible, datamart, análisis de sensibilidad, clustering, forecast y un dashboard de siete páginas en Power BI.',
    problem: 'Priorizar las comunas, sectores y grupos de PYMEs que requieren diagnóstico frente a shocks agrícolas, considerando clima, mercado y dependencia productiva.',
    approach: 'Integré fuentes productivas, empresariales, climáticas y de mercado en un proceso ETL reproducible, un datamart consultable y un dashboard de Power BI con sensibilidad y forecast.',
    status: 'Caso documentado con fuentes, verificaciones, notebook ejecutado, Power BI e informe técnico.',
    href: 'https://github.com/rafajaque/Investigaci-n-Colchagua-',
    language: 'Power Query',
    technologies: ['Python', 'Jupyter Notebook', 'Power BI', 'DAX', 'Power Query', 'SQLite'],
    highlights: [{ value: '33.883 ha', label: 'Superficie analizada' }, { value: '22', label: 'Medidas DAX verificadas' }],
    visual: 'data',
    caseStudyHref: '#caso-colchagua',
  },
  {
    id: 'zeon-arduino',
    name: 'Zeon-Arduino',
    category: 'Hardware · Código abierto',
    description: 'Adaptación de Tamaguino, de Alojz Jakob, como una mascota virtual con apariencia de dragón para Arduino y distintas placas y pantallas. En desarrollo, pendiente de pruebas en hardware.',
    problem: 'Adaptar una mascota virtual existente a una identidad de dragón y organizar variantes para diferentes combinaciones de placa y pantalla.',
    approach: 'Preparé variantes del código fuente para Arduino, SSD1325, SH1106 y WiFi Kit 32, conservando los créditos y la licencia del proyecto original.',
    status: 'En desarrollo; el repositorio indica que todavía no se ha compilado ni probado en una placa física.',
    href: 'https://github.com/rafajaque/Zeon-Arduino',
    language: 'Arduino',
    technologies: ['Arduino IDE', 'SSD1325', 'SH1106', 'WiFi Kit 32'],
    highlights: [{ value: 'Arduino', label: 'Entorno principal' }, { value: 'En desarrollo', label: 'Estado actual' }],
    visual: 'device',
  },
  {
    id: 'perfil-github',
    name: 'rafajaque',
    category: 'Marca personal · GitHub',
    description: 'Perfil profesional de GitHub con mi presentación, experiencia, formación y tecnologías, acompañado de recursos visuales para temas claro y oscuro.',
    problem: 'Presentar la trayectoria, el stack y las vías de contacto en el espacio limitado de un perfil de GitHub.',
    approach: 'Organicé la información en un README visual con banners adaptables al tema, tablas de experiencia y accesos directos a contacto y repositorios.',
    status: 'Perfil público activo y mantenido como presentación profesional dentro de GitHub.',
    href: 'https://github.com/rafajaque/rafajaque',
    language: 'Markdown',
    technologies: ['Markdown', 'HTML', 'SVG'],
    highlights: [{ value: '2 temas', label: 'Claro y oscuro' }, { value: 'README', label: 'Formato principal' }],
    visual: 'profile',
  },
  {
    id: 'portafolio',
    name: 'rafaeljaquediaz',
    category: 'Desarrollo web · Portafolio',
    description: 'Portafolio profesional que reúne mi experiencia, formación, certificaciones verificables y vías de contacto.',
    problem: 'Reunir experiencia, proyectos, formación y credenciales en una presencia digital clara, accesible y fácil de revisar.',
    approach: 'Construí una aplicación con React y TanStack Start, contenido estructurado, formularios de Netlify, optimización de imágenes y validación continua en GitHub Actions.',
    status: 'Publicado en Netlify con despliegue automático desde la rama principal.',
    href: 'https://github.com/rafajaque/rafaeljaquediaz',
    language: 'TypeScript',
    technologies: ['React 19', 'TanStack Start', 'Tailwind CSS 4', 'Netlify'],
    highlights: [{ value: '34', label: 'Certificaciones publicadas' }, { value: '229,5 h', label: 'Formación registrada' }],
    visual: 'portfolio',
  },
  {
    id: 'juego-unity',
    name: 'Juego',
    category: 'Videojuego · Experimentación',
    description: 'Proyecto de videojuego desarrollado con Unity, publicado con una compilación ejecutable para Windows.',
    problem: 'Desarrollar y empaquetar un proyecto de videojuego de escritorio utilizando el flujo de trabajo de Unity.',
    approach: 'El repositorio conserva el proyecto realizado con Unity y una compilación ejecutable preparada para Windows.',
    status: 'Prototipo público; el repositorio no documenta todavía sus mecánicas o resultados.',
    href: 'https://github.com/rafajaque/Juego',
    language: 'Unity',
    technologies: ['Unity', 'Windows', 'Visual Studio Code'],
    highlights: [{ value: 'Unity', label: 'Motor utilizado' }, { value: 'Windows', label: 'Compilación disponible' }],
    visual: 'game',
  },
]
export const certifications = [
  { title: 'Develop Presentations and Slideshows', issuer: 'Google', hours: 3, date: '2026-08-31', pdf: '/certificados/develop-presentations-slideshows.pdf', verificationUrl: 'https://coursera.org/verify/BDCEG3S4Z32D' },
  { title: 'Fast-Track Data Analysis and Presentations', issuer: 'Google', hours: 1, date: '2026-08-31', pdf: '/certificados/fast-track-data-analysis-presentations.pdf', verificationUrl: 'https://coursera.org/verify/OV2XOWLOO986' },
  { title: 'Foundations of Cybersecurity', issuer: 'Google', hours: 9, date: '2026-08-31', pdf: '/certificados/foundations-cybersecurity.pdf', verificationUrl: 'https://coursera.org/verify/006DEEJU2DE9' },
  { title: 'Play It Safe: Manage Security Risks', issuer: 'Google', hours: 9, date: '2026-08-31', pdf: '/certificados/play-it-safe-manage-security-risks.pdf', verificationUrl: 'https://coursera.org/verify/DG9F9OG2Z48D' },
  { title: 'Connect and Protect: Networks and Network Security', issuer: 'Google', hours: 11, date: '2026-08-31', pdf: '/certificados/connect-protect-networks-security.pdf', verificationUrl: 'https://coursera.org/verify/BIF4QSD6UMNA' },
  { title: 'Visualize Data', issuer: 'Google', hours: 4, date: '2026-08-30', pdf: '/certificados/visualize-data.pdf', verificationUrl: 'https://coursera.org/verify/1A0OPKNJQH6Y' },
  { title: 'The Importance of Integrity', issuer: 'Google', hours: 2, date: '2026-08-30', pdf: '/certificados/importance-integrity.pdf', verificationUrl: 'https://coursera.org/verify/0AXH25A3989E' },
  { title: 'Data Responsibility', issuer: 'Google', hours: 3, date: '2026-08-30', pdf: '/certificados/data-responsibility.pdf', verificationUrl: 'https://coursera.org/verify/QZ4EXKMJRIUD' },
  { title: 'Always Remember the Stakeholder', issuer: 'Google', hours: 2, date: '2026-08-30', pdf: '/certificados/always-remember-the-stakeholder.pdf', verificationUrl: 'https://coursera.org/verify/JUZLRIPLU5GC' },
  { title: 'Introducción a la Ciencia de Datos', issuer: 'IE University', hours: 6, date: '2026-08-29', pdf: '/certificados/introduccion-ciencia-datos.pdf', serial: 'OA-2026-0829003129836' },
  { title: 'Publicidad digital: datos, IA y legalidad', issuer: 'Santander | Open Academy', hours: 8, date: '2026-08-29', pdf: '/certificados/publicidad-digital-datos-ia-legalidad.pdf', serial: 'OA-2026-0829003129811' },
  { title: 'Python', issuer: 'Santander | Open Academy', hours: 8, date: '2026-08-29', pdf: '/certificados/python.pdf', serial: 'OA-2026-0829003129137' },
  { title: 'Mentalidad de alto rendimiento: foco, confianza y éxito profesional', issuer: 'Santander | Open Academy', hours: 2, date: '2026-08-29', pdf: '/certificados/mentalidad-alto-rendimiento.pdf', serial: 'OA-2026-0829003129370' },
  { title: 'Liderazgo', issuer: 'Santander | Open Academy', hours: 8, date: '2026-08-29', pdf: '/certificados/liderazgo.pdf', serial: 'OA-2026-0829003129549' },
  { title: 'Pensamiento estratégico y mentalidad estratégica', issuer: 'Santander | Open Academy', hours: 8, date: '2026-08-29', pdf: '/certificados/pensamiento-estrategico.pdf', serial: 'OA-2026-0829003129611' },
  { title: 'Comunicación Efectiva', issuer: 'Santander | Open Academy', hours: 8, date: '2026-08-29', pdf: '/certificados/comunicacion-efectiva.pdf', serial: 'OA-2026-0829003129684' },
  { title: 'Hablar en público con técnicas teatrales', issuer: 'Escuela Universitaria de Artes de Madrid', hours: 8, date: '2026-08-29', pdf: '/certificados/hablar-publico-tecnicas-teatrales.pdf', serial: 'OA-2026-0829003129757' },
  { title: 'Ask Effective Questions', issuer: 'Google', hours: 2, date: '2026-08-29', pdf: '/certificados/ask-effective-questions.pdf', verificationUrl: 'https://coursera.org/verify/1375DS654JS4' },
  { title: 'Make Data-Driven Decisions', issuer: 'Google', hours: 2, date: '2026-08-29', pdf: '/certificados/make-data-driven-decisions.pdf', verificationUrl: 'https://coursera.org/verify/5MH0U8HNY25A' },
  { title: 'Bienestar y estrés laboral', issuer: 'Santander | Open Academy', hours: 8, date: '2026-08-29', pdf: '/certificados/bienestar-estres-laboral.pdf', serial: 'OA-2026-0829003129166' },
  { title: 'Burnout laboral: cómo prevenir el agotamiento y recuperar tu equilibrio', issuer: 'Santander | Open Academy', hours: 8, date: '2026-08-29', pdf: '/certificados/burnout-laboral.pdf', serial: 'OA-2026-0829003129241' },
  { title: 'E-commerce for SMEs: sell more online', issuer: 'IE University', hours: 6, date: '2026-08-29', pdf: '/certificados/ecommerce-smes.pdf', serial: 'OA-2026-0829003129296' },
  { title: 'Mindfulness & Worklife Balance', issuer: 'Santander | Open Academy', hours: 8, date: '2026-08-29', pdf: '/certificados/mindfulness-worklife-balance.pdf', serial: 'OA-2026-0829003129198' },
  { title: 'Power BI', issuer: 'Santander | Open Academy', hours: 8, date: '2026-08-29', pdf: '/certificados/power-bi.pdf', serial: 'OA-2026-0829003126941' },
  { title: 'Customer centricity y experiencia de cliente: estrategia y transformación digital para líderes', issuer: 'IE University', hours: 8, date: '2026-08-28', pdf: '/certificados/customer-centricity-experiencia-cliente.pdf', serial: 'OA-2026-0828003125489' },
  { title: 'Excel – de intermedio a avanzado', issuer: 'Santander | Open Academy', hours: 8, date: '2026-08-28', pdf: '/certificados/excel-intermedio-avanzado.pdf', serial: 'OA-2026-0828003126811' },
  { title: 'Power BI Intermedio: Análisis y modelado de datos', issuer: 'Santander | Open Academy', hours: 8, date: '2026-08-29', pdf: '/certificados/power-bi-intermedio.pdf', serial: 'OA-2026-0829003127054' },
  { title: 'Fundamentos de ciberseguridad', issuer: 'IBM', hours: 1.5, date: '2026-08-29', pdf: '/certificados/fundamentos-ciberseguridad.pdf', serial: 'OA-2026-0829003127102' },
  { title: 'Introducing Data Analytics and Analytical Thinking', issuer: 'Google', hours: 3, date: '2026-08-29', pdf: '/certificados/introducing-data-analytics-thinking.pdf', verificationUrl: 'https://coursera.org/verify/U7MLDH7UE8ZO' },
  { title: 'Foundations: Data, Data, Everywhere', issuer: 'Google', hours: 12, date: '2026-08-26', pdf: '/certificados/foundations-data-everywhere.pdf', verificationUrl: 'https://coursera.org/verify/PR4642Q7I7CU' },
  { title: 'Foundations of Data Science', issuer: 'Google', hours: 19, date: '2026-08-27', pdf: '/certificados/foundations-data-science.pdf', verificationUrl: 'https://coursera.org/verify/6454VHD5M6HR' },
  { title: 'Foundations of Project Management', issuer: 'Google', hours: 12, date: '2026-08-28', pdf: '/certificados/foundations-project-management.pdf', verificationUrl: 'https://coursera.org/verify/GOZPCM6QVZSR' },
  { title: 'Storytelling en el Marketing Digital', issuer: 'The University of Chicago', hours: 8, date: '2026-08-28', pdf: '/certificados/storytelling-marketing-digital.pdf', serial: 'OA-2026-0828003125449' },
  { title: 'Excel', issuer: 'Santander | Open Academy', hours: 8, date: '2026-08-28', pdf: '/certificados/excel.pdf', serial: 'OA-2026-0828003125257' },
]

export const certificationHours = 229.5
export const badge = {
  src: '/img/google-data-driven-decision-making.png',
  alt: 'Insignia Google y Coursera: Data-Driven Decision Making, Certificate of Completion',
  width: 800,
  height: 800,
}
