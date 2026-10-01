import { createFileRoute } from '@tanstack/react-router'
import { PageIntro } from '@/components/PageIntro'
import { CertificationBadge } from '@/components/CertificationBadge'
import { certificationHours, certifications, site } from '@/data/site'

export const Route = createFileRoute('/gallery')({
  head: () => ({ meta: [{ title: `Certificaciones — ${site.name}` }] }),
  component: Certifications,
})
function Certifications() {
  const certificationsByIssuer = Object.entries(
    certifications.reduce<Record<string, typeof certifications>>((groups, certification) => {
      const current = groups[certification.issuer] ?? []
      groups[certification.issuer] = [...current, certification]
      return groups
    }, {}),
  )

  return <>
    <PageIntro n="02" eyebrow="Formación continua" title={<>Mis <em className="text-azul">certificaciones</em></>}>Formación en análisis de datos, ciberseguridad, gestión de proyectos, herramientas digitales, comunicación y liderazgo.</PageIntro>
    <section className="mx-auto max-w-7xl px-6 py-16"><CertificationBadge />
      <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-3">
        <div className="bg-foam p-6"><dt className="label text-azul">Certificaciones</dt><dd className="mt-3 font-display text-5xl">{certifications.length}</dd></div>
        <div className="bg-foam p-6"><dt className="label text-azul">Horas de formación</dt><dd className="mt-3 font-display text-5xl">{certificationHours.toLocaleString('es-CL')}</dd></div>
        <div className="bg-foam p-6"><dt className="label text-azul">Instituciones</dt><dd className="mt-3 font-display text-5xl">{certificationsByIssuer.length}</dd></div>
      </dl>

      <div className="mt-20 space-y-20">
        {certificationsByIssuer.map(([issuer, items]) => (
          <section key={issuer} aria-labelledby={`issuer-${issuer.replace(/\W+/g, '-').toLowerCase()}`}>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/25 pb-5">
              <h2 id={`issuer-${issuer.replace(/\W+/g, '-').toLowerCase()}`} className="font-display text-4xl md:text-5xl">{issuer}</h2>
              <p className="label text-azul">{items.length} {items.length === 1 ? 'certificación' : 'certificaciones'}</p>
            </div>
            <ul className="grid gap-x-12 md:grid-cols-2">
              {items.map(item => <li key={item.title} className="flex justify-between gap-6 border-b border-ink/15 py-6">
                <h3 className="text-lg leading-snug">{item.title}</h3>
                <span className="label shrink-0 pt-1 text-azul">{item.hours.toLocaleString('es-CL')} {item.hours === 1 ? 'hora' : 'horas'}</span>
              </li>)}
            </ul>
          </section>
        ))}
      </div>
    </section>
  </>
}

