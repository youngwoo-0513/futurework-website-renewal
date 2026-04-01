// FloatingCTA — Glass effect with entrance animation
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            href="/demo"
            className="group flex items-center gap-2 rounded-full bg-cta px-5 py-3 text-sm font-semibold text-[#09090B] shadow-[0_8px_30px_-8px_rgba(0,255,133,0.4)] transition-all duration-200 hover:shadow-[0_12px_40px_-8px_rgba(0,255,133,0.5)] active:scale-95"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#09090B] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#09090B]" />
            </span>
            무료상담신청
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
