/**
 * Personal projects (non-university, non-hackathon).
 * Same card format as university/hackathon projects: title, positioning, bullets, GitHub.
 */
export const personalProjects = [
  {
    id: 'arohaflow-growth-platform',
    title: 'Aroha Flow: The Growth Platform',
    positioning:
      'Modern growth and productivity platform that unifies tasks, habits, meals, events, finances, journal, and knowledge expansion into one workspace.',
    bullets: [
      'Implements authenticated, protected routes with Supabase Auth (production) or local session (dev)',
      'Provides functional modules for money tracking, meal planning, smart calendar, tasks, habits, journal, and knowledge expansion',
      'Supports data source switching between Supabase and local storage via a single environment variable',
      'Uses a consistent dark SaaS UI with responsive, glassmorphism-style cards built in React, Vite, and Tailwind CSS',
    ],
    github: 'https://github.com/akiyer18/ArohaFlow-TheGrowthPlatform',
  },
]

// For compatibility if needed elsewhere
export const portfolioProjects = personalProjects
