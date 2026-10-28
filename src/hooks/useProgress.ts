import { useCallback, useEffect, useState } from 'react'
import type { PhaseProgress, ProgressMap } from '../content/types'

const STORAGE_KEY = 'kma-curriculum-progress-v1'

function readStorage(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as ProgressMap) : {}
  } catch {
    return {}
  }
}

function writeStorage(map: ProgressMap) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map))
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>(() => readStorage())
  const [projectStatus, setProjectStatus] = useState<Record<number, boolean>>(() => {
    try {
      const raw = localStorage.getItem('kma-projects-status-v1')
      return raw ? (JSON.parse(raw) as Record<number, boolean>) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => writeStorage(progress), [progress])

  useEffect(() => {
    localStorage.setItem('kma-projects-status-v1', JSON.stringify(projectStatus))
  }, [projectStatus])

  const toggleSession = useCallback((phaseSlug: string, sessionId: string) => {
    setProgress((prev) => {
      const current = prev[phaseSlug] ?? { sessionsDone: [], testsDone: [] }
      const sessionsDone = current.sessionsDone.includes(sessionId)
        ? current.sessionsDone.filter((s) => s !== sessionId)
        : [...current.sessionsDone, sessionId]
      return { ...prev, [phaseSlug]: { ...current, sessionsDone } }
    })
  }, [])

  const toggleTest = useCallback((phaseSlug: string, testId: string) => {
    setProgress((prev) => {
      const current = prev[phaseSlug] ?? { sessionsDone: [], testsDone: [] }
      const testsDone = current.testsDone.includes(testId)
        ? current.testsDone.filter((t) => t !== testId)
        : [...current.testsDone, testId]
      return { ...prev, [phaseSlug]: { ...current, testsDone } }
    })
  }, [])

  const toggleProject = useCallback((id: number, done: boolean) => {
    setProjectStatus((prev) => ({ ...prev, [id]: done }))
  }, [])

  const resetAll = useCallback(() => {
    setProgress({})
    setProjectStatus({})
  }, [])

  const importState = useCallback((json: string) => {
    const parsed = JSON.parse(json) as {
      progress?: ProgressMap
      projects?: Record<number, boolean>
    }
    if (parsed.progress) setProgress(parsed.progress)
    if (parsed.projects) setProjectStatus(parsed.projects)
  }, [])

  const exportState = useCallback(
    () => JSON.stringify({ progress, projects: projectStatus }, null, 2),
    [progress, projectStatus],
  )

  return {
    progress,
    projectStatus,
    toggleSession,
    toggleTest,
    toggleProject,
    resetAll,
    importState,
    exportState,
  }
}

export function phaseCompletion(
  phase: { sessions: unknown[]; tests: unknown[] },
  record: PhaseProgress | undefined,
): number {
  if (!record) return 0
  const total = phase.sessions.length + phase.tests.length
  if (total === 0) return 0
  return Math.round(((record.sessionsDone.length + record.testsDone.length) / total) * 100)
}
