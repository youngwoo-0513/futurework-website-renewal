// ProductHero — Dramatic product name with monochrome treatment
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export function ProductHeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--glow-color),transparent)]" />

      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.div variants={fadeUp}>
            <Badge variant="default">제조 AI 에이전트 플랫폼</Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl"
          >
            AX Flow
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl"
          >
            ERP·MES·Excel·PDF·수기문서·암묵지를 연결해
            <br className="hidden sm:block" />
            AI가 직접 처리하는 제조 운영 레이어
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
          >
            <Button href="/demo" size="lg">
              데모 신청하기
            </Button>
            <Button href="/solutions/subsidy-guide" variant="secondary" size="lg">
              지원사업 연계 안내
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
