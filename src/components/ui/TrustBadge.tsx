// Design Ref: §5.3 — "영업일 1일 내 연락" 등 신뢰 지표
interface TrustBadgeProps {
  items: readonly string[]
}

export function TrustBadge({ items }: TrustBadgeProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[var(--text-secondary)]">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <svg className="h-3.5 w-3.5 text-success" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
          {item}
        </span>
      ))}
    </div>
  )
}
