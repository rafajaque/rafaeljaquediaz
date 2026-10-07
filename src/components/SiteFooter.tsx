import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { AmbientBackdrop } from '@/components/AmbientBackdrop'
import { site, socials } from '@/data/site'

export function SiteFooter() {
  return (
    <footer className="night site-footer depth-section relative overflow-hidden text-foam">
      <AmbientBackdrop tone="dark" quiet />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 pb-10">
        <p className="label text-celeste">Conversemos sobre tecnología y nuevas oportunidades</p>
        <Link to="/contact" className="group mt-4 block">
          <span className="display block text-[clamp(2rem,4vw,3.5rem)] transition-colors group-hover:text-naranja-light">
            Hablemos <em className="inline-block text-naranja-light transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</em>
          </span>
        </Link>

        <div className="mt-10 grid gap-10 border-t border-foam/15 pt-10 md:grid-cols-[1fr_auto]">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-sm text-foam/80 hover:text-celeste">
                  {s.label}
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
          <div className="label flex flex-wrap gap-6 text-foam/50">
            <span>{site.location}</span>
            <span>© {new Date().getFullYear()} {site.name}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
