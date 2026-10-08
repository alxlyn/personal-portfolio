// -------------------------------------------------------
// Edit this file to fill in your real information.
// All content on the site is pulled from here.
// Copy rule: no em dash. Use a spaced hyphen glued to the previous word
// with a no-break space ('\u00A0- ').
// -------------------------------------------------------

export const personal = {
  name: 'Aleksei Lian',
  role: 'Backend Engineer · CS Student @ York',
  tagline: 'I build backend systems and check that they are actually right: a dating app shipped to a TestFlight beta, a cross-border marketplace, and an LLM companion with long-term memory.',
  email: 'alekseilianv@gmail.com',
  github: 'https://github.com/alxlyn',
  linkedin: 'https://linkedin.com/in/aleksei-lian',
  x: 'https://x.com/_alxlyn',
  resume: '/resume.pdf',
};

export const about = {
  paragraphs: [
    "I'm a backend engineer and CS student at York University. In 2026 I co-founded three startups: Tanish, a dating app for Central Asia, where I was the backend engineer from April to August; Arzan, a China-to-Kyrgyzstan marketplace I've built as the sole engineer since May; and Temir AI, an AI quoting tool whose first customer was a metal supplier. I also tutor math one-on-one, and in July I built Mendy, an AI advice companion that remembers you.",
    "Tanish reached a TestFlight beta with a FastAPI/PostgreSQL backend (2,600+ tests), a React Native iOS app, AWS face-liveness verification and 4 languages. Arzan is pre-launch: I'm the sole engineer on a 90+ endpoint API with 2,300+ backend tests, a React/TypeScript operator console and an Expo app. Mendy runs on FastAPI and PostgreSQL with an LLM conversation engine, long-term memory and a tiered safety pipeline.",
    "I'm looking for backend internships for summer 2027. If you want to talk systems or startups, my inbox is open.",
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
    title: 'Tanish\u00A0- Dating App for Central Asia',
    description:
      'Co-founded as the backend engineer (Apr–Aug 2026) and shipped an iOS app to a TestFlight beta: FastAPI + PostgreSQL backend, React Native client, real-time WebSocket chat, JWT auth with rotating refresh tokens, AWS face-liveness identity verification, an LLM answer-alignment score, and localization into 4 languages including human-translated Kyrgyz.',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React Native', 'WebSockets', 'AWS'],
    github: null,
    featured: true,
    metrics: ['2,600+ backend tests', 'TestFlight beta', '4 languages'],
    caseStudy: '/tanish',
  },
  {
    title: 'Arzan\u00A0- Cross-Border Marketplace',
    description:
      'Sole engineer on a pre-launch China-to-Kyrgyzstan marketplace: a 90+ endpoint FastAPI/PostgreSQL API, a React/TypeScript operator console and an Expo app, 2,300+ backend tests, row-locked purchases, idempotent checkout, money rules enforced by 50 PostgreSQL CHECK constraints, and TOTP 2FA plus an audit log for staff. The AWS stack is written in OpenTofu but not yet deployed.',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Expo'],
    github: null,
    status: 'In progress',
  },
  {
    title: 'Mendy\u00A0- AI Advice Companion',
    description:
      'A summer project (Jul 2026): the backend of an AI advice companion that remembers you. FastAPI with async SQLAlchemy and PostgreSQL, LLM conversations with long-term memory, proactive follow-ups, and escalation of crisis messages. A 40-message safety test set, re-run after every prompt change, must flag all 12 crisis cases; it caught a prompt edit that moved a crisis message to a lower risk tier.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI API'],
    github: null,
  },
  {
    title: 'Temir AI\u00A0- AI Quoting Startup (Co-Founder)',
    description:
      'A startup I co-founded (Aug–Sep 2026). I built the product for our first customer, a metal supplier, where 4 sales managers at 2 warehouses used it: customer orders sent as chat text, PDF, spreadsheet or photo become priced quotes. The LLM (Anthropic API) only extracts line items and every price comes from the catalog; API spend is capped per user and company-wide under a PostgreSQL advisory lock.',
    tags: ['JavaScript', 'Anthropic API', 'Vercel', 'PostgreSQL'],
    github: null,
  },
  {
    title: 'URL Shortener',
    description:
      'Async URL shortener (Feb–Mar 2026) built with FastAPI and asyncpg, where two simultaneous requests can\'t get the same short code: inserts retry on a primary-key conflict instead of check-then-insert. Deployed to Google Cloud Run with Cloud SQL via Cloud Build; GitHub Actions CI runs 38 pytest tests, 23 against a live PostgreSQL container.',
    tags: ['Python', 'FastAPI', 'asyncpg', 'PostgreSQL', 'Docker', 'GCP'],
    github: 'https://github.com/alxlyn/alex-url-shortener',
  },
  {
    title: 'Chess Engine\u00A0- UCI Compatible',
    description:
      'UCI chess engine with negamax alpha-beta search, iterative deepening, quiescence search, a transposition table and deadline-based time management. Plays full timed games in UCI GUIs such as Banksia (including against Stockfish 15.1 on a 1-minute clock); within a 0.5–1.5 s move budget it reaches depth 2–3.',
    tags: ['Python', 'UCI', 'Negamax', 'Alpha-Beta'],
    github: 'https://github.com/alxlyn/alex-chess-engine',
  },
];

export const experience = [
  {
    company: 'Arzan',
    companyNote: 'China-to-Kyrgyzstan E-Commerce',
    title: 'Software Engineer (Co-Founder)',
    location: 'Remote',
    start: 'May 2026',
    end: 'Present',
    bullets: [
      'Sole engineer: 90+ endpoint FastAPI/PostgreSQL API, React/TypeScript staff console and Expo app; GitHub Actions CI runs the 2,300+ test backend suite on both SQLite and PostgreSQL',
      'Fixed a race where two operators could buy the same Taobao order with PostgreSQL row locks, and made checkout idempotent so a retried request never places a second order',
      'Enforced money, quantity and status rules with 50 PostgreSQL CHECK constraints; added TOTP two-factor sign-in and an audit log of privileged staff actions',
      'Verified every finding from a dozen-plus AI code-review passes against the source before fixing anything',
    ],
  },
  {
    company: 'Tanish',
    companyNote: 'Dating App for Central Asia',
    title: 'Backend Engineer (Co-Founder)',
    location: 'Remote',
    start: 'Apr 2026',
    end: 'Aug 2026',
    bullets: [
      'Shipped an iOS dating app to a TestFlight beta: FastAPI/PostgreSQL backend with 2,600+ tests, WebSocket chat, React Native client',
      'Designed JWT auth with 15-minute access tokens and rotating refresh tokens that revoke their whole chain on reuse',
      'Integrated AWS Rekognition face-liveness checks and GPT-4o-mini scoring of match answers; localized into 4 languages',
      "Closed a hole where Supabase's auto-generated API could read and write user tables with the project's public key, by enabling deny-by-default row-level security",
    ],
  },
  {
    company: 'Self-Employed',
    companyNote: null,
    title: 'Math Tutor',
    location: 'Remote',
    start: 'Jan 2024',
    end: 'Present',
    bullets: [
      'One-on-one math tutoring: find the exact step where a solution goes wrong and explain it another way',
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
    'GCP (Cloud Run, Cloud SQL, Cloud Build)',
    'AWS (Rekognition)',
    'OpenTofu',
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
