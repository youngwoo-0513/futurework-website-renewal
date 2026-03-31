// 탭 기반 기능 쇼케이스 — A+ AI 레퍼런스 스타일
'use client'

import { useState } from 'react'
import { CORE_FEATURES } from '@/lib/constants'

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const feature = CORE_FEATURES[activeTab]

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            AX Flow 핵심 기능
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            각 기능을 클릭하여 자세한 내용을 확인하세요.
          </p>
        </div>

        {/* 탭 네비게이션 */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1.5">
            {CORE_FEATURES.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setActiveTab(i)}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all sm:px-6 ${
                  activeTab === i
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--background)]'
                }`}
              >
                <span className="mr-1.5">{f.icon}</span>
                {f.title}
              </button>
            ))}
          </div>
        </div>

        {/* 탭 컨텐츠 */}
        <div className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            {/* 데모 이미지/비주얼 영역 */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{feature.subtitle}</p>
                <div className="mt-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-lg font-bold text-white backdrop-blur">
                  {feature.metric} <span className="ml-2 text-sm font-normal text-slate-300">{feature.metricDetail}</span>
                </div>
              </div>
              {/* 데모 영상 placeholder overlay */}
              <div className="absolute bottom-4 right-4 rounded-lg bg-black/50 px-3 py-1.5 text-xs text-white/70 backdrop-blur">
                데모 영상 준비 중
              </div>
            </div>

            {/* 설명 영역 */}
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[var(--foreground)]">
                {feature.headline}
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">
                {feature.description}
              </p>

              {/* 업종별 활용 */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-[var(--foreground)]">업종별 활용 사례</h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {feature.useCases.map((uc) => (
                    <div
                      key={uc.industry}
                      className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] p-3"
                    >
                      <span className="shrink-0 rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {uc.industry}
                      </span>
                      <span className="text-sm text-[var(--text-secondary)]">{uc.example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
