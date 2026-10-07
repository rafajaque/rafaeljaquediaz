import { useEffect, useRef } from 'react'
import { useRouterState } from '@tanstack/react-router'

export function ReadingProgress() {
  const barRef = useRef<HTMLSpanElement>(null)
  const pathname = useRouterState({ select: state => state.location.pathname })

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    let frame = 0
    let disposed = false

    const update = () => {
      frame = 0
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = documentHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / documentHeight)) : 0
      bar.style.transform = `scaleX(${progress})`
    }

    const scheduleUpdate = () => {
      if (frame || disposed) return
      frame = window.requestAnimationFrame(update)
    }

    bar.style.transform = 'scaleX(0)'
    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(scheduleUpdate)
    resizeObserver?.observe(document.documentElement)
    document.fonts?.ready.then(scheduleUpdate)

    return () => {
      disposed = true
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      resizeObserver?.disconnect()
      window.cancelAnimationFrame(frame)
    }
  }, [pathname])

  return (
    <div className="reading-progress" aria-hidden="true">
      <span ref={barRef} className="reading-progress-bar" />
    </div>
  )
}
