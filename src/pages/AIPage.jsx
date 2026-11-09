import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalProjects } from '../data/portfolioProjects'
import {
  universityProjectsData,
  DOMAIN_FILTER_ALL,
  filterProjectsByDomain,
} from '../data/universityProjects'
import { hackathonProjects } from '../data/hackathonProjects'
import UniversityProjectCard from '../components/UniversityProjectCard'
import CoreDomains from '../components/CoreDomains'

const fadeIn = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 } }

export default function AIPage() {
  const [domainFilter, setDomainFilter] = useState(DOMAIN_FILTER_ALL)

  const featured = useMemo(
    () => filterProjectsByDomain(personalProjects.filter((p) => p.featured), domainFilter),
    [domainFilter]
  )
  const research = useMemo(
    () => filterProjectsByDomain(universityProjectsData, domainFilter),
    [domainFilter]
  )
  const hackathons = useMemo(
    () => filterProjectsByDomain(hackathonProjects, domainFilter),
    [domainFilter]
  )

  const scrollToProjects = () => {
    document.getElementById('projects-content')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 border-b border-slate-200 dark:border-white/[0.06]">
        <div className="container-custom">
          <motion.div {...fadeIn}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={18} />
              Back to home
            </Link>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/[0.06]">
                <Cpu size={28} className="text-accent-500 dark:text-accent-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Projects
                </h1>
                <p className="text-slate-600 dark:text-zinc-400 mt-1">
                  Featured agentic AI and knowledge graph work, plus research and hackathon projects.
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
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            {featured.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((project, i) => (
                  <UniversityProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500 dark:text-zinc-500">
                No featured projects match this filter.
              </p>
            )}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Research Projects
            </h2>
            {research.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {research.map((project, i) => (
                  <UniversityProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500 dark:text-zinc-500">
                No research projects match this filter.
              </p>
            )}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.08 }}
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Hackathon</h2>
            {hackathons.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hackathons.map((project, i) => (
                  <UniversityProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500 dark:text-zinc-500">
                No hackathon projects match this filter.
              </p>
            )}
          </motion.section>
        </div>
      </section>
    </div>
  )
}
