// Design Ref: §5.4 — 지원사업 자격/일정/연계 콘텐츠 + 성공 사례
import { Button } from '@/components/ui/Button'

const SUBSIDY_INFO = [
  {
    title: '지원 대상',
    content: '중소·중견 제조기업 (업종 무관)',
  },
  {
    title: '지원 금액',
    content: '사업비의 최대 50% (최대 1억원)',
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
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 지원사업 개요 */}
        <h2 className="text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          지원사업 핵심 정보
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SUBSIDY_INFO.map((info) => (
            <div
              key={info.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <h3 className="text-sm font-semibold text-primary">{info.title}</h3>
              <p className="mt-2 text-sm text-[var(--foreground)]">{info.content}</p>
            </div>
          ))}
        </div>

        {/* 성공 사례 요약 */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            지원사업 연계 성공 사례
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <span className="text-xs font-semibold text-primary">자동차 부품 제조 · 300인</span>
              <h3 className="mt-2 font-semibold text-[var(--foreground)]">배치 자동화 3시간 → 20분</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                스마트공장 고도화 지원사업 연계로 AX Flow 도입. 2주 PoC에서 배치 작업 자동화 성과를 확인하고 본도입 결정. 지원금으로 도입 비용 50% 절감.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <span className="text-xs font-semibold text-primary">전자부품 제조 · 150인</span>
              <h3 className="mt-2 font-semibold text-[var(--foreground)]">불량 분석 6시간 → 20분</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                PoC 기간 중 자동 생성된 KPI 리포트로 성과증빙 완료. 후속 과제 수주까지 연결하여 추가 지원금 확보에 성공.
              </p>
            </div>
          </div>
        </div>

        {/* AX Flow 연계 */}
        <div className="mt-16 mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            AX Flow + 지원사업 = 최적 조합
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            AX Flow는 2주 PoC로 성과 데이터를 자동 생성합니다.
            지원사업 성과증빙에 필요한 KPI를 실시간으로 추적하여
            후속 과제 수주까지 연결합니다.
          </p>
          <div className="mt-8">
            <Button href="/demo" size="lg">
              무료 진단 신청하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
