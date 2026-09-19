"use client";

import Link from "next/link";
import { Sparkles, Bot, DollarSign, Wrench, ShieldCheck, ShoppingCart, GitCompare } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

export default function HomeHero() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 text-center">
      {/* Viral Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm">
        <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
        <span>{t.hero.badge}</span>
      </div>

      {/* Hero Title */}
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {t.hero.titleMain} <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
          {t.hero.titleHighlight}
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed">
        {t.hero.subtitle}
      </p>

      {/* Hero Quick Stat Badges */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-300">
        <div className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2">
          <Bot className="h-4 w-4 text-cyan-400" />
          <span>{t.hero.statRobots}</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2">
          <DollarSign className="h-4 w-4 text-emerald-400" />
          <span>{t.hero.statMassPrice}</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2">
          <Wrench className="h-4 w-4 text-amber-400" />
          <span>{t.hero.statOpenSource}</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2">
          <ShieldCheck className="h-4 w-4 text-purple-400" />
          <span>{t.hero.statB2B}</span>
        </div>
      </div>

      {/* Quick Route Nav Pills */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/humanoid-robots-for-sale"
          className="flex items-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 px-4 py-2.5 text-xs font-bold text-emerald-300 hover:bg-emerald-500/30 transition"
        >
          <ShoppingCart className="h-4 w-4" />
          {t.nav.forSale}
        </Link>
        <Link
          href="/humanoid-robot-price-guide"
          className="flex items-center gap-2 rounded-xl bg-zinc-800/80 border border-zinc-700 px-4 py-2.5 text-xs font-semibold text-white hover:bg-zinc-700 transition"
        >
          <DollarSign className="h-4 w-4 text-cyan-400" />
          {t.nav.priceGuide}
        </Link>
        <Link
          href="/compare"
          className="flex items-center gap-2 rounded-xl bg-zinc-800/80 border border-zinc-700 px-4 py-2.5 text-xs font-semibold text-white hover:bg-zinc-700 transition"
        >
          <GitCompare className="h-4 w-4 text-indigo-400" />
          {t.nav.compare}
        </Link>
        <Link
          href="/open-source/lerobot-guide"
          className="flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/30 px-4 py-2.5 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition"
        >
          <Wrench className="h-4 w-4 text-amber-400" />
          {t.nav.lerobotDIY}
        </Link>
      </div>
    </section>
  );
}
