export const projects = {
  growth: [],
  music: [
    {
      id: 'vision-studio',
      title: 'Vision Studio: AI Music Coach',
      emoji: '🎹',
      description:
        'Claude agent on Amazon Bedrock that coaches music producers with guardrails grounded in measured audio and MIDI analysis. Proposed and led at the ADE Lab Hackathon (Music Hackspace, Amsterdam, Oct 2026).',
      features: [
        'Amazon Bedrock Claude agent with Stable Audio prompts',
        'Guardrails tied to measured audio and MIDI analysis',
        'AgentCore long term memory for personalised coaching',
        'Server side API with plan limits and cost tracking',
      ],
      tech: ['Python', 'Amazon Bedrock', 'Claude', 'Stable Audio', 'JUCE'],
      privacy: 'API keys server side',
      securityNote: 'Model keys stay server side; Bedrock and Stable Audio cost tracked per user.',
      liveDemo: null,
      github: null,
      cloneCommand: null,
      status: 'live',
      featured: true,
    },
  ],
  ai: [
    {
      id: 'nasa-space-apps',
      title: 'NASA Space Apps Challenge - Astronaut Sleep Optimizer',
      emoji: '🚀',
      category: 'Data Analysis & ML',
      description:
        'AI-powered scheduling tool that analyzes astronaut sleep patterns using diet, exercise, and medication data from 100,000+ entries. Achieved global nominee status and People\'s Choice award.',
      features: [
        'Data processing of 100k+ entries',
        'Sleep pattern optimization',
        'Multi-factor analysis',
        'Scheduling algorithms',
      ],
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'Data Visualization'],
      results: [
        'Global Nominee at NASA Space Apps Challenge',
        "People's Choice Award winner",
        'Featured in The Times of India',
        'Processed 100,000+ data entries',
      ],
      status: 'completed',
      featured: false,
      liveDemo: null,
      github: null,
      article: null,
    },
  ],
}

export const sectionInfo = {
  growth: {
    title: 'Growth Mindset Tools',
    emoji: '📈',
    description:
      'Productivity applications focused on personal organization, financial management, and daily planning.',
    color: 'from-green-500 to-emerald-600',
  },
  music: {
    title: 'Music and Creative Projects',
    emoji: '🎵',
    description:
      'AI systems for music production, coaching, and creative workflows.',
    color: 'from-purple-500 to-pink-600',
  },
  ai: {
    title: 'AI Projects',
    emoji: '🤖',
    description:
      'Machine learning and artificial intelligence applications with demonstrated results and real-world impact.',
    color: 'from-blue-500 to-cyan-600',
  },
}
