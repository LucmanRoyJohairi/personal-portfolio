"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDownRight, Check, Copy, Sparkles } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { Button, buttonVariants } from "@/components/ui/button";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-10 py-8">
      <div className="flex flex-col-reverse items-start justify-between gap-10 sm:flex-row sm:items-center">
        {/* Left: Intro & CTAs */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>
            {PROFILE.availability}
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              {PROFILE.name}
            </h1>
            <p className="font-mono text-sm font-medium text-sky-400">
              {PROFILE.role} · {PROFILE.experience}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-slate-300">
              {PROFILE.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className={buttonVariants({
                className:
                  "bg-sky-500 font-medium text-slate-950 shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02] hover:bg-sky-400",
              })}
            >
              View Projects
              <ArrowDownRight className="ml-1.5 h-4 w-4" />
            </a>

            <Button
              variant="outline"
              onClick={handleCopyEmail}
              className="border-slate-800 bg-slate-900/80 text-slate-200 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-slate-700 hover:bg-slate-800"
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

        {/* Right: Clean Circular Portrait Badge */}
        <div className="relative shrink-0 self-center sm:self-auto">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-sky-500/40 via-indigo-500/30 to-slate-700/40 blur-md" />
          <div className="relative rounded-full border-2 border-slate-700/80 bg-slate-900 p-1.5 shadow-2xl">
            <Image
              src="/avatar.jpg"
              alt={PROFILE.name}
              width={200}
              height={200}
              priority
              className="h-36 w-36 rounded-full object-cover object-top sm:h-44 sm:w-44"
            />
          </div>
        </div>
      </div>

      {/* Proof-of-Work Metrics Bar */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 px-4 py-3.5 backdrop-blur-sm transition hover:border-slate-700">
          <p className="font-mono text-lg font-semibold text-slate-50">4+ Years</p>
          <p className="text-xs text-slate-400">Production Full-Stack Delivery</p>
        </div>
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 px-4 py-3.5 backdrop-blur-sm transition hover:border-slate-700">
          <p className="font-mono text-lg font-semibold text-slate-50">End-to-End</p>
          <p className="text-xs text-slate-400">System Architecture to Deployment</p>
        </div>
        <div className="col-span-2 rounded-xl border border-slate-800/80 bg-slate-900/50 px-4 py-3.5 backdrop-blur-sm transition hover:border-sky-500/30 sm:col-span-1">
          <p className="flex items-center gap-1.5 font-mono text-lg font-semibold text-sky-400">
            <Sparkles className="h-4 w-4" /> AI-Native
          </p>
          <p className="text-xs text-slate-400">RAG, Agents & Rapid Shipping</p>
        </div>
      </div>
    </section>
  );
}
