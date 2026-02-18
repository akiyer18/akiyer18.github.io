import { motion } from 'framer-motion'
import { ArrowLeft, Code, Cpu, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Technical Skills',
      category: 'Programming & Development',
      description:
        'Full-stack development with focus on data processing, machine learning integration, and scalable application architecture.',
      skillSets: [
        { category: 'Programming', skills: ['Python', 'TypeScript', 'JavaScript', 'Node.js', 'SQL'] },
        { category: 'ML/DL Frameworks', skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'LangChain'] },
        { category: 'Data Management', skills: ['Data Preprocessing', 'Data Visualization', 'Matplotlib', 'Seaborn'] },
        { category: 'Development Tools', skills: ['Git/GitHub', 'APIs (RESTful)'] },
      ],
    },
    {
      icon: Cpu,
      title: 'Machine Learning & AI',
      category: 'Artificial Intelligence',
      description:
        'Experience building and deploying ML models with practical applications and demonstrated results in competitions and projects.',
      skillSets: [
        {
          category: 'Core ML/AI',
          skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Generative AI'],
        },
        {
          category: 'Specialized',
          skills: ['Data Analysis', 'Pattern Recognition', 'Predictive Modeling', 'Algorithm Design'],
        },
      ],
    },
    {
      icon: Settings,
      title: 'Professional Skills',
      category: 'Collaboration & Analysis',
      description:
        'Analytical and communication abilities developed through project work, competition participation, and cross-functional collaboration.',
      skillSets: [
        {
          category: 'Analytical',
          skills: ['Analytical Thinking', 'Problem Solving', 'Strategic Planning', 'System Optimization'],
        },
      ],
    },
  ]

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
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              About
            </h1>
            <p className="text-slate-600 dark:text-zinc-400 mt-2">
              Background, skills, and approach to building technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="card-portfolio p-8 mb-16"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Software Developer & AI
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-zinc-400 leading-relaxed">
              <p>
                I build practical AI applications and productivity tools. My work combines technical development with user-centered design to create software that solves real problems.
              </p>
              <p>
                I've been recognized in competitions like the NASA Space Apps Challenge (Global Nominee, People's Choice) and maintain several open-source applications. I focus on working software with demonstrable results.
              </p>
            </div>
          </motion.div>

          <h2 className="section-title mb-8">Technical Skills</h2>
          <div className="space-y-6 mb-16">
            {skillCategories.map((skillCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="card-portfolio p-8"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/[0.06]">
                      <skillCategory.icon size={24} className="text-accent-500 dark:text-accent-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{skillCategory.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-zinc-500">{skillCategory.category}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">{skillCategory.description}</p>
                    <div className="space-y-4">
                      {skillCategory.skillSets.map((skillSet, i) => (
                        <div key={i}>
                          <h4 className="text-xs font-semibold text-slate-500 dark:text-zinc-500 uppercase tracking-wider mb-2">
                            {skillSet.category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skillSet.skills.map((skill, j) => (
                              <span
                                key={j}
                                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/[0.06] text-xs text-slate-600 dark:text-zinc-400"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-portfolio p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Focus</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400 mt-1.5 shrink-0" />
                  Maintaining and improving productivity applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400 mt-1.5 shrink-0" />
                  Building AI tools with practical applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400 mt-1.5 shrink-0" />
                  Machine learning in data analysis
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-portfolio p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Interests</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400 mt-1.5 shrink-0" />
                  Full-stack web development
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400 mt-1.5 shrink-0" />
                  Machine learning and data processing
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400 mt-1.5 shrink-0" />
                  Privacy-focused application design
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-portfolio p-8 text-center"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Get in touch</h3>
            <p className="text-slate-600 dark:text-zinc-400 mb-6 max-w-lg mx-auto">
              Open to discussing projects, sharing technical insights, or collaborating on applications that solve real problems.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:akshaye.iyer@outlook.com" className="btn-primary">
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/akshaye-iyer/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/akiyer18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
