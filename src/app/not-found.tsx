// Design Ref: §6.2 — 404 커스텀 페이지
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-bold text-[var(--foreground)]">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href="/" size="lg">
            홈으로 돌아가기
          </Button>
          <Button href="/demo" variant="secondary" size="lg">
            무료 진단 신청
          </Button>
        </div>
      </div>
    </section>
  )
}
