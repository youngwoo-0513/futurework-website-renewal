// B2B Knowledge Hub 인터랙티브 데모 — Arcade 임베드 + FWL 브랜딩 오버레이
import type { Metadata } from 'next'
import Image from 'next/image'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { Button } from '@/components/ui/Button'

const ARCADE_URL =
  'https://demo.arcade.software/fBYW1MXjsV9yPuhgt1rk?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true'

export const metadata: Metadata = {
  title: 'B2B Knowledge Hub 인터랙티브 데모 | AX Flow',
  description:
    '제조 현장의 지식을 온톨로지 기반으로 구조화하는 AX Flow Knowledge Hub를 직접 조작해보세요. 개인 드라이브 연결부터 지식 지도 활용까지 2분 만에 체험합니다.',
  openGraph: {
    title: 'B2B Knowledge Hub 인터랙티브 데모',
    description: '2분 만에 체험하는 AX Flow Knowledge Hub — 직접 클릭하며 확인하세요.',
    type: 'website',
  },
  robots: { index: false, follow: false },
}

export default function B2BKnowledgeHubDemoPage() {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        breadcrumbs={[
          { name: '홈', url: '/' },
          { name: '데모', url: '/demo' },
          { name: 'B2B Knowledge Hub', url: '/demo/knowledgeHub/B2B' },
        ]}
      />

      <section className="relative overflow-hidden bg-[var(--background)] py-12 sm:py-20">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* 헤더 */}
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Interactive Demo · B2B Knowledge Hub
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              AI 지식 허브, 직접 조작해보세요
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-[var(--text-secondary)] sm:text-lg">
              개인 드라이브를 연결하고 지식 지도를 탐색하는 2분짜리 실제 화면입니다.
              화살표와 버튼을 클릭하며 자유롭게 진행하세요.
            </p>
          </div>

          {/* Arcade 임베드 래퍼 */}
          <div className="relative mx-auto overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
            {/* iframe 비율: padding-bottom calc(54.6875% + 41px) — Arcade 원본 비율 유지 */}
            <div
              className="relative w-full"
              style={{ paddingBottom: 'calc(54.6875% + 41px)' }}
            >
              <iframe
                src={ARCADE_URL}
                title="B2B Knowledge Hub - AX Flow"
                frameBorder={0}
                loading="lazy"
                allowFullScreen
                allow="clipboard-write"
                className="absolute left-0 top-0 h-full w-full"
                style={{ colorScheme: 'light' }}
              />

              {/* 우측 상단 'Try Arcade' 배지를 FWL 로고로 덮음 */}
              <div
                aria-hidden
                className="pointer-events-none absolute right-2 top-2 z-10 flex h-9 w-[148px] items-center justify-center rounded-lg bg-white/95 shadow-sm ring-1 ring-black/5 backdrop-blur-sm sm:right-3 sm:top-3 sm:h-10 sm:w-[168px]"
              >
                <Image
                  src="/logo-futureworklab.png"
                  alt="FutureWorkLab"
                  width={140}
                  height={24}
                  className="h-5 w-auto sm:h-6"
                  priority
                />
              </div>
            </div>
          </div>

          {/* 설명 + CTA */}
          <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-3">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--foreground)]">
                개인 드라이브 연결
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Google Drive, OneDrive의 제조 문서를 그대로 연결해 AI가 학습합니다.
              </p>
            </div>
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--foreground)]">
                지식 지도로 시각화
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                문서 간 관계를 온톨로지 그래프로 구조화해 맥락까지 이해합니다.
              </p>
            </div>
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--foreground)]">
                질문 한 줄로 답변
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                출처 문서 인용과 함께 정확한 답변을 제공, 환각(hallucination)을 최소화합니다.
              </p>
            </div>
          </div>

          {/* 하단 CTA */}
          <div className="mt-14 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center sm:mt-20 sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
              귀사 환경에 맞춘 데모가 필요하신가요?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[var(--text-secondary)]">
              15분 안에 귀사의 업종·공정·데이터 구조에 맞춘 워크플로우를 제안드립니다.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/demo" size="lg">
                무료 데모 신청하기
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
