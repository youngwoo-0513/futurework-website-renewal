// 제품 기능 쇼케이스 — 좌측 사이드바 네비게이션 + 우측 스크롤 콘텐츠 카드 (A+ AI 레퍼런스)
'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/Button'
import { CORE_FEATURES } from '@/lib/constants'

export function ProductShowcase() {
  const [activeId, setActiveId] = useState<string>(CORE_FEATURES[0].id)
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const isClickScroll = useRef(false)

  // Intersection Observer — 스크롤 시 사이드바 하이라이트 동기화
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    CORE_FEATURES.forEach((feature) => {
      const el = sectionRefs.current[feature.id]
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isClickScroll.current) {
            setActiveId(feature.id)
          }
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = useCallback((id: string) => {
    setActiveId(id)
    isClickScroll.current = true

    const el = sectionRefs.current[id]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => {
        isClickScroll.current = false
      }, 800)
    }
  }, [])

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            AX Flow 제품구조 및 기능
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            Chatting · Library · Agent · Governance — 4대 핵심 기능
          </p>
        </div>

        {/* 모바일: 가로 스크롤 탭 */}
        <div className="mt-8 overflow-x-auto lg:hidden">
          <div className="flex gap-2 px-1 pb-2">
            {CORE_FEATURES.map((f) => (
              <button
                key={f.id}
                onClick={() => scrollTo(f.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeId === f.id
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)]'
                }`}
              >
                <span className="mr-1.5">{f.icon}</span>
                {f.title}
              </button>
            ))}
          </div>
        </div>

        {/* 데스크탑: 사이드바 + 콘텐츠 패널 */}
        <div ref={containerRef} className="mt-6 flex gap-8 lg:mt-12">
          {/* 좌측 사이드바 (데스크탑) */}
          <div className="hidden lg:block lg:w-[220px] lg:shrink-0">
            <div className="sticky top-24">
              <nav className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
                <p className="mb-4 px-2 text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  Platform Layer
                </p>
                <div className="space-y-1">
                  {CORE_FEATURES.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => scrollTo(f.id)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all ${
                        activeId === f.id
                          ? 'bg-primary/10 text-primary shadow-sm'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--background)] hover:text-[var(--foreground)]'
                      }`}
                    >
                      <span className="text-lg">{f.icon}</span>
                      <div>
                        <div>{f.title}</div>
                        <div className="text-[10px] font-normal text-[var(--text-secondary)]">
                          {f.subtitle}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          {/* 우측 콘텐츠 영역 */}
          <div className="flex-1 space-y-8">
            {CORE_FEATURES.map((feature) => (
              <div
                key={feature.id}
                id={`feature-${feature.id}`}
                ref={(el) => { sectionRefs.current[feature.id] = el }}
                className="scroll-mt-24"
              >
                <div
                  className={`overflow-hidden rounded-2xl border bg-[var(--surface)] shadow-sm transition-shadow hover:shadow-lg ${
                    activeId === feature.id
                      ? 'border-primary/30'
                      : 'border-[var(--border)]'
                  }`}
                >
                  {/* 비주얼 영역 — 제품 스크린샷 placeholder */}
                  <div className="relative aspect-[2/1] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                    <div className="text-center px-8">
                      <div className="text-5xl mb-3">{feature.icon}</div>
                      <h3 className="text-2xl font-bold text-white sm:text-3xl">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">{feature.subtitle}</p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                        <span className="text-lg font-bold text-white">
                          {feature.metric}
                        </span>
                        <span className="text-xs text-slate-300">
                          {feature.metricDetail}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-lg bg-black/50 px-3 py-1 text-xs text-white/60 backdrop-blur">
                      제품 스크린샷 준비 중
                    </div>
                  </div>

                  {/* 설명 영역 */}
                  <div className="p-6 sm:p-8">
                    {/* 1줄 핵심 헤드라인 */}
                    <h3 className="text-xl font-bold text-[var(--foreground)]">
                      {feature.headline}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                      {feature.description}
                    </p>

                    {/* 업종별 활용 사례 — 2열 카드 그리드 */}
                    <div className="mt-8">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                        업종별 활용 사례
                      </h4>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {feature.useCases.map((uc, i) => (
                          <div
                            key={uc.industry}
                            className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-shadow hover:shadow-md"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                              {i + 1}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-[var(--foreground)]">
                                {uc.industry}
                              </div>
                              <div className="mt-0.5 text-sm text-[var(--text-secondary)]">
                                {uc.example}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* 데모 CTA */}
            <div className="text-center pt-4">
              <Button href="/demo" size="lg">
                데모 체험해보기 →
              </Button>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                15분이면 귀사에 가장 적합한 워크플로우 1개를 제안드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
