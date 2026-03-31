// Design Ref: §5.4 — Solution: Pain→Solution 매핑 + Before/After + CTA
import { Button } from '@/components/ui/Button'
import { SOLUTIONS, SOLUTION_CTA } from '@/lib/constants'

export function SolutionSection() {
  return (
    <section className="bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            AX Flow가 해결합니다
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            기능 추가가 아닌, 운영 방식의 재설계
          </p>
        </div>

        {/* Before/After 비교 테이블 */}
        <div className="mt-12 overflow-x-auto">
          <table className="mx-auto w-full max-w-3xl">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">
                  문제
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">
                  AX Flow 솔루션
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-red-500">
                  Before
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-success">
                  After
                </th>
              </tr>
            </thead>
            <tbody>
              {SOLUTIONS.map((item) => (
                <tr
                  key={item.pain}
                  className="border-b border-[var(--border)] last:border-0"
                >
                  <td className="px-4 py-4 text-sm text-[var(--foreground)]">
                    {item.pain}
                  </td>
                  <td className="px-4 py-4 text-sm text-[var(--text-secondary)]">
                    {item.solution}
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-red-500">
                    {item.before}
                  </td>
                  <td className="px-4 py-4 text-center text-sm font-medium text-success">
                    {item.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <Button href={SOLUTION_CTA.href} variant={SOLUTION_CTA.variant}>
            {SOLUTION_CTA.text}
          </Button>
        </div>
      </div>
    </section>
  )
}
