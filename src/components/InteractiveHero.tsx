import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Code2, Database, Pause, Play, ShieldCheck } from 'lucide-react'
import { AmbientBackdrop } from '@/components/AmbientBackdrop'
import { Magnetic } from '@/components/Magnetic'

const messages = [
  { lead: 'Transformo', accent: 'datos', end: 'en decisiones.' },
  { lead: 'Desarrollo', accent: 'soluciones', end: 'que simplifican.' },
  { lead: 'Conecto', accent: 'tecnología', end: 'y gestión.' },
]

const focusAreas = [
  { icon: Code2, title: 'Integración de sistemas', text: 'Desarrollo y análisis de requerimientos.' },
  { icon: Database, title: 'Decisiones basadas en datos', text: 'Análisis de procesos y herramientas de BI.' },
  { icon: ShieldCheck, title: 'Seguridad integral', text: 'Soporte TI y experiencia en CCTV.' },
]

export function InteractiveHero() {
  const [activeMessage, setActiveMessage] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [pointerEffects, setPointerEffects] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')

    const updatePreferences = () => {
      setReducedMotion(motionQuery.matches)
      setPointerEffects(pointerQuery.matches && !motionQuery.matches)
    }

    updatePreferences()
    motionQuery.addEventListener('change', updatePreferences)
    pointerQuery.addEventListener('change', updatePreferences)
    return () => {
      motionQuery.removeEventListener('change', updatePreferences)
      pointerQuery.removeEventListener('change', updatePreferences)
    }
  }, [])

  useEffect(() => {
    if (reducedMotion || paused) return

    let intervalId: number | undefined
    const stopRotation = () => {
      if (intervalId !== undefined) window.clearInterval(intervalId)
      intervalId = undefined
    }
    const startRotation = () => {
      stopRotation()
      if (document.hidden) return
      intervalId = window.setInterval(() => {
        setActiveMessage(current => (current + 1) % messages.length)
      }, 3400)
    }

    startRotation()
    document.addEventListener('visibilitychange', startRotation)
    return () => {
      stopRotation()
      document.removeEventListener('visibilitychange', startRotation)
    }
  }, [paused, reducedMotion])

  const resetPointer = () => {
    const section = sectionRef.current
    if (!section) return
    section.style.setProperty('--hero-pointer-x', '72%')
    section.style.setProperty('--hero-pointer-y', '32%')
    section.style.setProperty('--hero-tilt-x', '0deg')
    section.style.setProperty('--hero-tilt-y', '0deg')
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (!pointerEffects || event.pointerType !== 'mouse') return
    const section = sectionRef.current
    if (!section) return

    const bounds = section.getBoundingClientRect()
    const x = Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100))
    const y = Math.min(100, Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100))
    section.style.setProperty('--hero-pointer-x', `${x}%`)
    section.style.setProperty('--hero-pointer-y', `${y}%`)
    section.style.setProperty('--hero-tilt-x', `${(50 - y) * 0.035}deg`)
    section.style.setProperty('--hero-tilt-y', `${(x - 50) * 0.035}deg`)
  }

  return (
    <section
      ref={sectionRef}
      className="sky hero-interactive depth-section relative overflow-hidden pt-36 pb-20 md:pt-44"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={{
        '--hero-pointer-x': '72%',
        '--hero-pointer-y': '32%',
        '--hero-tilt-x': '0deg',
        '--hero-tilt-y': '0deg',
      } as CSSProperties}
    >
      <AmbientBackdrop />
      <div className="hero-pointer-glow" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="label text-azul">Rafael Andrés Jaque Díaz · Ingeniería informática</p>
          <h1 className="display mt-7 text-[clamp(3rem,6vw,5.75rem)]">
            <span className="sr-only">Integro tecnología, datos y gestión para aportar valor a las organizaciones.</span>
            <span className="hero-phrase-stage" aria-hidden="true">
              {messages.map((message, index) => (
                <span key={message.end} className={`hero-phrase ${index === activeMessage ? 'is-active' : ''}`}>
                  {message.lead} <em className="text-azul">{message.accent}</em><br />{message.end}
                </span>
              ))}
            </span>
          </h1>

          <div className="mt-6 flex items-center gap-2" aria-label="Control de mensajes destacados">
            {messages.map((message, index) => (
              <button
                key={message.end}
                type="button"
                onClick={() => setActiveMessage(index)}
                className={`hero-message-dot ${index === activeMessage ? 'is-active' : ''}`}
                aria-label={`Mostrar: ${message.lead} ${message.accent} ${message.end}`}
                aria-pressed={index === activeMessage}
              />
            ))}
            {!reducedMotion && (
              <button
                type="button"
                onClick={() => setPaused(current => !current)}
                className="ml-2 inline-flex h-9 items-center gap-2 rounded-full border border-ink/15 bg-foam/55 px-3 text-xs font-medium text-ink/65 backdrop-blur-sm transition-colors hover:border-azul/40 hover:text-azul"
                aria-label={paused ? 'Reanudar cambio automático de mensajes' : 'Pausar cambio automático de mensajes'}
                aria-pressed={paused}
              >
                {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
                {paused ? 'Reanudar' : 'Pausar'}
              </button>
            )}
          </div>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink/75">Integro tecnología, datos y gestión para aportar valor a las organizaciones.</p>
          <p className="mt-5 max-w-xl leading-relaxed text-ink/70">Mi experiencia reúne análisis de datos y procesos, soporte TI, seguridad electrónica y tecnología aplicada a la industria.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Magnetic><Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-foam transition-[background-color] hover:bg-azul">Mi experiencia <ArrowRight size={17} /></Link></Magnetic>
            <Magnetic><Link to="/proyectos" className="cta-warm rounded-full px-6 py-3 font-medium">Ver proyectos</Link></Magnetic>
          </div>
        </div>

        <aside className="night hero-focus-card rounded-2xl border border-foam/15 p-8 text-foam md:p-10" aria-label="Enfoque profesional">
          <p className="label text-celeste">Tecnología con propósito</p>
          <div className="my-10 font-display text-7xl font-medium" aria-hidden="true">RJ<span className="text-naranja-light">.</span></div>
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 border-t border-foam/20 py-5">
              <Icon className="mt-1 shrink-0 text-celeste" size={22} />
              <div><h2 className="text-lg font-medium">{title}</h2><p className="mt-1 text-foam/70">{text}</p></div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}
