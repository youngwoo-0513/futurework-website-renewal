// 세일즈덱 5p — Manufacturing OS 4-Layer 아키텍처 도식

const LAYERS = [
  {
    name: 'Govern',
    nameKo: '통제',
    description: '판단 근거, 감사 로그, 승인 이력, 킬스위치 기능으로 인간의 감독/승인하에 자율화',
    tech: ['AX Guard(불변 감사로그)'],
    color: 'from-[var(--foreground)]/10 to-[var(--foreground)]/5',
    border: 'border-[var(--foreground)]/20',
    accent: 'text-[var(--foreground)]',
  },
  {
    name: 'Execution',
    nameKo: '실행',
    description: '분석→문서→승인→후속 조치, 노코드 에이전트 빌더로 누구나 워크플로우 구축 가능',
    tech: ['Multi-Agent Orchestration'],
    color: 'from-primary/10 to-primary/5',
    border: 'border-primary/20',
    accent: 'text-primary',
  },
  {
    name: 'Structure',
    nameKo: '구조',
    description: '설비-공정-품질-원자재-규제 관계를 이해하는 구조화',
    tech: ['Vector DB', 'Graph DB', 'Graph RAG', 'Ontology'],
    color: 'from-accent/10 to-accent/5',
    border: 'border-accent/20',
    accent: 'text-accent',
  },
  {
    name: 'Connect',
    nameKo: '연결',
    description: 'MES·ERP·QMS·WMS·PLM·SCADA + 엑셀 + PDF + 카톡 + 사진 + 음성 + 암묵지 → 하나로 연결',
    tech: ['Connector', 'OCR/STT', 'MCP/A2A'],
    color: 'from-cta/10 to-cta/5',
    border: 'border-cta/20',
    accent: 'text-cta',
  },
]

export function PlatformLayerSection() {
  return (
    <section className="bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            기존 시스템을 바꾸지 않습니다
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            위에 AI 운영 레이어 한층을 깝니다
          </p>
        </div>

        {/* Manufacturing OS 레이어 도식 */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-bold text-[var(--text-secondary)] tracking-wider uppercase">
              Manufacturing OS
            </span>
            <span className="text-xl font-black text-primary">AX Flow</span>
          </div>

          {/* 4 Layers — 위에서 아래로 */}
          <div className="space-y-3">
            {LAYERS.map((layer, i) => (
              <div
                key={layer.name}
                className={`rounded-xl border ${layer.border} bg-gradient-to-r ${layer.color} p-5 sm:p-6`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                  {/* 레이어 이름 */}
                  <div className="flex items-baseline gap-2 sm:w-32 sm:shrink-0">
                    <span className={`text-lg font-black ${layer.accent}`}>
                      {layer.name}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)]">
                      {layer.nameKo}
                    </span>
                  </div>

                  {/* 설명 + 기술 태그 */}
                  <div className="flex-1">
                    <p className="text-sm text-[var(--foreground)]">
                      {layer.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {layer.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 레이어 간 화살표 */}
                {i < LAYERS.length - 1 && (
                  <div className="mt-2 text-center text-[var(--text-secondary)]">
                    ↑
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* + 기존 시스템 */}
          <div className="mt-4 flex items-center justify-center gap-2 text-lg font-bold text-[var(--text-secondary)]">
            +
          </div>
          <div className="mt-2 rounded-xl border border-dashed border-[var(--border)] bg-[var(--background)] p-4 text-center">
            <span className="text-sm font-semibold text-[var(--text-secondary)]">
              기존 시스템 및 데이터
            </span>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              MES, ERP, QMS, WMS, PLM, PDF, 카톡, 수기메모, 음성메모 등
            </p>
          </div>
        </div>

        {/* 하단 메시지 */}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            기존 데이터나 시스템(MES, WMS, QMS, ERP 등)에 번들 및 OEM으로 탑재 가능하며,
            <br className="hidden sm:block" />
            한번 쌓인 데이터 구조·워크플로우는 모델이 바뀌어도 그대로 유지되어
            <strong className="text-[var(--foreground)]"> 연속성 있는 사업</strong>이 가능합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
