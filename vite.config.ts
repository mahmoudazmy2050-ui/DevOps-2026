import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves the site under /DevOps-2026/, plain `vite dev` serves it at /
  base: mode === 'production' ? '/DevOps-2026/' : '/',
}))
