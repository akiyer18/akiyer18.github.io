import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
}

/**
 * Shared content card for Docs and Posts grids.
 * @param {object} item - content entry
 * @param {object} typeConfig - { label, className } for the type pill
 * @param {function} onClick - open modal
 * @param {number} index - animation stagger
 */
export default function ContentCard({ item, typeConfig, onClick, index = 0 }) {
  return (
    <motion.button
      type="button"
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      onClick={() => onClick(item)}
      className="card-portfolio p-6 text-left w-full h-full flex flex-col group cursor-pointer"
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${typeConfig.className}`}
        >
          {typeConfig.label}
        </span>
        {item.date && (
          <span className="text-xs text-slate-500 dark:text-zinc-500 shrink-0">
            {item.date}
          </span>
        )}
      </div>

      <h3 className="card-title mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors duration-300">
        {item.title}
      </h3>

      {item.excerpt && (
        <p className="card-description line-clamp-2 flex-1">{item.excerpt}</p>
      )}

      {item.tags?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[11px] text-slate-500 dark:text-zinc-500 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.button>
  )
}
