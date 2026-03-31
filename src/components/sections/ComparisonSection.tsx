// AX Flow vs 일반 AI 비교표 — 온톨로지 자산 연속성 포함
import { COMPARISON_TABLE } from '@/lib/constants'

export function ComparisonSection() {
  return (
    <section className="bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            기존 제조 AI 도입과 AX Flow는 다릅니다
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            &ldquo;AI를 빨리 써보는 것&rdquo;이 아니라 &ldquo;AI가 빨리 운영에 올라가고 확장되게 만드는 구조&rdquo;를 제공합니다.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="mx-auto w-full max-w-3xl">
            <thead>
              <tr className="border-b-2 border-[var(--border)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">
                  비교 항목
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-secondary)]">
                  기존 제조 AI 도입
                </th>
                <th className="px-4 py-3 text-left text-sm font-bold text-primary">
                  AX Flow
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_TABLE.map((row) => (
                <tr key={row.category} className="border-b border-[var(--border)] last:border-0">
                  <td className="px-4 py-4 text-sm font-medium text-[var(--foreground)]">
                    {row.category}
                  </td>
                  <td className="px-4 py-4 text-sm text-[var(--text-secondary)]">
                    <span className="text-red-400">✗</span> {row.others}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-primary">
                    <span className="text-success">✓</span> {row.axflow}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
