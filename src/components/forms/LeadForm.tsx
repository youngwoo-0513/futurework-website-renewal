// Design Ref: §5.3 — 2-Step 리드 폼 컨테이너 (Step1 → Step2 → 제출)
// Plan SC: 리드 폼 전환율 5% 이상 — Zeigarnik Effect 2-Step 설계
'use client'

import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

import { LeadFormStep1 } from './LeadFormStep1'
import { LeadFormStep2 } from './LeadFormStep2'
import { TrustBadge } from '@/components/ui/TrustBadge'
import { leadFormSchema } from '@/lib/schemas'
import { submitLeadForm } from '@/lib/form-action'
import { FINAL_CTA_COPY } from '@/lib/constants'
import type { LeadFormData } from '@/types'

export function LeadForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const methods = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      helpType: undefined,
      industry: undefined,
      company: '',
      name: '',
      email: '',
      phone: '',
    },
  })

  async function onSubmit(data: LeadFormData) {
    setIsSubmitting(true)
    const result = await submitLeadForm(data)
    setIsSubmitting(false)

    if (result.success) {
      router.push('/thank-you')
    } else {
      alert(result.message)
    }
  }

  return (
    <FormProvider {...methods}>
      {/* Honeypot 스팸 방지 */}
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <input
          type="text"
          name="website"
          className="absolute -left-[9999px] opacity-0"
          tabIndex={-1}
          autoComplete="off"
        />

        {step === 1 ? (
          <LeadFormStep1 onNext={() => setStep(2)} />
        ) : (
          <LeadFormStep2 onBack={() => setStep(1)} isSubmitting={isSubmitting} />
        )}

        <div className="mt-4">
          <p className="text-center text-xs text-[var(--text-secondary)]">
            {FINAL_CTA_COPY.microCopy}
          </p>
          <div className="mt-2">
            <TrustBadge items={FINAL_CTA_COPY.trustBadges} />
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
