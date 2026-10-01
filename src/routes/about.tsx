import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { PageIntro } from '@/components/PageIntro'
import { Picture } from '@/components/Picture'
import { ExposureScale } from '@/components/ExposureScale'
import { portrait, site } from '@/data/site'

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [{ title: `About — ${site.name}` }] }),
  component: About,
})

const process = [
  { n: 'I', title: 'Coat', text: 'Ferric ammonium citrate and potassium ferricyanide, brushed onto cotton paper by hand in a dim room.' },
  { n: 'II', title: 'Expose', text: 'The paper goes out under the real sky. Clouds, wind and the time of year all end up in the print.' },
  { n: 'III', title: 'Wash', text: 'Water reveals the blue. I wash in river water whenever I can — it shifts the tone just slightly.' },
  { n: 'IV', title: 'Design', text: 'Only then does the design start: the book, the wall, the identity is built around what the light gave back.' },
]

const timeline = [
  { year: '2026', text: 'Mareas photobook — sold out first edition' },
  { year: '2025', text: 'Atlas de Nubes, solo show at MAC Montevideo' },
  { year: '2025', text: 'Shortlisted, Premio Itaú de Fotografía' },
  { year: '2024', text: 'Residency at Casa Wabi, Oaxaca' },
  { year: '2022', text: 'Opened Estudio Azul in Ciudad Vieja' },
  { year: '2019', text: 'BFA Visual Communication, Universidad ORT' },
]

const clients = ['MAC Montevideo', 'Tostadero Azul', 'Editorial Bruma', 'Pleamar Labs', 'Casa Wabi', 'Fundación Proa', 'Hotel Sileo']

function About() {
  return (
    <>
      <PageIntro n="03" eyebrow="About" title={<>Hola, I&rsquo;m <em className="text-azul">Luz</em>.</>} />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-12">
        <figure className="md:col-span-5">
          <div className="-rotate-[1.5deg] bg-foam p-3 pb-12 shadow-[0_40px_80px_-30px_rgba(8,26,63,0.5)]">
            <Picture
              src={portrait.src}
              alt={`Portrait of ${site.name} holding a medium-format camera in the studio, cyanotypes drying behind`}
              width={portrait.width}
              height={portrait.height}
              sizes="(min-width: 768px) 38vw, 100vw"
              priority
            />
            <figcaption className="label mt-4 flex justify-between text-ink/60">
              <span>Estudio Azul, Ciudad Vieja</span>
              <span>Self-timer, 1/60</span>
            </figcaption>
          </div>
        </figure>

        <div className="md:col-span-6 md:col-start-7 md:pt-6">
          <p className="display text-4xl md:text-5xl">
            I grew up on the Río de la Plata, where the sky and the water are almost the same colour — and I&rsquo;ve
            spent my career trying to <em className="text-azul">tell them apart</em>.
          </p>
          <div className="mt-10 space-y-5 text-lg leading-relaxed text-ink/75">
            <p>
              I&rsquo;m a photographer and visual designer based between Montevideo and Buenos Aires. My work starts with
              the cyanotype — a 180-year-old process that turns sunlight into Prussian blue — and grows into
              photobooks, exhibitions and brand identities.
            </p>
            <p>
              I only work in blue. It started as a constraint and became a language: celeste for air and
              morning, azul for depth, ink for night. Limiting the palette forces every other decision — light,
              paper, composition — to do more.
            </p>
            <p>
              When I&rsquo;m not in the studio I&rsquo;m on a boat, at a swimming pool or looking up. Clients hire me when
              they want something that feels quiet, handmade and a little bit like the sea.
            </p>
          </div>
          <ExposureScale className="mt-12 max-w-sm" />
        </div>
      </section>

      {/* Process */}
      <section className="night py-28 text-foam">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label text-celeste">Process</p>
          <h2 className="display mt-3 text-6xl md:text-8xl">
            Four steps, <em className="text-celeste">one blue</em>
          </h2>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-sm bg-foam/15 md:grid-cols-4">
            {process.map((s) => (
              <li key={s.n} className="bg-ink p-8">
                <span className="display text-5xl text-celeste">{s.n}</span>
                <h3 className="mt-8 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-foam/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Timeline + clients */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2">
        <div>
          <p className="label text-azul">Along the way</p>
          <ul className="mt-8">
            {timeline.map((t, i) => (
              <li key={i} className="flex gap-8 border-t border-ink/15 py-5 last:border-b">
                <span className="label w-12 shrink-0 pt-1 text-azul">{t.year}</span>
                <span className="text-lg">{t.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label text-azul">Worked with</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {clients.map((c) => (
              <li key={c} className="rounded-full border border-ink/15 bg-foam px-5 py-3 font-display text-2xl italic">
                {c}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-azul px-6 py-3 font-medium text-foam transition-colors hover:bg-ink"
          >
            Start a project <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}
