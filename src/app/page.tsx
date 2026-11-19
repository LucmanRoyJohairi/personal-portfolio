import { ContactCta } from "@/components/contact-cta";
import { Hero } from "@/components/hero";
import { HowIWork } from "@/components/how-i-work";
import { ProjectCard } from "@/components/project-card";
import { Services } from "@/components/services";
import { TechStack } from "@/components/tech-stack";
import { Separator } from "@/components/ui/separator";
import { PROFILE, PROJECTS } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="animate-fade-in-up">
        <Hero />
      </div>

      <Separator className="bg-slate-800/80" />

      <section id="projects" className="animate-fade-in-up space-y-6 py-8 [animation-delay:100ms]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-sky-400">
              01 // Selected Work
            </span>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50">
              Featured Projects
            </h2>
            <p className="text-sm text-slate-400">
              Selected production systems, payment integrations, and full-stack builds.
            </p>
          </div>

          <Link 
            href="/projects"
            className="inline-flex items-center gap-1.5 self-start font-mono text-xs font-semibold text-sky-400 transition hover:text-sky-300 sm:self-auto"
          >
            All Projects ({PROJECTS.length})
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-5">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>


      <Separator className="bg-slate-800/80" />

      <HowIWork />

      {/* <Services /> */}

      <Separator className="bg-slate-800/80" />

      <TechStack />

      <Separator className="bg-slate-800/80" />

      <ContactCta />

      <footer className="pt-4 text-center font-mono text-xs text-slate-500">
        © 2026 {PROFILE.name} · Built with Next.js & Tailwind CSS
      </footer>

    </div>
  );
}
