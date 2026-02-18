/**
 * Single source of truth for completed portfolio projects.
 * Used on Home (Projects grid) and /projects page.
 */
export const portfolioProjects = [
  {
    id: 'nasa-space-apps',
    title: 'NASA Space Apps Challenge — Astronaut Sleep Optimizer',
    category: 'Data Analysis & ML',
    description:
      'AI-powered scheduling tool that analyzes astronaut sleep patterns using diet, exercise, and medication data from 100,000+ entries. Global nominee and People\'s Choice award.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'Data Visualization'],
    results: [
      'Global Nominee at NASA Space Apps Challenge',
      'People\'s Choice Award winner',
      'Featured in The Times of India',
      'Processed 100,000+ data entries',
    ],
    links: { demo: null, github: null, article: null },
    status: 'completed',
    featured: true,
  },
]

export const completedProjects = portfolioProjects.filter((p) => p.status === 'completed')
