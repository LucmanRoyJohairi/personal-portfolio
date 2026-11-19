import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <header className="space-y-4">
        <span className="font-mono text-xs uppercase tracking-wider text-sky-400">
          Case Study
        </span>
        <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
          {project.title}
        </h1>
        <p className="text-base leading-relaxed text-slate-300">{project.summary}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="border border-slate-800 bg-slate-900 font-mono text-xs text-slate-200"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
              className:
                "border-slate-800 bg-slate-900/80 text-slate-200 hover:border-slate-700 hover:bg-slate-800",
            })}
          >
            <GithubIcon className="mr-1.5 h-4 w-4" />
            Source Code
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "sm",
                className:
                  "bg-sky-500 font-medium text-slate-950 hover:bg-sky-400",
              })}
            >
              Live Demo
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </a>
          )}
        </div>
      </header>

      {project.image && (
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <div className="space-y-6 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 backdrop-blur-sm">
        <div className="space-y-2">
          <h2 className="font-mono text-xs uppercase tracking-wider text-sky-400">
            01 // The Problem
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">{project.problem}</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-mono text-xs uppercase tracking-wider text-sky-400">
            02 // Architecture & Implementation
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">{project.architecture}</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-mono text-xs uppercase tracking-wider text-sky-400">
            03 // Key Highlights
          </h2>
          <ul className="space-y-1.5 text-sm text-slate-300">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-sky-400">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <article className="space-y-8 py-6">
      <Link
        href="/#projects"
        className="inline-flex items-center font-mono text-xs text-slate-400 transition hover:text-sky-400"
      >
        <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
        Back to projects
      </Link>

      <Suspense
        fallback={
          <div className="h-64 animate-pulse rounded-2xl border border-slate-800 bg-slate-900/40" />
        }
      >
        <ProjectContent params={params} />
      </Suspense>
    </article>
  );
}
