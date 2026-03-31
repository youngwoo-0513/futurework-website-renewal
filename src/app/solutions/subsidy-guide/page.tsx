// Design Ref: §5.4 — 지원사업 가이드 랜딩 페이지
import type { Metadata } from 'next'
import { SubsidyHeroSection } from '@/components/sections/SubsidyHeroSection'
import { SubsidyContentSection } from '@/components/sections/SubsidyContentSection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { FloatingCTA } from '@/components/ui/FloatingCTA'
import { ExitPopup } from '@/components/ui/ExitPopup'

export const metadata: Metadata = {
  title: '스마트공장 지원사업 2026 활용 가이드 | AI 도입 보조금',
  description:
    '2026년 스마트공장 지원사업 완전 가이드. 지원 자격·금액·일정 + AX Flow 연계 도입 방법.',
}

export default function SubsidyGuidePage() {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        breadcrumbs={[
          { name: '홈', url: '/' },
          { name: '솔루션', url: '/solutions/subsidy-guide' },
          { name: '지원사업 가이드', url: '/solutions/subsidy-guide' },
        ]}
      />

      <SubsidyHeroSection />
      <SubsidyContentSection />
      <FloatingCTA />
      <ExitPopup />
    </>
  )
}
