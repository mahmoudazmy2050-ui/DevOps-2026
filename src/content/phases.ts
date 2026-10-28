import type { Phase } from './types'
import { phasesCore } from './phases-core'
import { phasesDevops } from './phases-devops'

export const phases: Phase[] = [...phasesCore, ...phasesDevops]

export const totalPhases = phases.length

export function getPhase(slug: string): Phase | undefined {
  return phases.find((p) => p.slug === slug)
}

export function phasesBySkill(skillKey: string): Phase[] {
  return phases.filter((p) => p.title.includes(skillKey))
}
