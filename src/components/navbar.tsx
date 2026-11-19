import Link from "next/link";
import { FileText } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0B0F19]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-slate-100 transition hover:text-sky-400"
        >
          ~/portfolio
        </Link>

        <nav className="flex items-center gap-4 text-sm text-slate-400">
          <Link href="/#projects" className="transition hover:text-slate-100">
            Projects
          </Link>
          <Link href="/#stack" className="transition hover:text-slate-100">
            Stack
          </Link>
          <Link href="/#contact" className="hidden transition hover:text-slate-100 sm:inline">
            Contact
          </Link>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:text-slate-100"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-slate-100"
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
              className:
                "border-slate-800 bg-slate-900/80 text-slate-200 hover:border-slate-700 hover:bg-slate-800",
            })}
          >
            <FileText className="mr-1.5 h-3.5 w-3.5 text-sky-400" />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
    