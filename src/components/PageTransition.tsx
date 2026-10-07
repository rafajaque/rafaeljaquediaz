import type { ReactNode } from 'react'
import { useRouterState } from '@tanstack/react-router'

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: state => state.location.pathname })

  return <div key={pathname} className="page-transition">{children}</div>
}
