/**
 * University / research projects kept on the portfolio.
 * Tags: nlp | knowledge-graph | agentic | hackathon
 */
export const universityProjectsData = [
  {
    id: 'offensive-language-detection',
    title: 'Ensembling Transformers for Offensive Language Detection',
    positioning:
      'Cross-domain robustness study using transformer ensembles on social media datasets.',
    bullets: [
      'Fine-tuned RoBERTa, F-BERT and ELECTRA on OLID and HASOC datasets',
      'Built hard-voting, weighted soft-voting, and stacking ensembles',
      'Evaluated in-domain vs cross-domain performance using macro F1, precision, and recall',
      'Weighted soft-voting achieved 0.83 macro F1 in-domain and 0.81 cross-domain, outperforming single models under domain shift',
    ],
    github: 'https://github.com/kovacicn/SubjectivityMining_A4',
    tags: ['nlp'],
  },
  {
    id: 'ner-conll2003',
    title: 'Named Entity Recognition on CoNLL-2003',
    positioning:
      'Feature-engineered and transformer-based NER models for BIO-tag classification.',
    bullets: [
      'Engineered lexical, contextual, clustering, and embedding features',
      'Trained Logistic Regression, Naive Bayes, and Linear SVM classifiers',
      'Conducted feature ablation and ORG/LOC/MISC error analysis',
      'Improved macro F1 from ~0.73 to ~0.94–0.95 using BERT fine-tuning',
    ],
    github: null,
    tags: ['nlp'],
  },
  {
    id: 'description-logic-ontology',
    title: 'Description Logic Ontology & EL Reasoner for Sushi Domain',
    positioning:
      'Transparent knowledge representation and reasoning using description logics.',
    bullets: [
      'Built 81-concept ontology in Protégé using ALC/EL/SROIQ constructs',
      'Implemented custom EL completion reasoner in Python–Java (Py4J)',
      'Validated subsumption using HermiT and custom reasoning engine',
      'Demonstrated non-trivial subsumption inference and DL expressivity tradeoffs',
    ],
    github: 'https://github.com/sebasaguerre/EL_reasoner',
    tags: ['knowledge-graph'],
  },
]

/** Filter key for Core Domains: all | agentic | knowledge-graph | nlp | hackathon */
export const DOMAIN_FILTER_ALL = 'all'

export function filterUniversityProjectsByDomain(projects, domain) {
  if (domain === DOMAIN_FILTER_ALL) return projects
  if (domain === 'nlp') return projects.filter((p) => p.tags?.includes('nlp'))
  if (domain === 'knowledge-graph')
    return projects.filter((p) => p.tags?.includes('knowledge-graph'))
  if (domain === 'agentic') return projects.filter((p) => p.tags?.includes('agentic'))
  if (domain === 'hackathon') return projects.filter((p) => p.tags?.includes('hackathon'))
  return projects
}

export function filterProjectsByDomain(projects, domain) {
  return filterUniversityProjectsByDomain(projects, domain)
}
