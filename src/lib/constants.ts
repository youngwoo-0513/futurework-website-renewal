// 웹사이트 리뉴얼 v2 — 세일즈덱 기반 전면 리라이트
import type {
  HeroCopy,
  PainPoint,
  SolutionItem,
  KpiStat,
  FaqItem,
  SectionCta,
  NavItem,
  Testimonial,
} from '@/types'

// ─── 사이트 설정 ───
export const SITE_CONFIG = {
  name: 'FutureWorkLab',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://futureworklab.co.kr',
  title: 'AX Flow | 제조 AI 에이전트 플랫폼 — 공장 안의 일을 실제로 끝내는 AI | FutureWorkLab',
  description:
    '제조업 AI 도입의 새로운 기준. 불량 분석 6시간→20분, 배치기록 자동화, 스마트공장 지원사업으로 도입비 50% 절감.',
  ogImage: '/og/og-default.png',
  locale: 'ko_KR',
} as const

// ─── 네비게이션 (IA 리뉴얼) ───
export const NAV_ITEMS: NavItem[] = [
  { label: '제품', href: '/product/ax-flow' },
  { label: '지원사업', href: '/solutions/subsidy-guide' },
  { label: '데모 신청', href: '/demo' },
  {
    label: '리소스',
    href: '/resources',
    children: [
      { label: '특허', href: '/resources?category=patent' },
      { label: '고객사례', href: '/resources?category=case-study' },
      { label: '블로그', href: '/resources?category=blog' },
    ],
  },
  { label: '문의', href: '/contact' },
]

export const NAV_CTA = {
  label: '데모 신청하기',
  href: '/demo',
} as const

// ─── Hero 카피 (세일즈덱 기반 후킹 문구) ───
export const HERO_COPY: HeroCopy = {
  headline:
    '불량 분석 6시간, 배치기록 수백 시간\n아직 사람이 다 하고 계십니까?',
  subheadline:
    'AX Flow는 "대답하는 AI"가 아니라, 공장 안의 일을 실제로 끝내는 온톨로지 AI입니다. 스마트공장 지원사업으로 도입 비용의 최대 50%를 절감하세요.',
  primaryCta: 'AX Flow 알아보기',
  secondaryCta: '도입비 50% 지원받기',
}

export const HERO_STATS: KpiStat[] = [
  { value: '95%', label: '스케줄링 시간 단축' },
  { value: '90%', label: '불량 분석 시간 단축' },
  { value: '50%', label: '정부 지원사업 비용 절감' },
]

// ─── 트랙션/신뢰 신호 (홈페이지 노출) ───
export const TRACTION_STATS: KpiStat[] = [
  { value: '14', label: 'PoC 수행 기업', icon: '🏭' },
  { value: '89%', label: '평균 생산성 향상', icon: '📈' },
  { value: '3억+', label: '고객 절감 효과', icon: '💰' },
  { value: '2주', label: 'PoC 완료 기간', icon: '⚡' },
]

// ─── Problem 섹션 (세일즈덱 기반 실무자 관점) ───
export const PAIN_POINTS: PainPoint[] = [
  {
    icon: '⏱️',
    title: '불량 원인 분석에 4~6시간',
    description:
      'MES 로그인, ERP 교차확인, 과거사례 수동검색, 보고서 초안… 숙련자가 반나절을 쏟습니다.',
  },
  {
    icon: '📝',
    title: '배치기록 수기 작성에 수백 시간',
    description:
      '월간 배치기록을 사람이 직접 씁니다. 제약/GMP 환경에선 규제 변경 시 영향 SOP까지 수일 소요.',
  },
  {
    icon: '🔴',
    title: '제조 AI 프로젝트 76%가 PoC에서 끝남',
    description:
      '3~6개월 PoC 후 모델이 바뀌면 재구축. 쌓인 자산 없이 검증만 반복. 평균 13.7개월 후 프로젝트 폐기.',
  },
  {
    icon: '👴',
    title: '숙련자 퇴직 = 조직 지식 단절',
    description:
      '조직 지식의 90%는 암묵지. 제조업 평균연령 44세, 은퇴 러시가 시작되면 복구 불가능합니다.',
  },
]

