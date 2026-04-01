// Reusable scroll-reveal animation wrapper using framer-motion
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
  /** viewport threshold (0-1) */
  amount?: number
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
}

export function AnimateIn({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.15,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount })
  const offset = directionOffset[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as const,
      }}
    >
      {children}
    </motion.div>
  )
}

/** Stagger wrapper — children animate in sequence */
export function StaggerChildren({
  children,
  className,
  stagger = 0.08,
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
  direction?: Direction
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const offset = directionOffset[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
        hidden: {},
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: offset.x, y: offset.y },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
