// Select — Refined with better focus states
import { forwardRef } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  label: string
  options: readonly SelectOption[]
  error?: string
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, placeholder, id, className = '', ...props }, ref) => {
    const selectId = id || label.replace(/\s/g, '-').toLowerCase()

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-[var(--foreground)]"
        >
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={`w-full rounded-lg border bg-[var(--background)] px-3.5 py-2.5 text-sm text-[var(--foreground)] transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${
            error ? 'border-red-500 focus:ring-red-500/20' : 'border-[var(--border)]'
          } ${className}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'
