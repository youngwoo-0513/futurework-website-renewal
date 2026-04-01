// SocialProof — Editorial testimonials with dramatic metrics
import { Button } from '@/components/ui/Button'
import { AnimateIn, StaggerChildren } from '@/components/ui/AnimateIn'
import { PERFORMANCE_CASES, TESTIMONIALS, SOCIAL_PROOF_CTA } from '@/lib/constants'

export function SocialProofSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Proven Results
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              이미 평균 생산성 향상 89%를 달성했습니다
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              검증은 끝났습니다. 현장의 목소리가 증거입니다.
            </p>
          </div>
        </AnimateIn>

        {/* 성과 케이스 3개 */}
        <StaggerChildren className="mt-14 grid gap-5 sm:grid-cols-3" stagger={0.1}>
          {PERFORMANCE_CASES.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_-12px_rgba(0,184,94,0.12)]"
            >
              <h3 className="text-sm font-semibold text-[var(--text-secondary)]">{c.title}</h3>
              <p className="mt-1 text-xs text-[var(--text-tertiary)]">{c.description}</p>
              <div className="mt-5 text-4xl font-black tracking-tight text-gradient-green sm:text-5xl">
                {c.metric}
              </div>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{c.detail}</p>
            </div>
          ))}
        </StaggerChildren>

        {/* 고객 증언 */}
        <StaggerChildren className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <blockquote
              key={i}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-primary/20"
            >
              {/* Quote mark */}
              <span className="text-3xl leading-none text-primary/30">&ldquo;</span>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-[var(--foreground)]">
                {t.quote}
              </p>
              <footer className="mt-5 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-bold text-[var(--background)]">
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--foreground)]">
                    {t.author}
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </footer>
            </blockquote>
          ))}
        </StaggerChildren>

        <AnimateIn delay={0.3}>
          <div className="mt-12 text-center">
            <Button href={SOCIAL_PROOF_CTA.href} variant={SOCIAL_PROOF_CTA.variant}>
              {SOCIAL_PROOF_CTA.text}
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
