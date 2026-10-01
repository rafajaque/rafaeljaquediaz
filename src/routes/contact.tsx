import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Send } from 'lucide-react'
import { site, socials } from '@/data/site'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [{ title: `Contact — ${site.name}` }] }),
  component: Contact,
})

const projectTypes = ['Commission', 'Photobook', 'Identity', 'Exhibition', 'Just saying hi']
const budgets = ['< $3k', '$3k – 10k', '$10k +', 'Not sure yet']

const field =
  'w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-lg outline-none transition-colors placeholder:text-ink/35 focus:border-azul focus:ring-0'

function Chips({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={cn(
            'cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-azul',
            value === o ? 'border-azul bg-azul text-foam' : 'border-ink/20 hover:border-ink',
          )}
        >
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  )
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [copied, setCopied] = useState(false)
  const [type, setType] = useState(projectTypes[0])
  const [budget, setBudget] = useState(budgets[3])

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(site.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="sky min-h-screen pt-36 pb-28 md:pt-44">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        {/* Left: direct lines */}
        <div className="lg:col-span-5">
          <p className="label flex animate-rise gap-4 text-azul">
            <span>04</span>
            <span>Contact</span>
          </p>
          <h1 className="display mt-6 animate-rise text-[clamp(4rem,10vw,8.5rem)] [animation-delay:100ms]">
            Write <em className="text-azul">to me</em>.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/75">
            Commissions, books, shows or a blue you can&rsquo;t stop thinking about. I answer every message within
            two working days.
          </p>

          <button
            type="button"
            onClick={copyEmail}
            className="group mt-10 flex w-full items-center justify-between gap-4 rounded-sm border border-ink/15 bg-foam/70 px-5 py-4 text-left backdrop-blur transition-colors hover:border-azul"
          >
            <span>
              <span className="label block text-ink/50">Email</span>
              <span className="font-display text-3xl italic">{site.email}</span>
            </span>
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-foam transition-colors group-hover:bg-azul">
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </span>
          </button>
          <p className="label mt-2 h-4 text-azul" aria-live="polite">
            {copied ? 'Copied to clipboard' : ''}
          </p>

          <ul className="mt-8">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-t border-ink/15 py-4 transition-colors hover:text-azul"
                >
                  <span className="text-lg font-medium">{s.label}</span>
                  <span className="flex items-center gap-3">
                    <span className="label text-ink/50 group-hover:text-azul">{s.handle}</span>
                    <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="bg-foam p-8 shadow-[0_40px_80px_-40px_rgba(8,26,63,0.45)] md:p-12">
            {status === 'sent' ? (
              <div className="flex min-h-[32rem] flex-col items-start justify-center">
                <span className="grid size-14 place-items-center rounded-full bg-azul text-foam">
                  <Check size={24} />
                </span>
                <h2 className="display mt-8 text-6xl">
                  Message <em className="text-azul">received</em>.
                </h2>
                <p className="mt-4 max-w-sm text-lg text-ink/70">
                  Thank you. It&rsquo;s drying on the line — I&rsquo;ll get back to you very soon.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="label link-underline mt-10 text-azul">
                  Send another →
                </button>
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit} className="space-y-10">
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don&rsquo;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <p className="label mb-4 text-ink/60">What are we making?</p>
                  <Chips name="project-type" options={projectTypes} value={type} onChange={setType} />
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <label className="block">
                    <span className="label text-ink/60">Your name</span>
                    <input type="text" name="name" required autoComplete="name" placeholder="Ana Pérez" className={field} />
                  </label>
                  <label className="block">
                    <span className="label text-ink/60">Email</span>
                    <input type="email" name="email" required autoComplete="email" placeholder="ana@estudio.com" className={field} />
                  </label>
                </div>

                <div>
                  <p className="label mb-4 text-ink/60">Budget</p>
                  <Chips name="budget" options={budgets} value={budget} onChange={setBudget} />
                </div>

                <label className="block">
                  <span className="label text-ink/60">Tell me about it</span>
                  <textarea name="message" required rows={5} placeholder="A book of the harbour at night…" className={cn(field, 'resize-none')} />
                </label>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-medium text-foam transition-colors hover:bg-azul disabled:opacity-60"
                  >
                    <Send size={16} />
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </button>
                  {status === 'error' && (
                    <p className="text-sm text-azul-deep" role="alert">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
