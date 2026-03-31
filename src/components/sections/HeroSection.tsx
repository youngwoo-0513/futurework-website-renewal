// Design Ref: §5.4 — Hero: 헤드라인 + 수치 3개 + CTA 2개 + 로고바
import { Button } from '@/components/ui/Button'
import { LogoBar } from '@/components/ui/LogoBar'
import { HERO_COPY, HERO_STATS } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
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
          <div className="mt-8 flex items-center justify-center gap-8 sm:gap-12">
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
            <Button href="#final-cta" size="lg">
              {HERO_COPY.primaryCta}
            </Button>
            <Button href="/product/ax-flow" variant="secondary" size="lg">
              {HERO_COPY.secondaryCta}
            </Button>
          </div>
        </div>

        {/* 신뢰 로고바 */}
        <div className="mt-16">
          <p className="mb-4 text-center text-xs text-[var(--text-secondary)]">
            함께하는 파트너사
          </p>
          <LogoBar />
        </div>
      </div>
    </section>
  )
}
