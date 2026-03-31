// Hero: 후킹 문구 + 50% 지원 + CTA (AX Flow 알아보기)
import { Button } from '@/components/ui/Button'
import { HERO_COPY, HERO_STATS } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* 긴급성 뱃지 */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta/30 bg-cta/5 px-4 py-1.5 text-sm font-medium text-cta">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cta" />
            </span>
            2026 스마트공장 지원사업 — AI 도입비 50% 지원
          </div>

          {/* 헤드라인 */}
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            {HERO_COPY.headline.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>

          {/* 서브헤드라인 */}
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
            {HERO_COPY.subheadline}
          </p>

          {/* 핵심 수치 3개 */}
          <div className="mt-8 flex items-center justify-center gap-6 sm:gap-10">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA 2개 */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button href="/product/ax-flow" size="lg">
              {HERO_COPY.primaryCta}
            </Button>
            <Button href="/solutions/subsidy-guide" variant="secondary" size="lg">
              {HERO_COPY.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
