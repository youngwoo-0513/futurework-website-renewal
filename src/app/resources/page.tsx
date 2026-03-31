// 리소스(블로그) 리스트 페이지
import type { Metadata } from 'next'
import Link from 'next/link'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { BLOG_POSTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: '리소스 | 제조 AI 인사이트 & 지원사업 가이드',
  description:
    '제조 AI 도입 인사이트, 스마트공장 지원사업 가이드, 활용 사례를 확인하세요.',
}

export default function ResourcesPage() {
  return (
    <>
      <SchemaMarkup
        type="breadcrumb"
        breadcrumbs={[
          { name: '홈', url: '/' },
          { name: '리소스', url: '/resources' },
        ]}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              리소스
            </h1>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              제조 AI 도입에 필요한 인사이트와 가이드를 정리했습니다.
            </p>
          </div>

          {/* 블로그 리스트 — 썸네일 카드 */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-shadow hover:shadow-lg"
              >
                {/* 썸네일 */}
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-accent/5 to-cta/10 flex items-center justify-center">
                  <div className="text-center px-6">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <h3 className="mt-3 text-sm font-bold text-[var(--foreground)] line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* 내용 */}
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                    <span>{post.date}</span>
                    <span>{post.readTime} 읽기</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
