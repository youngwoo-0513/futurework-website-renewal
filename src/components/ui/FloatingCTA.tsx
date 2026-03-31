// Design Ref: §5.3 — 우측 하단 고정 CTA 버튼 ("무료상담신청")
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <Link
      href="/demo"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-cta px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-cta-dark hover:shadow-xl active:scale-95"
    >
      무료상담신청
    </Link>
  )
}
