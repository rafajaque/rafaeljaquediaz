import { createFileRoute } from '@tanstack/react-router'
import { PageIntro } from '@/components/PageIntro'
import { experience, site } from '@/data/site'

export const Route = createFileRoute('/projects')({
  head: () => ({ meta: [{ title: `Experiencia — ${site.name}` }] }),
  component: Experience,
})
function Experience() {
  return <>
    <PageIntro eyebrow="Trayectoria · 2018–2026" title={<>Mi <em className="text-azul">experiencia</em></>}>Mi recorrido profesional abarca tecnología industrial, análisis de datos y procesos, soporte informático, seguridad electrónica y atención académica.</PageIntro>
    <section className="mx-auto max-w-7xl px-6 py-20" aria-label="Experiencia profesional">
      <ol>{experience.map((item) => <li key={item.company} className="grid gap-5 border-t border-ink/20 py-10 md:grid-cols-[240px_1fr]">
        <div><p className="text-lg text-ink/65">{item.period}</p>{item.duration && <p className="mt-2 text-sm text-ink/55">{item.duration}</p>}</div>
        <div>
          <p className="label text-azul">{item.company}</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">{item.role}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">{item.employment} · {item.location} · {item.modality}</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">{item.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tecnologías y competencias en ${item.company}`}>
            {item.areas.map(area => <li key={area} className="rounded-full bg-celeste-soft/65 px-3 py-1.5 text-sm text-ink/75">{area}</li>)}
          </ul>
        </div>
      </li>)}</ol>
    </section>
  </>
}

