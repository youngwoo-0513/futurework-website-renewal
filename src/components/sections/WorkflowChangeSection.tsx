// 세일즈덱 4p — Work Flow 변화: Before/After 타임라인 + 업종별 시나리오 + 역할 전환

const WORKFLOW_NOW = [
  { step: '불량발생', time: '' },
  { step: 'MES 로그인', time: '10분' },
  { step: 'ERP 교차확인', time: '20분' },
  { step: '과거사례 수동검색', time: '1시간' },
  { step: '원인후보 정리', time: '1시간' },
  { step: '보고서 초안', time: '1시간' },
  { step: '검토·수정', time: '1시간' },
  { step: '보고서 작성', time: '30분' },
]

const WORKFLOW_AFTER = [
  { step: '불량발생', time: '', highlight: false },
  { step: '공정·설비·원자재 이력\n자동연결', time: '', highlight: true },
  { step: '원인 후보\n자동도출', time: '', highlight: true },
  { step: '보고서\n자동생성', time: '', highlight: true },
  { step: '검토승인\n(담당자)', time: '', highlight: false },
  { step: '후속조치\n자동실행', time: '', highlight: true },
]

const INDUSTRY_SCENARIOS = [
  {
    industry: '제약/건기식 GMP',
    before: '배치기록 수기 3~4시간 + 규제 변경 시 영향 SOP 수일 소요',
    after: '배치기록 자동 생성 20분 + HITL 검토·서명 + SOP 영향 당일 식별',
    roleChange: 'QA: 수기 작성자 → 검토·서명자',
  },
  {
    industry: '포장재/부품',
    before: '불량 원인 분석 4~6시간 + 고객사 보고서 별도 작성',
    after: '원인 분석~보고서까지 20분 한 흐름',
    roleChange: '품질 담당: 데이터 수집자 → 원인 판단자',
  },
  {
    industry: '식품/HACCP',
    before: '추적성 문서 수기 + CCP 이탈 시 수동 추적 수시간',
    after: '추적성 자동 구조화 + CCP 이탈 원인 관계 추론',
    roleChange: '관리자: 기록자 → 공정 개선자',
  },
  {
    industry: 'MES/ERP/WMS 파트너',
    before: '고객 AI 요구 → 자체 LLM·RAG·에이전트 개발까지 12~18개월 + 유지보수',
    after: '기존 MES/ERP/WMS 위에 AX Flow 탑재 → 2주 만에 고객에게 AI 기능 제공',
    roleChange: '솔루션사: AI 개발자 → AI 통합자',
  },
]

export function WorkflowChangeSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            같은 사람, 같은 현장. 바뀌는 건 일하는 방식뿐.
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            불량 발생부터 보고서 완료까지, 워크플로우가 이렇게 바뀝니다.
          </p>
        </div>

        {/* Before/After 워크플로우 타임라인 */}
        <div className="mt-12 space-y-8">
          {/* Now (Before) */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-red-500">Now</span>
              <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm font-medium text-red-500">
                총소요 4~6시간
              </span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {WORKFLOW_NOW.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-center">
                    <div className="text-xs font-medium text-[var(--foreground)] whitespace-nowrap">
                      {item.step}
                    </div>
                    {item.time && (
                      <div className="mt-0.5 text-[10px] text-[var(--text-secondary)]">
                        ({item.time})
                      </div>
                    )}
                  </div>
                  {i < WORKFLOW_NOW.length - 1 && (
                    <span className="text-[var(--text-secondary)]">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* After (AX Flow) */}
          <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-primary">After AX Flow</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                총소요 20분
              </span>
              <span className="ml-auto hidden rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success sm:block">
                나머지 하루 → 공정 개선, 신규 라인 검토 등 &lsquo;본업&rsquo;에 집중
              </span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {WORKFLOW_AFTER.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`rounded-lg px-3 py-2 text-center ${
                      item.highlight
                        ? 'border-2 border-primary/40 bg-primary/10'
                        : 'border border-[var(--border)] bg-[var(--background)]'
                    }`}
                  >
                    <div className="text-xs font-medium text-[var(--foreground)] whitespace-pre-line">
                      {item.step}
                    </div>
                    {item.highlight && (
                      <div className="mt-0.5 text-[10px] font-semibold text-primary">
                        AX Flow
                      </div>
                    )}
                  </div>
                  {i < WORKFLOW_AFTER.length - 1 && (
                    <span className="text-primary font-bold">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-success sm:hidden">
              나머지 하루 → 공정 개선, 신규 라인 검토 등 &lsquo;본업&rsquo;에 집중
            </p>
          </div>
        </div>

        {/* 업종별 시나리오 테이블 */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-bold text-[var(--foreground)] sm:text-2xl">
            업종별 시나리오
          </h3>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-[var(--border)]">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">
                    업종
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-red-500">
                    Before
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-success">
                    After AX Flow
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-primary">
                    역할 전환
                  </th>
                </tr>
              </thead>
              <tbody>
                {INDUSTRY_SCENARIOS.map((row) => (
                  <tr
                    key={row.industry}
                    className="border-b border-[var(--border)] last:border-0"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-[var(--foreground)] whitespace-nowrap">
                      {row.industry}
                    </td>
                    <td className="px-4 py-4 text-sm text-[var(--text-secondary)]">
                      {row.before}
                    </td>
                    <td className="px-4 py-4 text-sm text-[var(--foreground)]">
                      {row.after}
                    </td>
                    <td className="px-4 py-4 text-sm font-medium text-primary whitespace-nowrap">
                      {row.roleChange}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 역할 전환 메시지 */}
        <div className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
          <p className="text-lg font-bold text-[var(--foreground)]">
            사람을 줄이는 것이 아닙니다. 핵심 인력의 역할이 바뀝니다.
          </p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            수기 작성자 → 검토·승인자, 데이터 수집자 → 원인 판단·개선자
          </p>
        </div>
      </div>
    </section>
  )
}
