// SocialProof: 성과 케이스 + 고객 증언 (세일즈덱 원문)
import { Button } from '@/components/ui/Button'
import { PERFORMANCE_CASES, TESTIMONIALS, SOCIAL_PROOF_CTA } from '@/lib/constants'

export function SocialProofSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            이미 평균 생산성 향상 89%를 달성했습니다
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            검증은 끝났습니다. 현장의 목소리가 증거입니다.
          </p>
        </div>

        {/* 성과 케이스 3개 */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {PERFORMANCE_CASES.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center"
            >
              <h3 className="text-sm font-medium text-[var(--text-secondary)]">{c.title}</h3>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">{c.description}</p>
              <div className="mt-4 text-3xl font-black text-primary sm:text-4xl">
                {c.metric}
              </div>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{c.detail}</p>
            </div>
          ))}
        </div>

        {/* 고객 증언 */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <blockquote
              key={i}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <p className="text-sm leading-relaxed text-[var(--foreground)]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--foreground)]">
                    {t.author}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href={SOCIAL_PROOF_CTA.href} variant={SOCIAL_PROOF_CTA.variant}>
            {SOCIAL_PROOF_CTA.text}
          </Button>
        </div>
      </div>
    </section>
  )
}
