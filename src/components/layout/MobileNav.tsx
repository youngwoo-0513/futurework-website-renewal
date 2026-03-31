// Design Ref: §5.3 — 모바일 슬라이드 메뉴
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { NAV_ITEMS, NAV_CTA } from '@/lib/constants'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  // 열린 상태에서 body 스크롤 방지
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Slide panel */}
      <div className="fixed inset-y-0 right-0 w-72 bg-[var(--background)] shadow-xl">
        <div className="flex h-16 items-center justify-end px-4">
          <button
            onClick={onClose}
            className="p-2 text-[var(--foreground)]"
            aria-label="메뉴 닫기"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
            >
              {item.label}
            </Link>
          ))}
          <hr className="my-2 border-[var(--border)]" />
          <Link
            href={NAV_CTA.href}
            onClick={onClose}
            className="rounded-lg bg-cta px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-cta-dark"
          >
            {NAV_CTA.label}
          </Link>
        </nav>
      </div>
    </div>
  )
}
