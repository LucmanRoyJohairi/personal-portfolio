import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";

export const metadata = {
  title: "All Projects — Full-Stack Software Engineer",
  description: "Complete archive of full-stack applications, payment gateways, and AI systems.",
};

export default function AllProjectsPage() {
  return (
    <div className="space-y-8 py-6">
      <Link
        href="/"
        className="inline-flex items-center font-mono text-xs text-slate-400 transition hover:text-sky-400"
      >
        <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
        Back to home
      </Link>

      <header className="space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-sky-400">
          Archive // {PROJECTS.length} Builds
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-slate-50">
          All Projects
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
          Production web applications, automated payment engines, and AI-powered developer tools.
        </p>
      </header>

      <div className="grid gap-5">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
