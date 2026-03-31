// 핵심 기능 4개 — 실무자 관점 + 데모체험 CTA
import { Button } from '@/components/ui/Button'
import { CORE_FEATURES } from '@/lib/constants'

export function CoreFeatureSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            같은 사람, 같은 현장. 바뀌는 건 일하는 방식뿐.
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            AX Flow 4대 핵심 기능 — Chatting · Library · Agent · Governance
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-lg sm:p-8"
            >
              {/* 헤더 */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">
                    {feature.title}
                  </h3>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {feature.subtitle}
                  </span>
                </div>
                <div className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                  {feature.metric}
                </div>
              </div>

              {/* 설명 */}
              <p className="mt-4 text-sm font-medium text-[var(--foreground)]">
                {feature.headline}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {feature.description}
              </p>

              {/* 업종별 활용 */}
              <div className="mt-4 space-y-1.5">
                {feature.useCases.slice(0, 3).map((uc) => (
                  <div key={uc.industry} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <span className="inline-block rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                      {uc.industry}
                    </span>
                    <span>{uc.example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 데모 체험 CTA */}
        <div className="mt-12 text-center">
          <Button href="/demo" size="lg">
            데모 체험해보기 →
          </Button>
          <p className="mt-3 text-sm text-[var(--text-secondary)]">
            15분이면 귀사에 가장 적합한 워크플로우 1개를 제안드립니다.
          </p>
        </div>
      </div>
    </section>
  )
}
