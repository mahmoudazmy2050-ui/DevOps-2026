import { roadmapProjects } from '../content/projects'
import { useProgress } from '../hooks/useProgress'

export function ProjectsPage() {
  const { projectStatus, toggleProject } = useProgress()
  const doneCount = roadmapProjects.filter((p) => projectStatus[p.id]).length

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-black">المشاريع العشرة</h1>
        <p className="mt-1" style={{ color: 'var(--muted)' }}>
          كل مشروع لازم يكون على GitHub كـ repo منفصل — ده اللي بيبني بورتفليو حقيقي.
          <br />
          المنجز: <strong style={{ color: 'var(--accent-strong)' }}>{doneCount}</strong> /{' '}
          {roadmapProjects.length}
        </p>
      </header>

      <div className="space-y-3">
        {roadmapProjects.map((project) => {
          const done = projectStatus[project.id]
          return (
            <article
              key={project.id}
              className="rounded-2xl border p-5 transition-opacity"
              style={{
                background: 'var(--surface)',
                borderColor: done ? 'var(--ok)' : 'var(--border)',
                opacity: done ? 0.75 : 1,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span
                    className="mono grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-black text-white"
                    style={{ background: done ? 'var(--ok)' : 'var(--accent)' }}
                  >
                    {project.id}
                  </span>
                  <div>
                    <h2 className="text-base font-black">{project.name}</h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {project.goal}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="mono rounded-md px-2 py-0.5 text-[11px] font-semibold"
                          style={{ background: 'var(--surface-2)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <label
                    className="flex cursor-pointer items-center gap-2 text-xs font-bold"
                    style={{ color: 'var(--muted)' }}
                  >
                    <input
                      type="checkbox"
                      checked={done}
                      onChange={(e) => toggleProject(project.id, e.target.checked)}
                      className="h-4 w-4 cursor-pointer accent-[var(--ok)]"
                    />
                    {done ? 'تم على /GitHub' : 'علّم كمكتمل'}
                  </label>
                  <span
                    className="rounded-md px-2 py-0.5 text-sm font-black"
                    style={{
                      background: done
                        ? 'color-mix(in srgb, var(--ok) 15%, transparent)'
                        : 'var(--accent-soft)',
                      color: done ? 'var(--ok)' : 'var(--accent-strong)',
                    }}
                  >
                    {done ? '✓' : '—'}
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
