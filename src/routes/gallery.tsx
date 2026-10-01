import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { PageIntro } from '@/components/PageIntro'
import { Picture } from '@/components/Picture'
import { photos, site, type Series } from '@/data/site'
import { cdn } from '@/lib/image'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/gallery')({
  head: () => ({ meta: [{ title: `Gallery — ${site.name}` }] }),
  component: Gallery,
})

const filters: Array<'All' | Series> = ['All', 'Río', 'Cianotipia', 'Ciudad']

function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [active, setActive] = useState<number | null>(null)
  const visible = filter === 'All' ? photos : photos.filter((p) => p.series === filter)

  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, step])

  const current = active === null ? null : visible[active]

  return (
    <>
      <PageIntro n="02" eyebrow="Contact sheet" title={<>Gal<em className="text-azul">ería</em></>}>
        Three ongoing series — the river, the cyanotype table and the city&rsquo;s blue corners. Tap any print to
        see it large.
      </PageIntro>

      <section className="mx-auto max-w-7xl px-6 pt-4 pb-32">
        <div className="sticky top-24 z-30 mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter by series">
          {filters.map((f) => {
            const count = f === 'All' ? photos.length : photos.filter((p) => p.series === f).length
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm backdrop-blur transition-colors',
                  filter === f ? 'border-ink bg-ink text-foam' : 'border-ink/15 bg-foam/70 hover:border-ink',
                )}
              >
                {f} <span className="label ml-1 opacity-60">{count}</span>
              </button>
            )
          })}
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {visible.map((p, i) => (
            <figure key={p.src} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full cursor-zoom-in overflow-hidden bg-celeste-soft"
                aria-label={`Open ${p.title}`}
              >
                <Picture
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="transition duration-700 group-hover:scale-[1.03] group-hover:saturate-150"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="label absolute bottom-4 left-4 text-foam opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  View ↗
                </span>
              </button>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                <span className="font-display text-2xl italic">{p.title}</span>
                <span className="label text-ink/50">
                  {p.series} · {p.year}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {current && (
        <div
          className="night fixed inset-0 z-[70] flex animate-in flex-col text-foam fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setActive(null)}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="label text-celeste">
              {String((active ?? 0) + 1).padStart(2, '0')} / {String(visible.length).padStart(2, '0')}
            </span>
            <button type="button" className="grid size-11 place-items-center rounded-full border border-foam/25 hover:bg-foam hover:text-ink" aria-label="Close" onClick={() => setActive(null)}>
              <X size={18} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-20" onClick={(e) => e.stopPropagation()}>
            <img
              key={current.src}
              src={cdn(current.src, 1600, undefined, 80)}
              srcSet={`${cdn(current.src, 900, undefined, 80)} 900w, ${cdn(current.src, 1600, undefined, 80)} 1600w`}
              sizes="90vw"
              alt={current.alt}
              width={current.width}
              height={current.height}
              className="max-h-full w-auto animate-in object-contain shadow-2xl zoom-in-95 fade-in duration-500"
            />
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-2 grid size-12 place-items-center rounded-full bg-foam/10 backdrop-blur hover:bg-foam hover:text-ink md:left-6">
              <ArrowLeft size={20} />
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next photo" className="absolute right-2 grid size-12 place-items-center rounded-full bg-foam/10 backdrop-blur hover:bg-foam hover:text-ink md:right-6">
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-4 px-6 py-6" onClick={(e) => e.stopPropagation()}>
            <p className="display text-4xl italic">{current.title}</p>
            <p className="label text-foam/60">
              {current.series} · {current.place} · {current.year}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
