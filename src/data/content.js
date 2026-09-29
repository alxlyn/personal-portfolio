// -------------------------------------------------------
// Edit this file to fill in your real information.
// All content on the site is pulled from here.
// -------------------------------------------------------

export const personal = {
  name: 'Aleksei Lian',
  role: 'Backend Engineer · CS Student @ York',
  tagline: 'I build backend systems that make it to production: a dating app on TestFlight, a cross-border marketplace, and an LLM companion with long-term memory.',
  email: 'alekseilianv@gmail.com',
  github: 'https://github.com/alxlyn',
  linkedin: 'https://linkedin.com/in/aleksei-lian',
  x: 'https://x.com/_alxlyn',
  resume: '/resume.pdf',
};

export const about = {
  paragraphs: [
    "I'm a backend engineer and CS student at York University. Since January 2026 I've co-founded three products and built them as lead or sole engineer: Mendy, an advice buddy that remembers you; Arzan, a cross-border marketplace; and Tanish, a dating app for Central Asia.",
    "Tanish has a FastAPI/PostgreSQL backend with 2,300+ tests, a React Native iOS app on TestFlight, AWS face-liveness verification and 4 languages. On Arzan I'm the sole engineer on a 90+ endpoint API, a React/TypeScript operator console and an Expo app. Mendy runs on FastAPI and PostgreSQL with an LLM conversation engine, long-term memory and a tiered safety pipeline.",
    "I'm looking for backend internships for summer 2027 — if you want to talk systems or startups, my inbox is open.",
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
      'Co-founded and built the whole product: FastAPI + PostgreSQL backend, React Native iOS app on TestFlight, real-time WebSocket chat, AWS face-liveness identity verification, an LLM answer-alignment score, and localization into 4 languages including human-translated Kyrgyz.',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React Native', 'WebSockets', 'AWS'],
    github: null,
    featured: true,
    metrics: ['2,300+ tests', 'Live on TestFlight', '4 languages'],
    caseStudy: '/tanish',
  },
  {
    title: 'Arzan — Cross-Border Marketplace',
    description:
      'Sole engineer on a marketplace for Kyrgyzstan: a 90+ endpoint FastAPI/PostgreSQL API, a React/TypeScript operator console and an Expo app, 1,600+ backend tests, row-locked purchases, money rules enforced by 50 CHECK constraints, and TOTP 2FA for staff.',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Expo'],
    github: null,
    status: 'In progress',
  },
  {
    title: 'Mendy',
    description:
      'An advice buddy that remembers you. FastAPI backend with async SQLAlchemy, LLM-driven conversations with long-term memory, proactive follow-ups, and a tiered safety pipeline.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'LLM'],
    github: null,
  },
  {
    title: 'URL Shortener',
    description:
      'Async URL shortener built with FastAPI and asyncpg, validated against 100,000 unique short codes. Per-IP rate limiting with Redis and 38 pytest tests in CI (23 against a live Postgres container); previously deployed to Cloud Run via Cloud Build.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'GCP'],
    github: 'https://github.com/alxlyn/alex-url-shortener',
  },
  {
    title: 'Chess Engine — UCI Compatible',
    description:
      'UCI-compatible chess engine with Negamax search, Alpha-Beta pruning, quiescence search, and transposition tables. Reaches depth 5–6 in middlegame positions with MVV-LVA move ordering.',
    tags: ['Python', 'UCI', 'Negamax', 'Alpha-Beta'],
    github: 'https://github.com/alxlyn/alex-chess-engine',
  },
];

export const experience = [
  {
    company: 'Mendy',
    companyNote: null,
    title: 'Co-Founder & Backend Engineer',
    location: 'Toronto, ON',
    start: 'Jul 2026',
    end: 'Aug 2026',
    bullets: [
      'Built the backend for an advice buddy with long-term memory — FastAPI, async SQLAlchemy 2.0, PostgreSQL, Alembic',
      'LLM conversation engine with proactive follow-ups and a tiered crisis-safety pipeline',
      '153 backend tests plus a 40-case safety golden set that gates prompt changes',
    ],
  },
  {
    company: 'Arzan',
    companyNote: 'Cross-Border Marketplace',
    title: 'Co-Founder & Lead Engineer',
    location: 'Remote',
    start: 'May 2026',
    end: 'Present',
    bullets: [
      'Sole engineer: 90+ endpoint FastAPI/PostgreSQL API, React/TypeScript operator console and Expo app, 1,600+ backend tests in GitHub Actions',
      'Fixed a race that let two operators buy the same order; moved money rules into 50 CHECK constraints',
      'Verified every finding from a dozen-plus AI code-review passes against the source before fixing anything',
    ],
  },
  {
    company: 'Tanish',
    companyNote: 'Early-Stage Startup',
    title: 'Co-Founder & Lead Backend Engineer',
    location: 'Remote',
    start: 'Jan 2026',
    end: 'Present',
    bullets: [
      'Built the full product: FastAPI/PostgreSQL backend with 2,300+ tests, JWT auth, real-time WebSocket chat, and a React Native iOS app shipped to TestFlight',
      'Shipped AWS face-liveness identity verification and an LLM answer-alignment score',
      'Closed a live-database privacy leak with deny-by-default row-level security on every public table',
    ],
  },
  {
    company: 'Temir AI',
    companyNote: 'Freelance',
    title: 'Freelance Developer',
    location: 'Bishkek (remote)',
    start: 'Aug 2026',
    end: 'Sep 2026',
    bullets: [
      'AI quoting copilot for a metal warehouse: orders pasted as text, PDF, spreadsheet or photo become priced quotes, via the Anthropic API',
      'The model may answer only with catalog IDs; unknown units and sizes are flagged, not guessed',
    ],
  },
  {
    company: 'KPD Advertising',
    companyNote: 'Seasonal, summers',
    title: 'Production & IT Support Assistant',
    location: 'Bishkek',
    start: 'May 2022',
    end: 'Aug 2025',
    bullets: [
      'Set up centralized SMB/NFS file sharing and kept computers, Wi-Fi and printers running',
      'Checked print orders before pickup and trained non-technical coworkers',
    ],
  },
];

export const skills = {
  Languages: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'C'],
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
    'GitHub Actions',
    'Supabase',
    'Linux',
    'Git',
    'CI/CD',
  ],
  'Core Concepts': ['Data Structures & Algorithms', 'Concurrency', 'LLM Evaluation', 'Secure Code Review'],
};
