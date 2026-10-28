import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { phases, totalPhases } from '../content/phases'
import { skillList, roadmapProjects } from '../content/projects'
import { useProgress, phaseCompletion } from '../hooks/useProgress'
import { PercentBadge, ProgressBar } from '../components/ProgressBar'

export function ProgressPage() {
  const { progress, projectStatus, resetAll, exportState, importState } = useProgress()
  const fileRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState('')

  const completions = phases.map((p) => phaseCompletion(p, progress[p.slug]))
  const overall = Math.round(completions.reduce((a, b) => a + b, 0) / totalPhases)

  const doneProjects = roadmapProjects.filter((p) => projectStatus[p.id]).length

  function onExport() {
    const blob = new Blob([exportState()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'kma-progress.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  function onImport(file: File) {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        importState(String(reader.result))
        setMessage('تم استيراد التقدّم بنجاح ✅')
      } catch {
        setMessage('المحتوى غير صالح — تأكد إنه ملف JSON تصدير هذا الموقع')
      }
    }
    reader.readAsText(file)
  }

  function onReset() {
    if (window.confirm('هتمسح كل تقدّمك نهائيًا. متأكد؟')) {
      resetAll()
      setMessage('تم مسح التقدّم ✕')
    }
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black">تقدّمك</h1>
          <p className="mt-1" style={{ color: 'var(--muted)' }}>
            بياناتك محفوظة على جهازك فقط (localStorage) — تقدر تصدّرها وتستوردها متى شئت.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) onImport(file)
              e.target.value = ''
            }}
          />
          <button
            onClick={onExport}
            className="rounded-xl px-3 py-2 text-sm font-bold text-white"
            style={{ background: 'var(--accent)' }}
          >
            تصدير JSON
          </button>
          <button
            onClick={() => fileRef.current?.click()}
            className="rounded-xl border px-3 py-2 text-sm font-bold"
            style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
          >
            استيراد JSON
          </button>
          <button
            onClick={onReset}
            className="rounded-xl border px-3 py-2 text-sm font-bold"
            style={{ borderColor: 'var(--warn)', background: 'transparent', color: 'var(--warn)' }}
          >
            تصفير
          </button>
        </div>
      </header>

      {message && (
        <p
          className="rounded-xl border px-4 py-2 text-sm font-bold"
          style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
        >
          {message}
        </p>
      )}

      <section
        className="rounded-3xl border p-7"
        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
      >
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-black">التقدّم الإجمالي</h2>
          <PercentBadge value={overall} />
        </div>
        <ProgressBar value={overall} className="h-3" />
        <div className="mt-3 flex flex-wrap gap-6 text-sm" style={{ color: 'var(--muted)' }}>
          <span>
            مراحل:{' '}
            <strong style={{ color: 'var(--text)' }}>
              {completions.filter((c) => c === 100).length}/{totalPhases}
            </strong>
          </span>
          <span>
            مشاريع:{' '}
            <strong style={{ color: 'var(--text)' }}>
              {doneProjects}/{roadmapProjects.length}
            </strong>
          </span>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-black">مهاراتك</h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {skillList.map((skill) => {
            const phase = phases.find((p) => p.slug === skill.phaseSlug)
            const pct = phase ? phaseCompletion(phase, progress[phase.slug]) : 0
            return (
              <div
                key={skill.key}
                className="rounded-xl border px-4 py-3"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-sm font-bold">{skill.key}</span>
                  <PercentBadge value={pct} />
                </div>
                <ProgressBar value={pct} />
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-black">تفصيل بالمراحل</h2>
        <div
          className="overflow-hidden rounded-2xl border"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'var(--surface-2)' }}>
                <th className="px-4 py-2 text-right font-bold">المرحلة</th>
                <th className="px-4 py-2 text-right font-bold">الجلسات</th>
                <th className="px-4 py-2 text-right font-bold">الاختبارات</th>
                <th className="px-4 py-2 text-right font-bold">التقدّم</th>
              </tr>
            </thead>
            <tbody>
              {phases.map((phase) => {
                const rec = progress[phase.slug]
                const pct = phaseCompletion(phase, rec)
                return (
                  <tr
                    key={phase.slug}
                    className="border-t"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <td className="px-4 py-2.5">
                      <Link
                        to={`/phases/${phase.slug}`}
                        className="font-black hover:text-[var(--accent)]"
                      >
                        {phase.number} — {phase.title}
                      </Link>
                    </td>
                    <td className="px-4 py-2.5" style={{ color: 'var(--muted)' }}>
                      {rec?.sessionsDone.length ?? 0}/{phase.sessions.length}
                    </td>
                    <td className="px-4 py-2.5" style={{ color: 'var(--muted)' }}>
                      {rec?.testsDone.length ?? 0}/{phase.tests.length}
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-28">
                          <ProgressBar value={pct} />
                        </div>
                        <PercentBadge value={pct} />
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
