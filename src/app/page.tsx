import { ROBOTS_DATABASE } from "@/data/robots";
import RobotFilter from "@/components/RobotFilter";
import HomeHero from "@/components/HomeHero";
import RobotVideoShowcase from "@/components/RobotVideoShowcase";
import Link from "next/link";
import { Sparkles, ArrowRight, Bot, ShieldCheck, ShoppingCart, DollarSign, GitCompare, Wrench, CheckCircle2, Cpu } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-transparent blur-3xl" />

      {/* Dynamic Multi-language Hero Section */}
      <HomeHero />

      {/* Live Hardware Video Demonstration with VideoObject Schema */}
      <RobotVideoShowcase />

      {/* Main Directory Section */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {/* Filter & Grid with i18n support */}
        <RobotFilter robots={ROBOTS_DATABASE} />
      </section>

      {/* Comparison Spotlight Banner */}
      <section className="border-y border-zinc-800 bg-zinc-900/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Interactive Spec Evaluator
              </span>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Compare Tesla Optimus vs Figure 02 vs Unitree G1
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Making procurement decisions for manufacturing, logistics, or AI manipulation research? Compare joint torque ratings, battery endurance, sub-millimeter hand precision, and total cost of ownership.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/compare"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition"
                >
                  Launch Interactive VS Tool <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/humanoid-robot-price-guide"
                  className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-xs font-medium text-zinc-200 hover:bg-zinc-700 transition"
                >
                  View 2026 Price Index
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <h4 className="text-xs font-bold text-cyan-400">Unitree G1</h4>
                <p className="text-[11px] text-zinc-400 mt-1">23-43 DoF • $16,000 Mass Production</p>
                <span className="mt-3 inline-block rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/20">
                  Ready to Order
                </span>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <h4 className="text-xs font-bold text-white">Tesla Optimus Gen 2</h4>
                <p className="text-[11px] text-zinc-400 mt-1">28 DoF • Tesla FSD Neural Net</p>
                <span className="mt-3 inline-block rounded bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-400 border border-blue-500/20">
                  Gigafactory Pilot
                </span>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <h4 className="text-xs font-bold text-white">Figure 02</h4>
                <p className="text-[11px] text-zinc-400 mt-1">16-DoF Hands • OpenAI Speech VLM</p>
                <span className="mt-3 inline-block rounded bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-400 border border-blue-500/20">
                  BMW Plant Deployment
                </span>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <h4 className="text-xs font-bold text-amber-400">LeRobot SO-ARM100</h4>
                <p className="text-[11px] text-zinc-400 mt-1">6-DoF Arm • $400 DIY Open Source</p>
                <span className="mt-3 inline-block rounded bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-400 border border-amber-500/20">
                  100% Open Source
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Article Section (On-Page SEO) */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <article className="prose prose-invert max-w-none text-zinc-300">
          <h2 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">
            What is Physical AI? The 2026 Embodied Hardware Paradigm Shift
          </h2>
          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-400">
            For decades, artificial intelligence was confined to screens and cloud data centers—processing text, code, and 2D pixels. As NVIDIA CEO Jensen Huang highlighted, <strong>Physical AI</strong> marks the inflection point where AI models gain spatial understanding of gravity, friction, mass, and three-dimensional physics.
          </p>

          <h3 className="mt-8 text-lg font-bold text-white">
            Three Waves of Physical Hardware Adoption
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <h4 className="text-xs font-bold text-cyan-400">Wave 1: Industrial Automation (2024 - 2027)</h4>
              <p className="text-xs text-zinc-400 mt-1">
                Robots like Figure 02 and Agility Digit deployed in structured environments (BMW automotive stamping, Amazon tote handling) to address severe blue-collar labor shortages.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <h4 className="text-xs font-bold text-emerald-400">Wave 2: Commercial Services &amp; Research (2026 - 2028)</h4>
              <p className="text-xs text-zinc-400 mt-1">
                High-volume, affordable platforms like Unitree G1 ($16,000) commoditize humanoid hardware for universities, inspection patrols, and hazardous facilities.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <h4 className="text-xs font-bold text-purple-400">Wave 3: Consumer Living &amp; Home Companions (2028+)</h4>
              <p className="text-xs text-zinc-400 mt-1">
                Ultra-lightweight soft-bodied humanoids like 1X NEO (30kg) and consumer quadrupeds entering household living rooms for daily chores and elder assistance.
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
