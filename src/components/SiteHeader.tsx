import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

export const navItems = [
  { to: '/projects', label: 'Work', n: '01' },
  { to: '/gallery', label: 'Gallery', n: '02' },
  { to: '/about', label: 'About', n: '03' },
  { to: '/contact', label: 'Contact', n: '04' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ink/10 bg-foam/75 py-2 pr-2 pl-5 shadow-[0_10px_40px_-20px_rgba(8,26,63,0.45)] backdrop-blur-xl">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl italic leading-none">{site.name}</span>
          <span className="label hidden text-azul sm:inline">/ azul</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-celeste-soft hover:text-ink"
              activeProps={{ className: 'bg-ink !text-foam hover:!bg-ink' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="grid size-10 place-items-center rounded-full bg-ink text-foam md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={cn(
          'night fixed inset-0 -z-10 flex flex-col justify-end px-6 pb-12 text-foam transition-[opacity,visibility] duration-500 md:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="flex items-baseline gap-4 border-b border-foam/15 py-3">
              <span className="label text-celeste">{item.n}</span>
              <span className="display text-6xl">{item.label}</span>
            </Link>
          ))}
        </nav>
        <p className="label mt-10 text-celeste/80">{site.location}</p>
      </div>
    </header>
  )
}
