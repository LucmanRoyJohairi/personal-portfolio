import Link from "next/link";
import { FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { PROFILE } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";


export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-zinc-100">
          ~/portfolio
        </Link>

        <nav className="flex items-center gap-4 text-sm text-zinc-400">
          <Link href="/#projects" className="transition hover:text-zinc-100">
            Projects
          </Link>
          <Link href="/#stack" className="transition hover:text-zinc-100">
            Stack
          </Link>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:text-zinc-100"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-zinc-100"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                    className: "border-zinc-800 bg-zinc-900 hover:bg-zinc-800",
                })}
                >
                <FileText className="mr-1.5 h-3.5 w-3.5" />
                Resume
            </a>

        </nav>
      </div>
    </header>
  );
}
