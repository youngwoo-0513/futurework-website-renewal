// UrgencyBanner — Refined with monochrome treatment
'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { URGENCY_BANNER } from '@/lib/constants'

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
    <div className="relative bg-[var(--foreground)] text-[var(--background)]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-sm sm:px-6">
        <span className="flex h-1.5 w-1.5 rounded-full bg-cta animate-pulse" />
        <span className="font-medium tracking-tight">
          {URGENCY_BANNER.text} D-{dDay}
        </span>
        <Link
          href={URGENCY_BANNER.ctaHref}
          className="rounded-full bg-[var(--background)]/15 px-3 py-0.5 text-xs font-semibold transition-colors hover:bg-[var(--background)]/25"
        >
          {URGENCY_BANNER.ctaText}
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 opacity-50 transition-opacity hover:opacity-100 sm:right-4"
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
