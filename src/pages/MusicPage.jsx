import { motion } from 'framer-motion'
import { ArrowLeft, Music } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects, sectionInfo } from '../data/projects'

export default function MusicPage() {
  const musicProjects = projects.music
  const sectionData = sectionInfo.music

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 border-b border-slate-200 dark:border-white/[0.06]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={18} />
              Back to home
            </Link>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/[0.06]">
                <Music size={28} className="text-accent-500 dark:text-accent-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {sectionData.title}
                </h1>
                <p className="text-slate-600 dark:text-zinc-400 mt-1">{sectionData.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
            Featured
          </h2>
          {musicProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {musicProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500 dark:text-zinc-500">No music projects yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}
