// Design Ref: §5.4 — FinalCTA: 2-Step 리드 폼 + 긴급성 카피 + 신뢰 배지
// Plan SC: 리드 폼 전환율 5% 이상
import { LeadForm } from '@/components/forms/LeadForm'
import { FINAL_CTA_COPY } from '@/lib/constants'

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <h2 className="text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            {FINAL_CTA_COPY.headline}
          </h2>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
