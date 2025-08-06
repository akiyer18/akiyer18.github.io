export const projects = {
  growth: [
    {
      id: 'money-mastery',
      title: 'Money Mastery Tool',
      emoji: '💰',
      description: 'Privacy-first expense tracking application with real-time calculations, category management, and CSV export. Zero data storage - everything stays in your browser for complete privacy.',
      features: ['Real-time calculations', 'Category management', 'CSV export', 'Zero data storage'],
      tech: ['React', 'TailwindCSS', 'JavaScript', 'LocalStorage'],
      privacy: 'Privacy-First',
      securityNote: 'All data stays in your browser. Nothing is sent to any server.',
      liveDemo: 'https://akiyer18.github.io/#/money-mastery',
      github: 'https://github.com/akiyer18/Money-tracker',
      cloneCommand: 'git clone https://github.com/akiyer18/Money-tracker.git',
      status: 'live'
    },
    {
      id: 'meal-decider',
      title: 'Meal Decider Pro',
      emoji: '🍽️',
      description: 'Smart meal planning application with ingredient management, cooking time optimization, and automated grocery list generation. Beautiful glass morphism UI with smooth animations.',
      features: ['Smart meal suggestions', 'Ingredient tracking', 'Grocery list generation', 'Glass morphism UI'],
      tech: ['JavaScript', 'CSS3', 'LocalStorage', 'Responsive Design'],
      privacy: 'Offline Ready',
      securityNote: 'Works completely offline. Your meal preferences stay private.',
      liveDemo: 'https://akiyer18.github.io/Meal_decider/',
      github: 'https://github.com/akiyer18/meal-decider-pro',
      cloneCommand: 'git clone https://github.com/akiyer18/meal-decider-pro.git',
      status: 'building'
    },
    {
      id: 'Grocify',
      title: 'Grocify',
      emoji: '🛒',
      description: 'Advanced grocery management system with dish-based planning, manual entry, frequency tracking, and smart reminders. Built with TypeScript for robust development.',
      features: ['Dish-based planning', 'Smart reminders', 'Frequency tracking', 'TypeScript safety'],
      tech: ['TypeScript', 'Vite', 'CSS3', 'Modern JS'],
      privacy: 'Secure by Design',
      securityNote: 'Type-safe architecture ensures data integrity and security.',
      liveDemo: 'https://akiyer18.github.io/Grocery_list_generator/',
      github: 'https://github.com/akiyer18/Grocify.git',
      cloneCommand: 'git clone https://github.com/akiyer18/Grocify.git',
      status: 'live'
    }
  ],
  music: [
    // TODO: Add music-related projects as they are completed
    // Examples could include:
    // - Music theory analysis tools
    // - Chord progression generators
    // - Audio processing applications
    // Each project should include: demo links, GitHub repos, and specific results/features
  ],
  ai: [
    {
      id: 'nasa-space-apps',
      title: 'NASA Space Apps Challenge - Astronaut Sleep Optimizer',
      emoji: '🚀',
      category: 'Data Analysis & ML',
      description: 'AI-powered scheduling tool that analyzes astronaut sleep patterns using diet, exercise, and medication data from 100,000+ entries. Achieved global nominee status and People\'s Choice award.',
      features: ['Data processing of 100k+ entries', 'Sleep pattern optimization', 'Multi-factor analysis', 'Scheduling algorithms'],
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'Data Visualization'],
      results: [
        'Global Nominee at NASA Space Apps Challenge',
        'People\'s Choice Award winner',
        'Featured in The Times of India',
        'Processed 100,000+ data entries'
      ],
      status: 'completed',
      featured: true,
      // TODO: Add links when they become available
      liveDemo: null,
      github: null,
      article: null
    }
    // TODO: Add more AI projects as they are completed:
    // 
    // COMPUTER VISION:
    // - Object detection/recognition projects with accuracy metrics
    // - Image processing applications with before/after examples
    // - Real-time vision applications with performance benchmarks
    //
    // NATURAL LANGUAGE PROCESSING:
    // - Text analysis tools with specific use cases and results
    // - Language model applications with user metrics
    // - Document processing systems with efficiency gains
    //
    // AGENTIC AI:
    // - Autonomous task completion systems with success rates
    // - Decision-making frameworks with real-world applications
    // - Multi-agent coordination systems with demonstrated capabilities
    //
    // DATA SCIENCE:
    // - Predictive models with accuracy scores and validation
    // - Data analysis projects with actionable insights
    // - Visualization tools with user adoption metrics
    //
    // Each project must include:
    // - Working demo or deployed application
    // - GitHub repository with code
    // - Specific metrics, results, or recognition
    // - Clear description of problem solved and approach used
  ]
}

export const sectionInfo = {
  growth: {
    title: 'Growth Mindset Tools',
    emoji: '📈',
    description: 'Productivity applications focused on personal organization, financial management, and daily planning.',
    color: 'from-green-500 to-emerald-600'
  },
  music: {
    title: 'Music Projects',
    emoji: '🎵',
    description: 'Tools and applications that combine music theory, composition, and technology.',
    color: 'from-purple-500 to-pink-600'
  },
  ai: {
    title: 'AI Projects',
    emoji: '🤖',
    description: 'Machine learning and artificial intelligence applications with demonstrated results and real-world impact.',
    color: 'from-blue-500 to-cyan-600'
  }
} 