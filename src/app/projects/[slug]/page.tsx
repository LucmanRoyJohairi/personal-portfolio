import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, GitBranch } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";


export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="space-y-8 py-6">
      <Link
        href="/#projects"
        className="inline-flex items-center font-mono text-xs text-zinc-400 hover:text-zinc-100"
      >
        <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
        Back to projects
      </Link>

      <header className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
          {project.title}
        </h1>
        <p className="text-base leading-relaxed text-zinc-400">{project.summary}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-zinc-800 font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
            <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "border-zinc-800 bg-zinc-900",
                })}
            >
                <GitBranch className="mr-1.5 h-4 w-4" />
                Source Code
            </a>

            {project.liveUrl && (
                <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                    size: "sm",
                    className: "bg-zinc-100 text-zinc-950 hover:bg-zinc-200",
                })}
                >
                Live Demo
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </a>
            )}
        </div>

      </header>

      <div className="space-y-6 rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
        <div className="space-y-2">
          <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
            01 // The Problem
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300">{project.problem}</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
            02 // Architecture & Implementation
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300">{project.architecture}</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
            03 // Key Highlights
          </h2>
          <ul className="space-y-1.5 text-sm text-zinc-300">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-emerald-400">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
