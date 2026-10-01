/**
 * Signature element: a cyanotype exposure test strip. Each swatch is the same
 * paper left under the sun a little longer — celeste to ink.
 */
const steps = [
  { t: '30s', c: '#cbe8fa' },
  { t: '2m', c: '#7cc7f2' },
  { t: '5m', c: '#2f8fd6' },
  { t: '9m', c: '#1d4ed8' },
  { t: '14m', c: '#0e2a63' },
  { t: '20m', c: '#081a3f' },
]

export function ExposureScale({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="flex overflow-hidden rounded-sm border border-ink/10">
        {steps.map((s) => (
          <div key={s.t} className="h-10 flex-1" style={{ backgroundColor: s.c }} />
        ))}
      </div>
      <div className="mt-2 flex">
        {steps.map((s) => (
          <span key={s.t} className="label flex-1 text-ink/50">
            {s.t}
          </span>
        ))}
      </div>
    </div>
  )
}
