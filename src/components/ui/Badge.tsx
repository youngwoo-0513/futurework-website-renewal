// Design Ref: §5.3 — 상태 배지 (긴급, 신규 등)
type BadgeVariant = 'default' | 'urgent' | 'success'

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-primary/10 text-primary',
  urgent: 'bg-cta/10 text-cta',
  success: 'bg-success/10 text-success',
}

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantStyles[variant]}`}
    >
      {children}
    </span>
  )
}
