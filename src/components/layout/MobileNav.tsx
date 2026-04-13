// MobileNav — Slide-in with framer-motion
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS, NAV_CTA } from '@/lib/constants'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
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

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Slide panel */}
          <motion.div
            className="fixed inset-y-0 right-0 w-72 border-l border-[var(--border)] bg-[var(--background)] shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="flex h-16 items-center justify-end px-4">
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
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
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 flex flex-col gap-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block rounded-lg px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="my-3 h-px bg-[var(--border)]" />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href={NAV_CTA.href}
                  onClick={onClose}
                  className="block rounded-lg bg-cta px-4 py-3 text-center text-base font-semibold text-[#09090B] transition-all hover:brightness-110"
                >
                  {NAV_CTA.label}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
