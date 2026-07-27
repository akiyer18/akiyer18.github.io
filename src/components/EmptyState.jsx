/**
 * Reusable empty state with inline SVG icon + message.
 */
export default function EmptyState({ icon, heading, subtext }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      <div className="mb-5 text-slate-400 dark:text-zinc-500" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
        {heading}
      </h3>
      {subtext && (
        <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-sm">
          {subtext}
        </p>
      )}
    </div>
  )
}

export function NotebookIcon({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8" />
      <path d="M8 11h6" />
    </svg>
  )
}

export function SignalIcon({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h2" />
      <path d="M6 8v8" />
      <path d="M10 5v14" />
      <path d="M14 8v8" />
      <path d="M18 10v4" />
      <path d="M22 12h-2" />
    </svg>
  )
}
