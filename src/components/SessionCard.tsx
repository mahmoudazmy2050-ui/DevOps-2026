import type { Session, SessionBlock } from '../content/types'
import { CodeBlock } from './CodeBlock'

const typeLabel: Record<SessionBlock['type'], string> = {
  objective: 'الهدف',
  explanation: 'الشرح',
  commands: 'أوامر',
  practice: 'التمرين',
  challenge: 'التحدّي',
  expected: 'النتيجة المتوقعة',
  checkpoint: 'Checkpoint',
}

const typeColor: Record<SessionBlock['type'], string> = {
  objective: '#1a7f37',
  explanation: '#7c3aed',
  commands: '#0e7490',
  practice: '#b45309',
  challenge: '#dc2626',
  expected: '#0f766e',
  checkpoint: '#be185d',
}

function BlockView({ block }: { block: SessionBlock }) {
  const color = typeColor[block.type]
  const label = block.title ?? typeLabel[block.type]

  if (block.type === 'commands') {
    return (
      <section className="mb-4">
        <h4 className="mb-2 text-sm font-bold" style={{ color }}>
          {label}
        </h4>
        <CodeBlock code={block.code ?? ''} />
      </section>
    )
  }

  return (
    <section className="mb-4">
      <h4 className="mb-1.5 flex items-center gap-2 text-sm font-bold" style={{ color }}>
        <span
          aria-hidden
          className="inline-block h-2.5 w-2.5 rounded-full"
          style={{ background: color }}
        />
        {label}
      </h4>
      {block.text ? <p className="text-[15px] leading-relaxed">{block.text}</p> : null}
      {block.items ? (
        <ul className="mt-2 space-y-1.5 pl-5 text-[15px] leading-relaxed">
          {block.items.map((item, i) => (
            <li key={i} className="list-disc marker:opacity-50">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

export function SessionCard({
  session,
  done,
  onToggle,
}: {
  session: Session
  done: boolean
  onToggle: () => void
}) {
  return (
    <article
      className="overflow-hidden rounded-2xl border transition-colors"
      style={{
        borderColor: done ? 'var(--border)' : 'var(--border)',
        background: 'var(--surface)',
      }}
      id={session.id}
    >
      <header
        className="flex items-center justify-between gap-3 border-b px-5 py-3"
        style={{ borderColor: 'var(--border)' }}
      >
        <h3 className="text-base font-bold">{session.title}</h3>
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
          {done ? 'أُنجزت' : 'علّم كمُنجزة'}
        </label>
      </header>
      <div className="px-5 py-4">
        {session.blocks.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}
      </div>
    </article>
  )
}
