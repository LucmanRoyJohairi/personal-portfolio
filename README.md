# Personal Developer Portfolio

My personal portfolio website showcasing full-stack engineering case studies, system architectures, and core technical capabilities.

🔗 **Live Site:** [https://royjohairil.netlify.app](https://netlify.app)

![Portfolio Preview](./public/og-image.png)

## Tech Stack

- **Framework:** Next.js (App Router) & TypeScript
- **Styling & UI:** Tailwind CSS, shadcn/ui, Lucide Icons
- **Performance:** Static Site Generation (`SSG`), `next/font`, and `next/image` optimization
- **Deployment:** Vercel

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx              # Global dark-slate layout, fonts, and SEO metadata
│   ├── page.tsx                # Main landing view (Hero, Projects, Principles, Stack, Contact)
│   └── projects/
│       ├── page.tsx            # Full project archive
│       └── [slug]/page.tsx     # Static case-study pages
├── components/                 # Modular UI sections and interactive Spotlight cards
└── data/
    └── portfolio.ts            # Strongly-typed content configuration
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.
