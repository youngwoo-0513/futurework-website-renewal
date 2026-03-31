// Design Ref: §5.4 — 기능 상세 (온톨로지/RAG/워크플로우) + 비교 테이블
import { Card } from '@/components/ui/Card'

const FEATURES = [
  {
    icon: '🧠',
    title: '제조 전문 온톨로지',
    description:
      'ERP, MES, Excel, PDF, 수기문서, 암묵지까지 — 제조 현장의 모든 데이터를 의미 기반으로 연결합니다. 데이터 사일로를 해소하고 실시간 통합 뷰를 제공합니다.',
  },
  {
    icon: '🔍',
    title: 'RAG 기반 지식 검색',
    description:
      '제조 도메인에 최적화된 RAG로 매뉴얼, 과거 불량 이력, 설비 데이터에서 정확한 답을 찾습니다. 의사결정 시간을 98% 단축합니다.',
  },
  {
    icon: '⚡',
    title: 'AI 워크플로우 자동화',
    description:
      'AI가 단순 분석이 아닌 실제 업무를 직접 실행합니다. 배치 자동화 3시간→20분, 불량 분석 6시간→20분. 기능 추가가 아닌 운영 재설계.',
  },
]

const COMPARISON = [
  { category: '데이터 통합', axflow: '온톨로지 기반 자동 연결', others: '수동 매핑 필요' },
  { category: '지식 검색', axflow: '제조 전문 RAG', others: '범용 챗봇' },
  { category: '업무 자동화', axflow: 'AI가 직접 실행', others: '분석 결과만 제공' },
  { category: '도입 기간', axflow: '2주 PoC', others: '3~6개월' },
  { category: '현장 적용', axflow: '운영 레이어 (바로 활용)', others: '추가 개발 필요' },
]

export function ProductFeatureSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 핵심 기능 3개 */}
        <h2 className="text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          핵심 기능
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>

        {/* 비교 테이블 */}
        <h2 className="mt-20 text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          AX Flow vs 일반 AI 솔루션
        </h2>
        <div className="mt-8 overflow-x-auto">
          <table className="mx-auto w-full max-w-2xl">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">비교 항목</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-primary">AX Flow</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-secondary)]">일반 솔루션</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.category} className="border-b border-[var(--border)] last:border-0">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--foreground)]">{row.category}</td>
                  <td className="px-4 py-3 text-sm text-primary">{row.axflow}</td>
                  <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 연동 시스템 */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">연동 가능 시스템</h3>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {['ERP', 'MES', 'Excel', 'PDF', '수기문서', '암묵지', 'WMS', 'QMS'].map((sys) => (
              <span
                key={sys}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]"
              >
                {sys}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
