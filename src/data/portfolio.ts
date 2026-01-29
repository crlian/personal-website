// Type definitions
export type ProjectStatus = 'live' | 'beta' | 'archived' | 'building';
export type ProjectRole = 'founder' | 'co-founder' | 'builder' | 'technical-lead';

// Tech Stack interface
export interface TechStack {
  frontend?: string[];
  backend?: string[];
  infrastructure?: string[];
  database?: string[];
}

// Project metrics interface
export interface ProjectMetrics {
  users?: number;
  revenue?: string;
  conversion?: string;
  performance?: string;
  growth?: string;
  engagement?: string;
}

// Architecture details
export interface Architecture {
  approach: string;
  scalability: string;
  deployment: string;
  highlights: string[];
}

// Timeline information
export interface Timeline {
  mvpDuration: string;
  totalDuration: string;
  launchDate: string;
}

// Learning outcomes
export interface ProjectLearning {
  technical: string[];
  business: string[];
}

// Enhanced Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  role: ProjectRole;
  status: ProjectStatus;
  tags: string[];
  imageUrl?: string;
  link?: string;
  demoUrl?: string;
  githubUrl?: string;
  techStack: TechStack;
  architecture: Architecture;
  metrics: ProjectMetrics;
  timeline: Timeline;
  learnings: ProjectLearning;
}

// Shipping metrics
export interface ShippingMetric {
  value: string;
  label: string;
  context?: string;
  highlight?: boolean;
}

// Currently building project
export interface CurrentProject {
  name: string;
  description: string;
  status: string;
  stack: string[];
  launchGoal: string;
  liveUrl?: string;
}

// Data exports

export const currentlyBuilding: CurrentProject = {
  name: 'AI Dispatcher',
  description: 'AI orchestration layer that automatically routes tasks to optimal agents based on complexity, cost, and capability.',
  status: 'Week 2 - Building real-time AI capacity management',
  stack: ['Claude API', 'OpenAI', 'Go', 'CLI'],
  launchGoal: 'Live by end of month'
};

export const shippingMetrics: ShippingMetric[] = [
  {
    value: '5',
    label: 'Projects Shipped',
    context: 'From idea to production',
    highlight: true
  },
  {
    value: '14 days',
    label: 'Avg MVP Time',
    context: 'MVP to live',
    highlight: true
  },
  {
    value: '20+',
    label: 'Deployments',
    context: 'Across all products',
    highlight: false
  },
  {
    value: '5+',
    label: 'Tech Stacks',
    context: 'Next.js, Java, Node',
    highlight: false
  }
];

