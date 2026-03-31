// Design Ref: §5.3 — Primary/Secondary/Ghost variant, size prop
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-cta text-[#09090B] hover:bg-cta-dark focus-visible:ring-cta',
  secondary:
    'border border-primary text-primary hover:bg-primary hover:text-[#09090B] focus-visible:ring-primary',
  ghost:
    'text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
}

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<'button'> & { href?: undefined }

type ButtonAsLink = ButtonBaseProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if ('href' in props && props.href) {
    return <Link className={classes} {...(props as ComponentPropsWithoutRef<typeof Link>)} />
  }

  return <button className={classes} {...(props as ComponentPropsWithoutRef<'button'>)} />
}
