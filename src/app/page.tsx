import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { TechStack } from "@/components/tech-stack";
import { Separator } from "@/components/ui/separator";
import { PROFILE, PROJECTS } from "@/data/portfolio";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Hero />

      <Separator className="bg-zinc-800/80" />

      <section id="projects" className="space-y-6 py-8">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
            Featured Projects
          </h2>
          <p className="text-sm text-zinc-400">
            Selected production systems, payment integrations, and full-stack builds.
          </p>
        </div>

        <div className="grid gap-5">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Separator className="bg-zinc-800/80" />

      <TechStack />

      <footer className="border-t border-zinc-800/80 pt-8 text-center font-mono text-xs text-zinc-500">
        Built with Next.js, Tailwind CSS & shadcn/ui · {PROFILE.email}
      </footer>
    </div>
  );
}
