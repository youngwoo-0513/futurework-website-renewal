// Integration Hub — Concentric ring layout with animated tags
import { AnimateIn, StaggerChildren } from '@/components/ui/AnimateIn'
import { INTEGRATION_SYSTEMS } from '@/lib/constants'

export function IntegrationHubSection() {
  const systems = INTEGRATION_SYSTEMS.filter((s) => s.category === 'system')
  const documents = INTEGRATION_SYSTEMS.filter((s) => s.category === 'document')
  const unstructured = INTEGRATION_SYSTEMS.filter((s) => s.category === 'unstructured')

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Integration
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              기존 시스템을 바꾸지 않습니다
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              위에 AI 운영 레이어 한층을 깝니다. 모든 데이터를 하나로 연결합니다.
            </p>
          </div>
        </AnimateIn>

        {/* 허브 시각화 */}
        <div className="relative mx-auto mt-16 max-w-2xl">
          {/* 중앙 AX Flow */}
          <AnimateIn direction="none">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] shadow-[0_0_0_8px_var(--glow-color),0_0_60px_-12px_rgba(0,184,94,0.3)] sm:h-36 sm:w-36">
              <div className="text-center">
                <div className="text-xl font-bold sm:text-2xl">AX Flow</div>
              </div>
            </div>
          </AnimateIn>

          {/* 시스템 (상단) */}
          <StaggerChildren className="mt-10 flex flex-wrap justify-center gap-2.5" stagger={0.06}>
            <span className="mb-2 w-full text-center text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
              기간 시스템
            </span>
            {systems.map((sys) => (
              <span
                key={sys.label}
                className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:border-primary/40 hover:shadow-[0_2px_12px_-4px_rgba(0,184,94,0.2)]"
              >
                {sys.label}
              </span>
            ))}
          </StaggerChildren>

          {/* 문서 (중단) */}
          <StaggerChildren className="mt-6 flex flex-wrap justify-center gap-2.5" stagger={0.06}>
            <span className="mb-2 w-full text-center text-[10px] font-bold uppercase tracking-[0.15em] text-accent-dark">
              문서·파일
            </span>
            {documents.map((sys) => (
              <span
                key={sys.label}
                className="rounded-lg border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:border-accent/40 hover:shadow-[0_2px_12px_-4px_rgba(0,255,133,0.15)]"
              >
                {sys.label}
              </span>
            ))}
          </StaggerChildren>

          {/* 비정형 (하단) */}
          <StaggerChildren className="mt-6 flex flex-wrap justify-center gap-2.5" stagger={0.06}>
            <span className="mb-2 w-full text-center text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
              비정형 데이터
            </span>
            {unstructured.map((sys) => (
              <span
                key={sys.label}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:border-[var(--text-tertiary)] hover:shadow-md"
              >
                {sys.label}
              </span>
            ))}
          </StaggerChildren>

          <AnimateIn delay={0.4}>
            <p className="mt-10 text-center text-sm leading-relaxed text-[var(--text-secondary)]">
              기존 데이터나 시스템(MES, WMS, QMS, ERP 등)에 번들 및 OEM으로 탑재 가능하며,<br className="hidden sm:block" />
              한번 쌓인 데이터 구조·워크플로우는 모델이 바뀌어도 그대로 유지되어 연속성 있는 사업이 가능합니다.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
