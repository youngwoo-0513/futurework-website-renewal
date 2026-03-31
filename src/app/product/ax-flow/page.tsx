// 제품 페이지 — 탭 기반 기능 쇼케이스 (A+ AI 레퍼런스)
import type { Metadata } from 'next'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { FloatingCTA } from '@/components/ui/FloatingCTA'
import { ProductShowcase } from '@/components/sections/ProductShowcase'
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

      {/* 히어로 */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 via-transparent to-transparent dark:from-accent/10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              Manufacturing AI OS
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              AX Flow
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
              &ldquo;대답하는 AI&rdquo;가 아니라, 공장 안의 일을 실제로 끝내는 온톨로지 AI.<br className="hidden sm:block" />
              기존 시스템을 바꾸지 않습니다. 위에 AI 운영 레이어 한층을 깝니다.
            </p>

            {/* CTA 2개 */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button href="/demo" size="lg">
                데모 신청하기
              </Button>
              <Button href="/solutions/subsidy-guide" variant="secondary" size="lg">
                도입비 50% 지원받고 PoC 하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 탭 기반 기능 쇼케이스 */}
      <ProductShowcase />

      {/* 고객 피드백 */}
      <ProductTestimonials />

      {/* 하단 CTA */}
      <section className="bg-[var(--surface)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            15분이면 귀사에 가장 적합한<br />워크플로우를 확인할 수 있습니다
          </h2>
          <p className="mt-4 text-[var(--text-secondary)]">
            귀사의 워크플로우에서도 같은 결과를, 15분이면 컨설팅해 드립니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button href="/demo" size="lg">
              데모 신청하기
            </Button>
            <Button href="/solutions/subsidy-guide" variant="secondary" size="lg">
              도입비 50% 지원받고 PoC 하기
            </Button>
          </div>
        </div>
      </section>

      <FloatingCTA />
    </>
  )
}
