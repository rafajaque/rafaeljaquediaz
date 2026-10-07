import { badge } from '@/data/site'
import { Picture } from './Picture'

export function CertificationBadge() {
  return <div className="surface-elevated surface-lift grid items-center gap-8 rounded-2xl p-6 md:grid-cols-[240px_1fr] md:p-10">
    <div className="mx-auto w-full max-w-60"><Picture {...badge} sizes="240px" /></div>
    <div><p className="label text-azul">Google · Coursera</p><h2 className="display mt-4 text-4xl md:text-5xl">Data-Driven<br /><em className="text-azul">Decision Making</em></h2><p className="mt-5 max-w-xl leading-relaxed text-ink/75">Certificado de finalización en toma de decisiones basada en datos. Parte de mi formación continua para conectar el análisis con la gestión tecnológica.</p></div>
  </div>
}
