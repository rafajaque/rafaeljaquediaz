import { useState } from 'react'
import { ArrowUpRight, BarChart3, BookOpen, Download, Github } from 'lucide-react'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { Reveal } from '@/components/Reveal'

const repository = 'https://github.com/rafajaque/Investigaci-n-Colchagua-'

const communes = [
  { name: 'Chimbarongo', priority: 86.5, dependency: 38.5, rank: 1 },
  { name: 'Placilla', priority: 71.5, dependency: 41.6, rank: 2 },
  { name: 'Palmilla', priority: 53.2, dependency: 41.7, rank: 3 },
  { name: 'Chépica', priority: 53.0, dependency: 39.4, rank: 4 },
  { name: 'San Fernando', priority: 49.1, dependency: 10.1, rank: 5 },
]

type Metric = 'priority' | 'dependency'

export function ColchaguaCaseStudy() {
  const [metric, setMetric] = useState<Metric>('priority')
  const isPriority = metric === 'priority'
  const sortedCommunes = [...communes].sort((a, b) => b[metric] - a[metric])

  return (
    <section className="night overflow-hidden text-foam" aria-labelledby="colchagua-title">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="label text-celeste">Caso destacado · Business Intelligence</p>
            <h2 id="colchagua-title" className="display mt-5 max-w-4xl text-5xl md:text-7xl">Resiliencia agrícola en <em className="text-celeste">Colchagua</em></h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-foam/75">Un sistema de apoyo a decisiones para priorizar comunas, sectores y PYMEs que requieren diagnóstico frente a shocks agrícolas, integrando datos productivos, empresariales, climáticos y de mercado.</p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-foam/15 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: 33883, suffix: ' ha', label: 'Superficie frutal analizada' },
            { value: 11479, label: 'Bloques de catastro' },
            { value: 10, label: 'Comunas comparadas' },
            { value: 22, label: 'Medidas DAX verificadas' },
          ].map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90} className="bg-ink/80 p-6 md:p-8">
              <p className="font-display text-4xl text-celeste md:text-5xl"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></p>
              <p className="mt-3 text-sm text-foam/65">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="rounded-2xl border border-foam/15 bg-foam/[0.06] p-6 md:p-9">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="label text-celeste">Explorador de resultados</p>
                <h3 className="mt-3 text-2xl md:text-3xl">Comparación por comuna</h3>
              </div>
              <div className="flex rounded-full border border-foam/20 p-1" aria-label="Métrica del gráfico">
                <button type="button" aria-pressed={isPriority} onClick={() => setMetric('priority')} className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${isPriority ? 'bg-celeste text-ink' : 'text-foam/70 hover:text-foam'}`}>Prioridad</button>
                <button type="button" aria-pressed={!isPriority} onClick={() => setMetric('dependency')} className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${!isPriority ? 'bg-celeste text-ink' : 'text-foam/70 hover:text-foam'}`}>Dependencia agro</button>
              </div>
            </div>
            <div className="mt-9 space-y-5" role="img" aria-label={isPriority ? 'Índice de prioridad por comuna' : 'Dependencia agrícola por comuna'}>
              {sortedCommunes.map((commune) => (
                <div key={commune.name} className="grid grid-cols-[7.5rem_1fr_3.5rem] items-center gap-3 text-sm md:grid-cols-[9rem_1fr_4rem]">
                  <span>{commune.name}</span>
                  <span className="h-2.5 overflow-hidden rounded-full bg-foam/10">
                    <span className="block h-full origin-left rounded-full bg-gradient-to-r from-azul to-celeste transition-[width] duration-700 ease-out" style={{ width: `${commune[metric]}%` }} />
                  </span>
                  <span className="text-right font-medium text-celeste">{commune[metric].toLocaleString('es-CL', { maximumFractionDigits: 1 })}{isPriority ? '' : '%'}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-foam/15 pt-5 text-sm leading-relaxed text-foam/55">El índice combina exposición agrícola, dependencia productiva, riego y mercado con pesos explícitos. Sirve para priorizar diagnósticos; no representa una probabilidad de pérdida ni demuestra causalidad.</p>
          </Reveal>

          <Reveal delay={120} className="flex flex-col rounded-2xl bg-celeste-soft p-7 text-ink md:p-9">
            <p className="label text-azul">Conclusión para la decisión</p>
            <h3 className="mt-4 font-display text-4xl">Chimbarongo y Placilla son prioridades robustas.</h3>
            <p className="mt-5 leading-relaxed text-ink/70">Ambas comunas aparecen entre las tres primeras en los cinco escenarios de sensibilidad. El tercer cupo depende del objetivo del programa, por lo que la recomendación es iniciar un diagnóstico de riego y continuidad de proveedores antes de asignar intervenciones.</p>
            <div className="mt-7 grid grid-cols-2 gap-3 border-y border-ink/15 py-6">
              <div><span className="block font-display text-3xl">0,379</span><span className="text-xs text-ink/60">Silhouette, k=2</span></div>
              <div><span className="block font-display text-3xl">5.000</span><span className="text-xs text-ink/60">Simulaciones forecast</span></div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink/60">La evidencia es correlacional y exploratoria: dos estaciones meteorológicas y empleo regional no permiten atribuir causalidad ni identificar empresas individuales vulnerables.</p>
          </Reveal>
        </div>

        <Reveal className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a href={`${repository}/blob/main/Colchagua_Resiliencia.ipynb`} target="_blank" rel="noopener noreferrer" className="artifact-link"><BookOpen size={19} /> Notebook ejecutado <ArrowUpRight size={16} /></a>
          <a href={`${repository}/raw/refs/heads/main/Colchagua_Resiliencia.pbix`} className="artifact-link"><BarChart3 size={19} /> Descargar Power BI <Download size={16} /></a>
          <a href={`${repository}/blob/main/Informe_Colchagua.pdf`} target="_blank" rel="noopener noreferrer" className="artifact-link"><BookOpen size={19} /> Informe técnico <ArrowUpRight size={16} /></a>
          <a href={repository} target="_blank" rel="noopener noreferrer" className="artifact-link"><Github size={19} /> Código y datos <ArrowUpRight size={16} /></a>
        </Reveal>
      </div>
    </section>
  )
}

