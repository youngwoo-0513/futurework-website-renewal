// FAQ — Refined with section label
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { FAQ_ITEMS, FAQ_CTA } from '@/lib/constants'

export function FaqSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              자주 묻는 질문
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mx-auto mt-14 max-w-2xl">
            {FAQ_ITEMS.map((item) => (
              <Accordion
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="mt-12 text-center">
            <Button href={FAQ_CTA.href} variant={FAQ_CTA.variant}>
              {FAQ_CTA.text}
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
