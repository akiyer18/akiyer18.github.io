import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalProjects } from '../data/portfolioProjects'
import {
  universityProjectsData,
  DOMAIN_FILTER_ALL,
  filterUniversityProjectsByDomain,
} from '../data/universityProjects'
import { hackathonProjects } from '../data/hackathonProjects'
import UniversityProjectCard from '../components/UniversityProjectCard'
import CoreDomains from '../components/CoreDomains'

const fadeIn = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 } }

export default function AIPage() {
  const [domainFilter, setDomainFilter] = useState(DOMAIN_FILTER_ALL)
  const filteredUniversity = filterUniversityProjectsByDomain(universityProjectsData, domainFilter)

  const scrollToProjects = () => {
    document.getElementById('projects-content')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 border-b border-white/[0.06]">
        <div className="container-custom">
          <motion.div {...fadeIn}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={18} />
              Back to home
            </Link>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/[0.06]">
                <Cpu size={28} className="text-accent-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Projects
                </h1>
                <p className="text-zinc-400 mt-1">
                  University, hackathon, and personal work with demonstrated results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CoreDomains
        activeFilter={domainFilter}
        onFilter={setDomainFilter}
        onScrollToProjects={scrollToProjects}
      />

      <section id="projects-content" className="py-16">
        <div className="container-custom space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-white mb-6">University Projects</h2>
            {filteredUniversity.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUniversity.map((project, i) => (
                  <UniversityProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            ) : (
              <div
                className="min-h-[200px] rounded-[18px] border border-white/[0.06] bg-white/[0.02]"
                aria-hidden="true"
              />
            )}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <h2 className="text-xl font-semibold text-white mb-6">Hackathon</h2>
            {hackathonProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hackathonProjects.map((project, i) => (
                  <UniversityProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            ) : (
              <div
                className="min-h-[200px] rounded-[18px] border border-white/[0.06] bg-white/[0.02]"
                aria-hidden="true"
              />
            )}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.08 }}
          >
            <h2 className="text-xl font-semibold text-white mb-6">Personal Projects</h2>
            {personalProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalProjects.map((project, i) => (
                  <UniversityProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            ) : (
              <div
                className="min-h-[200px] rounded-[18px] border border-white/[0.06] bg-white/[0.02]"
                aria-hidden="true"
              />
            )}
          </motion.section>
        </div>
      </section>
    </div>
  )
}
