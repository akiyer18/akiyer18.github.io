import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { X } from 'lucide-react'

/**
 * Slide-in panel for full markdown body of a content entry.
 */
export default function ContentModal({ item, typeConfig, onClose }) {
  useEffect(() => {
    if (!item) return undefined

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-[60] flex justify-end" role="dialog" aria-modal="true" aria-labelledby="content-modal-title">
          <motion.button
            type="button"
            aria-label="Close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-xl h-full bg-white dark:bg-primary-950 border-l border-slate-200 dark:border-white/[0.08] shadow-2xl flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 p-6 border-b border-slate-200 dark:border-white/[0.06]">
              <div className="min-w-0">
                {typeConfig && (
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3 ${typeConfig.className}`}
                  >
                    {typeConfig.label}
                  </span>
                )}
                <h2
                  id="content-modal-title"
                  className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight"
                >
                  {item.title}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm text-slate-500 dark:text-zinc-500">
                  {item.date && <span>{item.date}</span>}
                  {item.source && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{item.source}</span>
                    </>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-300 shrink-0"
                aria-label="Close panel"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {item.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-6">
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

              <div className="content-markdown text-slate-700 dark:text-zinc-300 leading-relaxed">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
                    strong: ({ children }) => (
                      <strong className="font-semibold text-slate-900 dark:text-white">{children}</strong>
                    ),
                    em: ({ children }) => <em className="italic">{children}</em>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-2 border-accent-500/50 pl-4 my-4 text-slate-600 dark:text-zinc-400 italic">
                        {children}
                      </blockquote>
                    ),
                    code: ({ children }) => (
                      <code className="px-1.5 py-0.5 rounded-md text-sm font-mono bg-slate-100 dark:bg-white/[0.06] text-accent-600 dark:text-accent-300">
                        {children}
                      </code>
                    ),
                    ul: ({ children }) => <ul className="list-disc pl-5 mb-4 space-y-1">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-5 mb-4 space-y-1">{children}</ol>,
                    li: ({ children }) => <li>{children}</li>,
                    h1: ({ children }) => (
                      <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-3 mt-6 first:mt-0">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 mt-6 first:mt-0">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 mt-4 first:mt-0">{children}</h3>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 dark:text-accent-400 underline underline-offset-2 hover:text-accent-500"
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {item.body || ''}
                </ReactMarkdown>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}