export const PROBLEM_CTA: SectionCta = {
  text: 'AX Flow로 해결하는 방법 보기 →',
  href: '/product/ax-flow',
  variant: 'secondary',
}

// ─── 핵심 기능 5개 (세일즈덱 Platform Layer 기반, 실무자 관점) ───
export const CORE_FEATURES = [
  {
    id: 'chatting',
    icon: '💬',
    title: '현장 질의응답',
    subtitle: 'Chatting',
    headline: '긴급 오더 들어왔을 때, 자재·라인·설비 현황을 한 번에 파악합니다',
    description:
      '음성이든 텍스트든, 질문하면 AI가 공정·설비·원자재 데이터를 자동 연결해 바로 답합니다. 부서별 확인에 2시간 걸리던 일이 15분 안에 끝납니다.',
    metric: '95% 단축',
    metricDetail: '의사결정 시간 1시간→5분',
    useCases: [
      { industry: '제약/GMP', example: '음성 질의 (현장 핸즈프리)' },
      { industry: '포장재/부품', example: '불량 사진 촬영→즉시 분석' },
      { industry: '식품/HACCP', example: 'CCP 모니터링 음성 알림' },
      { industry: 'MES/ERP 파트너', example: '고객에게 즉시 제공 가능한 AI 인터페이스' },
    ],
  },
  {
    id: 'library',
    icon: '📚',
    title: '데이터 통합·벡터화',
    subtitle: 'Library',
    headline: 'MES/ERP부터 엑셀·PDF·수기문서·사진·암묵지까지 하나의 지식 저장소로 통합합니다',
    description:
      'MES·ERP·PLM 등 여러 시스템의 정형 데이터와 엑셀·PDF·수기 문서·현장 사진·숙련자 암묵지 같은 비정형 영역까지 한 곳에 통합해 데이터화하고, 이를 Vector DB로 임베딩합니다. 분산되어 사라지던 현장 지식을 검색 가능한 자산으로 만듭니다.',
    metric: '데이터 자산화',
    metricDetail: '정형+비정형 통합 Vector DB',
    useCases: [
      { industry: '제약/GMP', example: 'SOP·배치기록·수기 실험노트 벡터화' },
      { industry: '포장재/부품', example: '불량 사진·검사 리포트 통합 임베딩' },
      { industry: '식품/HACCP', example: 'HACCP 문서·현장 기록 구조화' },
      { industry: 'MES/ERP 파트너', example: '고객 지식 자산화 → 자사 솔루션 부가가치 생성' },
    ],
  },
  {
    id: 'knowledge-graph',
    icon: '🕸️',
    title: '지식맥락화',
    subtitle: 'Knowledge Graph',
    headline: '흩어진 데이터를 엣지로 연결해 현장 맥락을 복원합니다',
    description:
      'Library에 적재된 데이터를 노드·엣지로 연결해 Graph DB로 맥락화합니다. 설비-공정-원자재-불량-작업자-SOP가 관계로 이어지며, 키워드 검색이 놓치던 "왜 이 불량이 났는가"를 관계 기반으로 추적할 수 있습니다.',
    metric: '90% 단축',
    metricDetail: '불량 원인 분석 6시간→20분',
    useCases: [
      { industry: '제약/GMP', example: '배치-일탈-CAPA 관계 그래프 탐색' },
      { industry: '포장재/부품', example: '과거 불량 사례 관계 기반 원인 분석' },
      { industry: '식품/HACCP', example: 'CCP·원료·공정 간 추적성 그래프' },
      { industry: 'MES/ERP 파트너', example: '고객 데이터 온톨로지화로 상위 분석 레이어 제공' },
    ],
  },
  {
    id: 'agent',
    icon: '🤖',
    title: '업무 자동화',
    subtitle: 'Agent',
    headline: '배치기록 자동 생성, 불량 보고서 작성까지 AI가 처리합니다',
    description:
      '노코드 빌더로 현장 담당자도 직접 워크플로우를 만들 수 있습니다. 분석→문서→승인→후속조치까지 Multi-Agent가 한 흐름으로 실행합니다.',
    metric: '80% 단축',
    metricDetail: '배치기록 4시간→20분 이하',
    useCases: [
      { industry: '제약/GMP', example: '배치기록·CAPA 자동 생성' },
      { industry: '포장재/부품', example: '불량 분석→보고서 워크플로우' },
      { industry: '식품/HACCP', example: '추적성 문서 자동 생성' },
      { industry: 'MES/ERP 파트너', example: '에이전트 마켓플레이스에 등록·판매 가능' },
    ],
  },
  {
    id: 'governance',
    icon: '🛡️',
    title: '감사·규제 대응',
    subtitle: 'Governance & AX Guard',
    headline: 'AI가 한 모든 일에 근거와 이력이 남습니다',
    description:
      'GMP·HACCP·ISO·AI기본법·EU AI Act 규제 대응 내장. 판단 근거, 감사 로그, 승인 이력, 킬스위치까지. 사람이 승인 수준을 직접 설정합니다.',
    metric: '규제 대응 내장',
    metricDetail: 'HITL/HOTL 구조',
    useCases: [
      { industry: '제약/GMP', example: 'GMP·cGMP 규제 대응, 감사 로그' },
      { industry: '포장재/부품', example: '고객사 대응 보고서 이력 관리' },
      { industry: '식품/HACCP', example: 'HACCP·AI기본법 규제 대응' },
      { industry: 'MES/ERP 파트너', example: '고객의 규제 대응을 자사 제품 차별점으로 활용' },
    ],
  },
] as const

