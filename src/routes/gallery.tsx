import { createFileRoute } from '@tanstack/react-router'
import { PageIntro } from '@/components/PageIntro'
import { CertificationBadge } from '@/components/CertificationBadge'
import { certifications, site } from '@/data/site'

export const Route = createFileRoute('/gallery')({
  head: () => ({ meta: [{ title: `Certificaciones — ${site.name}` }] }),
  component: Certifications,
})
function Certifications() {
  return <>
    <PageIntro n="02" eyebrow="Formación continua" title={<>Mis <em className="text-azul">certificaciones</em></>}>Formación en datos, gestión de proyectos, herramientas de análisis, marketing y experiencia del cliente.</PageIntro>
    <section className="mx-auto max-w-7xl px-6 py-16"><CertificationBadge />
      <h2 className="mt-16 font-display text-4xl">Cursos y certificaciones · 2026</h2>
      <ul className="mt-8 grid gap-x-12 md:grid-cols-2">{certifications.map(item => <li key={item.title} className="border-t border-ink/15 py-7"><p className="label text-azul">{item.issuer} · {item.year}</p><h3 className="mt-3 text-xl">{item.title}</h3></li>)}</ul>
    </section>
  </>
}
