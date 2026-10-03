import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Code2, Database, ShieldCheck } from 'lucide-react'
import { site, skills, experience, certificationHours, certifications, githubProjects } from '@/data/site'
import { CertificationBadge } from '@/components/CertificationBadge'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return <>
    <section className="sky relative overflow-hidden pt-36 pb-20 md:pt-44">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="label text-azul">Ingeniería informática · Gestión de proyectos</p>
          <h1 className="display mt-7 text-[clamp(2.75rem,5.5vw,5.25rem)]">Rafael Andrés<br /><em className="text-azul">Jaque Díaz.</em></h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink/75">Integro tecnología, datos y gestión para aportar valor a las organizaciones.</p>
          <p className="mt-5 max-w-xl leading-relaxed text-ink/70">Mi experiencia reúne análisis de datos y procesos, soporte TI, seguridad electrónica y tecnología aplicada a la industria.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-foam hover:bg-azul">Mi experiencia <ArrowRight size={17} /></Link>
            <Link to="/contact" className="rounded-full border border-ink/25 px-6 py-3 hover:bg-foam">Hablemos</Link>
          </div>
        </div>
        <aside className="night rounded-2xl p-8 text-foam transition-transform duration-500 hover:-translate-y-2 md:p-10" aria-label="Enfoque profesional">
          <p className="label text-celeste">Tecnología con propósito</p>
          <div className="my-10 font-display text-7xl font-medium" aria-hidden="true">RJ<span className="text-celeste">.</span></div>
          {[{ icon: Code2, title: 'Integración de sistemas', text: 'Desarrollo y análisis de requerimientos.' }, { icon: Database, title: 'Decisiones basadas en datos', text: 'Análisis de procesos y herramientas de BI.' }, { icon: ShieldCheck, title: 'Seguridad integral', text: 'Soporte TI y experiencia en CCTV.' }].map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4 border-t border-foam/20 py-5"><Icon className="mt-1 shrink-0 text-celeste" size={22} /><div><h2 className="text-lg font-medium">{title}</h2><p className="mt-1 text-foam/70">{text}</p></div></div>)}
        </aside>
      </div>
    </section>
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

