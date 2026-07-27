import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import postsData from '../content/posts.json'
import ContentCard from '../components/ContentCard'
import ContentModal from '../components/ContentModal'
import EmptyState, { SignalIcon } from '../components/EmptyState'

const POST_TYPES = {
  article: {
    label: 'Article',
    className:
      'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30',
  },
  video: {
    label: 'Video',
    className:
      'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30',
  },
  event: {
    label: 'Event',
    className:
      'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30',
  },
  person: {
    label: 'Person',
    className:
      'bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30',
  },
  thought: {
    label: 'Thought',
    className:
      'bg-pink-500/15 text-pink-700 dark:text-pink-300 border border-pink-500/30',
  },
}

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'article', label: 'Article' },
  { id: 'video', label: 'Video' },
  { id: 'event', label: 'Event' },
  { id: 'person', label: 'Person Met' },
  { id: 'thought', label: 'Thought' },
]

const FILTER_EMPTY_LABELS = {
  article: 'article',
  video: 'video',
  event: 'event',
  person: 'person',
  thought: 'thought',
}

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
}

function getTypeConfig(type) {
  return (
    POST_TYPES[type] || {
      label: type,
      className:
        'bg-slate-500/15 text-slate-600 dark:text-zinc-300 border border-slate-500/30',
    }
  )
}

export default function PostsPage() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    if (filter === 'all') return postsData
    return postsData.filter((post) => post.type === filter)
  }, [filter])

  const showEmpty = filtered.length === 0

  let emptyHeading = 'No posts yet.'
  let emptySubtext = 'Add your first entry to posts.json to get started.'

  if (filter !== 'all') {
    emptyHeading = `No ${FILTER_EMPTY_LABELS[filter]} posts yet.`
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
              Posts &amp; Signals
            </h1>
            <p className="text-slate-600 dark:text-zinc-400 mt-2 max-w-2xl">
              Reactions, reflections, and signals — things I&apos;ve read, watched, met, or been thinking about.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 border-b border-slate-200 dark:border-white/[0.06]">
        <div className="container-custom">
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
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          {showEmpty ? (
            <EmptyState
              icon={<SignalIcon />}
              heading={emptyHeading}
              subtext={emptySubtext}
            />
          ) : (
            <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
              {filtered.map((post, i) => (
                <ContentCard
                  key={post.id}
                  item={post}
                  typeConfig={getTypeConfig(post.type)}
                  onClick={setSelected}
                  index={i}
                />
              ))}
            </div>
          )}
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
