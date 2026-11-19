import {
  Bot,
  Cloud,
  CreditCard,
  Database,
  Layout,
  Server,
  LucideIcon,
} from "lucide-react";
import { TECH_STACK } from "@/data/portfolio";

const CATEGORY_STYLES: Record<
  string,
  { icon: LucideIcon; badge: string; border: string; iconColor: string }
> = {
  "Front-End": {
    icon: Layout,
    iconColor: "text-sky-400",
    border: "hover:border-sky-500/40",
    badge: "border-sky-500/20 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20",
  },
  "Back-End": {
    icon: Server,
    iconColor: "text-emerald-400",
    border: "hover:border-emerald-500/40",
    badge: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20",
  },
  "Databases & ORM": {
    icon: Database,
    iconColor: "text-amber-400",
    border: "hover:border-amber-500/40",
    badge: "border-amber-500/20 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20",
  },
  "Auth & Payments": {
    icon: CreditCard,
    iconColor: "text-violet-400",
    border: "hover:border-violet-500/40",
    badge: "border-violet-500/20 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20",
  },
  "DevOps & Tools": {
    icon: Cloud,
    iconColor: "text-cyan-400",
    border: "hover:border-cyan-500/40",
    badge: "border-cyan-500/20 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20",
  },
  "AI Workflows": {
    icon: Bot,
    iconColor: "text-rose-400",
    border: "hover:border-rose-500/40",
    badge: "border-rose-500/20 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20",
  },
};

export function TechStack() {
  return (
    <section id="stack" className="space-y-6 py-10">
      <div className="space-y-1">
        <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
          03 // Core Capabilities
        </span>
        <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
          Tech Stack & Ecosystem
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(TECH_STACK).map(([category, skills]) => {
          const style = CATEGORY_STYLES[category] ?? CATEGORY_STYLES["Back-End"];
          const Icon = style.icon;

          return (
            <div
              key={category}
              className={`group rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-900/70 ${style.border}`}
            >
              <div className="mb-3.5 flex items-center gap-2">
                <Icon className={`h-4 w-4 ${style.iconColor}`} />
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-200">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-md border px-2.5 py-1 font-mono text-xs transition-transform duration-200 hover:-translate-y-0.5 ${style.badge}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
