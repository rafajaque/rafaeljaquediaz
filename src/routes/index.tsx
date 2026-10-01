import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ArrowRight, ArrowDownRight } from 'lucide-react'
import { Picture } from '@/components/Picture'
import { ExposureScale } from '@/components/ExposureScale'
import { ProjectRow } from '@/components/ProjectRow'
import { photos, site } from '@/data/site'

export const Route = createFileRoute('/')({
  component: Home,
})

const marquee = ['Cyanotype', 'Photobooks', 'Art direction', 'Identity', 'Exhibitions', 'Río de la Plata']

function Home() {
  const featured = [...allProjects].sort((a, b) => a.order - b.order).slice(0, 2)
  const hero = photos[0]

  return (
    <>
      {/* Hero */}
      <section className="sky relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="pointer-events-none absolute -top-40 -right-40 size-[40rem] animate-drift rounded-full bg-celeste/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-7 md:pt-8">
            <p className="label animate-rise text-azul">
              {site.role} · {site.location}
            </p>
            <h1 className="display mt-6 animate-rise text-[clamp(4rem,11vw,10.5rem)] [animation-delay:120ms]">
              Pictures <br />
              made <em className="text-azul">with</em>
              <br /> the sky.
            </h1>
            <p className="mt-8 max-w-md animate-rise text-lg leading-relaxed text-ink/75 [animation-delay:240ms]">
              I&rsquo;m {site.name}. I coat paper with iron salts, leave it under the sun and let the light do
              the drawing. Then I design books, rooms and brands around what comes back — always in blue.
            </p>
            <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:360ms]">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-foam transition-colors hover:bg-azul"
              >
                Enter the gallery <ArrowRight size={17} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 font-medium transition-colors hover:border-ink hover:bg-foam"
              >
                Selected work
              </Link>
            </div>
            <ExposureScale className="mt-16 max-w-md" />
          </div>

          <figure className="relative animate-rise md:col-span-5 [animation-delay:200ms]">
            <div className="relative rotate-[1.5deg] bg-foam p-3 pb-12 shadow-[0_40px_80px_-30px_rgba(8,26,63,0.5)]">
              <Picture
                src={hero.src}
                alt={hero.alt}
                width={hero.width}
                height={hero.height}
                sizes="(min-width: 768px) 38vw, 100vw"
                priority
              />
              <figcaption className="label absolute right-4 bottom-4 left-4 flex justify-between text-ink/60">
                <span>Fig. 01 — {hero.title}</span>
                <span>{hero.year}</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-ink/10 bg-azul py-4 text-foam">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-10 whitespace-nowrap">
          {[...marquee, ...marquee, ...marquee].map((w, i) => (
            <span key={i} className="display flex items-center gap-10 text-4xl italic">
              {w} <span className="text-celeste not-italic">✺</span>
            </span>
          ))}
        </div>
      </div>

      {/* Selected work */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-20 flex items-end justify-between gap-6">
          <h2 className="display text-6xl md:text-8xl">
            Selected <em className="text-azul">work</em>
          </h2>
          <Link to="/projects" className="label link-underline hidden pb-3 text-azul md:block">
            All projects →
          </Link>
        </div>
        <div className="space-y-32">
          {featured.map((p, i) => (
            <ProjectRow key={p._meta.path} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="night py-24 text-foam">
        <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between gap-6 px-6">
          <div>
            <p className="label text-celeste">Contact sheet</p>
            <h2 className="display mt-3 text-6xl md:text-8xl">
              From the <em className="text-celeste">darkroom</em>
            </h2>
          </div>
          <Link
            to="/gallery"
            className="hidden items-center gap-2 rounded-full border border-foam/25 px-5 py-3 text-sm transition-colors hover:bg-foam hover:text-ink md:inline-flex"
          >
            Full gallery <ArrowDownRight size={16} />
          </Link>
        </div>
        <div className="flex snap-x gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none]">
          {photos.slice(1, 7).map((p) => (
            <Link key={p.src} to="/gallery" className="group w-64 shrink-0 snap-start md:w-80">
              <div className="overflow-hidden">
                <Picture
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  ratio={3 / 4}
                  sizes="320px"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="label mt-3 flex justify-between text-foam/60">
                <span>{p.title}</span>
                <span>{p.series}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center">
        <p className="label text-azul">Manifesto, sort of</p>
        <p className="display mt-8 text-[clamp(2.4rem,5.5vw,4.8rem)]">
          &ldquo;There are more than two hundred blues between the river and the sky. I&rsquo;m trying to{' '}
          <em className="text-azul">print all of them</em>.&rdquo;
        </p>
        <Link to="/about" className="label link-underline mt-10 inline-block text-azul">
          More about me →
        </Link>
      </section>
    </>
  )
}
