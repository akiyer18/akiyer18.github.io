import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Github } from 'lucide-react'
import { completedProjects } from '../data/portfolioProjects'
import { PortfolioProjectCardCompact } from '../components/PortfolioProjectCard'

export default function HomePage() {
  const navigate = useNavigate()

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-accent-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-primary-900/50 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
          >
            Akshaye Iyer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-zinc-400 mb-12 max-w-md mx-auto"
          >
            Building practical AI tools and applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              View projects
              <ChevronDown size={18} className="mt-0.5" />
            </button>
            <a
              href="https://github.com/akiyer18"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-zinc-500 hover:text-zinc-300 transition-colors duration-300"
          aria-label="Scroll to projects"
        >
          <ChevronDown size={28} />
        </motion.button>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32">
        <div className="container-custom">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="mb-16"
          >
            <h2 className="section-title mb-3">Projects</h2>
            <p className="section-subtitle">
              Completed work with demonstrated results.
            </p>
          </motion.header>

          {completedProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {completedProjects.map((project, index) => (
                <PortfolioProjectCardCompact
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div
              className="min-h-[280px] rounded-[18px] border border-white/[0.06] bg-white/[0.02]"
              aria-hidden="true"
            />
          )}

          {completedProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="mt-12 text-center"
            >
              <button
                onClick={() => navigate('/projects')}
                className="btn-ghost"
              >
                View all on Projects page
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
