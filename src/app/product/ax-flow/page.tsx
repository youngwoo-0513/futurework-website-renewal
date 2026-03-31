// Design Ref: §5.4 — 제품 소개 페이지
import type { Metadata } from 'next'
import { ProductHeroSection } from '@/components/sections/ProductHeroSection'
import { ProductFeatureSection } from '@/components/sections/ProductFeatureSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { FloatingCTA } from '@/components/ui/FloatingCTA'

export const metadata: Metadata = {
  title: 'AX Flow 기능 소개 | 온톨로지·RAG·워크플로우 자동화',
  description:
    '제조 전문 온톨로지 + RAG + 워크플로우 자동화. 의사결정 시간 98% 단축 실현.',
}

export default function ProductPage() {
  return (
    <>
      <SchemaMarkup type="software" />
      <SchemaMarkup
        type="breadcrumb"
        breadcrumbs={[
          { name: '홈', url: '/' },
          { name: '제품', url: '/product/ax-flow' },
        ]}
      />

      <ProductHeroSection />
      <ProductFeatureSection />
      <FinalCtaSection />
      <FloatingCTA />
    </>
  )
}
