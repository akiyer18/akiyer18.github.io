import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

/**
 * University project card: title, positioning, bullets, GitHub bottom-right.
 * 16–20px radius, subtle border, hover scale 1.02 + shadow, 300ms.
 */
export default function UniversityProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="card-portfolio p-6 flex flex-col h-full text-left"
    >
      <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
        {project.title}
      </h3>
      <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
        {project.positioning}
      </p>
      <ul className="space-y-2 flex-1">
        {project.bullets.slice(0, 4).map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400/80 mt-1.5 shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
      {project.github && (
        <div className="mt-5 flex justify-end">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-accent-400 transition-colors duration-300"
            aria-label="View on GitHub"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      )}
    </motion.article>
  )
}
