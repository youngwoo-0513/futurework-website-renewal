// Design Ref: §5.4 — 문의하기 페이지
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { contactFormSchema } from '@/lib/schemas'
import { submitContactForm } from '@/lib/form-action'
import { COMPANY_INFO } from '@/lib/constants'
import type { ContactFormData } from '@/types'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true)
    const result = await submitContactForm(data)
    setIsSubmitting(false)
    if (result.success) setSubmitted(true)
    else alert(result.message)
  }

  return (
    <>
      <SchemaMarkup type="local-business" />
      <SchemaMarkup
        type="breadcrumb"
        breadcrumbs={[
          { name: '홈', url: '/' },
          { name: '문의하기', url: '/contact' },
        ]}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* 회사 정보 */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                문의하기
              </h1>
              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                제조 AI 도입, 지원사업 연계 등 궁금한 사항이 있으시면
                편하게 문의해주세요.
              </p>

              <div className="mt-10 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">주소</h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{COMPANY_INFO.address}</p>
                </div>
                {/* 사무실 위치 지도 */}
                <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                  <div className="flex h-full items-center justify-center text-sm text-[var(--text-secondary)]">
                    <a
                      href="https://map.kakao.com/?q=서울특별시+강남구"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors hover:text-primary"
                    >
                      <span>📍</span> 카카오맵에서 위치 보기
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">이메일</h3>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="mt-1 text-sm text-primary hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* 문의 폼 */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <p className="text-2xl">✅</p>
                  <h2 className="mt-2 text-lg font-bold text-[var(--foreground)]">
                    문의가 접수되었습니다
                  </h2>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    영업일 기준 1일 내 연락드리겠습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Input label="이름" error={errors.name?.message} {...register('name')} />
                  <Input label="이메일" type="email" error={errors.email?.message} {...register('email')} />
                  <Input label="회사명" error={errors.company?.message} {...register('company')} />
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">
                      문의 내용
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`w-full rounded-lg border bg-[var(--background)] px-3 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--text-secondary)] transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                        errors.message ? 'border-red-500' : 'border-[var(--border)]'
                      }`}
                      placeholder="문의하실 내용을 입력해주세요"
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? '전송 중...' : '문의 보내기'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
