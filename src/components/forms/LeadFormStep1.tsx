// Design Ref: §5.3 — Step1: 고민 유형 + 업종 선택
'use client'

import { useFormContext } from 'react-hook-form'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { HELP_TYPE_OPTIONS, INDUSTRY_OPTIONS } from '@/lib/constants'
import type { LeadFormData } from '@/types'

interface LeadFormStep1Props {
  onNext: () => void
}

export function LeadFormStep1({ onNext }: LeadFormStep1Props) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<LeadFormData>()

  async function handleNext() {
    const valid = await trigger(['helpType', 'industry'])
    if (valid) onNext()
  }

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-[var(--text-secondary)]">
        Step 1/2 — 어떤 도움이 필요하신가요?
      </p>
      <Select
        label="도움이 필요한 분야"
        options={HELP_TYPE_OPTIONS}
        placeholder="선택해주세요"
        error={errors.helpType?.message}
        {...register('helpType')}
      />
      <Select
        label="업종"
        options={INDUSTRY_OPTIONS}
        placeholder="선택해주세요"
        error={errors.industry?.message}
        {...register('industry')}
      />
      <Button type="button" onClick={handleNext} size="lg" className="w-full">
        다음 단계 →
      </Button>
    </div>
  )
}
