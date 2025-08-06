import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, Code, Database, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AIPage() {
  // TODO: Add actual AI projects as they are completed
  // Each project should include: title, description, technologies, demo/repo links, results/metrics
  const aiProjects = [
    {
      id: 'nasa-space-apps',
      title: 'NASA Space Apps Challenge - Astronaut Sleep Optimizer',
      category: 'Data Analysis & ML',
      description: 'AI-powered scheduling tool that analyzes astronaut sleep patterns using diet, exercise, and medication data from 100,000+ entries. Achieved global nominee status and People\'s Choice award.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'Data Visualization'],
      results: [
        'Global Nominee at NASA Space Apps Challenge',
        'People\'s Choice Award winner',
        'Featured in The Times of India',
        'Processed 100,000+ data entries'
      ],
      links: {
        demo: null, // TODO: Add demo link when available
        github: null, // TODO: Add GitHub link when code is public
        article: null // TODO: Add article link if available
      },
      status: 'completed',
      featured: true
    }
    // TODO: Add more AI projects as they are completed:
    // - Computer Vision projects with specific results/accuracy
    // - NLP applications with performance metrics  
    // - Agentic AI tools with real-world usage data
    // - Any other ML/AI projects with demonstrable outcomes
  ]

  // Only show categories that have actual projects
  const getProjectsByCategory = () => {
    const categories = {}
    aiProjects.forEach(project => {
      if (!categories[project.category]) {
        categories[project.category] = []
      }
      categories[project.category].push(project)
    })
    return categories
  }

  const projectCategories = getProjectsByCategory()

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-accent-600 to-primary-800 text-white">
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
                <Brain size={32} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  🤖 AI Projects
                </h1>
                <p className="text-xl opacity-90">
                  Machine learning and AI applications with demonstrated results
                </p>
              </div>
            </div>
            
            <div className="bg-sand-100/10 backdrop-blur-sm rounded-lg p-4 border border-sand-100/20">
              <p className="text-sand-100/90">
                <strong>Evidence-Based Portfolio:</strong> Each project includes metrics, results, and links to code or demonstrations where available.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Projects by Category */}
      <section className="py-16">
        <div className="container-custom">
          {Object.keys(projectCategories).length > 0 ? (
            Object.entries(projectCategories).map(([category, projects], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-primary-800 dark:text-sand-100 mb-8">
                  {category}
                </h2>
                <div className="section-divider mb-8"></div>
                
                <div className="space-y-8">
                  {projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`featured-card p-8 ${project.featured ? 'border-2 border-accent-500' : ''}`}
                    >
                      <div className="flex flex-col lg:flex-row gap-8">
                        {/* Project Content */}
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-gradient-to-r from-accent-600 to-primary-800 text-white">
                              <Brain size={28} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-bold text-primary-800 dark:text-sand-100">
                                  {project.title}
                                </h3>
                                {project.featured && (
                                  <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 rounded-full text-xs font-medium">
                                    Featured
                                  </span>
                                )}
                              </div>
                              <p className="text-accent-600 dark:text-accent-400 font-medium text-sm">
                                {project.category}
                              </p>
                            </div>
                          </div>
                          
                          <p className="text-primary-700 dark:text-sand-200 mb-6 leading-relaxed">
                            {project.description}
                          </p>
                          
                          {/* Technologies */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-primary-700 dark:text-sand-200 mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-2 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-sand-300 rounded text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Links */}
                          <div className="flex flex-wrap gap-3">
                            {project.links.demo && (
                              <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-accent-600 text-white px-4 py-2 rounded-lg hover:bg-accent-700 transition-colors duration-300"
                              >
                                <ExternalLink size={16} />
                                Live Demo
                              </a>
                            )}
                            {project.links.github && (
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary-800 text-white px-4 py-2 rounded-lg hover:bg-primary-900 transition-colors duration-300"
                              >
                                <Github size={16} />
                                View Code
                              </a>
                            )}
                          </div>
                        </div>
                        
                        {/* Results Sidebar */}
                        <div className="lg:w-80">
                          <div className="bg-accent-50 dark:bg-accent-900/20 rounded-xl p-6">
                            <h4 className="text-lg font-semibold text-primary-800 dark:text-sand-100 mb-4">Results & Recognition</h4>
                            <ul className="space-y-3">
                              {project.results.map((result, resultIndex) => (
                                <li key={resultIndex} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-primary-600 dark:text-sand-300 text-sm leading-relaxed">
                                    {result}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            /* Placeholder when no projects exist */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="max-w-2xl mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center">
                  <Code size={32} className="text-primary-600 dark:text-sand-400" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 dark:text-sand-100 mb-4">
                  AI Projects In Development
                </h3>
                <p className="text-primary-600 dark:text-sand-300 leading-relaxed">
                  AI projects will be added here as they are completed with demonstrable results, 
                  metrics, and working demonstrations.
                </p>
              </div>
            </motion.div>
          )}

          {/* Call to Action - Only show if there are projects */}
          {Object.keys(projectCategories).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-accent-600 to-primary-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Interested in AI Development?
                </h3>
                <p className="text-sand-100 mb-6 max-w-2xl mx-auto">
                  I'm always open to discussing AI projects, sharing technical insights, 
                  or collaborating on meaningful applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:akshaye.iyer@outlook.com?subject=AI Project Discussion"
                    className="bg-sand-100 text-accent-600 px-6 py-3 rounded-lg font-semibold hover:bg-sand-200 transition-colors duration-300"
                  >
                    Discuss Projects
                  </a>
                  <a
                    href="https://github.com/akiyer18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent-700 text-sand-100 px-6 py-3 rounded-lg font-semibold hover:bg-accent-800 transition-colors duration-300"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
} 