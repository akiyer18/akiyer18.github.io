import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Code, Database, Brain, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Technical Skills',
      category: 'Programming & Development',
      description: 'Full-stack development with focus on data processing, machine learning integration, and scalable application architecture.',
      skillSets: [
        {
          category: 'Programming',
          skills: ['Python', 'TypeScript', 'JavaScript', 'Node.js', 'SQL']
        },
        {
          category: 'ML/DL Frameworks',
          skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'LangChain']
        },
        {
          category: 'Data Management',
          skills: ['Data Preprocessing', 'Data Visualization', 'Matplotlib', 'Seaborn']
        },
        {
          category: 'Development Tools',
          skills: ['Git/GitHub', 'APIs (RESTful)']
        }
      ]
    },
    {
      icon: Brain,
      title: 'Machine Learning & AI',
      category: 'Artificial Intelligence',
      description: 'Experience in building and deploying machine learning models with practical applications and demonstrated results in competitions and projects.',
      skillSets: [
        {
          category: 'Core ML/AI',
          skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Generative AI']
        },
        {
          category: 'Specialized',
          skills: ['Data Analysis', 'Pattern Recognition', 'Predictive Modeling', 'Algorithm Design']
        }
      ]
    },
    {
      icon: Settings,
      title: 'Professional Skills',
      category: 'Collaboration & Analysis',
      description: 'Strong analytical and communication abilities developed through project work, competition participation, and cross-functional collaboration.',
      skillSets: [
        {
          category: 'Analytical',
          skills: ['Analytical Thinking', 'Problem Solving', 'Strategic Planning', 'System Optimization']
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-accent-500 to-accent-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sand-100/80 hover:text-sand-100 transition-colors duration-300 mb-6"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-sand-100/20 backdrop-blur-sm rounded-2xl">
                <Heart size={32} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  About Me
                </h1>
                <p className="text-xl opacity-90">
                  Background, skills, and approach to building technology
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <div className="featured-card p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Professional Headshot Placeholder */}
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary-800 to-accent-600 flex items-center justify-center text-white text-6xl shadow-lg">
                      👨‍💻
                    </div>
                  </div>
                  
                  {/* Introduction */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-primary-800 dark:text-sand-100 mb-4">
                      Software Developer & AI Enthusiast
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-primary-700 dark:text-sand-200 mb-4">
                        I'm Akshaye Iyer, a software developer focused on building practical AI applications and productivity tools. 
                        My work combines technical development with user-centered design to create applications that solve real problems.
                      </p>
                      <p className="text-primary-600 dark:text-sand-300 mb-4">
                        I've achieved recognition in competitions like the NASA Space Apps Challenge (Global Nominee, People's Choice) 
                        and actively maintain several open-source productivity applications. My approach emphasizes working software 
                        with demonstrable results over theoretical concepts.
                      </p>
                      <p className="text-primary-600 dark:text-sand-300">
                        My background spans music, strategic analysis, and software development, providing diverse perspectives 
                        that inform my technical problem-solving approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-primary-800 dark:text-sand-100 mb-8 text-center">
              Technical Skills
            </h2>
            <div className="section-divider mb-12"></div>
            
            <div className="space-y-8">
              {skillCategories.map((skillCategory, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="featured-card p-8"
                >
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-r from-primary-800 to-accent-600 rounded-xl text-white mb-4">
                        <skillCategory.icon size={32} />
                      </div>
                      <div className="text-center lg:text-left">
                        <h3 className="text-xl font-bold text-primary-800 dark:text-sand-100 mb-2">
                          {skillCategory.title}
                        </h3>
                        <p className="text-sm text-accent-600 dark:text-accent-400 font-medium">
                          {skillCategory.category}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-primary-700 dark:text-sand-200 mb-6 leading-relaxed">
                        {skillCategory.description}
                      </p>
                      
                      <div className="space-y-4">
                        {skillCategory.skillSets.map((skillSet, skillSetIndex) => (
                          <div key={skillSetIndex}>
                            <h4 className="text-sm font-semibold text-primary-800 dark:text-sand-100 mb-2">
                              {skillSet.category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {skillSet.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-3 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-sand-300 rounded-full text-sm font-medium"
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
          </motion.div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-primary-800 dark:text-sand-100 mb-8 text-center">
              Current Focus
            </h2>
            <div className="section-divider mb-12"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-sand-50 dark:bg-primary-800 rounded-2xl p-6 shadow-lg border border-primary-200 dark:border-sand-200/20">
                <h3 className="text-xl font-bold text-primary-800 dark:text-sand-100 mb-4">
                  Active Projects
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-primary-600 dark:text-sand-300">Maintaining and improving productivity applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-primary-600 dark:text-sand-300">Building AI tools with practical applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-primary-600 dark:text-sand-300">Exploring machine learning applications in data analysis</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-sand-50 dark:bg-primary-800 rounded-2xl p-6 shadow-lg border border-primary-200 dark:border-sand-200/20">
                <h3 className="text-xl font-bold text-primary-800 dark:text-sand-100 mb-4">
                  Technical Interests
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-primary-600 dark:text-sand-300">Full-stack web development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-primary-600 dark:text-sand-300">Machine learning and data processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-primary-600 dark:text-sand-300">Privacy-focused application design</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-accent-600 to-accent-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Get In Touch
              </h3>
              <p className="text-sand-100 mb-6 max-w-2xl mx-auto">
                I'm open to discussing projects, sharing technical insights, or collaborating on applications 
                that solve real problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:akshaye.iyer@outlook.com"
                  className="bg-sand-100 text-accent-600 px-6 py-3 rounded-lg font-semibold hover:bg-sand-200 transition-colors duration-300"
                >
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/akshaye-iyer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-700 text-sand-100 px-6 py-3 rounded-lg font-semibold hover:bg-accent-800 transition-colors duration-300"
                >
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/akiyer18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-700 text-sand-100 px-6 py-3 rounded-lg font-semibold hover:bg-accent-800 transition-colors duration-300"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 