"use client";

import { useState } from "react";
import { Check, Copy, FileText, Mail, Send } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
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
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 text-center shadow-2xl sm:p-12">
        {/* Top spotlight glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 max-w-lg rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

        <div className="relative mx-auto max-w-xl space-y-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 font-mono text-xs text-sky-300">
            <Mail className="h-3.5 w-3.5" /> 04 // Get In Touch
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            Let&apos;s build something reliable.
          </h2>

          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            Whether you&apos;re hiring for a full-stack engineering role or need an end-to-end
            system shipped fast, my inbox is open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`mailto:${PROFILE.email}`}
              className={buttonVariants({
                className:
                  "bg-sky-500 font-medium text-slate-950 shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02] hover:bg-sky-400",
              })}
            >
              <Send className="mr-1.5 h-4 w-4" />
              Say Hello
            </a>

            <Button
              variant="outline"
              onClick={handleCopyEmail}
              className="border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800"
            >
              {copied ? (
                <>
                  <Check className="mr-1.5 h-4 w-4 text-sky-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-1.5 h-4 w-4" />
                  Copy Email
                </>
              )}
            </Button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "outline",
                className:
                  "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:text-slate-100",
              })}
            >
              <FileText className="mr-1.5 h-4 w-4 text-sky-400" />
              Resume PDF
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 pt-4 text-slate-400">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs transition hover:text-sky-400"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs transition hover:text-sky-400"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
