import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { careerTimeline } from '../data/careerTimeline'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.05 },
  }),
}

export default function CareerTimeline() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 0.15, 1], [0, 1, 1])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container-custom">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-16"
        >
          <h2 className="section-title mb-3">Career Progression</h2>
          <p className="section-subtitle">
            Education and professional experience in AI and software systems.
          </p>
        </motion.header>

        <div className="relative">
          {/* Vertical line — grows on scroll */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px -ml-px overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-accent-500/60 to-transparent"
              style={{
                height: '100%',
                scaleY: lineHeight,
                transformOrigin: 'top',
              }}
            />
          </div>

          <ul className="space-y-12 md:space-y-16">
            {careerTimeline.map((item, index) => (
              <motion.li
                key={item.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                className="relative flex flex-col md:flex-row md:items-start gap-6"
              >
                {/* Dot on the line */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 -ml-1.5 mt-2 rounded-full bg-accent-400 border-2 border-primary-950 shrink-0 z-10" />

                {/* Card — alternate left/right on desktop; indented on mobile for dot */}
                <div
                  className={`card-portfolio p-6 pl-10 md:pl-6 md:w-[calc(50%-2rem)] md:max-w-md ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  {item.period && (
                    <span className="text-xs font-medium text-accent-400/90 uppercase tracking-wider">
                      {item.period}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                  <p className="text-sm text-zinc-400 mt-0.5">{item.subtitle}</p>
                  {item.description && (
                    <p className="text-sm text-zinc-500 mt-2">{item.description}</p>
                  )}
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-400/80 mt-1.5 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
