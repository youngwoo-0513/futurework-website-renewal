// 연동 가능 시스템 — AX Flow 중심 허브 형태
import { INTEGRATION_SYSTEMS } from '@/lib/constants'

export function IntegrationHubSection() {
  const systems = INTEGRATION_SYSTEMS.filter((s) => s.category === 'system')
  const documents = INTEGRATION_SYSTEMS.filter((s) => s.category === 'document')
  const unstructured = INTEGRATION_SYSTEMS.filter((s) => s.category === 'unstructured')

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            기존 시스템을 바꾸지 않습니다
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            위에 AI 운영 레이어 한층을 깝니다. 모든 데이터를 하나로 연결합니다.
          </p>
        </div>

        {/* 허브 시각화 */}
        <div className="relative mx-auto mt-16 max-w-2xl">
          {/* 중앙 AX Flow */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 sm:h-32 sm:w-32">
            <div className="text-center">
              <div className="text-lg font-bold sm:text-xl">AX Flow</div>
            </div>
          </div>

          {/* 시스템 (상단) */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="mb-2 w-full text-center text-xs font-semibold text-primary">기간 시스템</span>
            {systems.map((sys) => (
              <span
                key={sys.label}
                className="rounded-full border-2 border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-primary/60"
              >
                {sys.label}
              </span>
            ))}
          </div>

          {/* 문서 (중단) */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="mb-2 w-full text-center text-xs font-semibold text-accent">문서·파일</span>
            {documents.map((sys) => (
              <span
                key={sys.label}
                className="rounded-full border-2 border-accent/30 bg-accent/5 px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-accent/60"
              >
                {sys.label}
              </span>
            ))}
          </div>

          {/* 비정형 (하단) */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="mb-2 w-full text-center text-xs font-semibold text-cta">비정형 데이터</span>
            {unstructured.map((sys) => (
              <span
                key={sys.label}
                className="rounded-full border-2 border-cta/30 bg-cta/5 px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-cta/60"
              >
                {sys.label}
              </span>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[var(--text-secondary)]">
            기존 데이터나 시스템(MES, WMS, QMS, ERP 등)에 번들 및 OEM으로 탑재 가능하며,<br className="hidden sm:block" />
            한번 쌓인 데이터 구조·워크플로우는 모델이 바뀌어도 그대로 유지되어 연속성 있는 사업이 가능합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
