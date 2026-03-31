// Design Ref: §5.4 — 제품 히어로: 제품명 + 태그라인 + CTA
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export function ProductHeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 via-transparent to-transparent dark:from-accent/10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="default">제조 AI 에이전트 플랫폼</Badge>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            AX Flow
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
            ERP·MES·Excel·PDF·수기문서·암묵지를 연결해
            <br className="hidden sm:block" />
            AI가 직접 처리하는 제조 운영 레이어
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button href="/demo" size="lg">
              데모 신청하기
            </Button>
            <Button href="/solutions/subsidy-guide" variant="secondary" size="lg">
              지원사업 연계 안내
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
