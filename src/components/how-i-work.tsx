import { Cpu, Layers, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "@/components/spotlight-card";

const PRINCIPLES = [
  {
    step: "01",
    icon: Layers,
    title: "Clean, Maintainable Architecture",
    description:
      "Modular codebases, strict TypeScript boundaries, and predictable API contracts built to scale without rewrites.",
    accent: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    topGlow: "via-sky-400/60",
    hoverBorder: "hover:border-sky-500/40",
  },
  {
    step: "02",
    icon: ShieldCheck,
    title: "Reliable Payment & Data Flows",
    description:
      "Idempotent webhooks, atomic database transactions, and defensive error handling for mission-critical systems.",
    accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    topGlow: "via-emerald-400/60",
    hoverBorder: "hover:border-emerald-500/40",
  },
  {
    step: "03",
    icon: Cpu,
    title: "AI-Accelerated Engineering",
    description:
      "Integrating LLMs, RAG pipelines, and modern AI coding workflows to ship production features fast without sacrificing quality.",
    accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    topGlow: "via-indigo-400/60",
    hoverBorder: "hover:border-indigo-500/40",
  },
];

export function HowIWork() {
  return (
    <section className="space-y-6 py-8">
      <div className="space-y-1">
        <span className="font-mono text-xs uppercase tracking-wider text-sky-400">
          02 // Engineering Approach
        </span>
        <h2 className="text-xl font-semibold tracking-tight text-slate-50">
          How I Work
        </h2>
        <p className="text-sm text-slate-300">
          Core principles I apply from system design to production deployment.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {PRINCIPLES.map(
          ({ step, icon: Icon, title, description, accent, topGlow, hoverBorder }) => (
            <SpotlightCard
              key={title}
              className={`group rounded-2xl border border-slate-800 bg-slate-900/75 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900 ${hoverBorder}`}
            >
              {/* Top edge highlight */}
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${topGlow} to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="mb-4 flex items-center justify-between">
                <div className={`inline-flex rounded-xl border p-2.5 ${accent}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-medium text-slate-500">
                  {step}
                </span>
              </div>

              <h3 className="mb-2 text-base font-semibold leading-snug text-slate-50">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {description}
              </p>
            </SpotlightCard>
          )
        )}
      </div>
    </section>
  );
}
