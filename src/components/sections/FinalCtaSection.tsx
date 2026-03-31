// FinalCTA: 수정6 — "1일 이내 담당자 매칭"
import { LeadForm } from '@/components/forms/LeadForm'
import { FINAL_CTA_COPY } from '@/lib/constants'

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <h2 className="text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            {FINAL_CTA_COPY.headline.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-3 text-center text-[var(--text-secondary)]">
            {FINAL_CTA_COPY.subheadline}
          </p>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
