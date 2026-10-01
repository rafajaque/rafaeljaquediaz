import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { site, socials } from '@/data/site'

export function SiteFooter() {
  return (
    <footer className="night relative overflow-hidden text-foam">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-10">
        <p className="label text-celeste">Have a blue idea?</p>
        <Link to="/contact" className="group mt-4 block">
          <span className="display block text-[clamp(3.5rem,11vw,10rem)] transition-colors group-hover:text-celeste">
            Let&rsquo;s talk <em className="text-celeste group-hover:text-foam">↗</em>
          </span>
        </Link>

        <div className="mt-20 grid gap-10 border-t border-foam/15 pt-10 md:grid-cols-[1fr_auto]">
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
          <div className="label flex gap-6 text-foam/50">
            <span>{site.location}</span>
            <span>© {new Date().getFullYear()} {site.name}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
