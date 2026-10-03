import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  decimals?: number
  duration?: number
}

export function AnimatedCounter({ value, suffix = '', decimals = 0, duration = 1400 }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setDisplayValue(value)
      return
    }

    let animationFrame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const startedAt = performance.now()

      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplayValue(value * eased)
        if (progress < 1) animationFrame = requestAnimationFrame(animate)
      }

      animationFrame = requestAnimationFrame(animate)
    }, { threshold: 0.45 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [duration, value])

  return (
    <span ref={ref} aria-label={`${value.toLocaleString('es-CL')} ${suffix}`.trim()}>
      {displayValue.toLocaleString('es-CL', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  )
}

