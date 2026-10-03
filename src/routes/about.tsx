import { createFileRoute, Link } from '@tanstack/react-router'
import { PageIntro } from '@/components/PageIntro'
import { Reveal } from '@/components/Reveal'
import { education, site, skills } from '@/data/site'

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [{ title: `Sobre mí — ${site.name}` }] }),
  component: About,
})
function About() {
  return <>
    <PageIntro eyebrow="Perfil profesional" title={<>Soy <em className="text-azul">Rafael.</em></>}>{site.role}</PageIntro>
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
      <div><h2 className="display text-5xl">Tecnología, datos<br />y <em className="text-azul">gestión.</em></h2><p className="mt-8 text-lg leading-relaxed text-ink/75">{site.profile}</p><p className="mt-5 text-lg leading-relaxed text-ink/75">Me orientan la optimización de la infraestructura empresarial, la productividad y el liderazgo proactivo en entornos ágiles.</p></div>
      <div><p className="label text-azul">Formación académica</p><ul className="mt-6">{education.map(item => <li key={item.title} className="border-t border-ink/15 py-6"><h3 className="text-2xl">{item.title}</h3><p className="mt-2 text-ink/70">{item.detail}</p></li>)}</ul><div className="mt-6 border-t border-ink/15 pt-6"><p className="label text-azul">Idiomas</p><p className="mt-3 text-xl">Inglés avanzado · fluido</p></div></div>
    </section>
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <Reveal className="grid gap-8 rounded-2xl border border-ink/15 bg-foam p-7 md:grid-cols-[0.7fr_1.3fr] md:p-10">
        <div><p className="label text-azul">Transparencia</p><h2 className="display mt-4 text-4xl">Uso responsable de IA</h2></div>
        <div className="space-y-4 leading-relaxed text-ink/70"><p>Utilizo ChatGPT y Codex como apoyo para auditoría, programación, extracción y redacción. Reviso los datos, valido los resultados y asumo la responsabilidad de las decisiones técnicas y del contenido publicado.</p><p>En el caso Colchagua, el repositorio conserva fuentes, manifiestos, verificaciones, código reproducible y limitaciones metodológicas para que el proceso pueda ser revisado y defendido.</p></div>
      </Reveal>
    </section>
    <section className="night py-20 text-foam"><div className="mx-auto max-w-7xl px-6"><h2 className="display text-5xl md:text-7xl">Habilidades <em className="text-celeste">técnicas</em></h2><div className="mt-12 grid gap-10 md:grid-cols-2">{skills.map(group => <div key={group.title}><h3 className="label text-celeste">{group.title}</h3><ul className="mt-5 flex flex-wrap gap-3">{group.items.map(item => <li key={item} className="rounded-full border border-foam/25 px-4 py-2">{item}</li>)}</ul></div>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-6 py-16"><Link to="/gallery" className="text-lg text-azul">Explorar mis certificaciones →</Link></section>
  </>
}

