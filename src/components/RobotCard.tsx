"use client";

import Link from "next/link";
import Image from "next/image";
import { RobotSpec } from "@/data/robots";
import { ArrowRight, Cpu, Gauge, Zap, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

interface RobotCardProps {
  robot: RobotSpec;
  onRequestQuote?: (robotName: string) => void;
}

export default function RobotCard({ robot, onRequestQuote }: RobotCardProps) {
  const { t, locale } = useI18n();

  const getStatusBadge = (status: RobotSpec["status"]) => {
    switch (status) {
      case "In Stock & For Sale":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/20";
      case "Accepting Pre-Orders":
        return "bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm shadow-purple-500/20";
      case "Enterprise Pilot":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm shadow-cyan-500/20";
      case "Open Source / DIY":
        return "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm shadow-amber-500/20";
      default:
        return "bg-zinc-800 text-zinc-300 border-zinc-700";
    }
  };

  const getLocalizedStatus = (status: RobotSpec["status"]) => {
    switch (status) {
      case "In Stock & For Sale":
        return t.filters.inStock;
      case "Accepting Pre-Orders":
        return t.filters.preOrders;
      case "Enterprise Pilot":
        return t.filters.enterprisePilot;
      case "Open Source / DIY":
        return t.filters.openSourceDiy;
      default:
        return status;
    }
  };

  // Spec calculation for visual meters (Max DoF 40, Max Payload 25kg)
  const dofPercentage = Math.min(100, Math.round((robot.dof / 40) * 100));

  return (
    <div className="group cyber-card relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-4 transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-900/95 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div>
        {/* Visual Showcase Thumbnail with Scanner Effect */}
        <div className="scan-container relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800/60">
          <Image
            src={robot.imageUrl}
            alt={`${robot.name} - ${robot.category} Physical AI Robot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-110"
            priority={robot.featured}
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

          {/* Top Floating Badges */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold backdrop-blur-md whitespace-nowrap shrink-0 ${getStatusBadge(robot.status)}`}>
              {robot.status === "In Stock & For Sale" && (
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
              )}
              <span>{getLocalizedStatus(robot.status)}</span>
            </span>

            <span className="rounded-md border border-white/10 bg-black/60 px-2 py-0.5 text-[10px] font-bold text-zinc-300 backdrop-blur-md whitespace-nowrap shrink-0">
              {robot.category}
            </span>
          </div>

          {/* Bottom Manufacturer Watermark on Image */}
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-400">
            <span className="font-medium text-cyan-400/90 drop-shadow-md flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> {robot.manufacturer}
            </span>
            <span className="text-[10px] text-zinc-400/90 font-mono bg-zinc-900/80 px-1.5 py-0.5 rounded border border-zinc-700/50">
              {robot.country}
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="mt-3.5 px-1">
          <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
            <Link href={`/robots/${robot.slug}`} className="hover:underline flex items-center justify-between">
              <span>{robot.name}</span>
            </Link>
          </h3>
          <p className="mt-1 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {robot.tagline}
          </p>
        </div>

        {/* Kinematics Spec Meter */}
        <div className="mt-3.5 px-1">
          <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
            <span className="flex items-center gap-1">
              <Gauge className="h-3 w-3 text-cyan-400" />
              {t.card.dofMeter} ({robot.dof} DoF)
            </span>
            <span className="font-mono text-cyan-400 font-semibold">{dofPercentage}% Max</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-400 transition-all duration-1000 ease-out group-hover:brightness-125"
              style={{ width: `${dofPercentage}%` }}
            />
          </div>
        </div>

        {/* Specs Grid */}
        <div className="mt-3 grid grid-cols-3 gap-1.5 rounded-xl bg-zinc-950/80 p-2.5 text-center border border-zinc-800/80">
          <div>
            <span className="block text-[10px] text-zinc-500">{t.card.joints}</span>
            <span className="text-xs font-bold text-zinc-200">{robot.dof} DoF</span>
          </div>
          <div>
            <span className="block text-[10px] text-zinc-500">{t.card.payload}</span>
            <span className="text-xs font-bold text-zinc-200">{robot.payloadKg} kg</span>
          </div>
          <div>
            <span className="block text-[10px] text-zinc-500">{t.card.weight}</span>
            <span className="text-xs font-bold text-zinc-200">{robot.weightKg} kg</span>
          </div>
        </div>

        {/* AI & Brain Tag */}
        <div className="mt-3 flex items-center gap-1.5 px-1 text-[11px] text-zinc-400">
          <Cpu className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0 animate-pulse" />
          <span className="truncate">{robot.onboardBrain}</span>
        </div>
      </div>

      {/* Pricing & Footer Actions */}
      <div className="mt-4 border-t border-zinc-800/80 pt-3 flex items-center justify-between px-1">
        <div>
          <span className="block text-[10px] text-zinc-500">{t.card.basePrice}</span>
          <span className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300">
            {robot.displayPrice}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {robot.quoteEligible && onRequestQuote && (
            <button
              onClick={() => onRequestQuote(robot.name)}
              className="rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-1.5 text-xs font-medium text-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-200"
            >
              {t.card.quoteBtn}
            </button>
          )}

          <Link
            href={`/robots/${robot.slug}`}
            className="flex items-center gap-1 rounded-lg bg-zinc-800 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-cyan-500 hover:text-black hover:shadow-lg hover:shadow-cyan-500/20"
          >
            {t.card.specsBtn} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
