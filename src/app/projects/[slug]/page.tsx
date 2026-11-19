import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[currentIndex];

  if (!project) notFound();

  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <>
      <header className="space-y-4">
        <span className="font-mono text-xs uppercase tracking-wider text-sky-400">
          0{currentIndex + 1} // Case Study
        </span>
        <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-base leading-relaxed text-slate-300">{project.summary}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="border border-sky-500/25 bg-sky-500/10 font-mono text-xs text-sky-200"
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
                  "bg-sky-500 font-medium text-slate-950 shadow-lg shadow-sky-500/20 hover:bg-sky-400",
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

      {/* 01 & 02: Side-by-Side Problem & Architecture Bento */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/75 p-6 shadow-lg">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-xs font-semibold text-amber-300">
              01
            </span>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-200">
              The Problem
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-200">{project.problem}</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/75 p-6 shadow-lg">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="rounded-md border border-sky-500/30 bg-sky-500/10 px-2 py-0.5 font-mono text-xs font-semibold text-sky-300">
              02
            </span>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-200">
              Architecture &amp; Stack
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-200">{project.architecture}</p>
        </div>
      </div>

      {/* 03: Key Engineering Highlights */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/75 p-6 shadow-lg">
        <div className="mb-4 flex items-center gap-2.5">
          <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-xs font-semibold text-emerald-300">
            03
          </span>
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-200">
            Key Engineering Highlights
          </h2>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-3">
          {project.highlights.map((item, idx) => (
            <div
              key={item}
              className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-4"
            >
              <span className="mb-2 block font-mono text-[11px] font-semibold text-sky-400">
                HIGHLIGHT 0{idx + 1}
              </span>
              <p className="text-sm leading-relaxed text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Next Project Navigation */}
      {PROJECTS.length > 1 && (
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 sm:flex-row sm:items-center">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
              Up Next
            </span>
            <p className="text-sm font-semibold text-slate-100">{nextProject.title}</p>
          </div>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-sky-400 transition hover:text-sky-300"
          >
            View Case Study
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
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
          <div className="h-96 animate-pulse rounded-2xl border border-slate-800 bg-slate-900/40" />
        }
      >
        <ProjectContent params={params} />
      </Suspense>
    </article>
  );
}
