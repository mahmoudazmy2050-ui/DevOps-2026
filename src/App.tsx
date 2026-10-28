import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { PhasePage } from './pages/PhasePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProgressPage } from './pages/ProgressPage'
import { RoadmapPage } from './pages/RoadmapPage'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/phases/:slug" element={<PhasePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
