// LogoBar — Refined placeholder with monochrome treatment
interface LogoBarProps {
  logos?: string[]
}

export function LogoBar({ logos }: LogoBarProps) {
  const placeholders = logos ?? [
    'Partner A',
    'Partner B',
    'Partner C',
    'Partner D',
    'Partner E',
  ]

  return (
    <div className="flex items-center justify-center gap-10 opacity-40">
      {placeholders.map((name, i) => (
        <div
          key={i}
          className="flex h-8 items-center text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)]"
        >
          {name}
        </div>
      ))}
    </div>
  )
}
