import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'

type SkillGroup = {
  title: string
  items: readonly string[]
}

type SkillBarsProps = {
  group: SkillGroup
  tone?: 'light' | 'dark'
  elevated?: boolean
}

export function SkillBars({ group, tone = 'light', elevated = false }: SkillBarsProps) {
  const groupRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = groupRef.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setVisible(true)
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={groupRef}
      className={`skill-group skill-group--${tone}${elevated ? ' surface-elevated rounded-2xl p-6' : ''}`}
      data-visible={visible}
    >
      <h3 className={tone === 'dark' ? 'label text-celeste' : 'text-xl font-medium'}>{group.title}</h3>
      <ul className="mt-5 space-y-4">
        {group.items.map((item, index) => (
          <li key={item} className="skill-row" style={{ '--skill-delay': `${index * 85}ms` } as CSSProperties}>
            <span className={tone === 'dark' ? 'text-foam/85' : 'text-ink/75'}>{item}</span>
            <span className="skill-track" aria-hidden="true"><span className="skill-fill" /></span>
          </li>
        ))}
      </ul>
    </div>
  )
}
