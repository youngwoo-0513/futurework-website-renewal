// Design Ref: §5, §11 — 모든 카피, 수치, 설정값 상수
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
  title: 'AX Flow | 제조 AI 에이전트 플랫폼 - ERP·MES·각종문서·암묵지 등 통합 자동화 | FutureWorkLab',
  description:
    '제조업 AI 도입의 새로운 기준. ERP·MES·Excel·PDF·수기문서·암묵지를 연결해 AI가 직접 처리. 스마트공장 지원사업 연계 가능.',
  ogImage: '/og/og-default.png',
  locale: 'ko_KR',
} as const

// ─── 네비게이션 ───
export const NAV_ITEMS: NavItem[] = [
  { label: '제품', href: '/product/ax-flow' },
  { label: '솔루션', href: '/solutions/subsidy-guide' },
  { label: '데모 신청', href: '/demo' },
  { label: '문의', href: '/contact' },
]

export const NAV_CTA = {
  label: 'PoC 신청 →',
  href: '/demo',
} as const

// ─── Hero 카피 (A/B 테스트 3종, 현재 Variant A 사용) ───
export const HERO_COPY: HeroCopy = {
  headline:
    'MES, ERP, Excel, PDF, 수기문서 —\n데이터는 있는데, 왜 아직도 수작업입니까?',
  subheadline:
    'AX Flow는 흩어진 제조 데이터를 연결하고, 반복 업무를 AI가 직접 실행하는 제조 AI 운영 레이어입니다.',
  primaryCta: '지원사업 연계 상담 신청하기',
  secondaryCta: 'AX Flow 자세히 보기',
}

export const HERO_STATS: KpiStat[] = [
  { value: '14개사', label: 'PoC 수행 기업' },
  { value: '89%', label: '생산성 향상' },
  { value: '2주', label: 'PoC 기간' },
]

// ─── Problem 섹션 ───
export const PAIN_POINTS: PainPoint[] = [
  {
    icon: '🗄️',
    title: '데이터 사일로',
    description:
      'ERP, MES, Excel, 수기문서가 따로 놀아 현장 판단에 30분 이상 걸립니다.',
  },
  {
    icon: '🔄',
    title: '반복업무 과부하',
    description:
      '매일 같은 보고서, 같은 집계. 숙련 인력이 단순 작업에 묶여 있습니다.',
  },
  {
    icon: '❌',
    title: 'AI 도입 실패 경험',
    description:
      '챗봇 도입했지만 현장에서 안 씁니다. 기능 추가가 아닌 운영 재설계가 필요합니다.',
  },
  {
    icon: '📋',
    title: '지원사업 성과증빙 부담',
    description:
      '지원금은 받았는데 성과 데이터가 없어 증빙에 애먹고 있습니다.',
  },
]

export const PROBLEM_CTA: SectionCta = {
  text: '이 문제, AX Flow로 해결하기 →',
  href: '/product/ax-flow',
  variant: 'secondary',
}

// ─── Solution 섹션 ───
export const SOLUTIONS: SolutionItem[] = [
  {
    pain: '데이터 사일로',
    solution: '온톨로지 기반 데이터 통합',
    before: '의사결정 30분+',
    after: '실시간 자동 집계',
  },
  {
    pain: '반복업무',
    solution: 'AI 워크플로우 자동화',
    before: '배치 작업 3시간',
    after: '20분 자동 완료',
  },
  {
    pain: 'AI 도입 실패',
    solution: '제조 전문 RAG + 운영 레이어',
    before: '챗봇 방치',
    after: '현장 직접 활용',
  },
  {
    pain: '성과증빙 부담',
    solution: '자동 KPI 추적 대시보드',
    before: '수작업 증빙 2주',
    after: '실시간 리포트',
  },
]

export const SOLUTION_CTA: SectionCta = {
  text: '2주 PoC 무료 제안서 받기 →',
  href: '#final-cta',
  variant: 'primary',
}

// ─── Social Proof 섹션 ───
export const KPI_STATS: KpiStat[] = [
  { value: '14', label: 'PoC 수행 기업' },
  { value: '23', label: '파트너사' },
  { value: '3억+', label: '절감 효과' },
  { value: '89%', label: '생산성 향상' },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '불량 분석에 6시간 걸리던 게 20분으로 줄었습니다. 데이터가 알아서 연결되니까요.',
    author: '김OO',
    role: '생산관리팀장',
    company: '자동차 부품 제조 (300인)',
  },
  {
    quote:
      '지원사업 성과증빙을 자동으로 뽑을 수 있어서, 후속 과제 수주에도 큰 도움이 됐습니다.',
    author: '이OO',
    role: '디지털전환 담당',
    company: '전자부품 제조 (150인)',
  },
]

