import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons"

import { Project } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col justify-between border-zinc-800 bg-zinc-900/40 transition hover:border-zinc-700">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg font-semibold text-zinc-100">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </CardTitle>
          <div className="flex items-center gap-2 text-zinc-400">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Source code"
              className="hover:text-zinc-100"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Live demo"
                className="hover:text-zinc-100"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm leading-relaxed text-zinc-400">{project.summary}</p>
      </CardHeader>

      <CardContent>
        <ul className="space-y-1.5 text-xs text-zinc-300">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-emerald-400">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-800/60 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-zinc-800/80 font-mono text-[11px] font-normal text-zinc-300"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="font-mono text-xs text-emerald-400 hover:underline"
        >
          Case study →
        </Link>
      </CardFooter>
    </Card>
  );
}
