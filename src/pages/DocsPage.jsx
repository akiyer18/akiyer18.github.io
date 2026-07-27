import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import docsData from '../content/docs.json'
import milestonesData from '../content/milestones.json'
import ContentCard from '../components/ContentCard'
import ContentModal from '../components/ContentModal'
import MilestoneTimeline from '../components/MilestoneTimeline'
import EmptyState, { NotebookIcon } from '../components/EmptyState'

const DOC_TYPES = {
  workflow: {
    label: 'Workflow',
    className:
      'bg-accent-500/15 text-accent-600 dark:text-accent-300 border border-accent-500/30',
  },
  interest: {
    label: 'Interest',
    className:
      'bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-500/30',
  },
  reading: {
    label: 'Reading',
    className:
      'bg-orange-500/15 text-orange-700 dark:text-orange-300 border border-orange-500/30',
  },
  direction: {
    label: 'Direction',
    className:
      'bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30',
  },
}

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'workflow', label: 'Workflows' },
  { id: 'interest', label: 'Interests' },
  { id: 'reading', label: 'Reading' },
  { id: 'direction', label: 'Directions' },
]

const FILTER_EMPTY_LABELS = {
  workflow: 'workflow',
  interest: 'interest',
  reading: 'reading',
  direction: 'direction',
}

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
}

function getTypeConfig(type) {
  return (
    DOC_TYPES[type] || {
      label: type,
      className:
        'bg-slate-500/15 text-slate-600 dark:text-zinc-300 border border-slate-500/30',
    }
  )
}

export default function DocsPage() {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return docsData.filter((doc) => {
      if (filter !== 'all' && doc.type !== filter) return false
      if (!q) return true
      const haystack = [doc.title, doc.excerpt, ...(doc.tags || [])]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [filter, query])

  const isFullyEmpty = docsData.length === 0
  const showEmpty = filtered.length === 0

  let emptyHeading = 'Nothing here yet.'
  let emptySubtext = 'Add your first entry to docs.json to get started.'

  if (!isFullyEmpty && filter !== 'all') {
    emptyHeading = `No ${FILTER_EMPTY_LABELS[filter]} entries yet.`
    emptySubtext = null
  } else if (!isFullyEmpty && query.trim()) {
    emptyHeading = 'No matching docs.'
    emptySubtext = 'Try a different search or filter.'
  } else if (isFullyEmpty && filter !== 'all') {
    emptyHeading = `No ${FILTER_EMPTY_LABELS[filter]} entries yet.`
    emptySubtext = null
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
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Knowledge{' '}
              <span className="gradient-text">Garden</span>
            </h1>
            <p className="text-slate-600 dark:text-zinc-400 mt-2 max-w-2xl">
              My workflows, mental models, and the directions I&apos;m thinking in — a living map of how I work and what I care about.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 border-b border-slate-200 dark:border-white/[0.06]">
        <div className="container-custom space-y-4">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === f.id
                    ? 'bg-accent-500 border-accent-500 text-white'
                    : 'border-slate-300 dark:border-white/15 text-slate-600 dark:text-zinc-400 hover:border-slate-400 dark:hover:border-white/25 hover:text-slate-900 dark:hover:text-zinc-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="relative max-w-xl">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500 pointer-events-none"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search docs..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-colors duration-300"
              aria-label="Search docs"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          {showEmpty ? (
            <EmptyState
              icon={<NotebookIcon />}
              heading={emptyHeading}
              subtext={emptySubtext}
            />
          ) : (
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
              {filtered.map((doc, i) => (
                <ContentCard
                  key={doc.id}
                  item={doc}
                  typeConfig={getTypeConfig(doc.type)}
                  onClick={setSelected}
                  index={i}
                />
              ))}
            </div>
          )}

          <div className="mt-20 pt-12 border-t border-slate-200 dark:border-white/[0.06]">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Milestones
            </h2>
            <MilestoneTimeline milestones={milestonesData} />
          </div>
        </div>
      </section>

      <ContentModal
        item={selected}
        typeConfig={selected ? getTypeConfig(selected.type) : null}
        onClose={() => setSelected(null)}
      />
    </div>
  )
}
