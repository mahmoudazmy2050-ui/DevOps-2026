import { Link, useParams } from 'react-router-dom'
import { getPhase, phases } from '../content/phases'
import { useProgress, phaseCompletion } from '../hooks/useProgress'
import { SessionCard } from '../components/SessionCard'
import { TestCard } from '../components/TestCard'
import { ResourceLink } from '../components/ResourceLink'
import { PercentBadge, ProgressBar } from '../components/ProgressBar'
import { NotFound } from './NotFound'

export function PhasePage() {
  const { slug } = useParams<{ slug: string }>()
  const phase = slug ? getPhase(slug) : undefined
  const { progress, toggleSession, toggleTest } = useProgress()

  if (!phase) return <NotFound />

  const record = progress[phase.slug] ?? { sessionsDone: [], testsDone: [] }
  const pct = phaseCompletion(phase, record)
  const index = phases.findIndex((p) => p.slug === phase.slug)
  const prev = phases[index - 1]
  const next = phases[index + 1]

  return (
    <div className="space-y-8">
      <header
        className="rounded-3xl border p-7 md:p-9"
        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
      >
        <p className="mono mb-1 text-xs font-bold" style={{ color: 'var(--accent)' }}>
          PHASE {phase.number} · {phase.sessions.length} جلسات · {phase.tests.length} اختبارات
        </p>
        <h1 className="mb-1 text-3xl font-black">{phase.title}</h1>
        <p className="mb-4 text-base font-semibold">{phase.subtitle}</p>
        <p className="mb-4 max-w-3xl leading-relaxed" style={{ color: 'var(--muted)' }}>
          {phase.objective}
        </p>

        <div className="mb-5 flex items-center gap-3">
          <div className="w-56">
            <ProgressBar value={pct} />
          </div>
          <PercentBadge value={pct} />
        </div>

        {phase.prerequisites && phase.prerequisites.length > 0 && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold" style={{ color: 'var(--muted)' }}>
              المتطلبات السابقة:
            </span>
            {phase.prerequisites.map((req) => (
              <span
                key={req}
                className="rounded-md px-2 py-0.5 text-xs font-semibold"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent-strong)' }}
              >
                {req}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {phase.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-xl px-3 py-1 text-xs font-semibold"
              style={{ background: 'var(--surface-2)' }}
            >
              {topic}
            </span>
          ))}
        </div>
      </header>

      <section aria-labelledby="sessions-heading">
        <h2 id="sessions-heading" className="mb-3 text-xl font-black">
          الجلسات
        </h2>
        <div className="space-y-4">
          {phase.sessions.map((session) => (
            <SessionCard
              key={session.id}
              session={session}
              done={record.sessionsDone.includes(session.id)}
              onToggle={() => toggleSession(phase.slug, session.id)}
            />
          ))}
        </div>
      </section>

      {phase.resources.length > 0 && (
        <section aria-labelledby="resources-heading">
          <h2 id="resources-heading" className="mb-3 text-xl font-black">
            مصادر وموارد هذه المرحلة
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {phase.resources.map((resource, i) => (
              <ResourceLink key={i} resource={resource} />
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="tests-heading">
        <h2 id="tests-heading" className="mb-3 text-xl font-black">
          اختبارات هذه المرحلة
        </h2>
        <ol className="space-y-3">
          {phase.tests.map((test, i) => (
            <TestCard
              key={i}
              test={test}
              index={i}
              done={record.testsDone.includes(`${phase.slug}-t${i}`)}
              onToggle={() => toggleTest(phase.slug, `${phase.slug}-t${i}`)}
            />
          ))}
        </ol>
      </section>

      {phase.projects && phase.projects.length > 0 && (
        <section aria-labelledby="phase-projects">
          <h2 id="phase-projects" className="mb-3 text-xl font-black">
            مشاريع مرتبطة بهذه المرحلة
          </h2>
          <ul className="space-y-2">
            {phase.projects.map((project, i) => (
              <li
                key={i}
                className="rounded-xl border px-4 py-3"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <p className="text-sm font-bold">{project.name}</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  {project.desc}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {prev ? (
          <Link
            to={`/phases/${prev.slug}`}
            className="group rounded-xl border px-4 py-3 transition-colors"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <span className="block text-xs" style={{ color: 'var(--muted)' }}>
              المرحلة السابقة
            </span>
            <span className="text-sm font-bold group-hover:text-[var(--accent)]">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/phases/${next.slug}`}
            className="group rounded-xl border px-4 py-3 text-left transition-colors"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <span className="block text-xs" style={{ color: 'var(--muted)' }}>
              المرحلة التالية
            </span>
            <span className="text-sm font-bold group-hover:text-[var(--accent)]">{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  )
}
