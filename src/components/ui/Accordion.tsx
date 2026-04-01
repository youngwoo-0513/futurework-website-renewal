// Accordion — Smooth height animation with refined styling
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionProps {
  question: string
  answer: string
}

export function Accordion({ question, answer }: AccordionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[var(--border)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-base font-medium text-[var(--foreground)] transition-colors hover:text-primary"
        aria-expanded={open}
      >
        <span className="pr-4">{question}</span>
        <motion.svg
          className="h-5 w-5 shrink-0 text-[var(--text-tertiary)]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-[var(--text-secondary)]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
