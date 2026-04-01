// Card — Refined with hover glow and depth
interface CardProps {
  icon?: string
  title: string
  description: string
  className?: string
}

export function Card({ icon, title, description, className = '' }: CardProps) {
  return (
    <div
      className={`group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_30px_-12px_rgba(0,184,94,0.12)] ${className}`}
    >
      {icon && (
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-2xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
      )}
      <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
        {description}
      </p>
    </div>
  )
}