// ─── Solution Before/After (세일즈덱 Workflow 변화 기반) ───
export const SOLUTIONS: SolutionItem[] = [
  {
    pain: '긴급 오더 대응',
    solution: 'AI가 자재·라인 현황 자동 연결',
    before: '부서별 확인 2시간+',
    after: '15분 안에 판단·공유',
  },
  {
    pain: '불량 원인 분석',
    solution: '공정·설비·원자재 이력 동시 연결',
    before: '분석~보고서 6시간',
    after: '20분 한 흐름 완료',
  },
  {
    pain: '배치기록 작성',
    solution: '자동 생성 + 검토·서명',
    before: '수기 작성 3~4시간',
    after: '20분 자동 생성 + HITL 검토',
  },
  {
    pain: '성과증빙·감사 대응',
    solution: '자동 KPI 리포트 + 감사 로그',
    before: '수작업 증빙 2주+',
    after: '실시간 자동 리포트',
  },
]

export const SOLUTION_CTA: SectionCta = {
  text: 'AX Flow 기능 자세히 보기 →',
  href: '/product/ax-flow',
  variant: 'primary',
}

// ─── 비교표 (세일즈덱 기반 — 온톨로지 자산 연속성 포함) ───
export const COMPARISON_TABLE = [
  { category: '도입속도', axflow: 'PoC 2주 (바로 운영 가능한 구조)', others: 'PoC 3~6개월 (76%가 본사업 전환 실패)' },
  { category: '모델변경', axflow: '데이터 구조 유지, 모델만 교체', others: '재구축 반복 (비용 기하급수적)' },
  { category: 'PoC 이후', axflow: '온톨로지 자산 누적 → 본사업 전환용', others: '소모성 검증으로 끝남 (평균 13.7개월 후 폐기)' },
  { category: '감사대응', axflow: '판단근거 + 감사로그 + 승인이력 내장', others: '설명불가 (규제 공백 발생)' },
  { category: '현장 접근성', axflow: '노코드 빌더로 현장 담당자도 구축', others: '개발자 필요' },
  { category: '비용부담', axflow: '정부 지원사업 연계 가능 (최대 50% 절감)', others: '전액 자부담' },
] as const

// ─── 연동 가능 시스템 (허브 형태) ───
export const INTEGRATION_SYSTEMS = [
  { label: 'MES', category: 'system' },
  { label: 'ERP', category: 'system' },
  { label: 'QMS', category: 'system' },
  { label: 'WMS', category: 'system' },
  { label: 'PLM', category: 'system' },
  { label: 'SCADA', category: 'system' },
  { label: 'Excel', category: 'document' },
  { label: 'PDF', category: 'document' },
  { label: '수기문서', category: 'document' },
  { label: '카톡', category: 'unstructured' },
  { label: '사진', category: 'unstructured' },
  { label: '음성', category: 'unstructured' },
  { label: '이미지', category: 'unstructured' },
  { label: '영상', category: 'unstructured' },
  { label: '암묵지', category: 'unstructured' },
] as const

