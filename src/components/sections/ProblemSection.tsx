// Problem — Asymmetric layout with animated cards
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnimateIn, StaggerChildren } from '@/components/ui/AnimateIn'
import { PAIN_POINTS, PROBLEM_CTA } from '@/lib/constants'

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Pain Points
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              제조 현장에서 반복되는 2가지 문제
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              핵심 인력이 데이터 핸들링에 묶여 있고, AI를 도입해도 PoC에서 끝납니다.
            </p>
          </div>
        </AnimateIn>

        <StaggerChildren className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map((point) => (
            <Card
              key={point.title}
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          ))}
        </StaggerChildren>

        <AnimateIn delay={0.3}>
          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-[var(--text-secondary)]">
              시간도 잃고, 투자도 잃는 구조. &ldquo;더 좋은 AI&rdquo;가 아니라 &ldquo;운영에 올라가는 구조&rdquo;가 필요합니다.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button href={PROBLEM_CTA.href} variant={PROBLEM_CTA.variant}>
              {PROBLEM_CTA.text}
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
