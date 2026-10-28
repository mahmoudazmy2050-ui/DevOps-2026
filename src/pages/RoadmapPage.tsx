import { Link } from 'react-router-dom'
import { pipelineSteps } from '../content/projects'
import { phases } from '../content/phases'

export function RoadmapPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-black">المسار الكامل</h1>
        <p className="mt-1" style={{ color: 'var(--muted)' }}>
          التنقل الكامل من فكرة إلى تطبيق في Production — كل خطوة منها مرحلة في هذا المسار.
        </p>
      </header>

      <section
        className="rounded-3xl border p-6"
        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
      >
        <ol className="relative space-y-2">
          {pipelineSteps.map((step, i) => (
            <li key={step} className="flex items-center gap-4">
              <span
                className="mono grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
                style={{ background: 'var(--accent)' }}
              >
                {i + 1}
              </span>
              <span className="text-sm font-bold">{step}</span>
              {i < pipelineSteps.length - 1 && (
                <span aria-hidden className="mr-auto text-xs" style={{ color: 'var(--muted)' }}>
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-black">ترتيب المراحل الدراسية</h2>
        <div className="space-y-3">
          {phases.map((phase) => (
            <Link
              key={phase.slug}
              to={`/phases/${phase.slug}`}
              className="flex w-full items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-right transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <span>
                <span
                  className="mono block text-[11px] font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  PHASE {phase.number}
                </span>
                <span className="text-base font-black">{phase.title}</span>
                <span className="block text-xs" style={{ color: 'var(--muted)' }}>
                  {phase.subtitle}
                </span>
              </span>
              <span
                className="shrink-0 rounded-lg px-3 py-1 text-sm font-bold"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent-strong)' }}
              >
                افتح
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
