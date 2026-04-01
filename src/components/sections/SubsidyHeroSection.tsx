// Subsidy Guide Hero — Refined with dot-grid and badge
import { SubsidyForm } from '@/components/forms/SubsidyForm'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function SubsidyHeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--glow-color),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 텍스트 */}
          <AnimateIn direction="left">
            <div>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                무료 가이드
              </span>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                2026 스마트공장 지원사업
                <br />
                매칭 가이드
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">
                지원 자격, 신청 일정, 지원 금액, AX Flow 연계 도입 방법까지
                한 눈에 정리한 PDF를 무료로 보내드립니다.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-[var(--text-secondary)]">
                {[
                  '2026년 지원사업 자격 요건 총정리',
                  '업종별 최대 지원 금액 안내',
                  'AI 도입 + 지원사업 연계 로드맵',
                  'PoC 성과증빙 자동화 방법',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/10 text-xs text-success">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* PDF 폼 */}
          <AnimateIn direction="right" delay={0.15}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl sm:p-8">
              <h2 className="text-lg font-bold text-[var(--foreground)]">
                가이드 PDF 무료 다운로드
              </h2>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                이메일로 바로 발송됩니다
              </p>
              <div className="mt-5">
                <SubsidyForm />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
