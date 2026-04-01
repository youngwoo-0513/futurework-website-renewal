// Subsidy Content — Refined with section labels and card styling
import { Button } from '@/components/ui/Button'
import { AnimateIn, StaggerChildren } from '@/components/ui/AnimateIn'

const SUBSIDY_INFO = [
  {
    title: '지원 대상',
    content: '중소·중견 제조기업 (업종 무관)',
  },
  {
    title: '지원 금액',
    content: '사업비의 최대 50% 지원',
  },
  {
    title: '지원 내용',
    content: 'AI·IoT 기반 스마트공장 고도화 (AX Flow 도입 연계 가능)',
  },
  {
    title: '신청 시기',
    content: '2026년 상반기 모집 (마감 임박)',
  },
]

export function SubsidyContentSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 지원사업 개요 */}
        <AnimateIn>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
            Overview
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            지원사업 핵심 정보
          </h2>
        </AnimateIn>
        <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {SUBSIDY_INFO.map((info) => (
            <div
              key={info.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">{info.title}</h3>
              <p className="mt-3 text-sm font-medium text-[var(--foreground)]">{info.content}</p>
            </div>
          ))}
        </StaggerChildren>

        {/* 성공 사례 요약 */}
        <AnimateIn delay={0.2}>
          <div className="mt-20">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Case Studies
            </p>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              지원사업 연계 성공 사례
            </h2>
          </div>
        </AnimateIn>
        <StaggerChildren className="mt-10 grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto" stagger={0.1}>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:shadow-md">
            <span className="inline-flex items-center rounded-md border border-primary/15 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold text-primary">
              자동차 부품 제조 · 300인
            </span>
            <h3 className="mt-3 font-bold tracking-tight text-[var(--foreground)]">배치 자동화 3시간 → 20분</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              스마트공장 고도화 지원사업 연계로 AX Flow 도입. 2주 PoC에서 배치 작업 자동화 성과를 확인하고 본도입 결정. 지원금으로 도입 비용 50% 절감.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:shadow-md">
            <span className="inline-flex items-center rounded-md border border-primary/15 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold text-primary">
              전자부품 제조 · 150인
            </span>
            <h3 className="mt-3 font-bold tracking-tight text-[var(--foreground)]">불량 분석 6시간 → 20분</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              PoC 기간 중 자동 생성된 KPI 리포트로 성과증빙 완료. 후속 과제 수주까지 연결하여 추가 지원금 확보에 성공.
            </p>
          </div>
        </StaggerChildren>

        {/* AX Flow 연계 */}
        <AnimateIn delay={0.3}>
          <div className="mt-20 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
              AX Flow + 지원사업 = 최적 조합
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              AX Flow는 2주 PoC로 성과 데이터를 자동 생성합니다.
              지원사업 성과증빙에 필요한 KPI를 실시간으로 추적하여
              후속 과제 수주까지 연결합니다.
            </p>
            <div className="mt-10">
              <Button href="/demo" size="lg">
                무료 진단 신청하기
              </Button>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
