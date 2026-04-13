// Design Ref: §3 — Data Model types for FutureWorkLab website

// 2-Step 리드 폼
export interface LeadFormData {
  // Step 1 — 자격 확인
  helpType: 'subsidy-poc' | 'self-ai' | 'quality-auto' | 'production-efficiency'
  industry: 'pharma' | 'packaging' | 'food' | 'cosmetics' | 'electronics' | 'automotive' | 'partner' | 'other'
  // Step 2 — 연락처
  company: string
  name: string
  email: string
  phone: string
}

// 지원사업 PDF 리드 마그넷 폼
export interface SubsidyLeadData {
  name: string
  email: string
  company: string
  industry: string
  privacyConsent: boolean
  newsletterConsent?: boolean
}

// 일반 문의 폼
export interface ContactFormData {
  name: string
  email: string
  company: string
  industry: string
  message: string
}

// 폼 제출 결과
export interface FormSubmitResult {
  success: boolean
  message: string
}

// KPI 수치
export interface KpiStat {
  value: string
  label: string
  icon?: string
}

// FAQ 항목
export interface FaqItem {
  question: string
  answer: string
}

// Hero 카피
export interface HeroCopy {
  headline: string
  subheadline: string
  primaryCta: string
  secondaryCta: string
}

// Pain Point
export interface PainPoint {
  icon: string
  title: string
  description: string
}

// Solution Item
export interface SolutionItem {
  pain: string
  solution: string
  before: string
  after: string
}

// 섹션별 CTA
export interface SectionCta {
  text: string
  href: string
  variant: 'primary' | 'secondary' | 'ghost'
}

// 네비게이션 아이템
export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

// 고객 증언
export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}
