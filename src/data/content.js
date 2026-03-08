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
  resume: '/resume.pdf',
};

export const about = {
  paragraphs: [
    "I'm a CS student at York University (transferred from Carleton) focused on backend development. I like building systems that handle concurrent load without breaking — whether that's a URL shortener deployed to Cloud Run or a chess engine searching millions of positions.",
    "Right now I'm working as a Founding Technical Contributor at Tanish, an early-stage startup where I debug production race conditions and help shape the backend architecture.",
    "I'm looking for backend internship opportunities where I can contribute to real systems and learn from experienced engineers.",
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
      'URL shortening service built with Flask and PostgreSQL. Handles concurrent requests safely, with RESTful APIs for redirection and link analytics. Deployed to Google Cloud Run with CI/CD.',
    tags: ['Python', 'Flask', 'PostgreSQL', 'Docker', 'GCP'],
    github: 'https://github.com/alxlyn/alex-url-shortener',
  },
  {
    title: 'Chess Engine — UCI Compatible',
    description:
      'UCI-compatible chess engine with Negamax search, Alpha-Beta pruning, quiescence search, and transposition tables. Achieves depth-6 search in middlegame positions with MVV-LVA move ordering.',
    tags: ['Python', 'UCI', 'Negamax', 'Alpha-Beta'],
    github: 'https://github.com/alxlyn/alex-chess-engine',
  },
];

export const experience = [
  {
    company: 'Tanish',
    companyNote: 'Early-Stage Startup',
    title: 'Founding Technical Contributor',
    location: 'Remote',
    start: 'Jan 2026',
    end: 'Present',
    bullets: [
      'Backend architecture and feature scoping for early product',
      'Debugging production race conditions in concurrent middleware',
      'Shaping technical direction alongside founding team',
    ],
  },
  {
    company: 'KPD Advertising Firm',
    companyNote: null,
    title: 'Production & IT Support Assistant',
    location: 'On-site',
    start: 'May 2022',
    end: 'Aug 2025',
    bullets: [
      'Maintained network infrastructure and file-sharing systems',
      'Automated recurring workflows to reduce manual overhead',
      'Provided production support and internal IT troubleshooting',
    ],
  },
];

export const skills = {
  Languages: ['Python', 'Java', 'C', 'SQL', 'JavaScript'],
  'Backend & Databases': ['Flask', 'REST APIs', 'PostgreSQL'],
  'Infrastructure & Cloud': ['GCP (Cloud Run, Cloud Build)', 'Docker', 'Linux', 'Git', 'CI/CD'],
  'Core Concepts': ['Data Structures & Algorithms', 'Concurrency', 'Distributed Systems'],
};
