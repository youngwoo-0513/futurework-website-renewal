// Design Ref: §4 — Server Actions for form submission
'use server'

import type { FormSubmitResult, LeadFormData, SubsidyLeadData, ContactFormData } from '@/types'
import { leadFormSchema, subsidyFormSchema, contactFormSchema } from './schemas'

async function submitToHubSpot(
  portalId: string,
  formId: string,
  fields: { name: string; value: string }[],
  context?: { consent?: { value: boolean; text: string }[] }
): Promise<{ ok: boolean; status?: number }> {
  const body: Record<string, unknown> = { fields }
  if (context?.consent?.length) {
    body.legalConsentOptions = {
      consent: {
        consentToProcess: true,
        text: '개인정보 수집 및 이용에 동의합니다.',
        communications: context.consent.map((c) => ({
          value: c.value,
          subscriptionTypeId: 999,
          text: c.text,
        })),
      },
    }
  }

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  )
  return { ok: response.ok, status: response.status }
}

export async function submitLeadForm(data: LeadFormData): Promise<FormSubmitResult> {
  const parsed = leadFormSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, message: '입력값을 확인해주세요.' }
  }

  try {
    const portalId = process.env.HUBSPOT_PORTAL_ID
    const formId = process.env.HUBSPOT_LEAD_FORM_ID

    if (!portalId || !formId) {
      console.log('[LeadForm] Submission (no HubSpot):', parsed.data)
      return { success: true, message: '제출이 완료되었습니다.' }
    }

    const result = await submitToHubSpot(portalId, formId, [
      { name: 'firstname', value: parsed.data.name },
      { name: 'email', value: parsed.data.email },
      { name: 'mobilephone', value: parsed.data.phone },
      { name: '0-2/name', value: parsed.data.company },
      { name: 'company_industry', value: parsed.data.industry },
      { name: 'yocheongyuhyeong', value: parsed.data.helpType },
    ])

    if (!result.ok) {
      console.error('[LeadForm] HubSpot error:', result.status)
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
    const portalId = process.env.HUBSPOT_PORTAL_ID
    const formId = process.env.HUBSPOT_SUBSIDY_FORM_ID

    if (!portalId || !formId) {
      console.log('[SubsidyForm] Submission (no HubSpot):', parsed.data)
      return { success: true, message: '제출이 완료되었습니다.' }
    }

    const result = await submitToHubSpot(
      portalId,
      formId,
      [
        { name: 'firstname', value: parsed.data.name },
        { name: 'email', value: parsed.data.email },
        { name: '0-2/name', value: parsed.data.company },
        { name: 'company_industry', value: parsed.data.industry },
        { name: 'gaeinjeongbo_sujibdongui', value: parsed.data.privacyConsent ? '동의' : '' },
      ],
      {
        consent: [
          {
            value: parsed.data.newsletterConsent ?? false,
            text: '뉴스레터 및 마케팅 정보 수신에 동의합니다.',
          },
        ],
      }
    )

    if (!result.ok) {
      console.error('[SubsidyForm] HubSpot error:', result.status)
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
    const portalId = process.env.HUBSPOT_PORTAL_ID
    const formId = process.env.HUBSPOT_CONTACT_FORM_ID

    if (!portalId || !formId) {
      console.log('[ContactForm] Submission (no HubSpot):', parsed.data)
      return { success: true, message: '문의가 접수되었습니다. 영업일 기준 1일 내 연락드리겠습니다.' }
    }

    const result = await submitToHubSpot(portalId, formId, [
      { name: 'firstname', value: parsed.data.name },
      { name: 'email', value: parsed.data.email },
      { name: '0-2/name', value: parsed.data.company },
      { name: 'company_industry', value: parsed.data.industry },
      { name: 'message', value: parsed.data.message },
    ])

    if (!result.ok) {
      console.error('[ContactForm] HubSpot error:', result.status)
      return { success: false, message: '잠시 후 다시 시도해주세요.' }
    }

    return { success: true, message: '문의가 접수되었습니다. 영업일 기준 1일 내 연락드리겠습니다.' }
  } catch (error) {
    console.error('[ContactForm] Error:', error)
    return { success: false, message: '잠시 후 다시 시도해주세요.' }
  }
}
