// Design Ref: §6.2 — 500 커스텀 에러 페이지
'use client'

import { Button } from '@/components/ui/Button'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
        <p className="text-6xl font-bold text-cta">오류</p>
        <h1 className="mt-4 text-2xl font-bold text-[var(--foreground)]">
          문제가 발생했습니다
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          잠시 후 다시 시도해주세요. 문제가 계속되면 문의해주세요.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button onClick={reset} size="lg">
            다시 시도
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            문의하기
          </Button>
        </div>
      </div>
    </section>
  )
}
