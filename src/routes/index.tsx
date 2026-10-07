import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { site, skills, experience, certificationHours, certifications, githubProjects } from '@/data/site'
import { CertificationBadge } from '@/components/CertificationBadge'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { InteractiveHero } from '@/components/InteractiveHero'
import { Reveal } from '@/components/Reveal'
import { SkillBars } from '@/components/SkillBars'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return <>
    <InteractiveHero />
    <section className="relative z-20 px-6 py-8 sm:-mt-10 sm:pb-12 sm:pt-0" aria-label="Resumen profesional">
      <div className="surface-elevated mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl bg-ink/10 sm:grid-cols-3">
        {[
          { value: certifications.length, label: 'Certificaciones verificables' },
          { value: certificationHours, decimals: certificationHours % 1 ? 1 : 0, label: 'Horas de formación' },
          { value: githubProjects.length, label: 'Repositorios públicos' },
        ].map((stat, index) => <Reveal key={stat.label} delay={index * 100} className="metric-card bg-foam/80 px-6 py-8"><p className="font-display text-5xl text-azul"><AnimatedCounter value={stat.value} decimals={stat.decimals} /></p><p className="mt-2 text-sm text-ink/65">{stat.label}</p></Reveal>)}
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="label text-azul">Herramientas y conocimientos</p>
      <h2 className="display mt-4 text-5xl md:text-7xl">Mi base <em className="text-azul">técnica</em></h2>
      <p className="mt-5 max-w-2xl text-ink/65">Las herramientas aparecen progresivamente al entrar en pantalla; las barras organizan el recorrido y no representan un porcentaje de dominio.</p>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{skills.map(group => <SkillBars key={group.title} group={group} elevated />)}</div>
    </section>
    <section className="border-y border-ink/10 bg-gradient-to-br from-celeste-soft/55 via-paper to-naranja-soft/35">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
        <div><p className="label text-azul">Trayectoria profesional</p><h2 className="display mt-4 text-5xl md:text-7xl">Experiencia en<br /><em className="text-azul">distintos entornos.</em></h2><Link to="/projects" className="cta-warm-link mt-8 inline-flex items-center gap-2">Ver trayectoria completa <ArrowRight size={18} /></Link></div>
        <ol>{experience.slice(0, 3).map(item => <li key={item.company} className="border-b border-ink/15 py-5 first:pt-0"><p className="label text-azul">{item.period} · {item.company}</p><h3 className="mt-3 text-2xl">{item.role}</h3></li>)}</ol>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-24"><CertificationBadge /><Link to="/gallery" className="cta-warm-link mt-8 inline-flex items-center gap-2">Todas mis certificaciones <ArrowRight size={18} /></Link></section>
    <section className="mx-auto max-w-4xl px-6 pb-24 text-center"><div className="surface-elevated rounded-3xl px-7 py-12 md:px-12"><p className="label text-azul">Sobre mí</p><p className="mt-6 text-xl leading-relaxed text-ink/75">{site.profile}</p><Link to="/about" className="cta-warm-link label mt-8 inline-block">Conocer mi perfil →</Link></div></section>
  </>
}
