import { createFileRoute } from '@tanstack/react-router'
import { PageIntro } from '@/components/PageIntro'
import { experience, site } from '@/data/site'

export const Route = createFileRoute('/projects')({
  head: () => ({ meta: [{ title: `Experiencia — ${site.name}` }] }),
  component: Experience,
})
function Experience() {
  return <>
    <PageIntro eyebrow="Trayectoria · 2017–2026" title={<>Mi <em className="text-azul">experiencia</em></>}>Mi recorrido profesional abarca tecnología industrial, análisis de datos y procesos, soporte informático, seguridad electrónica y atención académica.</PageIntro>
    <section className="mx-auto max-w-7xl px-6 py-20" aria-label="Experiencia profesional">
      <ol>{experience.map((item) => <li key={item.company} className="grid gap-5 border-t border-ink/20 py-10 md:grid-cols-[160px_1fr]">
        <div><p className="text-lg text-ink/65">{item.period}</p></div>
        <div><p className="label text-azul">{item.company}</p><h2 className="mt-4 font-display text-4xl md:text-5xl">{item.role}</h2></div>
      </li>)}</ol>
    </section>
  </>
}

