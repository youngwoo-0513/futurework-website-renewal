// Design Ref: §5.4 — Thank You 페이지 (폼 제출 후 리다이렉트)
// Plan SC: 리드 폼 작동 확인 (제출 → 알림 수신)
import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { ThankYouTracking } from './tracking'

export const metadata: Metadata = {
  title: '신청 완료',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <ThankYouTracking />
      <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
        <p className="text-4xl">🎉</p>
        <h1 className="mt-4 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          신청이 완료되었습니다!
        </h1>
        <p className="mt-4 text-[var(--text-secondary)]">
          영업일 기준 1일 내 담당자가 연락드리겠습니다.
          <br />
          아래에서 추가 리소스를 확인해보세요.
        </p>

        <div className="mt-8 space-y-3">
          {/* Cal.com 캘린더 예약 링크 */}
          <Button
            href="https://cal.com"
            variant="primary"
            size="lg"
            className="w-full"
          >
            지금 바로 상담 일정 잡기
          </Button>
          <Button href="/solutions/subsidy-guide" variant="secondary" size="lg" className="w-full">
            스마트공장 지원사업 가이드 보기
          </Button>
          <Button href="/" variant="ghost" size="lg" className="w-full">
            홈으로 돌아가기
          </Button>
        </div>

        <p className="mt-6 text-xs text-[var(--text-secondary)]">
          궁금한 점이 있으시면 contact@futureworklab.co.kr로 문의해주세요.
        </p>
      </div>
    </section>
  )
}
