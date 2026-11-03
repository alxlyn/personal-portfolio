// Site content. Keep the facts in sync with the resume.

export const personal = {
  name: 'Aleksei Lian',
  role: 'Backend engineer, CS student at York University (graduating Dec 2027)',
  intro: "I build backends in Python, FastAPI and PostgreSQL. I'm the sole engineer at Arzan, a pre-launch e-commerce startup, where I fixed a race in which two operators could claim one order and have it bought twice. I also co-founded Temir AI, which 4 sales managers at a metal supplier used to make about 70 quotes from August to October.",
  availability: 'Open to Summer 2027 internships anywhere in the US or Canada',
  github: 'https://github.com/alxlyn',
  linkedin: 'https://linkedin.com/in/aleksei-lian',
  x: 'https://x.com/_alxlyn',
  email: 'alekseilianv@gmail.com',
  resume: '/resume.pdf',
  resumeImage: '/resume.svg',
  privateCode: "Arzan, Tanish, Temir AI and Mendy are private repos. I'm glad to walk through the design and the code on a call.",
  contact: 'Message me on LinkedIn',
  emailLabel: 'Email me',
};

export const facts = [
  { label: 'Work status', value: 'US: authorized, no sponsorship needed now or in the future. Canada: eligible to work full-time in Summer 2027.' },
  { label: 'Availability', value: 'Full-time for a Summer 2027 internship' },
  { label: 'Relocation', value: 'Open to relocating' },
];

export const about = [
  'I spend most of my time on backend work, especially concurrency bugs, data integrity and security.',
  'I build mostly with AI coding agents, Claude Code day to day plus Codex and Antigravity. I make the design calls, review what they write, and don\'t trust a change until a test covers it.',
];

export const experience = [
  {
    company: 'Arzan',
    logo: '/logos/arzan.png',
    role: 'Software Engineer (Co-Founder)',
    meta: 'China-to-Kyrgyzstan e-commerce, pre-launch',
    dates: 'May 2026 - Present',
    bullets: [
      'Built a 90+ endpoint FastAPI/PostgreSQL API, React staff console, and React Native app as the sole engineer.',
      'Fixed a race where two operators could claim one order and have it bought twice, using PostgreSQL row locks.',
      'Made checkout idempotent with a unique key on user and attempt ID, so a retry gets the first order back.',
      'Enforced allowed money, quantity, and status values with 50 PostgreSQL CHECK constraints.',
      'Set up GitHub Actions CI that runs the 2,300+ test backend suite on PostgreSQL and SQLite, plus an alembic check that caught a real model/migration mismatch.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'TypeScript', 'React', 'React Native'],
    link: { label: 'Read the Arzan case study', href: '/arzan' },
  },
  {
    company: 'Tanish',
    logo: '/logos/tanish.png',
    role: 'Backend Engineer (Co-Founder)',
    meta: 'Dating app for Central Asia, iOS beta',
    dates: 'Apr - Aug 2026',
    bullets: [
      'Built an iOS app (TestFlight beta, 2 testers): FastAPI/PostgreSQL backend, WebSocket chat, React Native client.',
      'Designed JWT auth with 15-minute access tokens and rotating refresh tokens that revoke the chain on reuse.',
      'Added AWS Rekognition face-liveness checks, using STS credentials that can only start the liveness stream.',
      "Found that anyone with the project's public key could read and write user tables through Supabase's auto-generated API, and enabled deny-by-default row-level security on them.",
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React Native', 'AWS'],
    link: { label: 'Read the Tanish case study', href: '/tanish' },
  },
];

export const projects = [
  {
    name: 'Temir AI',
    logo: '/logos/temir.png',
    meta: 'AI quoting startup I co-founded',
    dates: 'Aug 2026 - Present',
    text: "Built the product for our pilot customer, a metal supplier, where 4 sales managers at 2 warehouses made about 70 quotes with it from August to October, from orders sent as chat text, PDF, spreadsheet or photo. Kept prices out of the LLM's output: it maps each line to a catalog ID, prices come from the catalog, and inexact matches are flagged for a manager.",
    stack: ['JavaScript', 'Anthropic API', 'PostgreSQL'],
  },
  {
    name: 'Mendy',
    meta: 'AI advice companion, a summer project',
    dates: 'Jul 2026',
    text: "Built the backend, with long-term memory, proactive follow-ups and crisis escalation. Caught a prompt edit that lowered a crisis message's risk tier, using a 40-message safety test set that must flag all 12 crisis cases and is re-run by hand after every safety-prompt change.",
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI API'],
  },
  {
    name: 'URL Shortener',
    href: 'https://github.com/alxlyn/alex-url-shortener',
    meta: 'Code on GitHub',
    dates: 'Feb - Mar 2026, Nov 2026',
    text: "An async URL shortener where the primary key rejects a duplicate short code and the insert retries with a new one, so a collision doesn't fail the request. GitHub Actions CI runs 38 tests, 23 against live PostgreSQL; an earlier Flask version ran on Cloud Run.",
    stack: ['Python', 'FastAPI', 'asyncpg', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'Chess Engine',
    href: 'https://github.com/alxlyn/alex-chess-engine',
    meta: 'Code on GitHub',
    dates: 'Feb 2026, Nov 2026',
    text: 'A UCI chess engine with alpha-beta search, iterative deepening and a transposition table. It plays full timed games in chess GUIs such as Banksia.',
    stack: ['Python', 'UCI'],
  },
];

export const education = [
  { name: 'York University', detail: 'Bachelor of Science in Computer Science', dates: 'Jan 2025 - Expected Dec 2027' },
  { name: 'Carleton University', detail: 'Computer Science, transferred to York', dates: 'Sep 2023 - Dec 2024' },
];

export const languages = [
  { name: 'Russian', detail: 'Native' },
  { name: 'English', detail: 'Full professional' },
];

export const skills = [
  { label: 'Languages', items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'Java', 'C'] },
  { label: 'Frameworks', items: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'Alembic', 'pytest', 'React', 'React Native', 'OpenAI API', 'Anthropic API'] },
  { label: 'Data & Cloud', items: ['PostgreSQL', 'Redis', 'SQLite', 'AWS', 'GCP (Cloud Run)', 'OpenTofu'] },
  { label: 'Tools', items: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'REST APIs', 'Claude Code', 'Codex', 'Antigravity'] },
];
