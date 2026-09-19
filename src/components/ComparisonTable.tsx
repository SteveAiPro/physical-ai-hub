"use client";

import { useState } from "react";
import { RobotSpec } from "@/data/robots";
import Link from "next/link";
import Image from "next/image";
import { Check, X, ArrowRight, ShieldCheck, Gauge, Sparkles } from "lucide-react";

interface ComparisonTableProps {
  robots: RobotSpec[];
  initialSelection?: string[];
  onRequestQuote?: (name: string) => void;
}

export default function ComparisonTable({ robots, initialSelection = ["unitree-g1", "tesla-optimus-gen-2", "figure-02", "1x-neo"], onRequestQuote }: ComparisonTableProps) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(initialSelection);

  const selectedRobots = robots.filter((r) => selectedSlugs.includes(r.slug));

  const toggleSelect = (slug: string) => {
    if (selectedSlugs.includes(slug)) {
      if (selectedSlugs.length > 2) {
        setSelectedSlugs(selectedSlugs.filter((s) => s !== slug));
      }
    } else {
      if (selectedSlugs.length < 4) {
        setSelectedSlugs([...selectedSlugs, slug]);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Selector pills */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
        <label className="block text-xs font-semibold text-zinc-300 mb-2">
          Select 2 to 4 Robots to Compare Side-by-Side:
        </label>
        <div className="flex flex-wrap gap-2">
          {robots.map((r) => {
            const isSelected = selectedSlugs.includes(r.slug);
            return (
              <button
                key={r.slug}
                onClick={() => toggleSelect(r.slug)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  isSelected
                    ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20 font-bold"
                    : "border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white"
                }`}
              >
                {isSelected && <Check className="h-3 w-3" />}
                {r.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/40">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-950/80">
              <th className="p-4 text-xs font-semibold text-zinc-400 w-48 align-top">Robot Model</th>
              {selectedRobots.map((r) => (
                <th key={r.slug} className="p-4 text-sm font-bold text-white min-w-[220px] align-top">
                  {/* Robot Header Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800 mb-2.5 group">
                    <Image
                      src={r.imageUrl}
                      alt={r.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-1.5 right-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[9px] font-bold text-cyan-400 border border-cyan-500/30">
                      {r.category}
                    </div>
                  </div>

                  <Link href={`/robots/${r.slug}`} className="hover:text-cyan-400 transition block">
                    {r.name}
                  </Link>
                  <span className="block text-[11px] font-normal text-zinc-400 mt-0.5">{r.manufacturer}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60 text-xs">
            {/* Price */}
            <tr className="hover:bg-zinc-800/30">
              <td className="p-4 font-semibold text-zinc-300">Base Price</td>
              {selectedRobots.map((r) => (
                <td key={r.slug} className="p-4 font-extrabold text-cyan-400 text-sm">
                  {r.displayPrice}
                </td>
              ))}
            </tr>

            {/* Status */}
            <tr className="hover:bg-zinc-800/30">
              <td className="p-4 font-semibold text-zinc-300">Market Availability</td>
              {selectedRobots.map((r) => (
                <td key={r.slug} className="p-4">
                  <span className="rounded-full bg-zinc-800 px-2.5 py-1 text-[11px] text-zinc-200 border border-zinc-700">
                    {r.status}
                  </span>
                </td>
              ))}
            </tr>

            {/* DoF */}
            <tr className="hover:bg-zinc-800/30">
              <td className="p-4 font-semibold text-zinc-300">Degrees of Freedom (DoF)</td>
              {selectedRobots.map((r) => {
                const percent = Math.min(100, Math.round((r.dof / 40) * 100));
                return (
                  <td key={r.slug} className="p-4">
                    <span className="font-bold text-white block text-sm">{r.dof} DoF</span>
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-zinc-800 mt-1.5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </td>
                );
              })}
            </tr>

            {/* Height & Weight */}
            <tr className="hover:bg-zinc-800/30">
              <td className="p-4 font-semibold text-zinc-300">Height / Weight</td>
              {selectedRobots.map((r) => (
                <td key={r.slug} className="p-4 text-zinc-300">
                  {r.heightCm} cm / {r.weightKg} kg
                </td>
              ))}
            </tr>

            {/* Payload */}
            <tr className="hover:bg-zinc-800/30">
              <td className="p-4 font-semibold text-zinc-300">Arm / Hand Payload</td>
              {selectedRobots.map((r) => {
                const percent = Math.min(100, Math.round((r.payloadKg / 25) * 100));
                return (
                  <td key={r.slug} className="p-4">
                    <span className="font-bold text-emerald-400 block text-sm">{r.payloadKg} kg</span>
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-zinc-800 mt-1.5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </td>
                );
              })}
            </tr>

            {/* Battery Runtime */}
            <tr className="hover:bg-zinc-800/30">
              <td className="p-4 font-semibold text-zinc-300">Battery Runtime</td>
              {selectedRobots.map((r) => (
                <td key={r.slug} className="p-4 text-zinc-300">
                  {r.batteryMinutes > 0 ? `${r.batteryMinutes} mins (${(r.batteryMinutes / 60).toFixed(1)} hrs)` : "Tethered / Wall Power"}
                </td>
              ))}
            </tr>

            {/* Onboard Brain */}
            <tr className="hover:bg-zinc-800/30">
              <td className="p-4 font-semibold text-zinc-300">Onboard AI & Compute</td>
              {selectedRobots.map((r) => (
                <td key={r.slug} className="p-4 text-cyan-400 font-medium">
                  {r.onboardBrain}
                </td>
              ))}
            </tr>

            {/* Actuators */}
            <tr className="hover:bg-zinc-800/30">
              <td className="p-4 font-semibold text-zinc-300">Actuators & Mechanics</td>
              {selectedRobots.map((r) => (
                <td key={r.slug} className="p-4 text-zinc-400">
                  {r.specs.actuators}
                </td>
              ))}
            </tr>

            {/* Sensors */}
            <tr className="hover:bg-zinc-800/30">
              <td className="p-4 font-semibold text-zinc-300">Sensor Perception</td>
              {selectedRobots.map((r) => (
                <td key={r.slug} className="p-4 text-zinc-400">
                  {r.specs.sensors}
                </td>
              ))}
            </tr>

            {/* Max Speed */}
            <tr className="hover:bg-zinc-800/30">
              <td className="p-4 font-semibold text-zinc-300">Max Speed</td>
              {selectedRobots.map((r) => (
                <td key={r.slug} className="p-4 text-zinc-300">
                  {r.specs.speedMaxKmH} km/h
                </td>
              ))}
            </tr>

            {/* Actions Row */}
            <tr className="bg-zinc-950/60">
              <td className="p-4 font-semibold text-zinc-400">Next Steps</td>
              {selectedRobots.map((r) => (
                <td key={r.slug} className="p-4">
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/robots/${r.slug}`}
                      className="flex items-center justify-center gap-1 rounded-lg bg-zinc-800 py-1.5 text-xs font-semibold text-white hover:bg-cyan-500 hover:text-black transition"
                    >
                      View Specs <ArrowRight className="h-3 w-3" />
                    </Link>
                    {r.quoteEligible && onRequestQuote && (
                      <button
                        onClick={() => onRequestQuote(r.name)}
                        className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 py-1.5 text-xs font-medium text-cyan-400 hover:bg-cyan-500/20 transition"
                      >
                        Request Quote
                      </button>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
