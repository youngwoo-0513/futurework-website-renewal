// 트랙션/신뢰 신호 — 홈페이지 상단에 배치
import { TRACTION_STATS } from '@/lib/constants'

export function TractionSection() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {TRACTION_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-sm">{stat.icon}</div>
              <div className="mt-1 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-[var(--text-secondary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
