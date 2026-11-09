import { motion } from 'framer-motion'
import { ArrowLeft, Boxes, Brain, Code2, Network, Server } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  const skillCategories = [
    {
      icon: Brain,
      title: 'Agents and LLMs',
      category: 'Agentic systems',
      skills: [
        'LangGraph',
        'LangChain',
        'Strands SDK',
        'Tool calling',
        'RAG',
        'LLM evaluation',
        'Prompt engineering',
      ],
    },
    {
      icon: Network,
      title: 'Knowledge Graphs',
      category: 'Structured knowledge',
      skills: ['Wikidata', 'SPARQL', 'OWL', 'Protégé'],
    },
    {
      icon: Server,
      title: 'Infrastructure and Backend',
      category: 'Production systems',
      skills: [
        'gRPC',
        'NestJS',
        'Node.js',
        'Kubernetes',
        'Docker',
        'GitHub Actions',
        'Amazon Bedrock',
        'AWS CDK',
      ],
    },
    {
      icon: Boxes,
      title: 'Machine Learning',
      category: 'Models and evaluation',
      skills: [
        'PyTorch',
        'TensorFlow',
        'HuggingFace Transformers',
        'Scikit-learn',
        'XGBoost',
      ],
    },
    {
      icon: Code2,
      title: 'Programming',
      category: 'Languages and tooling',
      skills: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'Git'],
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
              Software and AI Engineer focused on agents, knowledge graphs, and production systems.
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
              Software and AI Engineer
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              Software and AI engineer with two years of production backend engineering at Deloitte
              on a corporate banking platform, and hands on experience building LLM agents, agentic
              workflows and knowledge graph systems in Python and LangGraph. MSc Artificial
              Intelligence from Vrije Universiteit Amsterdam, with a thesis on grounding LLM
              extracted facts to Wikidata. Interested in the engineering around the model: tool
              calling, retrieval, grounding, evaluation and deployment.
            </p>
          </motion.div>

          <h2 className="section-title mb-8">Skills</h2>
          <div className="space-y-6 mb-16">
            {skillCategories.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.title}
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
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {skillCategory.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-zinc-500">
                        {skillCategory.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-wrap gap-2 content-center">
                    {skillCategory.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/[0.06] text-xs text-slate-600 dark:text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-1 gap-6 mb-16">
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
                  Agentic LLM systems and knowledge graph pipelines
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400 mt-1.5 shrink-0" />
                  LLM evaluation without labels
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 dark:bg-accent-400 mt-1.5 shrink-0" />
                  Production deployment and retrieval architecture
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
              Open to discussing agentic AI systems, knowledge graphs, and production LLM work.
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
