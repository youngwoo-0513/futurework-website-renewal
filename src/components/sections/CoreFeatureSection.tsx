// 핵심 기능 4개 — Refined cards with hover interactions
import { Button } from '@/components/ui/Button'
import { AnimateIn, StaggerChildren } from '@/components/ui/AnimateIn'
import { CORE_FEATURES } from '@/lib/constants'

export function CoreFeatureSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Core Platform
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              같은 사람, 같은 현장. 바뀌는 건 일하는 방식뿐.
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              AX Flow 4대 핵심 기능 — Chatting · Library · Agent · Governance
            </p>
          </div>
        </AnimateIn>

        <StaggerChildren className="mt-14 grid gap-5 sm:grid-cols-2" stagger={0.1}>
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_-12px_rgba(0,184,94,0.12)] sm:p-8"
            >
              {/* Subtle glow on hover */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* 헤더 */}
              <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-xl transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
                    {feature.title}
                  </h3>
                  <span className="text-xs text-[var(--text-tertiary)]">
                    {feature.subtitle}
                  </span>
                </div>
                <div className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-bold text-primary">
                  {feature.metric}
                </div>
              </div>

              {/* 설명 */}
              <p className="relative mt-4 text-sm font-medium text-[var(--foreground)]">
                {feature.headline}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {feature.description}
              </p>

              {/* 업종별 활용 */}
              <div className="mt-5 space-y-2">
                {feature.useCases.slice(0, 3).map((uc) => (
                  <div key={uc.industry} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <span className="inline-flex items-center rounded-md border border-primary/15 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold text-primary">
                      {uc.industry}
                    </span>
                    <span>{uc.example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </StaggerChildren>

        {/* 데모 체험 CTA */}
        <AnimateIn delay={0.3}>
          <div className="mt-14 text-center">
            <Button href="/demo" size="lg">
              데모 체험해보기 →
            </Button>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              15분이면 귀사에 가장 적합한 워크플로우 1개를 제안드립니다.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
