// -------------------------------------------------------
// Edit this file to fill in your real information.
// All content on the site is pulled from here.
// -------------------------------------------------------

export const personal = {
  name: 'Aleksei Lian',
  role: 'CS Student · Backend Engineer',
  tagline: 'I build backend systems that make it to production — most recently a dating app shipped to TestFlight.',
  email: 'alekseilianv@gmail.com',
  github: 'https://github.com/alxlyn',
  linkedin: 'https://linkedin.com/in/aleksei-lian',
  x: 'https://x.com/_alxlyn',
  resume: '/resume.pdf',
};

export const about = {
  paragraphs: [
    "I'm a CS student at York University focused on backend engineering. I co-founded Tanish, a dating app for Central Asia, and built the whole product — a FastAPI/PostgreSQL backend with 2,200+ tests, a React Native iOS app shipped to TestFlight, AWS face-liveness identity verification, and localization into 6 languages.",
    "Right now I'm building Mendy, an advice buddy that remembers you — FastAPI, async SQLAlchemy, and LLM-driven conversations with long-term memory.",
    "I'm looking for backend internship opportunities (summer/fall 2026) where I can work on real systems with experienced engineers.",
  ],
  currentlyInto: [
    'FastAPI & async SQLAlchemy',
    'PostgreSQL & query optimization',
    'WebSockets & real-time systems',
    'LLM-powered product features',
    'Docker, CI/CD & cloud deploys',
  ],
};

export const projects = [
  {
    title: 'Tanish — Dating App for Central Asia',
    description:
      'Co-founded and built the whole product: FastAPI + PostgreSQL backend, React Native iOS app on TestFlight, real-time WebSocket chat, AWS face-liveness identity verification, LLM compatibility scoring, and localization into 6 languages including human-translated Kyrgyz.',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React Native', 'WebSockets', 'AWS'],
    github: null,
    featured: true,
    metrics: ['2,200+ tests', 'Live on TestFlight', '6 languages'],
  },
  {
    title: 'Mendy',
    description:
      'An advice buddy that remembers you. FastAPI backend with async SQLAlchemy, LLM-driven conversations with long-term memory, proactive follow-ups, and a tiered safety pipeline.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'LLM'],
    github: null,
    status: 'In progress',
  },
  {
    title: 'URL Shortener',
    description:
      'Async URL shortener built with FastAPI and asyncpg, validated against 100,000 unique short codes with zero collisions. Per-IP rate limiting with Redis, CI running 34 pytest integration tests against live Postgres, and CD to Cloud Run via Cloud Build.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'GCP'],
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
    title: 'Co-Founder & Lead Backend Engineer',
    location: 'Remote',
    start: 'Jan 2026',
    end: 'Present',
    bullets: [
      'Built the full product: FastAPI/PostgreSQL backend with 2,200+ tests, JWT auth, real-time WebSocket chat, and a React Native iOS app shipped to TestFlight',
      'Shipped AWS face-liveness identity verification and LLM-based compatibility scoring',
      'Led technical delivery for 2 contracted engineers; enforced code standards via PR reviews',
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
  'Backend & Databases': [
    'FastAPI',
    'SQLAlchemy 2.0 (async)',
    'Pydantic',
    'REST APIs',
    'WebSockets',
    'PostgreSQL',
    'Redis',
    'Alembic',
  ],
  'Infrastructure & Cloud': [
    'GCP (Cloud Run, Cloud Build)',
    'AWS (Rekognition)',
    'Docker',
    'Railway',
    'Linux',
    'Git',
    'CI/CD',
  ],
  'Core Concepts': ['Data Structures & Algorithms', 'Concurrency', 'Distributed Systems', 'OOP'],
};
