/**
 * Personal projects (non-university, non-hackathon).
 * Same card format as university/hackathon projects: title, positioning, bullets, GitHub.
 */
export const personalProjects = [
  {
    id: 'internal-rag-agent',
    title: 'Internal RAG Agent (Amazon Bedrock AgentCore)',
    positioning:
      'Internal documentation assistant built on Amazon Bedrock AgentCore Runtime using the Strands SDK and Claude Sonnet. Features a two-pass lexical retrieval pipeline achieving 75% exact accuracy and 95% recall across a golden evaluation set, with Jinja2-templated prompts and programmatic source citation. Deployed end-to-end via AgentCore CLI and AWS CDK.',
    bullets: [
      'Python, Amazon Bedrock, Strands SDK, AWS CDK, Jinja2',
      '75% exact retrieval accuracy / 95% recall on 20-question eval set',
      'Deployed to AWS us-east-1 with full AgentCore CLI + CDK pipeline',
    ],
    github: 'https://github.com/akiyer18/InternalRAGAgent',
  },
  {
    id: 'researchmate-ai-research-workspace',
    title: 'ResearchMate — AI Research Workspace',
    positioning:
      'Local-first research OS for graduate students that turns PDFs, URLs, and pasted text into structured AI-powered summaries with a filterable archive. Includes project workspaces, literature review draft generation, per-paper thesis-fit scoring, and citation helpers.',
    bullets: [
      'Next.js 16, React 19, TypeScript, SQLite, Drizzle ORM, OpenAI/OpenRouter',
      'PDF/URL/text ingestion → AI analysis pipeline (methodology, results, keywords, research facets)',
      'Project workspaces with lit review generation, citation helpers (APA/MLA/CHI), command palette',
    ],
    github: 'https://github.com/akiyer18/ResearchMate',
  },
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