export const projects: Project[] = [
  {
    id: 'rediate',
    title: 'Rediate',
    description: 'Turns real Reddit discussions into publish-ready content ideas (newsletter, video, threads, outlines).',
    problem: 'Creators waste hours scrolling Reddit and communities to find real signals. Even when they find something interesting, turning it into structured, publishable content is slow and manual.',
    solution: 'Rediate analyzes subreddits and conversations, extracts real user pain points, and converts them into ready-to-use content ideas that can be refined into newsletters, videos, blog posts, or social threads.',
    role: 'founder',
    status: 'live',
    tags: ['Content', 'Reddit', 'LLM', 'Next.js', 'OpenAI'],
    demoUrl: 'https://getrediate.com',
    githubUrl: 'https://github.com/crlian/rediate',
    techStack: {
      frontend: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Next.js API Routes', 'OpenAI API', 'Reddit OAuth'],
      infrastructure: ['Vercel', 'Optional KV / Firebase for quotas & storage'],
      database: []
    },
    architecture: {
      approach: 'Event-driven async job pipeline: Subreddit → /api/start → Reddit fetch → LLM analysis → Job status polling → Results → Refinement → UI. Jobs run asynchronously with progress states (queued, analyzing, drafting, completed) so UI never blocks.',
      scalability: 'Cost-controlled via API quotas and rate-limiting. Async job processing prevents blocking. Optional KV for rate-limit tracking.',
      deployment: 'Vercel serverless deployment with Next.js API routes. Optional Firebase for persistence beyond KV.',
      highlights: [
        'Asynchronous job system with real-time status polling',
        'Multi-format refinement (newsletter, video, outline, auto-detect)',
        'Cost-controlled beta using quotas and IP-based rate limiting'
      ]
    },
    metrics: {
      conversion: 'Varies by subreddit size',
      engagement: '5-15 ideas per analysis',
      performance: '~45s avg analysis | $0.10 cost',
      growth: '1 analysis/day, 8 refinements/day'
    },
    timeline: {
      mvpDuration: '21 days',
      totalDuration: '3 months',
      launchDate: '2025-11-04'
    },
    learnings: {
      technical: [
        'Designing async pipelines for LLM-based workloads',
        'Managing API cost via quotas and rate-limiting',
        'Structuring prompt outputs for consistent, publish-ready formats'
      ],
      business: [
        'Raw data (Reddit) is more valuable than generic prompts',
        'Users want refinement, not just generation',
        'Signals > vibes when creating content ideas'
      ]
    }
  },
  {
    id: 'fairsplit',
    title: 'FairSplit',
    description: 'Local-first expense splitting app with optimized settlement algorithm to minimize transactions—no backend required.',
    problem: 'Splitting shared expenses in groups is messy: manual math, unclear "who owes whom", and friction when settling up.',
    solution: 'FairSplit is a local-first web app to create expense rooms, record shared expenses, and automatically compute an optimized settlement that minimizes the number of transactions—no backend required.',
    role: 'co-founder',
    status: 'live',
    tags: ['Finance', 'Local-first', 'Next.js', 'Zustand', 'MUI'],
    demoUrl: 'https://fair-split-seven.vercel.app/',
    githubUrl: 'https://github.com/crlian/fair-split',
    techStack: {
      frontend: ['Next.js 15', 'React 19', 'Material-UI', 'Framer Motion'],
      backend: [],
      infrastructure: ['Vercel', 'Local Storage'],
      database: []
    },
    architecture: {
      approach: 'Client-only architecture: rooms + expenses managed in local state and persisted to Local Storage. Settlement is computed on-demand from current room state and rendered as a clear "who pays whom" summary.',
      scalability: 'Optimized for small/medium groups (instant client-side computation). Zero server cost. Works offline; data survives refresh and sessions.',
      deployment: 'Static Next.js deployment on Vercel. No server infrastructure needed.',
      highlights: [
        'Local-first + offline-capable (no login, no backend)',
        'Clear settlement summary (who owes whom)',
        'Greedy algorithm that reduces settlement to fewer transactions',
        'Responsive UI with MUI + animations'
      ]
    },
    metrics: {
      conversion: '100% usable offline',
      performance: 'Zero backend cost',
      engagement: '4 rooms per user',
      growth: 'Greedy settlement algo'
    },
    timeline: {
      mvpDuration: '1 month',
      totalDuration: '14 days',
      launchDate: '2025-07-22'
    },
    learnings: {
      technical: [
        'Modeling group expenses + balances cleanly in state',
        'Implementing a settlement algorithm and making it understandable in UI',
        'Local-first persistence patterns with Zustand + Local Storage'
      ],
      business: [
        'Reducing user friction beats adding complexity (no accounts, offline-first)',
        'Showing a "simple settlement" output prevents disputes',
        'Leading a co-founder team: delegation and clear responsibility separation drives velocity'
      ]
    }
  },
  {
    id: 'sherlog',
    title: 'Sherlog',
    description: 'Privacy-first log analyzer & pattern mining engine for massive production logs',
    problem: 'Debugging production systems from raw logs is painful: millions of lines, noisy stack traces, duplicated errors, and no way to see what actually matters without manual grep, regex, and guesswork.',
    solution: 'Sherlog is a privacy-first log analysis engine that ingests large log files, automatically groups similar errors, extracts root patterns, and generates meaningful summaries and regexes to help engineers understand what is really happening in production systems. Instead of reading logs, you analyze signal.',
    role: 'founder',
    status: 'beta',
    tags: ['Rust', 'WASM', 'Log Analysis', 'Privacy-first'],
    githubUrl: 'https://github.com/crlian/sherlog',
    techStack: {
      frontend: ['React', 'Tailwind CSS'],
      backend: ['Rust', 'WASM'],
      infrastructure: ['Browser-native'],
      database: []
    },
    architecture: {
      approach: 'Log files are loaded directly into the browser, processed through a WASM-compiled Rust engine that performs parsing, tokenization, similarity grouping, and pattern extraction. Results are streamed back to the UI in real time.',
      scalability: 'Handles GB-scale logs locally. Zero server bottlenecks. Performance bound only by the user\'s CPU.',
      deployment: 'Browser-native WASM execution. No server required. All data stays on client.',
      highlights: [
        'Clusters millions of log lines into meaningful error groups',
        'Automatically extracts regex-like patterns',
        'Works entirely offline with 100% privacy',
        'Built with Rust + WASM for speed'
      ]
    },
    metrics: {
      conversion: 'Multi-GB log files supported',
      performance: 'Client-side, zero network latency',
      engagement: '$0 infra cost (no servers)',
      growth: '100% local execution'
    },
    timeline: {
      mvpDuration: '3 weeks',
      totalDuration: 'Ongoing experimental',
      launchDate: '2024-09-01'
    },
    learnings: {
      technical: [
        'High-performance text processing in Rust',
        'Compiling Rust to WASM for browser execution',
        'Pattern extraction and similarity clustering on large datasets',
        'Streaming results from WASM to React UI'
      ],
      business: [
        'Developers don\'t want raw logs — they want structure',
        'Privacy-first tooling is a real differentiator',
        'Speed beats fancy UI in debugging tools'
      ]
    }
  },
  {
    id: 'airing-calendar',
    title: 'Airing Calendar',
    description: 'Personal anime release tracker built to solve schedule chaos',
    problem: 'Tracking anime release schedules across multiple sites is messy, inconsistent, and full of spoilers. I wanted a single clean place where I could see exactly what airs today, without noise.',
    solution: 'Airing Calendar is a lightweight web app that shows upcoming anime episodes in a clean, calendar-style view. It pulls real airing data from Jikan (MyAnimeList API) and presents it in a fast, minimal interface optimized for daily use. It\'s the tool I personally use to decide what to watch tonight.',
    role: 'founder',
    status: 'live',
    tags: ['Anime', 'React', 'API Integration', 'Calendar UI'],
    demoUrl: 'https://www.aniseason.com/',
    githubUrl: 'https://github.com/crlian/airing-calendar',
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: [],
      infrastructure: ['Static deployment'],
      database: []
    },
    architecture: {
      approach: 'Client-side app that fetches live airing schedules from Jikan and maps them into a date-based calendar UI.',
      scalability: 'API-driven, stateless frontend. Can handle thousands of users with no backend.',
      deployment: 'Static site with client-side API fetch from Jikan.',
      highlights: [
        'Real-time anime airing schedule',
        'Clean daily view',
        'Zero spoilers',
        'Built for fast daily usage'
      ]
    },
    metrics: {
      conversion: '100% live from MyAnimeList',
      performance: 'API-driven, instant refresh',
      engagement: 'Daily personal use'
    },
    timeline: {
      mvpDuration: '2 days',
      totalDuration: 'Ongoing',
      launchDate: '2024-08-15'
    },
    learnings: {
      technical: [
        'Consuming third-party APIs at scale',
        'Handling unstable public APIs',
        'UI for time-based data'
      ],
      business: [
        'A product doesn\'t need millions of users — it needs one user who cares',
        'Solving your own pain produces better UX'
      ]
    }
  },
  {
    id: 'personal-website-2',
    title: 'Personal Website 2.0',
    description: 'Builder-focused portfolio and product track record',
    problem: 'Most developer portfolios are static resumes. They show skills, not execution. They fail to communicate velocity, product thinking, or real-world impact.',
    solution: 'A brutalist, minimal, product-oriented website that showcases shipped products, timelines, metrics, and what was learned — not just screenshots. Designed to look more like a product dashboard than a personal site.',
    role: 'founder',
    status: 'live',
    tags: ['Portfolio', 'Astro', 'Brutalism', 'Product Design'],
    demoUrl: 'https://cesarrico.dev',
    githubUrl: 'https://github.com/crlian/personal-website',
    techStack: {
      frontend: ['Astro', 'TypeScript', 'Tailwind CSS'],
      backend: [],
      infrastructure: ['Vercel', 'Cloudflare'],
      database: []
    },
    architecture: {
      approach: 'Static-first, ultra-fast delivery with dynamic data injected at build time. Focus on performance, clarity, and zero bloat.',
      scalability: 'Pure static hosting. No server required. Instant global delivery.',
      deployment: 'Vercel / Cloudflare static hosting with build-time data injection.',
      highlights: [
        'Brutalist minimal UI focused on clarity and speed',
        'Expandable product cards with full technical breakdowns',
        'Live "currently building" section',
        'Designed to evolve as a living product, not a one-off page'
      ]
    },
    metrics: {
      performance: 'Ultra-fast static delivery',
      conversion: 'Track record > buzzwords',
      engagement: 'Recruiter-focused, scannable layout'
    },
    timeline: {
      mvpDuration: '1 day',
      totalDuration: '2 weeks',
      launchDate: '2026-01-28'
    },
    learnings: {
      technical: [
        'Designing for performance first (no JS bloat)',
        'Building expandable UI systems without heavy frameworks',
        'Astro for ultra-minimal static generation'
      ],
      business: [
        'Recruiters scan, they don\'t read',
        'Track record > buzzwords',
        'Brutalist UI increases signal-to-noise'
      ]
    }
  }
];

// Old metric interface kept for reference
export interface Metric {
  value: string;
  label: string;
  description?: string;
}
