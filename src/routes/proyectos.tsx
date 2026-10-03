import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Github } from 'lucide-react'
import { PageIntro } from '@/components/PageIntro'
import { ColchaguaCaseStudy } from '@/components/ColchaguaCaseStudy'
import { Reveal } from '@/components/Reveal'
import { githubProjects, site } from '@/data/site'

export const Route = createFileRoute('/proyectos')({
  head: () => ({ meta: [{ title: `Proyectos — ${site.name}` }] }),
  component: Projects,
})

function Projects() {
  return <>
    <PageIntro eyebrow="Código y desarrollo" title={<>Mis <em className="text-azul">proyectos</em></>}>
      Repositorios públicos donde comparto proyectos de desarrollo, experimentación y mi trabajo profesional.
    </PageIntro>

    <ColchaguaCaseStudy />

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

      <ol className="grid gap-6 md:grid-cols-2">
        {githubProjects.map((project) => (
          <li key={project.href}>
          <Reveal className="group flex min-h-80 h-full flex-col rounded-2xl border border-ink/15 bg-foam p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-azul/50 hover:shadow-[0_24px_60px_-36px_rgba(8,26,63,0.6)] md:p-9">
            <div className="flex items-start justify-between gap-5">
              <span className="label text-azul">{project.language}</span>
              <Github size={24} className="text-ink/35 transition-colors group-hover:text-azul" aria-hidden="true" />
            </div>
            <h3 className="mt-10 break-words font-display text-4xl md:text-5xl">{project.name}</h3>
            <p className="mt-5 max-w-xl leading-relaxed text-ink/70">{project.description}</p>
            <ul className="mt-7 flex flex-wrap gap-2" aria-label={`Tecnologías de ${project.name}`}>
              {project.technologies.map(technology => <li key={technology} className="rounded-full bg-celeste-soft/65 px-3 py-1.5 text-xs font-medium text-ink/75">{technology}</li>)}
            </ul>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 pt-9 font-medium text-azul"
              aria-label={`Abrir ${project.name} en GitHub`}
            >
              Explorar repositorio <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
          </li>
        ))}
      </ol>
    </section>
  </>
}

