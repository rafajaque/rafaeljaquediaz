import { ArrowUpRight } from 'lucide-react'
import type { allProjects } from 'content-collections'
import { Picture } from '@/components/Picture'
import { cn } from '@/lib/utils'

type Project = (typeof allProjects)[number]

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1
  return (
    <article className="group grid items-center gap-8 md:grid-cols-12 md:gap-12">
      <div className={cn('relative md:col-span-7', flip && 'md:order-2')}>
        <div className="overflow-hidden rounded-[2px] bg-celeste-soft">
          <Picture
            src={project.image}
            alt={`${project.title} — ${project.description}`}
            width={1264}
            height={848}
            ratio={3 / 2}
            sizes="(min-width: 768px) 58vw, 100vw"
            className="transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.7,0.1,1)] group-hover:scale-[1.04]"
          />
        </div>
        <span className="display absolute -top-8 left-4 text-7xl text-azul md:-top-12 md:text-9xl">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className={cn('md:col-span-5', flip && 'md:order-1')}>
        <div className="label flex flex-wrap gap-x-4 gap-y-1 text-azul">
          <span>{project.year}</span>
          <span>{project.role}</span>
        </div>
        <h3 className="display mt-4 text-6xl md:text-7xl">{project.title}</h3>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/75">{project.description}</p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">{project.content}</p>
        <dl className="mt-6 border-t border-ink/15 pt-4 text-sm">
          <dt className="label text-ink/50">Client</dt>
          <dd className="mt-1">{project.client}</dd>
        </dl>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-ink/15 px-3 py-1 text-xs">
              {tag}
            </span>
          ))}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1 rounded-full bg-azul px-4 py-2 text-sm font-medium text-foam transition-colors hover:bg-ink"
            >
              View project <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
