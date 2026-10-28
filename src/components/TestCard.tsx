import type { TestItem } from '../content/types'

const testKindLabel: Record<TestItem['type'], string> = {
  knowledge: 'اختبار نظري',
  practical: 'اختبار عملي',
  debugging: 'اختبار تشخيصي',
}

export function TestCard({
  test,
  index,
  done,
  onToggle,
}: {
  test: TestItem
  index: number
  done: boolean
  onToggle: () => void
}) {
  return (
    <li
      className="rounded-xl border p-4 transition-opacity"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--border)',
        opacity: done ? 0.7 : 1,
      }}
    >
      <div className="mb-1 flex items-center justify-between gap-3">
        <span
          className="rounded-md px-2 py-0.5 text-[11px] font-bold"
          style={{ background: 'var(--accent-soft)', color: 'var(--accent-strong)' }}
        >
          {testKindLabel[test.type]} {index + 1}
        </span>
        <label
          className="flex cursor-pointer items-center gap-2 text-xs font-semibold"
          style={{ color: 'var(--muted)' }}
        >
          <input
            type="checkbox"
            checked={done}
            onChange={onToggle}
            className="h-4 w-4 cursor-pointer accent-[var(--accent)]"
          />
          {done ? 'تم' : 'حلّيته'}
        </label>
      </div>
      <p className="text-[15px] leading-relaxed">{test.question}</p>
      {test.hint ? (
        <details
          className="mt-2 rounded-lg px-3 py-2 text-sm"
          style={{ background: 'var(--surface-2)' }}
        >
          <summary className="cursor-pointer font-semibold" style={{ color: 'var(--muted)' }}>
            تلميح
          </summary>
          <p className="mt-1 leading-relaxed">{test.hint}</p>
        </details>
      ) : null}
    </li>
  )
}
