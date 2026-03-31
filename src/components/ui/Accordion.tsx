// Design Ref: §5.3 — FAQ 아코디언 아이템
'use client'

import { useState } from 'react'

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
        className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-[var(--foreground)] transition-colors hover:text-primary"
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-[var(--text-secondary)] transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{answer}</p>
      </div>
    </div>
  )
}
