export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  architecture: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const PROFILE = {
  name: "Your Name",
  role: "Full-Stack Developer | Software Engineer",
  experience: "4+ years of experience",
  tagline:
    "I build scalable web applications, automated payment systems, and AI-powered workflows with clean architecture and reliable end-to-end delivery.",
  email: "you@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  availability: "Open to Full-Stack & Backend roles",
};

export const TECH_STACK: Record<string, string[]> = {
  "Front-End": ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  "Back-End": ["Node.js", "Express", "FastAPI", "Python", "REST & Webhooks"],
  "Databases & ORM": ["PostgreSQL", "Redis", "Prisma", "SQLAlchemy", "Vector DBs"],
  "Auth & Payments": ["Stripe", "Crypto / TRC20 Gateways", "NextAuth", "JWT / OAuth2"],
  "DevOps & Tools": ["Docker", "GitHub Actions", "Linux", "Vercel", "AWS"],
  "AI Workflows": ["RAG Pipelines", "OpenAI / Claude APIs", "LangChain", "Cursor"],
};

export const PROJECTS: Project[] = [
  {
    slug: "automated-payment-gateway",
    title: "Multi-Currency & Crypto Payment Engine",
    summary:
      "Automated payment processing service handling fiat webhooks and on-chain TRC20/ERC20 settlement verification.",
    problem:
      "Merchants needed automated invoice reconciliation without manual wallet checks or race-condition double credits.",
    architecture:
      "Built an event-driven FastAPI & Node.js worker pipeline backed by PostgreSQL with idempotency keys and Redis distributed locks.",
    highlights: [
      "Zero duplicate ledger entries under concurrent webhook retries",
      "Real-time transaction status updates via WebSockets",
      "Automated merchant payout batching and audit logs",
    ],
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/payment-engine",
    liveUrl: "https://example.com",
  },
  {
    slug: "enterprise-rag-assistant",
    title: "Internal Docs RAG Knowledge Assistant",
    summary:
      "Context-aware AI search and Q&A platform indexing technical documentation and support runbooks.",
    problem:
      "Engineering teams spent hours searching fragmented Notion pages and PDFs for deployment and API specs.",
    architecture:
      "Implemented semantic chunking, pgvector embeddings, and hybrid keyword-vector retrieval with strict source citations.",
    highlights: [
      "Sub-1.5s streaming responses with inline document citations",
      "Role-based access filtering before vector retrieval",
      "Automated ingestion pipeline triggered on doc updates",
    ],
    techStack: ["Next.js", "TypeScript", "Python", "pgvector", "Tailwind CSS"],
    githubUrl: "https://github.com/rag-assistant",
  },
  {
    slug: "saas-analytics-dashboard",
    title: "Real-Time SaaS Operations Dashboard",
    summary:
      "High-contrast dark-mode analytics portal for monitoring API usage, billing tiers, and customer health.",
    problem:
      "Operations teams lacked real-time visibility into API rate limits and subscription churn triggers.",
    architecture:
      "Next.js App Router frontend with server-side aggregated PostgreSQL materialized views and Stripe billing sync.",
    highlights: [
      "99/100 Lighthouse performance score with server-rendered charts",
      "Granular team RBAC and audit trail export",
      "Automated Stripe webhook sync for instant plan upgrades",
    ],
    techStack: ["React", "Next.js", "PostgreSQL", "Prisma", "Stripe"],
    githubUrl: "https://github.com/saas-dashboard",
    liveUrl: "https://example.com",
  },
];
