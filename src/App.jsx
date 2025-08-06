import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ApplicationsPage from './pages/ApplicationsPage'
import AboutPage from './pages/AboutPage'
import TheoryPage from './pages/TheoryPage'
import AIPage from './pages/AIPage'
// Legacy routes for backward compatibility
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
            <Route path="/theory" element={<TheoryPage />} />
            <Route path="/ai" element={<AIPage />} />
            <Route path="/advanced" element={<AIPage />} />
            {/* Legacy routes for backward compatibility */}
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