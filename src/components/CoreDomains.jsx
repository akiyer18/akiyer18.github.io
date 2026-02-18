import { motion } from 'framer-motion'

const DOMAINS = [
  { id: 'all', label: 'All', description: 'All projects' },
  { id: 'nlp', label: 'Natural Language Systems', description: 'Statistical modeling, NLP' },
  { id: 'logic', label: 'Logical & Knowledge-Based Reasoning', description: 'Knowledge graphs, symbolic logic' },
  { id: 'optimization', label: 'Optimization & Evolutionary Learning', description: 'Evolutionary AI, search' },
]

/**
 * Core Domains: three blocks + All. Click sets filter and scrolls to #projects.
 */
export default function CoreDomains({ activeFilter, onFilter, onScrollToProjects }) {
  const handleClick = (id) => {
    onFilter(id)
    onScrollToProjects?.()
  }

  return (
    <section className="py-16 border-b border-white/[0.06]">
      <div className="container-custom">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-10"
        >
          <h2 className="section-title mb-3">Core Domains</h2>
          <p className="section-subtitle">
            Filter projects by focus area.
          </p>
        </motion.header>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {DOMAINS.map((domain) => (
            <button
              key={domain.id}
              type="button"
              onClick={() => handleClick(domain.id)}
              className={`text-left p-4 rounded-[18px] border transition-all duration-300 ${
                activeFilter === domain.id
                  ? 'border-accent-400/50 bg-accent-500/10 text-white'
                  : 'border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-zinc-200'
              }`}
            >
              <span className="block font-medium text-sm">{domain.label}</span>
              <span className="block text-xs mt-1 opacity-80">{domain.description}</span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { DOMAINS }
