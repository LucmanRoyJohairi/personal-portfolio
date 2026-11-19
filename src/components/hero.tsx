"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDownRight, Check, Copy, Sparkles } from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { SpotlightCard } from "@/components/spotlight-card";
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
        {/* Left: Staggered Intro & CTAs */}
        <div className="space-y-5">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>
            {PROFILE.availability}
          </div>

          <div className="animate-fade-in-up space-y-3 [animation-delay:100ms]">
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

          <div className="animate-fade-in-up flex flex-wrap items-center gap-3 pt-1 [animation-delay:200ms]">
            <a
              href="#projects"
              className={buttonVariants({
                className:
                  "group relative overflow-hidden bg-sky-500 font-medium text-slate-950 shadow-lg shadow-sky-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-sky-400/30",
              })}
            >
              {/* Subtle hover shine sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center">
                View Projects
                <ArrowDownRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </span>
            </a>

            <Button
              variant="outline"
              onClick={handleCopyEmail}
              className="border-slate-800 bg-slate-900/80 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-800"
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

        {/* Right: Gentle Floating Circular Portrait Badge */}
        <div className="animate-fade-in-up relative shrink-0 self-center [animation-delay:150ms] sm:self-auto">
          <div className="animate-float-slow relative">
            <div className="animate-pulse-glow absolute -inset-2 rounded-full bg-gradient-to-tr from-sky-500/40 via-indigo-500/30 to-slate-700/40 blur-lg" />
            <div className="relative rounded-full border-2 border-slate-700/80 bg-slate-900 p-1.5 shadow-2xl transition-transform duration-300 hover:scale-[1.03]">
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
      </div>

      {/* Interactive Proof-of-Work Metrics Bar */}
      <div className="animate-fade-in-up grid grid-cols-2 gap-3 [animation-delay:300ms] sm:grid-cols-3">
        <SpotlightCard className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-700">
          <p className="font-mono text-lg font-semibold text-slate-50">4+ Years</p>
          <p className="text-xs text-slate-400">Production Full-Stack Delivery</p>
        </SpotlightCard>

        <SpotlightCard className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-700">
          <p className="font-mono text-lg font-semibold text-slate-50">End-to-End</p>
          <p className="text-xs text-slate-400">System Architecture to Deployment</p>
        </SpotlightCard>

        <SpotlightCard className="col-span-2 rounded-xl border border-slate-800/80 bg-slate-900/60 px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/30 sm:col-span-1">
          <p className="flex items-center gap-1.5 font-mono text-lg font-semibold text-sky-400">
            <Sparkles className="h-4 w-4" /> AI-Native
          </p>
          <p className="text-xs text-slate-400">RAG, Agents &amp; Rapid Shipping</p>
        </SpotlightCard>
      </div>
    </section>
  );
}
