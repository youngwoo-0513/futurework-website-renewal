// Badge — Refined with subtle border treatment
type BadgeVariant = 'default' | 'urgent' | 'success'

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-primary/8 text-primary border-primary/20',
  urgent: 'bg-cta/8 text-cta border-cta/20',
  success: 'bg-success/8 text-success border-success/20',
}

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase ${variantStyles[variant]}`}
    >
      {children}
    </span>
  )
}
