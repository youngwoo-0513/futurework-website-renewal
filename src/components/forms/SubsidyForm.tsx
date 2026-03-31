// Design Ref: §5.3 — PDF 다운로드 리드 마그넷 폼 (이메일 + 회사명 + 업종)
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { subsidyFormSchema } from '@/lib/schemas'
import { submitSubsidyForm } from '@/lib/form-action'
import { INDUSTRY_OPTIONS } from '@/lib/constants'
import type { SubsidyLeadData } from '@/types'

interface SubsidyFormProps {
  onSuccess?: () => void
}

export function SubsidyForm({ onSuccess }: SubsidyFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubsidyLeadData>({
    resolver: zodResolver(subsidyFormSchema),
  })

  async function onSubmit(data: SubsidyLeadData) {
    setIsSubmitting(true)
    const result = await submitSubsidyForm(data)
    setIsSubmitting(false)

    if (result.success) {
      setSubmitted(true)
      onSuccess?.()
    } else {
      alert(result.message)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-success/10 p-4 text-center">
        <p className="font-semibold text-success">가이드가 이메일로 발송되었습니다!</p>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          받은 편지함을 확인해주세요.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      {/* Honeypot 스팸 방지 */}
      <input
        type="text"
        name="website"
        className="absolute -left-[9999px] opacity-0"
        tabIndex={-1}
        autoComplete="off"
      />
      <Input
        label="이메일"
        type="email"
        placeholder="hong@company.co.kr"
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        label="회사명"
        placeholder="예: 삼성전자"
        error={errors.company?.message}
        {...register('company')}
      />
      <Select
        label="업종"
        options={INDUSTRY_OPTIONS}
        placeholder="선택해주세요"
        error={errors.industry?.message}
        {...register('industry')}
      />
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? '전송 중...' : '무료 가이드 받기'}
      </Button>
    </form>
  )
}
