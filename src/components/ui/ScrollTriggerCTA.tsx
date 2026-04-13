// FR-13: 스크롤 트리거 CTA — 50% 슬라이드인 + 80% 하단 고정 바
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export function ScrollTriggerCTA() {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setScrollPercent((window.scrollY / docHeight) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const show50 = scrollPercent >= 50 && scrollPercent < 80 && !dismissed
  const show80 = scrollPercent >= 80

  return (
    <>
      {/* 50% 스크롤: 우측 슬라이드인 CTA */}
      <AnimatePresence>
        {show50 && (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-6 top-1/2 z-30 -translate-y-1/2 hidden md:block"
          >
            <div className="relative rounded-xl border border-[var(--border)] bg-[var(--background)]/90 p-4 shadow-lg backdrop-blur-md">
              <button
                onClick={() => setDismissed(true)}
                className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface)] text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
                aria-label="닫기"
              >
                ✕
              </button>
              <p className="mb-2 text-sm font-semibold text-[var(--foreground)]">
                15분 무료 상담
              </p>
              <p className="mb-3 text-xs text-[var(--text-secondary)]">
                귀사 맞춤 워크플로우를 제안드립니다
              </p>
              <Link
                href="/demo"
                className="block rounded-lg bg-cta px-4 py-2 text-center text-sm font-semibold text-[#09090B] transition-all hover:brightness-110"
              >
                상담 신청하기
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 80% 스크롤: 하단 고정 바 */}
      <AnimatePresence>
        {show80 && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
              <p className="text-sm font-medium text-[var(--foreground)]">
                <span className="hidden sm:inline">지금 신청하시면 </span>
                영업일 1일 내 담당자 매칭
              </p>
              <Link
                href="/demo"
                className="rounded-lg bg-cta px-5 py-2 text-sm font-semibold text-[#09090B] transition-all hover:brightness-110 hover:shadow-[0_4px_16px_rgba(0,255,133,0.25)]"
              >
                무료 상담 신청 →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
