// Design Ref: §5.4 — 상단 고정 긴급성 배너 (마감 D-day, 닫기 가능)
'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { URGENCY_BANNER } from '@/lib/constants'

// 지원사업 마감일 (상수에서 관리 가능)
const SUBSIDY_DEADLINE = new Date('2026-06-30')

export function UrgencyBanner() {
  const [dismissed, setDismissed] = useState(false)

  const dDay = useMemo(() => {
    const today = new Date()
    const diff = Math.ceil((SUBSIDY_DEADLINE.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    return diff > 0 ? diff : 0
  }, [])

  if (dismissed) return null

  return (
    <div className="relative bg-gradient-to-r from-cta to-cta-dark text-[#09090B]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-sm sm:px-6">
        <span className="font-medium">
          {URGENCY_BANNER.text} D-{dDay}
        </span>
        <Link
          href={URGENCY_BANNER.ctaHref}
          className="rounded-full bg-[#09090B]/15 px-3 py-0.5 text-xs font-semibold transition-colors hover:bg-[#09090B]/25"
        >
          {URGENCY_BANNER.ctaText}
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 transition-opacity hover:opacity-70 sm:right-4"
          aria-label="배너 닫기"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
