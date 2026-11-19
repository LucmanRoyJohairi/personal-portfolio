"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, FileText, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SpotlightCard } from "@/components/spotlight-card";
import { Button, buttonVariants } from "@/components/ui/button";

export function ContactCta() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-8">
      <SpotlightCard className="group rounded-2xl border border-slate-800 bg-slate-900/75 p-6 shadow-xl transition-all duration-300 hover:border-sky-500/40 sm:p-8">
        {/* Top gradient border sheen */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
        {/* Subtle right ambient glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative grid gap-8 sm:grid-cols-12 sm:items-center">
          {/* Left Column: Heading, Bio & Primary Actions (7 cols) */}
          <div className="space-y-4 sm:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 font-mono text-xs text-sky-300">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              04 // Get in Touch
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
              Interested in working together?
            </h2>

            <p className="text-sm leading-relaxed text-slate-300">
              I&apos;m open to full-stack software engineering roles and select freelance
              builds. Reach out directly via email or explore my repositories and resume.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${PROFILE.email}`}
                className={buttonVariants({
                  className:
                    "bg-sky-500 font-medium text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400",
                })}
              >
                <Mail className="mr-1.5 h-4 w-4" />
                Email Me
              </a>

              <Button
                variant="outline"
                onClick={handleCopyEmail}
                className="border-slate-700/80 bg-slate-950/70 text-slate-200 hover:border-slate-600 hover:bg-slate-800"
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-4 w-4 text-sky-400" />
                    Copied Email
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-4 w-4" />
                    {PROFILE.email}
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Right Column: Direct Links Panel (5 cols) */}
          <div className="space-y-2.5 rounded-xl border border-slate-800/90 bg-slate-950/60 p-4 sm:col-span-5">
            <span className="block px-2 font-mono text-[11px] uppercase tracking-wider text-slate-400">
              Quick Links
            </span>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-sm text-slate-200 transition hover:border-slate-800 hover:bg-slate-900"
            >
              <span className="flex items-center gap-2.5 font-medium">
                <FileText className="h-4 w-4 text-sky-400" />
                Download Resume
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-500" />
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-sm text-slate-200 transition hover:border-slate-800 hover:bg-slate-900"
            >
              <span className="flex items-center gap-2.5 font-medium">
                <GithubIcon className="h-4 w-4 text-slate-300" />
                GitHub Profile
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-500" />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-sm text-slate-200 transition hover:border-slate-800 hover:bg-slate-900"
            >
              <span className="flex items-center gap-2.5 font-medium">
                <LinkedinIcon className="h-4 w-4 text-sky-400" />
                LinkedIn
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-500" />
            </a>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
