// Input — Refined with better focus states
import { forwardRef } from 'react'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className = '', ...props }, ref) => {
    const inputId = id || label.replace(/\s/g, '-').toLowerCase()

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[var(--foreground)]"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`w-full rounded-lg border bg-[var(--background)] px-3.5 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--text-tertiary)] transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
            error ? 'border-red-500 focus:ring-red-500/20' : 'border-[var(--border)]'
          } ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        {hint && !error && (
          <p className="text-xs text-[var(--text-tertiary)]">{hint}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
