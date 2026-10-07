import { useState } from 'react'
import { ArrowDown, ArrowUpRight, BarChart3, Cpu, Gamepad2, Github, LayoutDashboard, UserRound } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { githubProjects } from '@/data/site'

const visualConfig = {
  data: { icon: BarChart3, bars: [42, 76, 58, 92, 68], label: 'Modelo de priorización' },
  device: { icon: Cpu, bars: [30, 52, 84, 64, 40], label: 'Mascota virtual Arduino' },
  profile: { icon: UserRound, bars: [68, 45, 78, 58, 88], label: 'Perfil adaptable' },
  portfolio: { icon: LayoutDashboard, bars: [82, 54, 70, 94, 62], label: 'Experiencia digital' },
  game: { icon: Gamepad2, bars: [38, 72, 55, 86, 48], label: 'Proyecto Unity' },
} as const

type Project = (typeof githubProjects)[number]

function ProjectVisual({ project }: { project: Project }) {
  const config = visualConfig[project.visual]
  const Icon = config.icon

  return (
    <div className={`project-visual project-visual--${project.visual}`} aria-hidden="true">
      <div className="project-visual-grid" />
      <div className="relative z-10 flex items-center justify-between">
        <span className="rounded-full border border-foam/20 bg-ink/30 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-foam/80">{project.language}</span>
        <Icon size={30} className="text-celeste" />
      </div>
      <div className="relative z-10 mt-auto">
        <div className="flex h-24 items-end gap-2" aria-hidden="true">
          {config.bars.map((height, index) => <span key={index} className="project-visual-bar" style={{ height: `${height}%`, animationDelay: `${index * 80}ms` }} />)}
        </div>
        <p className="mt-4 text-sm font-medium text-foam/75">{config.label}</p>
      </div>
    </div>
  )
}

export function ProjectShowcase() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <ol className="grid items-start gap-6 md:grid-cols-2">
      {githubProjects.map((project, index) => {
        const expanded = expandedProject === project.id
        const detailsId = `project-details-${project.id}`

        return (
          <li key={project.href} className={`transition-[grid-column] duration-500 ${expanded ? 'md:col-span-2' : ''}`}>
            <Reveal delay={(index % 2) * 90} className="h-full">
              <article className={`project-card group overflow-hidden rounded-3xl border border-ink/15 bg-foam ${expanded ? 'is-expanded' : ''}`}>
                <div className="project-preview relative overflow-hidden">
                  <ProjectVisual project={project} />
                  <div className="project-preview-overlay">
                    <div>
                      <p className="label text-celeste">Problema que aborda</p>
                      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-foam">{project.problem}</p>
                    </div>
                  </div>
                </div>

                <div className="p-7 md:p-9">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="label text-azul">{project.category}</p>
                      <h3 className="mt-3 break-words font-display text-4xl md:text-5xl">{project.name}</h3>
                    </div>
                    <Github size={25} className="text-ink/25 transition-colors group-hover:text-azul" aria-hidden="true" />
                  </div>

                  <p className="mt-5 max-w-3xl leading-relaxed text-ink/70">{project.description}</p>

                  <dl className="mt-7 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2">
                    {project.highlights.map(highlight => (
                      <div key={highlight.label} className="bg-paper/85 px-5 py-4">
                        <dt className="text-xs text-ink/65">{highlight.label}</dt>
                        <dd className="mt-1 font-display text-2xl text-azul">{highlight.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setExpandedProject(expanded ? null : project.id)}
                      aria-expanded={expanded}
                      aria-controls={detailsId}
                      className="cta-warm inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
                    >
                      {expanded ? 'Cerrar detalles' : 'Ver el proyecto'}
                      <ArrowDown size={16} className={`transition-transform duration-500 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-medium text-ink/70 transition-colors hover:border-azul hover:text-azul"
                      aria-label={`Abrir ${project.name} en GitHub`}
                    >
                      Repositorio <ArrowUpRight size={16} />
                    </a>
                  </div>

                  <div id={detailsId} className="project-details" role="region" aria-label={`Detalles de ${project.name}`} aria-hidden={!expanded} inert={!expanded}>
                    <div className="project-details-inner">
                      <div className="mt-8 grid gap-6 border-t border-ink/15 pt-8 lg:grid-cols-2">
                        <div>
                          <p className="label text-azul">El desafío</p>
                          <p className="mt-3 leading-relaxed text-ink/70">{project.problem}</p>
                        </div>
                        <div>
                          <p className="label text-azul">Cómo lo abordé</p>
                          <p className="mt-3 leading-relaxed text-ink/70">{project.approach}</p>
                        </div>
                      </div>

                      <div className="mt-7 flex flex-wrap items-center gap-2">
                        {project.technologies.map(technology => <span key={technology} className="rounded-full bg-celeste-soft/65 px-3 py-1.5 text-xs font-medium text-ink/75">{technology}</span>)}
                      </div>

                      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-naranja-soft/55 p-5">
                        <div><span className="label text-azul">Estado</span><p className="mt-1 text-sm text-ink/70">{project.status}</p></div>
                        {project.caseStudyHref && <a href={project.caseStudyHref} className="cta-warm-link inline-flex items-center gap-2 font-medium">Explorar caso interactivo <ArrowUpRight size={16} /></a>}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        )
      })}
    </ol>
  )
}
