// Design Ref: §5.3 — 숫자 카운트업 애니메이션 (Intersection Observer)
'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: string // "14", "89", "3억+" 등
  label: string
}

function parseNumeric(value: string): { num: number; prefix: string; suffix: string } {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/)
  if (!match) return { num: 0, prefix: '', suffix: value }
  return { num: parseInt(match[2], 10), prefix: match[1], suffix: match[3] }
}

export function Counter({ value, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const { num, prefix, suffix } = parseNumeric(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started || num === 0) return

    const duration = 1500
    const steps = 40
    const increment = num / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), num)
      setCount(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [started, num])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-primary sm:text-4xl">
        {prefix}
        {started ? count : 0}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-[var(--text-secondary)]">{label}</div>
    </div>
  )
}
