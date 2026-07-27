import { motion } from 'framer-motion'

const STATUS_STYLES = {
  done: {
    dot: 'bg-emerald-500 border-emerald-500',
    label: 'Done',
    labelClass: 'text-emerald-600 dark:text-emerald-400',
  },
  'in-progress': {
    dot: 'bg-accent-500 border-accent-500 shadow-glow-sm animate-pulse',
    label: 'In progress',
    labelClass: 'text-accent-600 dark:text-accent-400',
  },
  planned: {
    dot: 'bg-transparent border-slate-400 dark:border-zinc-600',
    label: 'Planned',
    labelClass: 'text-slate-500 dark:text-zinc-500',
  },
}

/**
 * Vertical milestones timeline. Reads entries shaped like milestones.json.
 */
export default function MilestoneTimeline({ milestones = [] }) {
  if (!milestones.length) {
    return (
      <p className="text-sm text-slate-500 dark:text-zinc-500 py-4">
        No milestones tracked yet.
      </p>
    )
  }

  return (
    <ul className="relative space-y-8 pl-2">
      <div
        className="absolute left-[5px] top-2 bottom-2 w-px bg-slate-200 dark:bg-white/[0.08]"
        aria-hidden="true"
      />

      {milestones.map((item, index) => {
        const status = STATUS_STYLES[item.status] || STATUS_STYLES.planned

        return (
          <motion.li
            key={`${item.title}-${item.date}-${index}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative flex gap-4 pl-6"
          >
            <span
              className={`absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2 z-10 ${status.dot}`}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <span className={`text-xs font-medium ${status.labelClass}`}>
                  {status.label}
                </span>
                {item.date && (
                  <span className="text-xs text-slate-500 dark:text-zinc-500">
                    {item.date}
                  </span>
                )}
              </div>
              {item.desc && (
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              )}
            </div>
          </motion.li>
        )
      })}
    </ul>
  )
}
