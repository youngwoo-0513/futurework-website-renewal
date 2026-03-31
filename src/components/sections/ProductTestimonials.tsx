// 제품 페이지 고객 피드백 — 세일즈덱 원문
import { TESTIMONIALS } from '@/lib/constants'

export function ProductTestimonials() {
  return (
    <section className="bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            현장의 목소리
          </h2>
          <p className="mt-3 text-[var(--text-secondary)]">
            귀사의 워크플로우에서도 같은 결과를 확인하세요.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--background)] p-6"
            >
              <p className="flex-1 text-sm leading-relaxed text-[var(--foreground)]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--foreground)]">
                    {t.author}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
