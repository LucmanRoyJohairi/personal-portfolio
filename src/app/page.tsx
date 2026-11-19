import { ContactCta } from "@/components/contact-cta";
import { Hero } from "@/components/hero";
import { HowIWork } from "@/components/how-i-work";
import { ProjectCard } from "@/components/project-card";
import { TechStack } from "@/components/tech-stack";
import { Separator } from "@/components/ui/separator";
import { PROFILE, PROJECTS } from "@/data/portfolio";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="animate-fade-in-up">
        <Hero />
      </div>

      <Separator className="bg-slate-800/80" />

      <section id="projects" className="animate-fade-in-up space-y-6 py-8 [animation-delay:100ms]">
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

        <div className="grid gap-5">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <Separator className="bg-slate-800/80" />

      <HowIWork />

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
