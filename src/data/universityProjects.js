/**
 * University projects: title, positioning, bullets, GitHub, tags for filtering.
 * Tags: nlp | logic | knowledge-graph | optimization
 */
export const universityProjectsData = [
  {
    id: 'offensive-language-detection',
    title: 'Ensembling Transformers for Offensive Language Detection',
    positioning: 'Cross-domain robustness study using transformer ensembles on social media datasets.',
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
    positioning: 'Feature-engineered and transformer-based NER models for BIO-tag classification.',
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
    id: 'exercise-classification-sensors',
    title: 'Exercise Classification with Smartphone Sensors',
    positioning: 'Multimodal sensor-based activity classification for real-time workout tracking.',
    bullets: [
      'Collected accelerometer, gyroscope, magnetometer, and other sensor streams',
      'Engineered statistical, temporal, and frequency-domain features',
      'Designed window-based segmentation for exercise vs rest detection',
      'Defined correlation-based feature strategy for real-time classification systems',
    ],
    github: 'https://github.com/SwastiKh/ML4QS',
    tags: ['optimization'],
  },
  {
    id: 'neuroevolution-evoman',
    title: 'Neuroevolution in EvoMan: MCNS vs NSGA-II',
    positioning: 'Evaluating novelty search initialization for multi-objective neuroevolution.',
    bullets: [
      'Implemented Minimal Criteria Novelty Search (MCNS) with behavioral phenotypes',
      'Used MCNS population to initialize NSGA-II',
      'Compared performance across diverse enemy groups using ANOVA',
      'Found significant diversity effects (p ≈ 0.01) and positive trend in complex settings',
    ],
    github: 'https://github.com/EliasLiinamaa/group57-evoman-framework-task-2',
    tags: ['optimization'],
  },
  {
    id: 'dpll-sat-solver',
    title: 'DPLL SAT Solver with Deterministic vs Probabilistic Heuristics',
    positioning: 'Heuristic analysis for logical satisfiability solving on Sudoku encodings.',
    bullets: [
      'Implemented baseline DPLL plus Jeroslow–Wang and simulated annealing heuristics',
      'Evaluated 100 Sudoku instances using recursion depth and clause reduction metrics',
      'Deterministic Jeroslow–Wang removed most clauses per recursion (~65)',
      'Demonstrated deterministic heuristics outperform probabilistic strategies',
    ],
    github: 'https://github.com/sebasaguerre/EL_reasoner',
    tags: ['logic'],
  },
  {
    id: 'description-logic-ontology',
    title: 'Description Logic Ontology & EL Reasoner for Sushi Domain',
    positioning: 'Transparent knowledge representation and reasoning using description logics.',
    bullets: [
      'Built 81-concept ontology in Protégé using ALC/EL/SROIQ constructs',
      'Implemented custom EL completion reasoner in Python–Java (Py4J)',
      'Validated subsumption using HermiT and custom reasoning engine',
      'Demonstrated non-trivial subsumption inference and DL expressivity tradeoffs',
    ],
    github: 'https://github.com/sebasaguerre/EL_reasoner',
    tags: ['logic', 'knowledge-graph'],
  },
]

/** Filter key for Core Domains: all | nlp | logic | optimization */
export const DOMAIN_FILTER_ALL = 'all'

export function filterUniversityProjectsByDomain(projects, domain) {
  if (domain === DOMAIN_FILTER_ALL) return projects
  if (domain === 'nlp') return projects.filter((p) => p.tags.includes('nlp'))
  if (domain === 'logic') return projects.filter((p) => p.tags.includes('logic') || p.tags.includes('knowledge-graph'))
  if (domain === 'optimization') return projects.filter((p) => p.tags.includes('optimization'))
  return projects
}