export const SOCIAL_PROOF_CTA: SectionCta = {
  text: '우리 공장에 적용 가능한지 확인하기 →',
  href: '#final-cta',
  variant: 'primary',
}

// ─── FAQ 섹션 ───
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '우리 공장에도 도입할 수 있나요?',
    answer:
      'ERP, MES, Excel 등 데이터가 있는 제조 현장이라면 업종 무관 도입 가능합니다. 2주 PoC로 적합성을 먼저 검증합니다.',
  },
  {
    question: 'PoC 기간과 비용은?',
    answer:
      'PoC는 2주 소요되며, 스마트공장 지원사업 연계 시 비용의 50%를 지원받을 수 있습니다.',
  },
  {
    question: '스마트공장 지원사업과 연계 가능한가요?',
    answer:
      '네, 2026년 스마트공장 고도화 사업에 AX Flow를 활용한 PoC 및 본도입이 가능합니다. 지원사업 신청 컨설팅도 함께 제공합니다.',
  },
  {
    question: '기존 AI 챗봇 도입에 실패했는데, AX Flow는 뭐가 다른가요?',
    answer:
      'AX Flow는 챗봇이 아닌 "운영 레이어"입니다. AI가 직접 데이터를 연결하고 업무를 실행합니다. 기능 추가가 아닌 운영 방식 자체를 재설계합니다.',
  },
  {
    question: '유지보수와 업데이트는 어떻게 되나요?',
    answer:
      '클라우드 SaaS 형태로 자동 업데이트됩니다. 전담 CS 매니저가 배정되어 현장 이슈에 즉시 대응합니다.',
  },
  {
    question: '도입 비용은 어느 정도인가요?',
    answer:
      '현장 규모와 연동 범위에 따라 달라집니다. 무료 진단 후 맞춤 견적을 제공합니다. 지원사업 연계 시 최대 50% 비용 절감 가능합니다.',
  },
  {
    question: '다른 제조 AI 솔루션과 뭐가 다른가요?',
    answer:
      'AX Flow는 제조 전문 온톨로지 + RAG + 워크플로우 자동화를 결합한 유일한 플랫폼입니다. 단순 분석이 아닌 "AI가 직접 실행"하는 구조입니다.',
  },
]

export const FAQ_CTA: SectionCta = {
  text: '아직 궁금한 점이 있으신가요? 무료 상담 신청 →',
  href: '/demo',
  variant: 'secondary',
}

// ─── Final CTA 섹션 ───
export const FINAL_CTA_COPY = {
  headline: '지금 신청하면 이번 주 내 담당자 연결',
  trustBadges: [
    '개인정보 상담 목적만 사용',
    '스팸 없음',
    '24시간 내 응답 보장',
  ],
  microCopy: '영업일 기준 1일 내 연락드립니다',
} as const

// ─── 긴급성 배너 ───
export const URGENCY_BANNER = {
  text: '스마트공장 지원사업 마감 임박',
  ctaText: '자세히 보기',
  ctaHref: '/solutions/subsidy-guide',
} as const

// ─── 폼 옵션 ───
export const HELP_TYPE_OPTIONS = [
  { value: 'subsidy-poc', label: '지원사업 연계 PoC' },
  { value: 'self-ai', label: '자체 AI 도입' },
  { value: 'quality-auto', label: '불량·품질 자동화' },
  { value: 'production-efficiency', label: '생산 효율화' },
] as const

export const INDUSTRY_OPTIONS = [
  { value: 'automotive', label: '자동차' },
  { value: 'electronics', label: '전자' },
  { value: 'food', label: '식품' },
  { value: 'metal', label: '금속' },
  { value: 'partner', label: '파트너 (MES·ERP·WMS·QMS·SI)' },
  { value: 'other', label: '기타' },
] as const

// ─── 회사 정보 ───
export const COMPANY_INFO = {
  name: '주식회사 퓨처워크랩',
  nameEn: 'FutureWorkLab Inc.',
  address: '서울특별시 강남구',
  email: 'contact@futureworklab.co.kr',
  phone: '',
} as const

// ─── Footer SNS ───
export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Blog', href: '#' },
] as const
