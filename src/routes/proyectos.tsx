import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Github } from 'lucide-react'
import { PageIntro } from '@/components/PageIntro'
import { ColchaguaCaseStudy } from '@/components/ColchaguaCaseStudy'
import { ProjectShowcase } from '@/components/ProjectShowcase'
import { site } from '@/data/site'

export const Route = createFileRoute('/proyectos')({
  head: () => ({ meta: [{ title: `Proyectos — ${site.name}` }] }),
  component: Projects,
})

function Projects() {
  return <>
    <PageIntro eyebrow="Código y desarrollo" title={<>Mis <em className="text-azul">proyectos</em></>}>
      Repositorios públicos donde comparto proyectos de desarrollo, experimentación y mi trabajo profesional.
    </PageIntro>

    <div id="caso-colchagua" className="scroll-mt-24">
      <ColchaguaCaseStudy />
    </div>

    <section className="mx-auto max-w-7xl px-6 py-20" aria-label="Repositorios públicos de GitHub">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-ink/20 pb-6">
        <div>
          <p className="label text-azul">GitHub · @rafajaque</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Repositorios públicos</h2>
        </div>
        <a
          href="https://github.com/rafajaque?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-medium transition-colors hover:border-azul hover:text-azul"
        >
          <Github size={17} /> Ver perfil completo <ArrowUpRight size={16} />
        </a>
      </div>

      <ProjectShowcase />
    </section>
  </>
}
