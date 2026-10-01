import type { ReactNode } from 'react'

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="sky relative overflow-hidden pt-36 pb-16 md:pt-44">
      <div className="mx-auto max-w-7xl px-6">
        <p className="label flex animate-rise gap-4 text-azul">
          <span>{eyebrow}</span>
        </p>
        <h1 className="display mt-6 animate-rise text-[clamp(1.9rem,5.5vw,5.5rem)] [animation-delay:100ms]">{title}</h1>
        {children && (
          <div className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-ink/75 [animation-delay:200ms]">{children}</div>
        )}
      </div>
    </section>
  )
}

