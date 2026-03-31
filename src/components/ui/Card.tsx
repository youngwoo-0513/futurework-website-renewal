// Design Ref: §5.3 — 범용 카드 (icon, title, description)
interface CardProps {
  icon?: string
  title: string
  description: string
  className?: string
}

export function Card({ icon, title, description, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-lg ${className}`}
    >
      {icon && <span className="mb-3 block text-3xl">{icon}</span>}
      <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
        {description}
      </p>
    </div>
  )
}