// ─── Social Proof / 고객 증언 (세일즈덱 원문) ───
export const KPI_STATS: KpiStat[] = [
  { value: '14', label: 'PoC 수행 기업' },
  { value: '23', label: '파트너사' },
  { value: '3억+', label: '절감 효과' },
  { value: '89%', label: '생산성 향상' },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '긴급 오더가 들어오면 예전엔 부서별 확인에 2시간 넘게 걸렸습니다. AX Flow 도입 후에는 자재·라인 상황을 바로 연결해 15분 안에 판단과 공유가 가능해졌습니다.',
    author: '생산관리부 과장',
    role: '생산관리',
    company: '자동차 부품 제조',
  },
  {
    quote:
      '불량이 생기면 과거 사례를 찾는 데 매번 1시간 이상 걸렸습니다. 지금은 유사 사례와 처리 이력을 바로 찾아 5분 안에 대응 방향을 잡습니다.',
    author: 'QA팀 사원',
    role: '품질관리',
    company: '포장재 제조',
  },
  {
    quote:
      '배치기록을 사람이 직접 쓰는 구조에선 AI 도입이 오히려 감사 대응에 불안했습니다. AX Flow는 검토·서명·이력 관리까지 함께 설계되어 감사에 대응 가능한 AI로 느꼈습니다.',
    author: '제약 QA 팀장',
    role: 'QA',
    company: '제약/GMP 제조',
  },
  {
    quote:
      '불량 탐지는 다른 솔루션도 하지만, 원인 분석과 고객사 대응 보고서까지 한 흐름으로 가는 제품은 드뭅니다. AX Flow는 현장 데이터와 문서 작업을 같은 문제로 본다는 점이 달랐습니다.',
    author: '품질 책임자',
    role: '품질관리',
    company: '포장재 제조',
  },
  {
    quote:
      '고객은 AI를 원하지만, LLM·RAG·에이전트를 직접 만들기엔 시간과 비용이 부담되었습니다. AX Flow는 기존 MES 위에 얹어 고객 가치를 빠르게 검증할 수 있게 해줬습니다.',
    author: 'MES 파트너사 대표',
    role: '대표이사',
    company: 'MES/ERP 솔루션사',
  },
]

export const SOCIAL_PROOF_CTA: SectionCta = {
  text: '우리 공장에도 적용 가능한지 확인하기 →',
  href: '/demo',
  variant: 'primary',
}

// ─── 성과 케이스 (세일즈덱 원문) ───
export const PERFORMANCE_CASES = [
  {
    title: '생산 스케줄링 자동화',
    description: 'MES 위 AX Flow 탑재, 생산/영업 정보 통합 조회',
    metric: '95% 단축',
    detail: '1시간→5분',
  },
  {
    title: '불량 원인 분석 + 고객사 대응 보고',
    description: '공정·설비·원자재 이력 동시 연결, 보고서 자동화',
    metric: '90% 단축',
    detail: '6시간→20분',
  },
  {
    title: '배치기록 자동화 + SOP 영향 분석',
    description: '자동 생성 + 검토·서명, 규제 변경 시 SOP 당일식별 및 초안 제안',
    metric: '80% 단축',
    detail: '4시간→20분 이하',
  },
] as const

