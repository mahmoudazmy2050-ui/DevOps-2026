import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-6xl font-black" style={{ color: 'var(--accent)' }}>
        404
      </h1>
      <p className="mt-2 text-lg font-bold">الصفحة دي مش موجودة في المسار.</p>
      <Link
        to="/"
        className="mt-6 rounded-xl px-5 py-2.5 text-sm font-bold text-white"
        style={{ background: 'var(--accent)' }}
      >
        ارجع للرئيسية
      </Link>
    </div>
  )
}
