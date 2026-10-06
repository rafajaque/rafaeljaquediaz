import { createFileRoute } from '@tanstack/react-router'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
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
      <div className="mb-14 flex flex-wrap items-end justify-between gap-5 border-b border-ink/15 pb-6">
        <div><p className="label text-azul">Recorrido profesional</p><p className="mt-3 max-w-2xl text-lg text-ink/65">Desplázate para recorrer cada etapa y descubrir las herramientas aplicadas en distintos entornos.</p></div>
        <p className="rounded-full border border-ink/15 bg-foam px-4 py-2 text-sm text-ink/65">{experience.length} experiencias · 2018–2026</p>
      </div>
      <ExperienceTimeline />
    </section>
  </>
}
