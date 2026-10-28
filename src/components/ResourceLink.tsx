import type { Resource, ResourceType } from '../content/types'

const typeLabel: Record<ResourceType, string> = {
  official: 'رسمي',
  video: 'فيديو',
  course: 'كورس',
  article: 'مقال',
  tool: 'أداة',
}

export function ResourceLink({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start justify-between gap-3 rounded-xl border p-3.5 transition-transform hover:-translate-y-0.5 hover:shadow-md"
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      <div>
        <p className="text-sm font-bold leading-snug">{resource.title}</p>
        <p
          dir="ltr"
          className="mono mt-1 max-w-[320px] truncate text-[11px]"
          style={{ color: 'var(--muted)' }}
        >
          {resource.url}
        </p>
      </div>
      <span
        className="shrink-0 rounded-md px-2 py-0.5 text-[11px] font-bold"
        style={{ background: 'var(--accent-soft)', color: 'var(--accent-strong)' }}
      >
        {typeLabel[resource.type]}
      </span>
    </a>
  )
}
