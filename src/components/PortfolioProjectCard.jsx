import { motion } from 'framer-motion'
import { ExternalLink, Github, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
}

/**
 * Compact card for Home page grid
 */
export function PortfolioProjectCardCompact({ project, index = 0 }) {
  return (
    <motion.div
      initial={fadeIn.initial}
      whileInView={fadeIn.animate}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link to="/projects" className="block group">
        <div className="card-portfolio p-6 h-full text-left">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/[0.06]">
              <Cpu size={20} className="text-accent-400" />
            </div>
            <span className="text-xs font-medium text-accent-400/90 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h3 className="card-title mb-2 group-hover:text-accent-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="card-description line-clamp-2">{project.description}</p>
          <span className="inline-flex items-center gap-1.5 mt-4 text-sm text-zinc-500 group-hover:text-accent-400 transition-colors duration-300">
            View project <ExternalLink size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

/**
 * Full card for /projects page
 */
export function PortfolioProjectCardFull({ project, index = 0 }) {
  return (
    <motion.div
      initial={fadeIn.initial}
      whileInView={fadeIn.animate}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="card-portfolio p-8"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-white/5 border border-white/[0.06] shrink-0">
              <Cpu size={24} className="text-accent-400" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                {project.featured && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-500/20 text-accent-300 border border-accent-500/30">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-accent-400/90">{project.category}</p>
            </div>
          </div>

          <p className="card-description text-base mb-6">{project.description}</p>

          <div className="mb-6">
            <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/[0.06] text-xs text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={16} />
                View Code
              </a>
            )}
          </div>
        </div>

        {project.results && project.results.length > 0 && (
          <div className="lg:w-72 shrink-0">
            <div className="rounded-xl p-5 bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-sm font-semibold text-white mb-3">Results & Recognition</h4>
              <ul className="space-y-2">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-1.5 shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
