// FinalCTA — Dramatic dark background with glow
import { LeadForm } from '@/components/forms/LeadForm'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { FINAL_CTA_COPY } from '@/lib/constants'

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-[var(--foreground)] py-20 sm:py-28">
      {/* Radial glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="mx-auto max-w-md">
            <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--background)] sm:text-4xl">
              {FINAL_CTA_COPY.headline.split('\n').map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-4 text-center text-[var(--text-tertiary)]">
              {FINAL_CTA_COPY.subheadline}
            </p>
            <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-2xl sm:p-8">
              <LeadForm />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
