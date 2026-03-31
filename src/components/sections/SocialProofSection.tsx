// Design Ref: §5.4 — SocialProof: KPI 카운터 + 증언 + CTA
import { Counter } from '@/components/ui/Counter'
import { Button } from '@/components/ui/Button'
import { KPI_STATS, TESTIMONIALS, SOCIAL_PROOF_CTA } from '@/lib/constants'

export function SocialProofSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            검증된 성과
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            제조 현장에서 증명된 AI 도입 효과
          </p>
        </div>

        {/* KPI 카운터 4개 */}
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {KPI_STATS.map((stat) => (
            <Counter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* ROI 비교표 */}
        <div className="mt-16 overflow-x-auto">
          <table className="mx-auto w-full max-w-2xl">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">항목</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-primary">AX Flow 도입</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--text-secondary)]">일반 AI 도입</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: '도입 기간', ax: '2주 PoC', general: '3~6개월' },
                { item: '초기 성과 확인', ax: 'PoC 중 즉시', general: '6개월 이후' },
                { item: '성과증빙', ax: '자동 KPI 리포트', general: '수작업 취합' },
                { item: '추가 개발', ax: '불필요 (운영 레이어)', general: '지속적 커스텀 필요' },
              ].map((row) => (
                <tr key={row.item} className="border-b border-[var(--border)] last:border-0">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--foreground)]">{row.item}</td>
                  <td className="px-4 py-3 text-center text-sm text-primary">{row.ax}</td>
                  <td className="px-4 py-3 text-center text-sm text-[var(--text-secondary)]">{row.general}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 고객 증언 */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <p className="text-sm leading-relaxed text-[var(--foreground)]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--foreground)]">
                    {t.author}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href={SOCIAL_PROOF_CTA.href} variant={SOCIAL_PROOF_CTA.variant}>
            {SOCIAL_PROOF_CTA.text}
          </Button>
        </div>
      </div>
    </section>
  )
}
