// Problem: 세일즈덱 기반 실무자 관점 Pain Point
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PAIN_POINTS, PROBLEM_CTA } from '@/lib/constants'

export function ProblemSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            제조 현장에서 반복되는 2가지 문제
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            핵심 인력이 데이터 핸들링에 묶여 있고, AI를 도입해도 PoC에서 끝납니다.
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

        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            시간도 잃고, 투자도 잃는 구조. &ldquo;더 좋은 AI&rdquo;가 아니라 &ldquo;운영에 올라가는 구조&rdquo;가 필요합니다.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Button href={PROBLEM_CTA.href} variant={PROBLEM_CTA.variant}>
            {PROBLEM_CTA.text}
          </Button>
        </div>
      </div>
    </section>
  )
}
