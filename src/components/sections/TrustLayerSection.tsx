// 세일즈덱 6p — AX Guard Trust Layer: 안전·설명 가능성·통제

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
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            AX Guard — Trust Layer
          </h2>
          <p className="mt-3 text-lg text-[var(--text-secondary)]">
            AI가 한 모든 일에 근거와 이력이 남습니다
          </p>
        </div>

        {/* Trust 3축 */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center"
            >
              <span className="text-3xl">{pillar.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-[var(--foreground)]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* 규제 대응 뱃지 */}
        <div className="mt-10 text-center">
          <p className="text-sm font-semibold text-[var(--text-secondary)]">
            규제·인증 대응 내장
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            {REGULATIONS.map((reg) => (
              <span
                key={reg}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm font-medium text-[var(--foreground)]"
              >
                {reg}
              </span>
            ))}
          </div>
        </div>

        {/* 하단 메시지 */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-lg font-bold text-[var(--foreground)]">
            개인의 두 번째 뇌가 아닌, 조직의 두 번째 뇌.
          </p>
          <p className="mt-2 text-[var(--text-secondary)]">
            지식을 연결하고, 에이전트가 실행하고, AX Guard가 신뢰를 보장합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
