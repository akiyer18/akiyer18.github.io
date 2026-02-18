import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Github } from 'lucide-react'
import { personalProjects } from '../data/portfolioProjects'
import {
  universityProjectsData,
  DOMAIN_FILTER_ALL,
  filterUniversityProjectsByDomain,
} from '../data/universityProjects'
import { hackathonProjects } from '../data/hackathonProjects'
import UniversityProjectCard from '../components/UniversityProjectCard'
import CoreDomains from '../components/CoreDomains'
import CareerTimeline from '../components/CareerTimeline'

export default function HomePage() {
  const navigate = useNavigate()
  const [domainFilter, setDomainFilter] = useState(DOMAIN_FILTER_ALL)
  const filteredUniversity = filterUniversityProjectsByDomain(universityProjectsData, domainFilter)

  const scrollToCareer = () => {
    document.getElementById('career').scrollIntoView({ behavior: 'smooth' })
  }

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

        <div className="container-custom relative z-10 text-center px-6 text-slate-900 dark:text-white">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            Akshaye Iyer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-xl md:text-2xl font-semibold text-accent-600 dark:text-accent-400 mb-2"
          >
            Artificial Intelligence Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-base md:text-lg text-slate-600 dark:text-zinc-500 mb-10"
          >
            Master’s in Artificial Intelligence — Vrije Universiteit Amsterdam (2024–2026)
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            Building knowledge-driven and agentic AI systems that reason, act, and integrate with real-world workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={scrollToCareer}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Career
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
          onClick={scrollToCareer}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-slate-500 dark:text-zinc-500 hover:text-slate-700 dark:hover:text-zinc-300 transition-colors duration-300"
          aria-label="Scroll to career"
        >
          <ChevronDown size={28} />
        </motion.button>
      </section>

      {/* Career Progression */}
      <section id="career">
        <CareerTimeline />
      </section>

      {/* Core Domains — above Projects, filter + scroll */}
      <CoreDomains
        activeFilter={domainFilter}
        onFilter={setDomainFilter}
        onScrollToProjects={scrollToProjects}
      />

      {/* Projects */}
      <section id="projects" className="py-24 md:py-32 border-t border-white/[0.06]">
        <div className="container-custom">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="mb-14"
          >
            <h2 className="section-title mb-3">Projects</h2>
            <p className="section-subtitle">
              University, hackathon, and personal work with demonstrated results.
            </p>
          </motion.header>

          {/* University Projects */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-xl font-semibold text-white mb-6">University Projects</h3>
            {filteredUniversity.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUniversity.map((project, index) => (
                  <UniversityProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div
                className="min-h-[200px] rounded-[18px] border border-white/[0.06] bg-white/[0.02]"
                aria-hidden="true"
              />
            )}
          </motion.section>

          {/* Hackathon */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Hackathon</h3>
            {hackathonProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hackathonProjects.map((project, index) => (
                  <UniversityProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div
                className="min-h-[200px] rounded-[18px] border border-white/[0.06] bg-white/[0.02]"
                aria-hidden="true"
              />
            )}
          </motion.section>

          {/* Personal Projects */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Personal Projects</h3>
            {personalProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalProjects.map((project, index) => (
                  <UniversityProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div
                className="min-h-[200px] rounded-[18px] border border-white/[0.06] bg-white/[0.02]"
                aria-hidden="true"
              />
            )}
          </motion.section>

          {(universityProjectsData.length > 0 || hackathonProjects.length > 0 || personalProjects.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="mt-12 text-center"
            >
              <button onClick={() => navigate('/projects')} className="btn-ghost">
                View all on Projects page
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
