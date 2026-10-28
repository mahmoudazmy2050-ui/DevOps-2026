export type ResourceType = 'official' | 'video' | 'course' | 'article' | 'tool'

export interface Resource {
  title: string
  url: string
  type: ResourceType
}

export type BlockType =
  'objective' | 'explanation' | 'commands' | 'practice' | 'challenge' | 'expected' | 'checkpoint'

export interface SessionBlock {
  type: BlockType
  title?: string
  text?: string
  items?: string[]
  code?: string
}

export interface Session {
  id: string
  title: string
  blocks: SessionBlock[]
}

export type TestKind = 'knowledge' | 'practical' | 'debugging'

export interface TestItem {
  type: TestKind
  question: string
  hint?: string
}

export interface LinkedProject {
  name: string
  desc: string
}

export interface Phase {
  slug: string
  number: number
  title: string
  subtitle: string
  objective: string
  topics: string[]
  prerequisites?: string[]
  sessions: Session[]
  resources: Resource[]
  tests: TestItem[]
  projects?: LinkedProject[]
}

export type ProjectStatus = 'pending' | 'done'

export interface RoadmapProject {
  id: number
  name: string
  goal: string
  tech: string[]
  status: ProjectStatus
  repo?: string
}

export type SkillKey =
  | 'Programming'
  | 'JavaScript'
  | 'TypeScript'
  | 'Git'
  | 'HTML/CSS'
  | 'React'
  | 'Next.js'
  | 'Backend'
  | 'PostgreSQL'
  | 'Linux'
  | 'Networking'
  | 'Docker'
  | 'Nginx'
  | 'CI/CD'
  | 'AWS'
  | 'Terraform'
  | 'Ansible'
  | 'Kubernetes'
  | 'Monitoring'
  | 'DevSecOps'

export interface PhaseProgress {
  sessionsDone: string[]
  testsDone: string[]
}

export type ProgressMap = Record<string, PhaseProgress>
