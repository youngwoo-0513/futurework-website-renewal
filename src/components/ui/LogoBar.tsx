// Design Ref: §5.3 — 파트너/고객사 로고 가로 스크롤
interface LogoBarProps {
  logos?: string[]
}

export function LogoBar({ logos }: LogoBarProps) {
  // 로고 이미지 없을 때 플레이스홀더 표시
  const placeholders = logos ?? [
    'Partner A',
    'Partner B',
    'Partner C',
    'Partner D',
    'Partner E',
  ]

  return (
    <div className="flex items-center justify-center gap-8 opacity-50 grayscale">
      {placeholders.map((name, i) => (
        <div
          key={i}
          className="flex h-8 items-center text-xs font-medium text-[var(--text-secondary)]"
        >
          {name}
        </div>
      ))}
    </div>
  )
}
