// Hero — Dramatic entrance with dot-grid texture and staggered reveals
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { LogoBar } from '@/components/ui/LogoBar'
import { HERO_COPY, HERO_STATS } from '@/lib/constants'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Dot-grid background */}
      <div className="absolute inset-0 -z-10 bg-grid" />
      {/* Radial gradient fade */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--glow-color),transparent)]" />

      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="mx-auto max-w-3xl text-center">
          {/* 긴급성 뱃지 */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cta" />
              </span>
              2026 스마트공장 지원사업 — AI 도입비 50% 지원
            </div>
          </motion.div>

          {/* 헤드라인 */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl"
          >
            {HERO_COPY.headline.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </motion.h1>

          {/* 서브헤드라인 */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl"
          >
            {HERO_COPY.subheadline}
          </motion.p>

          {/* 핵심 수치 3개 */}
          <motion.div
            variants={fadeUp}
            className="mt-10 inline-flex items-center gap-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-8 py-5 sm:gap-12"
          >
            {HERO_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {i > 0 && <div className="hidden h-10 w-px bg-[var(--border)] sm:block" />}
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-green sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-[var(--text-secondary)] sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA 2개 */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
          >
            <Button href="/product/ax-flow" size="lg">
              {HERO_COPY.primaryCta}
            </Button>
            <Button href="/solutions/subsidy-guide" variant="secondary" size="lg">
              {HERO_COPY.secondaryCta}
            </Button>
          </motion.div>

          {/* 신뢰 로고바 */}
          <motion.div variants={fadeUp} className="mt-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              신뢰하는 기업들이 선택했습니다
            </p>
            <LogoBar />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
