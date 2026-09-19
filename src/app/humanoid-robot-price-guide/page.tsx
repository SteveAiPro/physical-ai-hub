import { ROBOTS_DATABASE } from "@/data/robots";
import Link from "next/link";
import { Metadata } from "next";
import { DollarSign, ShieldAlert, CheckCircle2, TrendingDown, ArrowRight, HelpCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Humanoid Robot Price Guide 2026: Cost Breakdown & Buyer Index",
  description: "Comprehensive 2026 humanoid robot pricing index. Compare costs from $16,000 (Unitree G1) to $150,000+ industrial pilots, TCO analysis, maintenance fees, and academic discounts.",
  keywords: [
    "humanoid robot price",
    "humanoid robot cost",
    "how much is a humanoid robot",
    "price of humanoid robot",
    "how much does a human robot cost",
    "cheapest humanoid robot 2026",
    "unitree g1 price"
  ]
};

export default function PriceGuidePage() {
  const priceTiers = [
    {
      tier: "Tier 1: Desktop DIY & Kits",
      priceRange: "$400 – $2,500",
      targetAudience: "Students, Hobbyists, Indie AI Researchers",
      examples: ["Hugging Face LeRobot SO-ARM100 ($400)", "Unitree Go2 AI Quadruped ($1,600)"],
      description: "Low-cost open-source hardware designed for learning imitation learning, ACT models, and desktop manipulation."
    },
    {
      tier: "Tier 2: Affordable Mass-Market Humanoids",
      priceRange: "$16,000 – $35,000",
      targetAudience: "University Labs, Secondary Education, Tech Studios",
      examples: ["Unitree G1 ($16,000)", "Estimated Tesla Optimus Consumer Target ($20k-$25k)"],
      description: "The sweet spot of full bipedal kinematics, force-feedback hands, and commercial warranty at the cost of a compact car."
    },
    {
      tier: "Tier 3: Enterprise Industrial Humanoids",
      priceRange: "$70,000 – $150,000+",
      targetAudience: "Automotive Factories, Warehouses, Hazardous Defense",
      examples: ["Figure 02", "Boston Dynamics Electric Atlas", "Agility Digit (RaaS $30/hr)"],
      description: "Heavy payload (20kg+), continuous multi-hour battery swaps, functional safety certifications, and customized fleet software."
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
          <DollarSign className="h-3.5 w-3.5" />
          <span>2026 Global Cost &amp; Procurement Index</span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
          Humanoid Robot Price Guide
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
          How much does a humanoid robot actually cost in 2026? From $400 DIY kits to $16,000 production humanoids and multi-million enterprise fleets, here is the complete cost breakdown.
        </p>
      </div>

      {/* Price Comparison Summary Table */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 overflow-x-auto">
        <h2 className="text-base font-bold text-white mb-4">
          2026 Humanoid Robot Manufacturer Price Table
        </h2>
        <table className="w-full text-left text-xs border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-zinc-800 text-zinc-400 pb-2">
              <th className="py-2.5">Robot Model</th>
              <th className="py-2.5">Manufacturer</th>
              <th className="py-2.5">DoF</th>
              <th className="py-2.5">Base Price</th>
              <th className="py-2.5">Availability</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60">
            {ROBOTS_DATABASE.map((r) => (
              <tr key={r.slug} className="hover:bg-zinc-800/30">
                <td className="py-3 font-semibold text-white">
                  <Link href={`/robots/${r.slug}`} className="hover:text-cyan-400 transition">
                    {r.name}
                  </Link>
                </td>
                <td className="py-3 text-zinc-400">{r.manufacturer}</td>
                <td className="py-3 text-zinc-300 font-bold">{r.dof} DoF</td>
                <td className="py-3 font-extrabold text-cyan-400">{r.displayPrice}</td>
                <td className="py-3">
                  <span className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-300">
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Price Tiers Breakdown */}
      <div className="mt-12 space-y-6">
        <h2 className="text-xl font-bold text-white">The Three Humanoid Cost Tiers Explained</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {priceTiers.map((t, idx) => (
            <div key={idx} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-cyan-400">{t.tier}</span>
                <h3 className="mt-2 text-2xl font-extrabold text-white">{t.priceRange}</h3>
                <p className="mt-1 text-[11px] text-zinc-400 font-medium">Target: {t.targetAudience}</p>
                <p className="mt-4 text-xs text-zinc-300 leading-relaxed">{t.description}</p>
              </div>

              <div className="mt-6 border-t border-zinc-800 pt-4">
                <span className="block text-[10px] text-zinc-400 uppercase font-semibold">Key Examples:</span>
                <ul className="mt-1.5 space-y-1 text-xs text-zinc-200">
                  {t.examples.map((ex, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total Cost of Ownership (TCO) Breakdown */}
      <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
        <h2 className="text-xl font-bold text-white">Total Cost of Ownership (TCO) Analysis</h2>
        <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
          Buying the physical robot hardware is only part of the equation. Commercial deployment requires accounting for auxiliary infrastructure:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800">
            <h4 className="font-bold text-cyan-400">1. Hardware &amp; Spares (60%)</h4>
            <p className="mt-2 text-zinc-400 text-[11px] leading-relaxed">
              Base unit, spare hot-swappable batteries, docking stations, and replacement finger tendons or harmonic drives under heavy continuous cycles.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800">
            <h4 className="font-bold text-emerald-400">2. AI Compute &amp; Training (25%)</h4>
            <p className="mt-2 text-zinc-400 text-[11px] leading-relaxed">
              GPU cluster simulation hours (NVIDIA Isaac Sim / MuJoCo) for synthetic data generation and fine-tuning Vision-Language-Action policies.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800">
            <h4 className="font-bold text-purple-400">3. Integration &amp; Safety (15%)</h4>
            <p className="mt-2 text-zinc-400 text-[11px] leading-relaxed">
              ISO 10218 / 13482 collaborative robot safety compliance certifications, emergency e-stop perimeter systems, and technician training.
            </p>
          </div>
        </div>
      </section>

      {/* Price FAQ Section */}
      <section id="faq" className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-white text-center mb-6">
          Frequently Asked Questions About Humanoid Costs
        </h2>
        <div className="space-y-4 text-xs">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h3 className="font-bold text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-cyan-400" />
              Why are humanoid robots dropping in price so quickly?
            </h3>
            <p className="mt-2 text-zinc-400 leading-relaxed">
              Standardization of brushless joint motors, harmonic reduction gears, and economies of scale from the electric vehicle (EV) supply chain have reduced actuator manufacturing costs by over 70% since 2022.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h3 className="font-bold text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-cyan-400" />
              Will humanoid robots ever cost under $10,000?
            </h3>
            <p className="mt-2 text-zinc-400 leading-relaxed">
              Industry analysts project that once global production volume surpasses 100,000 units annually (projected around 2028-2029), consumer-targeted models with lightweight composite bodies will break below the $10,000 threshold.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
