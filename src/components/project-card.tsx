import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Layers } from "lucide-react";
import { Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons";
import { SpotlightCard } from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <SpotlightCard className="group rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-sky-500/5">
      <article>
        {/* Top gradient border glow on hover */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="grid gap-6 p-5 sm:grid-cols-12 sm:items-center sm:p-6">
          {/* Left: Project Image Preview (5 cols) */}
          <Link
            href={`/projects/${project.slug}`}
            className="relative aspect-video overflow-hidden rounded-xl border border-slate-800 bg-slate-950 sm:col-span-5"
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] p-4 text-center">
                <div className="mb-2 rounded-lg border border-sky-500/25 bg-sky-500/10 p-2.5 text-sky-400 transition-transform duration-300 group-hover:scale-110">
                  <Layers className="h-5 w-5" />
                </div>
                <span className="font-mono text-[11px] text-slate-400">
                  {project.slug}.preview
                </span>
              </div>
            )}
          </Link>

          {/* Right: Project Details (7 cols) */}
          <div className="flex flex-col justify-between space-y-4 sm:col-span-7">
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[11px] font-medium text-sky-400">
                    0{index + 1} // CASE STUDY
                  </span>
                  <h3 className="text-lg font-semibold text-slate-50">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="transition group-hover:text-sky-300"
                    >
                      {project.title}
                    </Link>
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Source code"
                    className="rounded-lg border border-slate-800 bg-slate-950/70 p-1.5 transition hover:border-slate-700 hover:text-slate-100"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="rounded-lg border border-slate-800 bg-slate-950/70 p-1.5 transition hover:border-slate-700 hover:text-slate-100"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">{project.summary}</p>
            </div>

            <ul className="space-y-1 text-xs text-slate-300">
              {project.highlights.slice(0, 2).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-sky-400">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="border border-slate-800 bg-slate-950/80 font-mono text-[11px] font-normal text-slate-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="font-mono text-xs font-medium text-sky-400 transition group-hover:translate-x-1"
              >
                Details →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
}
