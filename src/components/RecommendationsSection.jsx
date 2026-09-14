import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const LINKEDIN_RECOMMENDATIONS =
  'https://www.linkedin.com/in/akshaye-iyer/details/recommendations/'

const recommendations = [
  {
    name: 'Beth Carey',
    title: 'Founder and Director, Language Parent',
    relationship: 'Thesis Mentor',
    badge: 'Thesis Mentor',
    featured: true,
    quote:
      'He demonstrates a concern and curiosity for responsible AI for the future. His questions were incisive to drive toward an outcome in limited time. I would recommend him as someone who will make a difference in an organisation by considering consequences.',
  },
  {
    name: 'Anubhab Panda',
    title: 'Senior AI/ML Engineer (Direct Manager)',
    relationship: 'Managed directly',
    badge: 'Direct Manager',
    featured: true,
    quote:
      'Akshaye was very diligent in doing research and implementing best practices. He built an agent for doing code reviews used in our repos. He has a good grasp of Python and agentic workflows, wasn\'t afraid to pitch his ideas, and his communication skills are excellent.',
  },
  {
    name: 'Pradeep Khaire',
    title: 'Sr. Research Engineer, Saama Technologies',
    relationship: 'Senior colleague',
    badge: 'Senior Colleague',
    featured: false,
    quote:
      'Consistently impressed by his strong problem-solving skills and technical depth. He has hands-on expertise in Python, backend systems, and modern AI workflows, with the ability to translate complex ideas into practical solutions. Proactive, dependable, and a great team player.',
  },
  {
    name: 'Snehal Bamble',
    title: 'Data Engineer, TCS (formerly Saama Technologies)',
    relationship: 'Senior colleague',
    badge: 'Senior Colleague',
    featured: false,
    quote:
      'His work showed strong technical understanding and good problem-solving skills. Akshaye is a quick learner, dedicated, and always willing to take initiative — able to understand complex concepts quickly and contribute effectively to the team.',
  },
  {
    name: 'Dhaval Vaghela',
    title: 'Senior Consultant, Deloitte',
    relationship: 'Senior colleague',
    badge: 'Senior Colleague',
    featured: false,
    quote:
      'He learns quickly, adapts well to new situations and is always open to trying out new ideas. He likes thinking creatively and often comes up with different approaches. Very easy and fun to work with — brings a good positive energy to the team.',
  },
  {
    name: 'Nikil M',
    title: 'Software Engineer',
    relationship: 'Peer, same team',
    badge: 'Peer',
    featured: false,
    quote:
      'One of the things that stands out the most is how quickly he adapts to new environments and technologies. A go-getter, innovative and always ready to take ownership. His ability to understand requirements, learn on the go and deliver with a positive attitude makes him a valuable asset.',
  },
]

const accentBadges = new Set(['Thesis Mentor', 'Direct Manager'])

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function RecommendationsSection() {
  return (
    <section
      id="recommendations"
      className="relative py-24 md:py-32 overflow-hidden border-t border-slate-200 dark:border-white/[0.06]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-100/70 dark:bg-primary-900/35" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/[0.08] via-transparent to-accent-700/[0.06]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-48 bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 sm:px-8">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35 }}
          className="mb-14 text-center"
        >
          <h2 className="section-title mb-3">Recommendations</h2>
          <p className="section-subtitle mx-auto max-w-3xl text-base md:text-lg">
            Recommendations from colleagues, managers, and mentors across AI research, engineering, and consulting
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {recommendations.map((rec, index) => {
            const accentBadge = accentBadges.has(rec.badge)
            return (
              <motion.article
                key={rec.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`card-portfolio relative flex h-full flex-col ${
                  rec.featured
                    ? 'p-7 border-accent-500/40 dark:border-accent-400/50 shadow-glow-sm hover:shadow-glow'
                    : 'p-6 hover:shadow-glow-sm'
                }`}
              >
                <span
                  className={`mb-3 inline-flex w-fit rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${
                    accentBadge
                      ? 'bg-accent-500/15 text-accent-600 dark:text-accent-300 border border-accent-500/30'
                      : 'bg-slate-200/80 dark:bg-white/[0.06] text-slate-600 dark:text-zinc-400 border border-slate-300/80 dark:border-white/10'
                  }`}
                >
                  {rec.badge}
                </span>
                <span
                  aria-hidden="true"
                  className="font-serif text-5xl leading-none text-accent-500 dark:text-accent-400 drop-shadow-[0_0_18px_rgba(99,102,241,0.45)]"
                >
                  “
                </span>
                <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600 dark:text-[#CBD5E1]">
                  {rec.quote}
                </blockquote>
                <footer className="mt-5 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-slate-900 dark:text-white">{rec.name}</p>
                    <a
                      href={LINKEDIN_RECOMMENDATIONS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-500 dark:text-accent-400 hover:text-accent-400 dark:hover:text-accent-300 transition-colors duration-300"
                      aria-label={`${rec.name} on LinkedIn recommendations`}
                    >
                      <Linkedin size={15} />
                    </a>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-zinc-500 mt-0.5">{rec.title}</p>
                  <p className="text-sm text-slate-500 dark:text-zinc-500">{rec.relationship}</p>
                </footer>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href={LINKEDIN_RECOMMENDATIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary hover:border-accent-400 dark:hover:border-accent-400 hover:shadow-glow-sm"
          >
            See all recommendations on LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
