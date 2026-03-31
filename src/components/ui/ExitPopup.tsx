// Design Ref: §5.3 — 이탈 감지 팝업 (세션 1회, PDF 제안)
'use client'

import { useState, useEffect, useCallback } from 'react'
import { Modal } from './Modal'
import { SubsidyForm } from '@/components/forms/SubsidyForm'

export function ExitPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true)
        setDismissed(true)
      }
    },
    [dismissed]
  )

  useEffect(() => {
    document.addEventListener('mouseout', handleMouseLeave)
    return () => document.removeEventListener('mouseout', handleMouseLeave)
  }, [handleMouseLeave])

  return (
    <Modal open={show} onClose={() => setShow(false)}>
      <div className="text-center">
        <p className="text-2xl">📄</p>
        <h3 className="mt-2 text-lg font-bold text-[var(--foreground)]">
          잠깐! 2026 스마트공장 지원사업
          <br />
          매칭 가이드를 받아보세요
        </h3>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          지원 자격, 일정, 신청 방법을 한 눈에 정리한 PDF를 무료로 보내드립니다.
        </p>
        <div className="mt-4">
          <SubsidyForm onSuccess={() => setShow(false)} />
        </div>
      </div>
    </Modal>
  )
}
