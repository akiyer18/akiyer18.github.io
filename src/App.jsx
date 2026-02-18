import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ApplicationsPage from './pages/ApplicationsPage'
import AboutPage from './pages/AboutPage'
import AIPage from './pages/AIPage'
import GrowthPage from './pages/GrowthPage'
import MusicPage from './pages/MusicPage'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<AIPage />} />
            <Route path="/ai" element={<Navigate to="/projects" replace />} />
            <Route path="/advanced" element={<Navigate to="/projects" replace />} />
            <Route path="/growth" element={<GrowthPage />} />
            <Route path="/music" element={<MusicPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App 