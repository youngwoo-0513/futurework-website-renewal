// Design Ref: §4.3 — Zod 검증 스키마
import { z } from 'zod'

export const leadFormStep1Schema = z.object({
  helpType: z.enum(['subsidy-poc', 'self-ai', 'quality-auto', 'production-efficiency'], {
    message: '도움이 필요한 분야를 선택해주세요',
  }),
  industry: z.enum(['automotive', 'electronics', 'food', 'metal', 'partner', 'other'], {
    message: '업종을 선택해주세요',
  }),
})

export const leadFormStep2Schema = z.object({
  company: z.string().min(1, '회사명을 입력해주세요'),
  name: z.string().min(1, '이름을 입력해주세요'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  phone: z
    .string()
    .min(1, '연락처를 입력해주세요')
    .regex(/^01[016789]-?\d{3,4}-?\d{4}$/, '올바른 휴대폰 번호를 입력해주세요'),
})

export const leadFormSchema = leadFormStep1Schema.merge(leadFormStep2Schema)

export const subsidyFormSchema = z.object({
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  company: z.string().min(1, '회사명을 입력해주세요'),
  industry: z.string().min(1, '업종을 선택해주세요'),
})

export const contactFormSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  company: z.string().min(1, '회사명을 입력해주세요'),
  message: z.string().min(10, '문의 내용을 10자 이상 입력해주세요'),
})
