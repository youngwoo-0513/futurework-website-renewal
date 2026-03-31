// Design Ref: §5.3 — Step2: 회사명 + 이름 + 이메일 + 전화
'use client'

import { useFormContext } from 'react-hook-form'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import type { LeadFormData } from '@/types'

interface LeadFormStep2Props {
  onBack: () => void
  isSubmitting: boolean
}

export function LeadFormStep2({ onBack, isSubmitting }: LeadFormStep2Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<LeadFormData>()

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-[var(--text-secondary)]">
        Step 2/2 — 연락처를 남겨주세요
      </p>
      <Input
        label="회사명"
        placeholder="예: 삼성전자"
        error={errors.company?.message}
        {...register('company')}
      />
      <Input
        label="이름"
        placeholder="홍길동"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="이메일"
        type="email"
        placeholder="hong@company.co.kr"
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        label="연락처"
        type="tel"
        placeholder="010-1234-5678"
        error={errors.phone?.message}
        {...register('phone')}
      />
      <div className="flex gap-3">
        <Button type="button" variant="ghost" onClick={onBack} className="flex-1">
          ← 이전
        </Button>
        <Button type="submit" size="lg" disabled={isSubmitting} className="flex-1">
          {isSubmitting ? '제출 중...' : '상담 신청하기'}
        </Button>
      </div>
    </div>
  )
}
