import { useState, type FormEvent } from 'react'
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'الرئيسية', end: true },
  { to: '/roadmap', label: 'المسار الكامل' },
  { to: '/projects', label: 'المشاريع' },
  { to: '/progress', label: 'تقدّمك' },
]

export function Layout() {
  const navigate = useNavigate()
  const [q, setQ] = useState('')

  function onSearch(e: FormEvent) {
    e.preventDefault()
    navigate(q.trim() ? `/?q=${encodeURIComponent(q.trim())}` : '/')
  }

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      <header
        className="sticky top-0 z-20 border-b backdrop-blur"
        style={{
          background: 'color-mix(in srgb, var(--bg) 85%, transparent)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-lg font-black tracking-tight">
            <span
              className="grid h-8 w-8 place-items-center rounded-lg text-sm font-black text-white"
              style={{ background: 'var(--accent)' }}
            >
              A
            </span>
            AzMy-Dev-Ops Roadmap
          </Link>

          <nav className="order-3 flex w-full items-center gap-1 md:order-none md:w-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors ${
                    isActive ? '' : 'opacity-70 hover:opacity-100'
                  }`
                }
                style={({ isActive }) =>
                  isActive
                    ? { background: 'var(--accent-soft)', color: 'var(--accent-strong)' }
                    : undefined
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <form
            onSubmit={onSearch}
            className="order-4 mr-auto flex w-full items-center gap-2 md:w-auto"
            dir="rtl"
          >
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ابحث في المراحل..."
              aria-label="بحث"
              className="w-full rounded-xl border px-3 py-1.5 text-sm outline-none transition-shadow focus:ring-2 focus:ring-[var(--accent)] md:w-56"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            />
            <button
              type="submit"
              className="rounded-xl px-3 py-1.5 text-sm font-bold text-white"
              style={{ background: 'var(--accent)' }}
            >
              بحث
            </button>
          </form>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>

      <footer
        className="mx-auto max-w-6xl px-4 py-8 text-center text-xs"
        style={{ color: 'var(--muted)' }}
      >
        بناءً على مسارك التدريبي — خط بخطوة · كل الروابط والأدوات مجانية أو Free Tier
      </footer>
    </div>
  )
}
