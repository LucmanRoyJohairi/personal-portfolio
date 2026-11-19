import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Layers } from "lucide-react";
import { Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons";
import { SpotlightCard } from "@/components/spotlight-card";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <SpotlightCard className="group rounded-2xl border border-slate-800 bg-slate-900/75 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900 hover:shadow-2xl hover:shadow-sky-500/10">
      <article>
        {/* Top gradient border glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="grid gap-6 p-5 sm:grid-cols-12 sm:items-center sm:p-6">
          {/* Left: Full Uncropped 16:9 Preview (5 cols) */}
          <Link
            href={`/projects/${project.slug}`}
            className="relative aspect-video overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950 shadow-inner sm:col-span-5"
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] p-4 text-center">
                <div className="mb-2 rounded-lg border border-sky-500/30 bg-sky-500/10 p-2.5 text-sky-400 transition-transform duration-300 group-hover:scale-110">
                  <Layers className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-slate-300">
                  {project.slug}.preview
                </span>
              </div>
            )}
          </Link>

          {/* Right: Tight, Balanced Summary + Stack (7 cols) */}
          <div className="flex flex-col justify-between space-y-4 sm:col-span-7">
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-sky-400">
                    0{index + 1} // CASE STUDY
                  </span>
                  <h3 className="text-xl font-bold leading-snug text-slate-50">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="transition group-hover:text-sky-300"
                    >
                      {project.title}
                    </Link>
                  </h3>
                </div>

                <div className="flex shrink-0 items-center gap-2 text-slate-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Source code"
                    title="Source Code"
                    className="rounded-lg border border-slate-700/80 bg-slate-950/80 p-2 transition hover:border-sky-500/40 hover:text-sky-300"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      title="Live Demo"
                      className="rounded-lg border border-slate-700/80 bg-slate-950/80 p-2 transition hover:border-sky-500/40 hover:text-sky-300"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="line-clamp-3 text-sm leading-relaxed text-slate-300">
                {project.summary}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-sky-500/25 bg-sky-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-sky-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-slate-800/80 pt-3">
                <span className="font-mono text-xs text-slate-400">
                  Problem, Architecture &amp; Highlights
                </span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-sky-400 transition hover:text-sky-300"
                >
                  Read Case Study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
}