// ─── FAQ 섹션 ───
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '우리 공장에도 도입할 수 있나요?',
    answer:
      'ERP, MES, Excel 등 데이터가 있는 제조 현장이라면 업종 무관 도입 가능합니다. 제약/GMP, 포장재/부품, 식품/HACCP, MES/ERP 파트너사 등 다양한 업종에서 PoC를 완료했습니다.',
  },
  {
    question: 'PoC 기간과 비용은?',
    answer:
      'PoC는 2주 소요되며, 스마트공장 지원사업 연계 시 비용의 최대 50%를 지원받을 수 있습니다. AI 기반 구축비는 기존 30%에서 50%로 상향 지원됩니다.',
  },
  {
    question: 'PoC만 하고 끝나면 아깝지 않나요?',
    answer:
      'AX Flow는 PoC 기간에 쌓은 온톨로지(데이터 구조)가 그대로 자산으로 남습니다. 모델이 바뀌어도 데이터 구조는 유지되어, 본사업 전환이나 후속 과제에 연속적으로 활용할 수 있습니다. 일반 AI 솔루션처럼 PoC로 끝나지 않습니다.',
  },
  {
    question: '기존 AI 챗봇 도입에 실패했는데, AX Flow는 뭐가 다른가요?',
    answer:
      'AX Flow는 챗봇이 아닌 "운영 레이어"입니다. AI가 직접 데이터를 연결하고 업무를 실행합니다. 분석→문서→승인→후속조치까지 한 흐름으로 처리하여 "더 좋은 AI"가 아닌 "운영에 올라가는 구조"를 제공합니다.',
  },
  {
    question: '스마트공장 지원사업과 연계 가능한가요?',
    answer:
      '네, 2026년 중기부 AI 예산 7,992억 원(제조현장 AI 대전환 2,437억 포함) 중 스마트 제조혁신 지원사업 450+과제에 AX Flow 연계 도입이 가능합니다. 기업당 최대 6억 원(자율형공장), 최대 2억 원(정부형 스마트공장) 지원됩니다.',
  },
  {
    question: '도입하면 사람을 줄이는 건가요?',
    answer:
      '사람을 줄이는 것이 아닙니다. 핵심 인력의 역할이 바뀝니다. 수기 작성자→검토·승인자, 데이터 수집자→원인 판단자로 역할이 전환됩니다.',
  },
  {
    question: '다른 제조 AI 솔루션과 뭐가 다른가요?',
    answer:
      '각 대안은 한두 가지는 잘합니다. 하지만 연결·추론·실행·감사를 하나의 제품에서 동시에 제공하는 솔루션은 현재 AX Flow뿐입니다. 온톨로지+Graph RAG+Multi-Agent+Governance를 결합한 유일한 제조 AI 플랫폼입니다.',
  },
]

export const FAQ_CTA: SectionCta = {
  text: '15분 무료 상담으로 확인하기 →',
  href: '/demo',
  variant: 'secondary',
}

// ─── Final CTA 섹션 ───
export const FINAL_CTA_COPY = {
  headline: '지금 신청하시면\n1일 이내 담당자 매칭',
  subheadline: '15분이면 귀사에 가장 적합한 워크플로우 1개를 제안드립니다.',
  trustBadges: [
    '개인정보 상담 목적만 사용',
    '스팸 없음',
    '영업일 1일 내 응답 보장',
  ],
  microCopy: '영업일 기준 1일 내 연락드립니다',
} as const

// ─── 데모 페이지 ───
export const DEMO_BENEFITS = [
  {
    icon: '🔍',
    title: '귀사 업종 맞춤 워크플로우 제안',
    description: '귀사 업종에서 가장 효과가 큰 워크플로우 1개를 제안드립니다.',
  },
  {
    icon: '📊',
    title: '예상 Before/After 시뮬레이션',
    description: '해당 워크플로우의 예상 Before/After를 확인하세요.',
  },
  {
    icon: '💰',
    title: '정부 지원사업 연계 가능 여부 확인',
    description: '기업당 최대 6억 원, AI 기반 50% 지원 가능성을 검토합니다.',
  },
] as const

export const ADOPTION_STEPS = [
  { step: '1', title: '15분 무료 상담', desc: '현장 데이터 현황 파악, 맞춤 워크플로우 제안, 지원사업 연계 가능성 검토', duration: '15분' },
  { step: '2', title: '2주 PoC', desc: '실제 데이터로 AX Flow 적용. 성과 데이터 자동 생성, 온톨로지 자산 구축 시작', duration: '2주' },
  { step: '3', title: 'PoC 결과 리뷰', desc: 'ROI 확인, 성과증빙 데이터 자동 리포트, 본도입 여부 결정', duration: '1일' },
  { step: '4', title: '본도입·확장', desc: 'PoC에서 쌓은 온톨로지 자산 그대로 활용. 추가 워크플로우 확장', duration: '점진적' },
] as const

