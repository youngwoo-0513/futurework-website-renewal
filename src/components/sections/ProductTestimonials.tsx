// Product Testimonials — Editorial quotes with monochrome avatars
import { AnimateIn, StaggerChildren } from '@/components/ui/AnimateIn'
import { TESTIMONIALS } from '@/lib/constants'

export function ProductTestimonials() {
  return (
    <section className="relative bg-[var(--section-alt)] py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              현장의 목소리
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              귀사의 워크플로우에서도 같은 결과를 확인하세요.
            </p>
          </div>
        </AnimateIn>

        <StaggerChildren className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={i}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
            >
              <span className="text-3xl leading-none text-primary/30">&ldquo;</span>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-[var(--foreground)]">
                {t.quote}
              </p>
              <footer className="mt-5 flex items-center gap-3 border-t border-[var(--border)] pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-bold text-[var(--background)]">
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--foreground)]">
                    {t.author}
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </footer>
            </blockquote>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
