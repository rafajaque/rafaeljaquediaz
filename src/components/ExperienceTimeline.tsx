import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { BriefcaseBusiness, Clock3, MapPin } from 'lucide-react'
import { experience } from '@/data/site'

export function ExperienceTimeline() {
  const timelineRef = useRef<HTMLOListElement>(null)
  const [activeItems, setActiveItems] = useState<Set<number>>(() => new Set([0]))
  const [reducedMotion, setReducedMotion] = useState(false)
  const [enhanced, setEnhanced] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(motionQuery.matches)
    setEnhanced(true)
    updatePreference()
    motionQuery.addEventListener('change', updatePreference)
    return () => motionQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    if (reducedMotion) {
      setActiveItems(new Set(experience.map((_, index) => index)))
      timeline.style.setProperty('--timeline-progress', '1')
      return
    }

    const entries = Array.from(timeline.querySelectorAll<HTMLElement>('[data-timeline-entry]'))
    const observer = new IntersectionObserver((observedEntries) => {
      observedEntries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const index = Number((entry.target as HTMLElement).dataset.timelineEntry)
        setActiveItems(current => {
          if (current.has(index)) return current
          const next = new Set(current)
          next.add(index)
          return next
        })
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '-15% 0px -28% 0px', threshold: 0.18 })

    const activatePassedEntries = () => {
      const passedIndexes = entries
        .filter(entry => entry.getBoundingClientRect().top <= window.innerHeight * 0.78)
        .map(entry => Number(entry.dataset.timelineEntry))

      if (!passedIndexes.length) return
      setActiveItems(current => {
        const next = new Set(current)
        passedIndexes.forEach(index => next.add(index))
        return next.size === current.size ? current : next
      })
    }

    activatePassedEntries()
    entries.forEach(entry => observer.observe(entry))

    let frame = 0
    const updateProgress = () => {
      frame = 0
      const bounds = timeline.getBoundingClientRect()
      const startLine = window.innerHeight * 0.72
      const endLine = window.innerHeight * 0.28
      const distance = Math.max(bounds.height + startLine - endLine, 1)
      const progress = Math.min(1, Math.max(0, (startLine - bounds.top) / distance))
      timeline.style.setProperty('--timeline-progress', progress.toFixed(4))
      activatePassedEntries()
    }
    const requestProgressUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', requestProgressUpdate, { passive: true })
    window.addEventListener('resize', requestProgressUpdate)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', requestProgressUpdate)
      window.removeEventListener('resize', requestProgressUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [reducedMotion])

  return (
    <ol
      ref={timelineRef}
      className="experience-timeline"
      data-enhanced={enhanced ? 'true' : undefined}
      style={{ '--timeline-progress': '0' } as CSSProperties}
    >
      {experience.map((item, index) => {
        const active = activeItems.has(index)
        return (
          <li
            key={`${item.company}-${item.period}`}
            data-timeline-entry={index}
            className={`experience-timeline-entry ${active ? 'is-active' : ''}`}
          >
            <span className="experience-timeline-dot" aria-hidden="true"><BriefcaseBusiness size={15} /></span>

            <div className="experience-timeline-meta">
              <p className="font-medium text-ink/75">{item.period}</p>
              {item.duration && <p className="mt-2 inline-flex items-center gap-2 text-sm text-ink/65"><Clock3 size={14} aria-hidden="true" />{item.duration}</p>}
            </div>

            <article className="experience-timeline-card" aria-labelledby={`experience-${index}-title`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="label text-azul">{item.company}</p>
                  <h2 id={`experience-${index}-title`} className="mt-3 font-display text-3xl md:text-4xl">{item.role}</h2>
                </div>
                <span className="rounded-full border border-ink/15 bg-paper/70 px-3 py-1.5 text-xs font-medium text-ink/65">{item.employment}</span>
              </div>

              <p className="mt-4 inline-flex flex-wrap items-center gap-2 text-sm leading-relaxed text-ink/65">
                <MapPin size={15} aria-hidden="true" /> {item.location} · {item.modality}
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/75">{item.description}</p>

              <ul className="mt-7 flex flex-wrap gap-2" aria-label={`Tecnologías y competencias en ${item.company}`}>
                {item.areas.map((area, areaIndex) => (
                  <li
                    key={area}
                    className="experience-timeline-tag"
                    style={{ '--tag-delay': `${140 + areaIndex * 85}ms` } as CSSProperties}
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        )
      })}
    </ol>
  )
}