// ─── 긴급성 배너 ───
export const URGENCY_BANNER = {
  text: '2026 스마트공장 지원사업 — AI 기반 구축비 50% 지원',
  ctaText: '지원사업 안내 보기',
  ctaHref: '/solutions/subsidy-guide',
} as const

// ─── 폼 옵션 ───
export const HELP_TYPE_OPTIONS = [
  { value: 'demo-consult', label: '데모 체험 및 무료 상담' },
  { value: 'subsidy-poc', label: '지원사업 연계 PoC' },
  { value: 'self-ai', label: '자체 AI 도입 검토' },
  { value: 'quality-auto', label: '불량·품질 자동화' },
  { value: 'production-efficiency', label: '생산 효율화' },
  { value: 'partner', label: '파트너 협업 문의' },
] as const

export const INDUSTRY_OPTIONS = [
  { value: 'pharma', label: '제약/건기식' },
  { value: 'packaging', label: '포장재/부품' },
  { value: 'food', label: '식품/건기식' },
  { value: 'cosmetics', label: '화장품/ODM' },
  { value: 'electronics', label: '반도체/전자부품' },
  { value: 'automotive', label: '자동차부품' },
  { value: 'partner', label: 'MES/ERP/WMS/QMS' },
  { value: 'other', label: '기타' },
] as const

// ─── 블로그/리소스 ───
export const BLOG_POSTS = [
  {
    slug: 'smart-factory-subsidy-guide-2026',
    title: '2026 스마트공장 지원사업 완벽 가이드 — 기업당 최대 6억 원',
    excerpt: '2026년 중기부 AI 예산 7,992억 원 중 스마트 제조혁신 지원사업 450+ 과제. 자격 요건, 지원 금액, AI 기반 50% 상향 지원까지 총정리.',
    category: '지원사업',
    date: '2026-03-15',
    thumbnail: '/blog/subsidy-guide.svg',
    readTime: '8분',
  },
  {
    slug: 'manufacturing-ai-failure-76-percent',
    title: '제조 AI 도입 실패율 76% — 원인과 해결책',
    excerpt: '제조 AI 프로젝트 76%가 본사업 전환에 실패합니다. 쌓인 자산 없이 검증만 반복하는 구조를 어떻게 바꿀 수 있을까요?',
    category: '인사이트',
    date: '2026-03-10',
    thumbnail: '/blog/ai-failure.svg',
    readTime: '6분',
  },
  {
    slug: 'ontology-data-integration',
    title: '온톨로지 기반 데이터 통합이 중요한 이유',
    excerpt: '키워드 검색이 아닌 관계 추론. ERP, MES, 수기문서, 암묵지를 하나로 연결하는 온톨로지 기술의 핵심을 설명합니다.',
    category: '기술',
    date: '2026-03-05',
    thumbnail: '/blog/ontology.svg',
    readTime: '7분',
  },
  {
    slug: 'batch-record-automation-gmp',
    title: '배치기록 자동화로 GMP 감사 대응하기',
    excerpt: '사람이 직접 쓰는 배치기록에서 AI 자동 생성 + HITL 검토·서명으로. 감사에 대응 가능한 AI 도입 방법.',
    category: '활용사례',
    date: '2026-02-28',
    thumbnail: '/blog/batch-record.svg',
    readTime: '5분',
  },
  {
    slug: 'mes-partner-ai-integration',
    title: 'MES/ERP 파트너사를 위한 AI 통합 전략',
    excerpt: '고객은 AI를 원하지만 직접 만들기엔 부담. 기존 MES/ERP 위에 AI 기능을 2주 만에 탑재하는 방법.',
    category: '파트너',
    date: '2026-02-20',
    thumbnail: '/blog/partner.svg',
    readTime: '6분',
  },
] as const

// ─── 회사 정보 ───
export const COMPANY_INFO = {
  name: '주식회사 퓨처워크랩',
  nameEn: 'FutureWorkLab Inc.',
  address: '서울특별시 강남구',
  email: 'contact@futureworklab.co.kr',
  ceoEmail: 'eunkyu.park@futureworklab.co.kr',
  phone: '010-9288-9071',
} as const

// ─── Footer SNS ───
export const SOCIAL_LINKS = [
  { label: 'Blog', href: '/resources' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/futureworklab/' },
] as const
