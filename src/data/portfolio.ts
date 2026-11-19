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
  image?: string;
}

export const PROFILE = {
  name: "Roy Johairi Lucman",
  role: "Full-Stack Developer | Software Engineer",
  experience: "4+ years of experience",
  tagline:
    "I build scalable web applications, automated payment systems, and AI-powered workflows with clean architecture and reliable end-to-end delivery.",
  email: "lucman.royjohairi@gmail.com",
  github: "https://github.com/LucmanRoyJohairi",
  linkedin: "https://www.linkedin.com/in/royjohairilucman/",
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
    slug: "obsidian-studio",
    title: "Obsidian Studio",
    summary:
      "Dark-mode digital asset storefront featuring Clerk OAuth authentication and automated on-chain USDT (TRC20) payment verification.",
    problem:
      "Digital creators needed a direct, non-custodial storefront capable of verifying crypto payments on-chain without fake token spoofing or replay attacks.",
    architecture:
      "Built a full-stack Next.js App Router application backed by Neon Serverless PostgreSQL and Prisma 7, querying the TronGrid API via TronWeb to validate TRC20 Transfer events.",
    highlights: [
      "Server-side TronGrid verification validating official USDT smart contracts, exact recipient wallets, and minimum payment thresholds",
      "Idempotent order recording via database-level unique TXID constraints to prevent replay attacks",
      "Frictionless Discord/Google SSO via Clerk with real-time ownership detection and a protected digital download library",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Clerk", "TRON"],
    githubUrl: "https://github.com/LucmanRoyJohairi/obsidian-storefront",
    liveUrl: "https://obsidian-storefront.vercel.app/",
    image: "/projects/obsidian-studio.png",
  },

  {
    slug: "axon",
    title: "Axon",
    summary:
      "AI-powered support ticket management and triage platform featuring automated priority breakdowns, real-time status tracking, and Supabase authentication.",
    problem:
      "Support teams needed a centralized, secure dashboard to triage high ticket volumes with instant AI categorization and frictionless demo access without compromising tenant data isolation.",
    architecture:
      "Built a Next.js 14 App Router frontend paired with a FastAPI REST backend, enforcing strict end-to-end type safety with TypeScript and Pydantic schemas alongside Supabase Auth and PostgreSQL Row-Level Security (RLS).",
    highlights: [
      "Database-level data isolation enforced via Supabase Row-Level Security (RLS) alongside frictionless guest sign-in for instant onboarding",
      "Decoupled API service layer mirroring FastAPI Pydantic schemas, enabling seamless switching between mock data and live REST endpoints",
      "Responsive dashboard with AI-processed ticket analytics, priority breakdowns, skeleton loading states, and multi-criteria filtering",
    ],
    techStack: ["Next.js", "FastAPI", "TypeScript", "Python", "Supabase", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/LucmanRoyJohairi/axon",
    liveUrl: "https://axon-ticketing-system-two.vercel.app/dashboard",
    image: "/projects/axon.png",
  },

  {
    slug: "the-marketplace",
    title: "The Marketplace",
    summary:
      "Modern peer-to-peer local marketplace inspired by Facebook Marketplace, featuring Stripe Connect payouts, real-time listing previews, and automated email notifications.",
    problem:
      "Local peer-to-peer classifieds often lack integrated payment protection and streamlined seller onboarding, forcing buyers and sellers into fragmented off-platform transactions.",
    architecture:
      "Built a full-stack Next.js and React 19 application styled with Tailwind CSS and shadcn/ui, backed by Supabase for persistence, Stripe Connect for direct buyer-to-seller payouts, and Resend for transactional emails.",
    highlights: [
      "Integrated Stripe Connect onboarding and direct card checkout with automated bank payouts for verified sellers",
      "Interactive listing creation studio featuring a real-time live buyer preview, condition tagging, and location-based category filtering",
      "Built-in buyer-to-seller inquiry system powered by Resend for instant transactional email delivery",
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Stripe", "Resend"],
    githubUrl: "https://github.com/LucmanRoyJohairi/the-marketplace",
    liveUrl: "https://the-social-marketplace.vercel.app/",
    image: "/projects/the-marketplace.png",
  },

];
