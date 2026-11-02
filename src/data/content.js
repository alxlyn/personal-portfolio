// Site content. Keep the facts in sync with the resume.

export const personal = {
  name: 'Aleksei Lian',
  role: 'Backend Engineer',
  intro: 'I build backend systems and the products on top of them, mostly in Python, FastAPI and PostgreSQL. I study computer science at York University and have co-founded three startups.',
  availability: 'Open to Summer 2027 internships anywhere in the US or Canada',
  github: 'https://github.com/alxlyn',
  linkedin: 'https://linkedin.com/in/aleksei-lian',
  x: 'https://x.com/_alxlyn',
  email: 'alekseilianv@gmail.com',
  resume: '/resume.pdf',
  resumeImage: '/resume.svg',
  privateCode: "Arzan, Tanish, Temir AI and Mendy are private repos. I'm glad to walk through the code on a call.",
  contact: 'Message me on LinkedIn',
  emailLabel: 'Email me',
};

export const facts = [
  { label: 'Summer 2027 work status', value: 'Authorized to work in the US and Canada, no sponsorship needed' },
  { label: 'Studying', value: 'BSc Computer Science, York University' },
  { label: 'Graduating', value: 'December 2027' },
  { label: 'Relocation', value: 'Open to relocating' },
  { label: 'Languages', value: 'Russian, English' },
];

export const about = [
  'I spend most of my time on backend work, especially concurrency bugs, data integrity and security.',
  "I've co-founded three startups. Temir AI is an AI quoting tool: 4 sales managers at 2 warehouses of a metal supplier, our pilot customer, use it to turn orders into priced quotes. I'm the sole engineer at Arzan, a cross-border e-commerce platform between China and Kyrgyzstan. I was the backend engineer at Tanish, a dating app for Central Asia that reached a TestFlight beta.",
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
      'Fixed a race condition that let two operators buy the same order on Taobao, using PostgreSQL row locks.',
      'Made checkout idempotent with a unique database key, so a retried request never places a second order.',
      'Enforced money, quantity, and status rules with 50 PostgreSQL CHECK constraints that reject invalid data.',
      'Set up GitHub Actions CI that runs the 2,300+ test backend suite on both SQLite and PostgreSQL.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'TypeScript', 'React', 'React Native'],
    link: { label: 'Read the case study', href: '/arzan' },
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
      'Verified real users with AWS Rekognition face liveness, using STS credentials that can only start the stream.',
      "Closed a hole where anyone with the project's public key could read and write user tables through Supabase's auto-generated API, by enabling deny-by-default row-level security.",
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React Native', 'AWS'],
    link: { label: 'Read the case study', href: '/tanish' },
  },
];

export const projects = [
  {
    name: 'Temir AI',
    logo: '/logos/temir.png',
    meta: 'AI quoting startup I co-founded',
    dates: 'Aug 2026 - Present',
    text: 'Built the product for our pilot customer, a metal supplier, where 4 sales managers at 2 warehouses use it to turn orders sent as chat text, PDF, spreadsheet or photo into priced quotes. Kept the LLM from setting quote prices: order parsing returns line items, and unit prices come from the catalog.',
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
    dates: 'Feb - Mar 2026',
    text: "An async URL shortener where two simultaneous requests can't get the same short code: inserts retry on a primary-key conflict instead of check-then-insert. GitHub Actions CI runs 38 tests, 23 against live PostgreSQL; an earlier Flask version ran on Cloud Run.",
    stack: ['Python', 'FastAPI', 'asyncpg', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'Chess Engine',
    href: 'https://github.com/alxlyn/alex-chess-engine',
    meta: 'Code on GitHub',
    dates: 'Feb 2026',
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
  { label: 'Tools', items: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'REST APIs', 'Claude Code'] },
];
