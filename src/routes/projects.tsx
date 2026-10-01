import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { PageIntro } from '@/components/PageIntro'
import { ProjectRow } from '@/components/ProjectRow'
import { site } from '@/data/site'

export const Route = createFileRoute('/projects')({
  head: () => ({ meta: [{ title: `Work — ${site.name}` }] }),
  component: Projects,
})

function Projects() {
  const projects = [...allProjects].sort((a, b) => a.order - b.order)

  return (
    <>
      <PageIntro n="01" eyebrow="Selected work, 2024 — 2026" title={<>The <em className="text-azul">work</em></>}>
        Books, rooms, brands and one app. Different formats, same obsession: how much feeling a single colour
        can hold.
      </PageIntro>

      <section className="mx-auto max-w-7xl space-y-36 px-6 pt-20 pb-32">
        {projects.map((p, i) => (
          <ProjectRow key={p._meta.path} project={p} index={i} />
        ))}
      </section>
    </>
  )
}
