// Design Ref: §4 — Server Actions for form submission
'use server'

import type { FormSubmitResult, LeadFormData, SubsidyLeadData, ContactFormData } from '@/types'
import { leadFormSchema, subsidyFormSchema, contactFormSchema } from './schemas'

export async function submitLeadForm(data: LeadFormData): Promise<FormSubmitResult> {
  const parsed = leadFormSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, message: '입력값을 확인해주세요.' }
  }

  try {
    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID

    if (!portalId || !formId) {
      // HubSpot 미설정 시 로그만 남기고 성공 처리 (개발 환경)
      console.log('[LeadForm] Submission (no HubSpot):', parsed.data)
      return { success: true, message: '제출이 완료되었습니다.' }
    }

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [
            { name: 'help_type', value: parsed.data.helpType },
            { name: 'industry', value: parsed.data.industry },
            { name: 'company', value: parsed.data.company },
            { name: 'firstname', value: parsed.data.name },
            { name: 'email', value: parsed.data.email },
            { name: 'phone', value: parsed.data.phone },
          ],
        }),
      }
    )

    if (!response.ok) {
      console.error('[LeadForm] HubSpot error:', response.status)
      return { success: false, message: '잠시 후 다시 시도해주세요.' }
    }

    return { success: true, message: '제출이 완료되었습니다.' }
  } catch (error) {
    console.error('[LeadForm] Error:', error)
    return { success: false, message: '잠시 후 다시 시도해주세요.' }
  }
}

export async function submitSubsidyForm(data: SubsidyLeadData): Promise<FormSubmitResult> {
  const parsed = subsidyFormSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, message: '입력값을 확인해주세요.' }
  }

  try {
    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_SUBSIDY_FORM_ID

    if (!portalId || !formId) {
      console.log('[SubsidyForm] Submission (no HubSpot):', parsed.data)
      return { success: true, message: '제출이 완료되었습니다.' }
    }

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [
            { name: 'email', value: parsed.data.email },
            { name: 'company', value: parsed.data.company },
            { name: 'industry', value: parsed.data.industry },
          ],
        }),
      }
    )

    if (!response.ok) {
      return { success: false, message: '잠시 후 다시 시도해주세요.' }
    }

    return { success: true, message: '제출이 완료되었습니다.' }
  } catch (error) {
    console.error('[SubsidyForm] Error:', error)
    return { success: false, message: '잠시 후 다시 시도해주세요.' }
  }
}

export async function submitContactForm(data: ContactFormData): Promise<FormSubmitResult> {
  const parsed = contactFormSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, message: '입력값을 확인해주세요.' }
  }

  try {
    console.log('[ContactForm] Submission:', parsed.data)
    return { success: true, message: '문의가 접수되었습니다. 영업일 기준 1일 내 연락드리겠습니다.' }
  } catch (error) {
    console.error('[ContactForm] Error:', error)
    return { success: false, message: '잠시 후 다시 시도해주세요.' }
  }
}
