// 데모 신청 페이지 — 혜택 소개 + 도입 절차 + CTA
import type { Metadata } from 'next'
import { LeadForm } from '@/components/forms/LeadForm'
import { Badge } from '@/components/ui/Badge'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { DEMO_BENEFITS, ADOPTION_STEPS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'AX Flow 데모 신청 | 15분 무료 상담',
  description:
    '15분이면 귀사에 가장 적합한 워크플로우를 제안드립니다. 데모 체험, 무료 상담, 지원사업 연계까지.',
}

export default function DemoPage() {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        breadcrumbs={[
          { name: '홈', url: '/' },
          { name: '데모 신청', url: '/demo' },
        ]}
      />

      {/* 데모 혜택 소개 */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* 좌: 안내 */}
            <div>
              <Badge variant="success">무료</Badge>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                데모 체험 &amp; 무료 상담
              </h1>
              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                15분이면 귀사에 가장 적합한 워크플로우를 제안드립니다.
              </p>

              {/* 데모 혜택 */}
              <div className="mt-10 space-y-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  데모를 통해 확인할 수 있는 것
                </h3>
                {DEMO_BENEFITS.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--foreground)]">{benefit.title}</h4>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 도입 절차 */}
              <div className="mt-12">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  도입 절차
                </h3>
                <div className="mt-6 space-y-4">
                  {ADOPTION_STEPS.map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {s.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-[var(--foreground)]">{s.title}</h4>
                          <span className="rounded-full bg-[var(--surface)] px-2 py-0.5 text-xs text-[var(--text-secondary)]">
                            {s.duration}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-[var(--text-secondary)]">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 포함 내역 체크리스트 */}
              <div className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="font-semibold text-[var(--foreground)]">15분 무료 상담 포함 내역</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    '귀사 업종에서 가장 효과가 큰 워크플로우 1개 제안',
                    '해당 워크플로우의 예상 Before/After',
                    '정부 지원사업 연계 가능 여부',
                    '기업당 최대 6억 원, AI 기반 50% 지원',
                    'AI바우처 활용 가능성 검토',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="text-success">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 우: 폼 */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg sm:p-8 lg:sticky lg:top-24">
              <h2 className="text-lg font-bold text-[var(--foreground)]">
                데모 신청 및 무료 상담
              </h2>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                영업일 기준 1일 내 담당자가 연락드립니다.
              </p>
              <div className="mt-4">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
