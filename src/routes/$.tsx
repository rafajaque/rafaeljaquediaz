import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, FolderOpen } from 'lucide-react'
import { AmbientBackdrop } from '@/components/AmbientBackdrop'
import { site } from '@/data/site'
import { buildSeo } from '@/lib/seo'

export const Route = createFileRoute('/$')({
  head: () =>
    buildSeo({
      title: `Página no encontrada — ${site.name}`,
      description: 'La página solicitada no existe. Regresa al portafolio de Rafael Andrés Jaque Díaz.',
      path: '/404',
    }),
  component: NotFoundPage,
})

function NotFoundPage() {
  return (
    <section className="sky depth-section relative grid min-h-screen place-items-center overflow-hidden px-6 pt-32 pb-20">
      <AmbientBackdrop quiet />
      <div className="surface-elevated relative z-10 max-w-3xl rounded-3xl p-8 text-center md:p-14">
        <p className="label text-azul">Error 404</p>
        <h1 className="display mt-5 text-[clamp(3rem,9vw,6rem)]">
          Esta página <em className="text-azul">no existe</em>.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/70">Es posible que el enlace haya cambiado o que la dirección esté incompleta.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-foam hover:bg-azul">
            <ArrowLeft size={17} aria-hidden="true" /> Volver al inicio
          </Link>
          <Link to="/proyectos" className="cta-warm inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium">
            <FolderOpen size={17} aria-hidden="true" /> Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  )
}
