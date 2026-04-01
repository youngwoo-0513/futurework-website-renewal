// Traction — Refined counter strip with dividers
import { Counter } from '@/components/ui/Counter'
import { TRACTION_STATS } from '@/lib/constants'

export function TractionSection() {
  return (
    <section className="relative border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {TRACTION_STATS.map((stat, i) => (
            <div key={stat.label} className="relative text-center">
              {i > 0 && (
                <div className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[var(--border)] sm:block" />
              )}
              <div className="text-base">{stat.icon}</div>
              <Counter value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
