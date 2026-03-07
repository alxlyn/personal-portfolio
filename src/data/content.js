// -------------------------------------------------------
// Edit this file to fill in your real information.
// All content on the site is pulled from here.
// -------------------------------------------------------

export const personal = {
  name: 'Aleksei Lian',
  role: 'CS Student · Backend Developer',
  tagline: 'I build reliable systems and clean APIs.',
  email: 'alekseilianv@gmail.com',
  github: 'https://github.com/alxlyn',
  linkedin: 'https://linkedin.com/in/aleksei-lian',
};

export const about = {
  paragraphs: [
    "I'm a backend-focused Computer Science student specializing in scalable Python architectures, distributed systems concepts, and concurrency-safe APIs. I build production-grade backend services using Docker-based CI/CD workflows, PostgreSQL, and high-performance algorithmic search trees.",
    "Currently studying at York University (transferred from Carleton), I'm drawn to the challenge of building systems that stay correct under load — whether that's eliminating race conditions in middleware, optimizing schemas for thousands of concurrent requests, or designing APIs that are as clean as they are reliable.",
    "I'm actively looking for backend internship opportunities where I can contribute to real systems and keep learning from experienced engineers. If you're working on something interesting, I'd love to chat.",
  ],
  currentlyInto: [
    'Distributed Systems & Concurrency',
    'API Design & REST',
    'PostgreSQL & query optimization',
    'GCP (Cloud Run, Cloud Build)',
    'Docker & containerization',
  ],
};

export const projects = [
  {
    title: 'URL Shortener',
    description:
      'Flask + PostgreSQL service with transactional guarantees for safe concurrent insertions. RESTful APIs for scalable redirection and link analytics, optimized schemas and indexing for 10,000+ concurrent requests, with CI/CD via Google Cloud Build → Cloud Run and a cryptographically secure short code generator using Python\'s secrets module.',
    tags: ['Python', 'Flask', 'PostgreSQL', 'Docker', 'GCP'],
    github: 'https://github.com/alxlyn/alex-url-shortener',
  },
  {
    title: 'Chess Engine — UCI Compatible',
    description:
      'UCI-compatible chess engine built with Negamax search and Alpha-Beta pruning. Features quiescence search to mitigate horizon effects on captures/checks, a Transposition Table with custom FEN-based hashing to eliminate redundant computations, and MVV-LVA move ordering. Benchmarked to depth-6 in middlegame positions.',
    tags: ['Python', 'UCI', 'Negamax', 'Alpha-Beta'],
    github: 'https://github.com/alxlyn/alex-chess-engine',
  },
];

export const skills = {
  Languages: ['Python', 'Java', 'C', 'SQL', 'JavaScript'],
  'Backend & Databases': ['Flask', 'REST APIs', 'PostgreSQL'],
  'Infrastructure & Cloud': ['GCP (Cloud Run, Cloud Build)', 'Docker', 'Linux', 'Git', 'CI/CD'],
  'Core Concepts': ['Data Structures & Algorithms', 'Concurrency', 'Distributed Systems'],
};
