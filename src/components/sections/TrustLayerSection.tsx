// AX Guard Trust Layer — Refined with monochrome cards
import { AnimateIn, StaggerChildren } from '@/components/ui/AnimateIn'

const TRUST_PILLARS = [
  {
    title: '안전',
    description: '프롬프트 인젝션 방어 + 이상행동 자동차단',
    icon: '🛡️',
  },
  {
    title: '설명 가능성',
    description: '모든 판단에 근거 명시. 감사보고서 자동 생성',
    icon: '📋',
  },
  {
    title: '통제',
    description: '사람이 승인 수준을 직접 설정. 킬스위치.',
    icon: '🔐',
  },
]

const REGULATIONS = [
  'GMP', 'HACCP', 'ISO', 'AI기본법', 'EU AI Act',
]

export function TrustLayerSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Trust & Governance
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              AX Guard — Trust Layer
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              AI가 한 모든 일에 근거와 이력이 남습니다
            </p>
          </div>
        </AnimateIn>

        {/* Trust 3축 */}
        <StaggerChildren className="mt-14 grid gap-5 sm:grid-cols-3" stagger={0.1}>
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_-12px_rgba(0,184,94,0.12)]"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--foreground)]/5 text-3xl transition-transform duration-300 group-hover:scale-110">
                {pillar.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-[var(--foreground)]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </StaggerChildren>

        {/* 규제 대응 뱃지 */}
        <AnimateIn delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
              규제·인증 대응 내장
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {REGULATIONS.map((reg) => (
                <span
                  key={reg}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--foreground)]"
                >
                  {reg}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* 하단 메시지 */}
        <AnimateIn delay={0.4}>
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-xl font-bold tracking-tight text-[var(--foreground)]">
              개인의 두 번째 뇌가 아닌, 조직의 두 번째 뇌.
            </p>
            <p className="mt-3 text-[var(--text-secondary)]">
              지식을 연결하고, 에이전트가 실행하고, AX Guard가 신뢰를 보장합니다.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
