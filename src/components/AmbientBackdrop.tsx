type AmbientBackdropProps = {
  tone?: 'light' | 'dark'
  quiet?: boolean
}

export function AmbientBackdrop({ tone = 'light', quiet = false }: AmbientBackdropProps) {
  return (
    <div
      className={`ambient-backdrop ambient-backdrop--${tone}${quiet ? ' ambient-backdrop--quiet' : ''}`}
      aria-hidden="true"
    >
      <span className="ambient-shape ambient-shape--orb" />
      <span className="ambient-shape ambient-shape--ring" />
      <span className="ambient-shape ambient-shape--diamond" />
      <span className="ambient-shape ambient-shape--accent" />
    </div>
  )
}
