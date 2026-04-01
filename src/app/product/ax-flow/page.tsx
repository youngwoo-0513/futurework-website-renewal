// 제품 페이지 — AX Flow 핵심 기능과 세일즈덱 4~6p 기반 상세 섹션
import type { Metadata } from 'next'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { FloatingCTA } from '@/components/ui/FloatingCTA'
import { ProductHeroSection } from '@/components/sections/ProductHeroSection'
import { ProductShowcase } from '@/components/sections/ProductShowcase'
import { WorkflowChangeSection } from '@/components/sections/WorkflowChangeSection'
import { PlatformLayerSection } from '@/components/sections/PlatformLayerSection'
import { TrustLayerSection } from '@/components/sections/TrustLayerSection'
import { ProductTestimonials } from '@/components/sections/ProductTestimonials'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'AX Flow 제품 소개 | Chatting·Library·Agent·Governance',
  description:
    '대답하는 AI가 아니라, 공장 안의 일을 실제로 끝내는 온톨로지 AI. 4대 핵심 기능과 업종별 활용 사례를 확인하세요.',
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
      <ProductShowcase />
      <WorkflowChangeSection />
      <PlatformLayerSection />
      <TrustLayerSection />
      <ProductTestimonials />

      {/* 하단 CTA */}
      <section className="relative overflow-hidden bg-[var(--foreground)] py-20 sm:py-28">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--background)] sm:text-4xl">
            15분이면 귀사에 가장 적합한<br />워크플로우를 확인할 수 있습니다
          </h2>
          <p className="mt-4 text-[var(--text-tertiary)]">
            귀사의 워크플로우에서도 같은 결과를, 15분이면 컨설팅해 드립니다.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button href="/demo" size="lg">
              데모 신청하기
            </Button>
            <Button href="/solutions/subsidy-guide" variant="secondary" size="lg" className="border-[var(--background)]/20 text-[var(--background)] hover:border-[var(--background)]/40 hover:text-[var(--background)]">
              도입비 50% 지원받고 PoC 하기
            </Button>
          </div>
        </div>
      </section>

      <FloatingCTA />
    </>
  )
}
