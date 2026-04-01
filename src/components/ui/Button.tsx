// Button — Industrial Precision variant with refined micro-interactions
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-cta text-[#09090B] hover:brightness-110 active:brightness-95 shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_4px_16px_rgba(0,255,133,0.25),0_1px_2px_rgba(0,0,0,0.1)] focus-visible:ring-cta',
  secondary:
    'border border-[var(--border)] text-[var(--foreground)] bg-[var(--background)] hover:border-primary hover:text-primary focus-visible:ring-primary',
  ghost:
    'text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-3.5 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2',
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
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]'

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if ('href' in props && props.href) {
    return <Link className={classes} {...(props as ComponentPropsWithoutRef<typeof Link>)} />
  }

  return <button className={classes} {...(props as ComponentPropsWithoutRef<'button'>)} />
}
