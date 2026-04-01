// Comparison — Refined table with visual emphasis on AX Flow column
import { AnimateIn } from '@/components/ui/AnimateIn'
import { COMPARISON_TABLE } from '@/lib/constants'

export function ComparisonSection() {
  return (
    <section className="relative bg-[var(--section-alt)] py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Comparison
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              기존 제조 AI 도입과 AX Flow는 다릅니다
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              &ldquo;AI를 빨리 써보는 것&rdquo;이 아니라 &ldquo;AI가 빨리 운영에 올라가고 확장되게 만드는 구조&rdquo;를 제공합니다.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-14 overflow-x-auto">
            <table className="mx-auto w-full max-w-3xl">
              <thead>
                <tr className="border-b-2 border-[var(--foreground)]/10">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                    비교 항목
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                    기존 제조 AI 도입
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-primary">
                    AX Flow
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row, i) => (
                  <tr
                    key={row.category}
                    className={`border-b border-[var(--border)] last:border-0 transition-colors hover:bg-primary/3 ${
                      i % 2 === 0 ? 'bg-[var(--surface)]/50' : ''
                    }`}
                  >
                    <td className="px-4 py-4 text-sm font-medium text-[var(--foreground)]">
                      {row.category}
                    </td>
                    <td className="px-4 py-4 text-sm text-[var(--text-secondary)]">
                      <span className="mr-1.5 text-red-400">✗</span>{row.others}
                    </td>
                    <td className="px-4 py-4 text-sm font-medium text-[var(--foreground)]">
                      <span className="mr-1.5 text-success">✓</span>{row.axflow}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
