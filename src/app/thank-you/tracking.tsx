// Design Ref: §5.4 — 전환 추적 이벤트 (GA4 + HubSpot)
'use client'

import { useEffect } from 'react'

export function ThankYouTracking() {
  useEffect(() => {
    // GA4 전환 이벤트
    if (typeof window !== 'undefined' && 'gtag' in window) {
      ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
        'event',
        'conversion',
        { event_category: 'lead', event_label: 'form_submit' }
      )
    }

    // HubSpot 전환 추적
    if (typeof window !== 'undefined' && '_hsq' in window) {
      ;(window as unknown as { _hsq: unknown[][] })._hsq.push([
        'trackCustomBehavioralEvent',
        { name: 'lead_form_submitted' },
      ])
    }
  }, [])

  return null
}
