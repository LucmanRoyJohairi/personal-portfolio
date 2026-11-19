# Personal Developer Portfolio

My personal developer portfolio showcasing full-stack engineering case studies, system architectures, and core technical capabilities.

[![Live Demo](https://shields.io/badge/Live_Demo-royjohairil.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://royjohairil.netlify.app/)


![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

![Portfolio Preview](./public/og-image.png)

## ✨ Highlights

- **Static-First Performance:** Pre-rendered case study pages (`generateStaticParams`), optimized `next/image` assets, and zero layout shift with `next/font`.
- **Interactive Dark-Slate UI:** Custom cursor-tracking `SpotlightCard` components, smooth CSS micro-animations, and accessible `shadcn/ui` primitives.
- **Data-Driven Architecture:** All projects, metrics, and tech ecosystems live in a single strongly-typed `portfolio.ts` config for effortless updates.
- **SEO & Social Ready:** Dynamic per-project OpenGraph metadata, custom favicons, and `1200×630` preview cards.

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router) & TypeScript
- **Styling & UI:** Tailwind CSS v4, shadcn/ui, Lucide Icons
- **Hosting & CI/CD:** Netlify

## 📂 Project Structure

```text
src/
├── app/
│   ├── layout.tsx              # Global dark-slate layout, fonts, and SEO metadata
│   ├── page.tsx                # Main landing view (Hero, Projects, Principles, Stack, Contact)
│   └── projects/
│       ├── page.tsx            # Full project archive
│       └── [slug]/page.tsx     # Static case-study pages with dynamic metadata
├── components/                 # Modular UI sections and interactive Spotlight cards
└── data/
    └── portfolio.ts            # Strongly-typed content configuration
```

---

*Designed and built from scratch to showcase production full-stack engineering work. View the live site at [https://royjohairil.netlify.app/](https://royjohairil.netlify.app/).*