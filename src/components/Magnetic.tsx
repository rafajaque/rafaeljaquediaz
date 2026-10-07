import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react'
import { useEffect, useRef } from 'react'

export function Magnetic({ children }: { children: ReactNode }) {
  const surfaceRef = useRef<HTMLSpanElement>(null)
  const enabledRef = useRef(false)
  const frameRef = useRef(0)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updatePreference = () => {
      enabledRef.current = finePointer.matches && !reducedMotion.matches
      if (!enabledRef.current && surfaceRef.current) {
        surfaceRef.current.style.removeProperty('--magnetic-x')
        surfaceRef.current.style.removeProperty('--magnetic-y')
      }
    }

    updatePreference()
    finePointer.addEventListener('change', updatePreference)
    reducedMotion.addEventListener('change', updatePreference)

    return () => {
      finePointer.removeEventListener('change', updatePreference)
      reducedMotion.removeEventListener('change', updatePreference)
      window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const reset = () => {
    const surface = surfaceRef.current
    if (!surface) return
    surface.style.setProperty('--magnetic-x', '0px')
    surface.style.setProperty('--magnetic-y', '0px')
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLSpanElement>) => {
    if (!enabledRef.current || event.pointerType !== 'mouse') return
    const surface = surfaceRef.current
    if (!surface) return

    const bounds = surface.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8

    window.cancelAnimationFrame(frameRef.current)
    frameRef.current = window.requestAnimationFrame(() => {
      surface.style.setProperty('--magnetic-x', `${x.toFixed(2)}px`)
      surface.style.setProperty('--magnetic-y', `${y.toFixed(2)}px`)
    })
  }

  return (
    <span
      ref={surfaceRef}
      className="magnetic-surface"
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </span>
  )
}
