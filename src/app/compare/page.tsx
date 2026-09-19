import { ROBOTS_DATABASE } from "@/data/robots";
import ComparisonTable from "@/components/ComparisonTable";
import AdsterraNative from "@/components/AdsterraNative";
import { Metadata } from "next";
import Link from "next/link";
import { GitCompare, Sparkles, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Compare Humanoid Robots Side-by-Side: DoF, Price & Specs Matrix 2026",
  description: "Interactive side-by-side comparison tool for Tesla Optimus, Figure 02, Unitree G1, 1X NEO, and Boston Dynamics Atlas. Compare degrees of freedom, payload, battery runtime, and pricing.",
  keywords: [
    "compare humanoid robots",
    "tesla optimus vs figure 02",
    "unitree g1 vs optimus",
    "humanoid robot comparison matrix",
    "best humanoid robot specs"
  ]
};

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-xs text-zinc-400">
        <Link href="/" className="flex items-center gap-1 hover:text-white transition">
          <ArrowLeft className="h-3 w-3" /> Home
        </Link>
        <span>/</span>
        <span className="text-zinc-200">Compare Robots</span>
      </div>

      {/* Hero */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
          <GitCompare className="h-3.5 w-3.5 text-indigo-400" />
          <span>Interactive Head-to-Head Evaluator</span>
        </div>
        <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
          Compare Humanoid Robots Side-by-Side
        </h1>
        <p className="mt-2 max-w-2xl text-xs sm:text-sm text-zinc-400 leading-relaxed">
          Evaluate kinematic capabilities, degrees of freedom (DoF), payload limits, onboard Vision-Language-Action (VLA) AI models, and real-world manufacturer pricing.
        </p>
      </div>

      {/* Comparison Tool */}
      <ComparisonTable robots={ROBOTS_DATABASE} />

      {/* Sponsored Adsterra Stream */}
      <div className="mt-12">
        <AdsterraNative />
      </div>
    </div>
  );
}
