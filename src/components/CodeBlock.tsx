export function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-(--border)">
      {label ? (
        <figcaption
          className="px-4 py-2 text-xs font-semibold"
          style={{ background: 'var(--surface-2)' }}
        >
          {label}
        </figcaption>
      ) : null}
      <pre
        dir="ltr"
        className="m-0 overflow-x-auto p-4 text-left text-[13px] leading-relaxed"
        style={{ background: 'var(--code-bg)', color: 'var(--code-text)' }}
      >
        <code>{code}</code>
      </pre>
    </figure>
  )
}
