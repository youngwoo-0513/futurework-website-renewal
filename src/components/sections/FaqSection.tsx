// Design Ref: §5.4 — FAQ: 아코디언 7개 + CTA
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { FAQ_ITEMS, FAQ_CTA } from '@/lib/constants'

export function FaqSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            자주 묻는 질문
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          {FAQ_ITEMS.map((item) => (
            <Accordion
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href={FAQ_CTA.href} variant={FAQ_CTA.variant}>
            {FAQ_CTA.text}
          </Button>
        </div>
      </div>
    </section>
  )
}
