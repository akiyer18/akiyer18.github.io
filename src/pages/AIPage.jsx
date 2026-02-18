import { motion } from 'framer-motion'
import { ArrowLeft, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { universityProjects, personalProjects } from '../data/portfolioProjects'
import { PortfolioProjectCardFull } from '../components/PortfolioProjectCard'

const fadeIn = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 } }

export default function AIPage() {
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
                  University and personal work with demonstrated results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-white mb-6">University Projects</h2>
            {universityProjects.length > 0 ? (
              <div className="space-y-6">
                {universityProjects.map((project, i) => (
                  <PortfolioProjectCardFull key={project.id} project={project} index={i} />
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
            <h2 className="text-xl font-semibold text-white mb-6">Personal Projects</h2>
            {personalProjects.length > 0 ? (
              <div className="space-y-6">
                {personalProjects.map((project, i) => (
                  <PortfolioProjectCardFull key={project.id} project={project} index={i} />
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
