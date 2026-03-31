// Design Ref: §5.4 — 데모/PoC 신청 페이지
import type { Metadata } from 'next'
import { LeadForm } from '@/components/forms/LeadForm'
import { Badge } from '@/components/ui/Badge'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'

export const metadata: Metadata = {
  title: 'AX Flow 도입 문의 | 무료 PoC 신청',
  description:
    '제조업 AI 도입 가능성 무료 진단. 2주 PoC로 현장 성과 확인.',
}

const POC_STEPS = [
  { step: '1', title: '무료 진단', desc: '현장 데이터 현황 파악 및 AI 도입 가능성 진단' },
  { step: '2', title: '2주 PoC', desc: '실제 데이터로 AX Flow 적용, 성과 데이터 자동 생성' },
  { step: '3', title: '본도입 결정', desc: 'PoC 결과 기반 ROI 확인 후 본도입 여부 결정' },
]

const POC_INCLUDES = [
  '현장 데이터 연동 분석',
  'AI 적용 가능 영역 도출',
  '예상 ROI 산출',
  '지원사업 연계 가능성 검토',
  '2주 PoC 제안서 제공',
]

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

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* 좌: 안내 */}
            <div>
              <Badge variant="success">무료</Badge>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                제조업 AI 도입 가능성
                <br />
                무료 진단
              </h1>
              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                2주 PoC로 현장 성과를 직접 확인하세요.
              </p>

              {/* PoC 프로세스 */}
              <div className="mt-10 space-y-6">
                {POC_STEPS.map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)]">{s.title}</h3>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 포함 내역 */}
              <div className="mt-10">
                <h3 className="font-semibold text-[var(--foreground)]">무료 진단 포함 내역</h3>
                <ul className="mt-3 space-y-2">
                  {POC_INCLUDES.map((item) => (
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
                무료 진단 신청
              </h2>
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
