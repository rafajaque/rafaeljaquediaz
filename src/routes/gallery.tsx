import { createFileRoute } from '@tanstack/react-router'
import { BadgeCheck, ExternalLink, FileText } from 'lucide-react'
import { PageIntro } from '@/components/PageIntro'
import { CertificationBadge } from '@/components/CertificationBadge'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { Reveal } from '@/components/Reveal'
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
    <PageIntro eyebrow="Formación continua" title={<>Mis <em className="text-azul">certificaciones</em></>}>Formación en análisis de datos, ciberseguridad, gestión de proyectos, herramientas digitales, comunicación y liderazgo.</PageIntro>
    <section className="mx-auto max-w-7xl px-6 py-16"><CertificationBadge />
      <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-3">
        <Reveal className="bg-foam p-6"><dt className="label text-azul">Certificaciones</dt><dd className="mt-3 font-display text-5xl"><AnimatedCounter value={certifications.length} /></dd></Reveal>
        <Reveal delay={100} className="bg-foam p-6"><dt className="label text-azul">Horas de formación</dt><dd className="mt-3 font-display text-5xl"><AnimatedCounter value={certificationHours} decimals={certificationHours % 1 ? 1 : 0} /></dd></Reveal>
        <Reveal delay={200} className="bg-foam p-6"><dt className="label text-azul">Instituciones</dt><dd className="mt-3 font-display text-5xl"><AnimatedCounter value={certificationsByIssuer.length} /></dd></Reveal>
      </dl>

      <div className="mt-20 space-y-20">
        {certificationsByIssuer.map(([issuer, items]) => (
          <Reveal key={issuer}>
          <section aria-labelledby={`issuer-${issuer.replace(/\W+/g, '-').toLowerCase()}`}>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/25 pb-5">
              <h2 id={`issuer-${issuer.replace(/\W+/g, '-').toLowerCase()}`} className="font-display text-4xl md:text-5xl">{issuer}</h2>
              <p className="label text-azul">{items.length} {items.length === 1 ? 'certificación' : 'certificaciones'}</p>
            </div>
            <ul className="grid gap-x-12 md:grid-cols-2">
              {items.map(item => <li key={item.title} className="border-b border-ink/15 py-6">
                <div className="flex justify-between gap-6">
                  <h3 className="text-lg leading-snug">{item.title}</h3>
                  <span className="label shrink-0 pt-1 text-azul">{item.hours.toLocaleString('es-CL')} {item.hours === 1 ? 'hora' : 'horas'}</span>
                </div>
                <p className="mt-2 text-sm text-ink/55">{new Intl.DateTimeFormat('es-CL', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(item.date))}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a href={item.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-sm hover:border-azul hover:text-azul"><FileText size={15} /> Ver PDF</a>
                  {'verificationUrl' in item && <a href={item.verificationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-azul px-4 py-2 text-sm text-foam hover:bg-ink"><BadgeCheck size={15} /> Verificar en Coursera <ExternalLink size={14} /></a>}
                  {'serial' in item && <span className="label text-ink/50">Serie {item.serial}</span>}
                </div>
              </li>)}
            </ul>
          </section>
          </Reveal>
        ))}
      </div>
    </section>
  </>
}

