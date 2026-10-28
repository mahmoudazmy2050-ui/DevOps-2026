import { Link, useSearchParams } from 'react-router-dom'
import { phases, totalPhases } from '../content/phases'
import { pipelineSteps } from '../content/projects'
import { useProgress, phaseCompletion } from '../hooks/useProgress'
import { PercentBadge, ProgressBar } from '../components/ProgressBar'

export function Home() {
  const [params] = useSearchParams()
  const query = (params.get('q') ?? '').trim().toLowerCase()
  const { progress } = useProgress()

  const filtered = query
    ? phases.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.objective.toLowerCase().includes(query) ||
          p.topics.some((t) => t.toLowerCase().includes(query)),
      )
    : phases

  const donePhases = phases.filter((p) => phaseCompletion(p, progress[p.slug]) === 100).length
  const overall = Math.round((donePhases / totalPhases) * 100)

  return (
    <div className="space-y-10">
      <section
        className="overflow-hidden rounded-3xl border p-8 md:p-10"
        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
      >
        <p
          className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold"
          style={{ background: 'var(--accent-soft)', color: 'var(--accent-strong)' }}
        >
          منهج عملي طويل المدى · من الصفر إلى Production
        </p>
        <h1 className="mb-3 text-3xl font-black leading-tight md:text-5xl">
          سافر معي من <span style={{ color: 'var(--accent)' }}>الصفر</span> إلى Full-Stack
          <span className="block">Developer + DevOps Engineer</span>
        </h1>
        <p className="max-w-2xl leading-relaxed" style={{ color: 'var(--muted)' }}>
          هذا الموقع هو خريطتك الكاملة: 19 مرحلة، عشرات الجلسات المفصّلة، مصاد مهمة وفيديوهات
          موثّقة، 10 مشاريع حقيقية، اختبارات، وتتبّع لتقدّمك — كل شيء مجاني أو Open Source.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="text-sm font-bold" style={{ color: 'var(--muted)' }}>
            التقدّم الإجمالي
          </span>
          <div className="w-44">
            <ProgressBar value={overall} />
          </div>
          <PercentBadge value={overall} />
        </div>
      </section>

      {query && (
        <section>
          <h2 className="mb-3 text-lg font-bold">
            نتائج البحث عن <span style={{ color: 'var(--accent)' }}>"{params.get('q')}"</span>
            <span style={{ color: 'var(--muted)' }}> ({filtered.length} نتيجة)</span>
          </h2>
        </section>
      )}

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-black">المراحل الـ {totalPhases}</h2>
          <Link
            to="/roadmap"
            className="text-sm font-bold underline-offset-4 hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            شوف المسار كامل ←
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((phase) => {
            const pct = phaseCompletion(phase, progress[phase.slug])
            return (
              <Link
                key={phase.slug}
                to={`/phases/${phase.slug}`}
                className="group flex flex-col rounded-2xl border p-5 transition-transform hover:-translate-y-1 hover:shadow-lg"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="mono text-xs font-bold" style={{ color: 'var(--accent)' }}>
                    PHASE {phase.number}
                  </span>
                  <PercentBadge value={pct} />
                </div>
                <h3 className="mb-1 text-base font-black group-hover:text-[var(--accent)]">
                  {phase.title}
                </h3>
                <p
                  className="mb-3 line-clamp-2 text-sm leading-relaxed"
                  style={{ color: 'var(--muted)' }}
                >
                  {phase.objective}
                </p>
                <div className="mt-auto">
                  <ProgressBar value={pct} />
                  <p className="mono mt-1.5 text-[11px]" style={{ color: 'var(--muted)' }}>
                    {phase.sessions.length} جلسة · {phase.tests.length} اختبار
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {!query && (
        <section
          className="rounded-3xl border p-8"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <h2 className="mb-5 text-xl font-black">بصمة المسار من البداية للنهاية</h2>
          <ol className="flex flex-wrap items-center gap-2">
            {pipelineSteps.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span
                  className="rounded-lg px-3 py-1.5 text-sm font-bold"
                  style={{ background: 'var(--surface-2)', color: 'var(--text)' }}
                >
                  {step}
                </span>
                {i < pipelineSteps.length - 1 && (
                  <span aria-hidden style={{ color: 'var(--accent)' }}>
                    ←
                  </span>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  )
}
