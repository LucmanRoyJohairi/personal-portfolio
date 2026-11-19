import { Cpu, Layers, ShieldCheck } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Layers,
    title: "Clean, Maintainable Architecture",
    description:
      "Modular codebases, strict TypeScript boundaries, and predictable API contracts built to scale without rewrites.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Payment & Data Flows",
    description:
      "Idempotent webhooks, atomic database transactions, and defensive error handling for mission-critical systems.",
  },
  {
    icon: Cpu,
    title: "AI-Accelerated Engineering",
    description:
      "Integrating LLMs, RAG pipelines, and modern AI coding workflows to ship production features fast without sacrificing quality.",
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
        <p className="text-sm text-slate-400">
          Core principles I apply from system design to production deployment.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {PRINCIPLES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/30 hover:bg-slate-900/80"
          >
            <div className="mb-3 inline-flex rounded-lg border border-slate-800 bg-slate-950 p-2 text-sky-400 transition group-hover:border-sky-500/30">
              <Icon className="h-4 w-4" />
            </div>
            <h3 className="mb-1.5 text-sm font-semibold text-slate-100">{title}</h3>
            <p className="text-xs leading-relaxed text-slate-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
