// Solution — Refined table with alternating row highlights
import { Button } from '@/components/ui/Button'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { SOLUTIONS, SOLUTION_CTA } from '@/lib/constants'

export function SolutionSection() {
  return (
    <section className="relative bg-[var(--section-alt)] py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Solution
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              AX Flow가 해결합니다
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              기능 추가가 아닌, 운영 방식의 재설계
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-14 overflow-x-auto">
            <table className="mx-auto w-full max-w-3xl">
              <thead>
                <tr className="border-b-2 border-[var(--foreground)]/10">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                    문제
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                    AX Flow 솔루션
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-red-400">
                    Before
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-success">
                    After
                  </th>
                </tr>
              </thead>
              <tbody>
                {SOLUTIONS.map((item, i) => (
                  <tr
                    key={item.pain}
                    className={`border-b border-[var(--border)] last:border-0 transition-colors hover:bg-primary/3 ${
                      i % 2 === 0 ? 'bg-[var(--surface)]/50' : ''
                    }`}
                  >
                    <td className="px-4 py-4 text-sm font-medium text-[var(--foreground)]">
                      {item.pain}
                    </td>
                    <td className="px-4 py-4 text-sm text-[var(--text-secondary)]">
                      {item.solution}
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-red-400">
                      {item.before}
                    </td>
                    <td className="px-4 py-4 text-center text-sm font-semibold text-success">
                      {item.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="mt-12 text-center">
            <Button href={SOLUTION_CTA.href} variant={SOLUTION_CTA.variant}>
              {SOLUTION_CTA.text}
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
