// Design Ref: §5.4 — 지원사업 가이드 히어로 + PDF 다운로드 폼
import { SubsidyForm } from '@/components/forms/SubsidyForm'

export function SubsidyHeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cta/5 via-transparent to-transparent dark:from-cta/10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 텍스트 */}
          <div>
            <span className="inline-block rounded-full bg-cta/10 px-3 py-1 text-xs font-semibold text-cta">
              무료 가이드
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              2026 스마트공장 지원사업
              <br />
              매칭 가이드
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
              지원 자격, 신청 일정, 지원 금액, AX Flow 연계 도입 방법까지
              한 눈에 정리한 PDF를 무료로 보내드립니다.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-center gap-2">
                <span className="text-success">✓</span> 2026년 지원사업 자격 요건 총정리
              </li>
              <li className="flex items-center gap-2">
                <span className="text-success">✓</span> 업종별 최대 지원 금액 안내
              </li>
              <li className="flex items-center gap-2">
                <span className="text-success">✓</span> AI 도입 + 지원사업 연계 로드맵
              </li>
              <li className="flex items-center gap-2">
                <span className="text-success">✓</span> PoC 성과증빙 자동화 방법
              </li>
            </ul>
          </div>

          {/* PDF 폼 */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg sm:p-8">
            <h2 className="text-lg font-bold text-[var(--foreground)]">
              가이드 PDF 무료 다운로드
            </h2>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              이메일로 바로 발송됩니다
            </p>
            <div className="mt-4">
              <SubsidyForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
