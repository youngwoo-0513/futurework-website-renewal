// Design Ref: §5.4 — Problem: Pain Point 4개 카드 + CTA
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PAIN_POINTS, PROBLEM_CTA } from '@/lib/constants'

export function ProblemSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            이런 문제, 겪고 계시죠?
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            제조 현장에서 매일 반복되는 비효율, AI로 해결할 수 있습니다.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map((point) => (
            <Card
              key={point.title}
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href={PROBLEM_CTA.href} variant={PROBLEM_CTA.variant}>
            {PROBLEM_CTA.text}
          </Button>
        </div>
      </div>
    </section>
  )
}
