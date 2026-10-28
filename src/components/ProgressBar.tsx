export function ProgressBar({ value, className }: { value: number; className?: string }) {
  const clamped = Math.max(0, Math.min(100, value))
  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-(--surface-2) ${className ?? ''}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${clamped}%`, background: 'var(--accent)' }}
      />
    </div>
  )
}

export function PercentBadge({ value }: { value: number }) {
  return (
    <span
      className="mono rounded-md px-2 py-0.5 text-xs font-semibold"
      style={{ background: 'var(--accent-soft)', color: 'var(--accent-strong)' }}
    >
      {value}%
    </span>
  )
}
