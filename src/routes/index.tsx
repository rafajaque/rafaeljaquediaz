import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { site, skills, experience, certificationHours, certifications, githubProjects } from '@/data/site'
import { CertificationBadge } from '@/components/CertificationBadge'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { InteractiveHero } from '@/components/InteractiveHero'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return <>
    <InteractiveHero />
    <section className="border-y border-ink/10 bg-foam" aria-label="Resumen profesional">
      <div className="mx-auto grid max-w-7xl gap-px bg-ink/10 sm:grid-cols-3">
        {[
          { value: certifications.length, label: 'Certificaciones verificables' },
          { value: certificationHours, decimals: certificationHours % 1 ? 1 : 0, label: 'Horas de formación' },
          { value: githubProjects.length, label: 'Repositorios públicos' },
        ].map((stat, index) => <Reveal key={stat.label} delay={index * 100} className="bg-foam px-6 py-8"><p className="font-display text-5xl text-azul"><AnimatedCounter value={stat.value} decimals={stat.decimals} /></p><p className="mt-2 text-sm text-ink/60">{stat.label}</p></Reveal>)}
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="label text-azul">Herramientas y conocimientos</p>
      <h2 className="display mt-4 text-5xl md:text-7xl">Mi base <em className="text-azul">técnica</em></h2>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{skills.map(group => <div key={group.title} className="border-t border-ink/20 pt-6"><h3 className="text-xl font-medium">{group.title}</h3><ul className="mt-5 space-y-2 text-ink/75">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
    </section>
    <section className="border-y border-ink/10 bg-celeste-soft/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
        <div><p className="label text-azul">Trayectoria profesional</p><h2 className="display mt-4 text-5xl md:text-7xl">Experiencia en<br /><em className="text-azul">distintos entornos.</em></h2><Link to="/projects" className="mt-8 inline-flex items-center gap-2 text-azul">Ver trayectoria completa <ArrowRight size={18} /></Link></div>
        <ol>{experience.slice(0, 3).map(item => <li key={item.company} className="border-b border-ink/15 py-5 first:pt-0"><p className="label text-azul">{item.period} · {item.company}</p><h3 className="mt-3 text-2xl">{item.role}</h3></li>)}</ol>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-24"><CertificationBadge /><Link to="/gallery" className="mt-8 inline-flex items-center gap-2 text-azul">Todas mis certificaciones <ArrowRight size={18} /></Link></section>
    <section className="mx-auto max-w-4xl px-6 pb-24 text-center"><p className="label text-azul">Sobre mí</p><p className="mt-6 text-xl leading-relaxed text-ink/75">{site.profile}</p><Link to="/about" className="label mt-8 inline-block text-azul">Conocer mi perfil →</Link></section>
  </>
}
