"use client";

import Link from "next/link";
import { useState } from "react";
import { Bot, ShoppingCart, DollarSign, GitCompare, Wrench, Menu, X, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  onOpenQuoteModal?: (robotName?: string) => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-white transition hover:opacity-90">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/20">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
              PhysicalAI <span className="rounded bg-cyan-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-cyan-400 border border-cyan-500/20">HUB</span>
            </span>
            <span className="text-[10px] text-zinc-400 -mt-1">{t.nav.tagline}</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800/60 hover:text-white"
          >
            {t.nav.directory}
          </Link>
          <Link
            href="/humanoid-robots-for-sale"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-emerald-400 transition hover:bg-emerald-500/10"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            {t.nav.forSale}
          </Link>
          <Link
            href="/humanoid-robot-price-guide"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800/60 hover:text-white"
          >
            <DollarSign className="h-3.5 w-3.5" />
            {t.nav.priceGuide}
          </Link>
          <Link
            href="/compare"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800/60 hover:text-white"
          >
            <GitCompare className="h-3.5 w-3.5" />
            {t.nav.compare}
          </Link>
          <Link
            href="/open-source/lerobot-guide"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-amber-300 transition hover:bg-amber-500/10"
          >
            <Wrench className="h-3.5 w-3.5" />
            {t.nav.lerobotDIY}
          </Link>
        </nav>

        {/* Language Switcher & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />

          <button
            onClick={() => onOpenQuoteModal && onOpenQuoteModal("General Inquiry")}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {t.nav.requestQuote}
          </button>
        </div>

        {/* Mobile menu button & quick lang toggle */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
            >
              {t.nav.directory}
            </Link>
            <Link
              href="/humanoid-robots-for-sale"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-500/10"
            >
              <ShoppingCart className="h-4 w-4" />
              {t.nav.forSale}
            </Link>
            <Link
              href="/humanoid-robot-price-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
            >
              <DollarSign className="h-4 w-4" />
              {t.nav.priceGuide}
            </Link>
            <Link
              href="/compare"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
            >
              <GitCompare className="h-4 w-4" />
              {t.nav.compare}
            </Link>
            <Link
              href="/open-source/lerobot-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-amber-300 hover:bg-amber-500/10"
            >
              <Wrench className="h-4 w-4" />
              {t.nav.lerobotDIY}
            </Link>
            <div className="pt-2 border-t border-zinc-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal("General Inquiry");
                }}
                className="flex items-center justify-center gap-2 rounded-lg bg-cyan-500 py-2.5 text-xs font-bold text-black"
              >
                <Sparkles className="h-4 w-4" />
                {t.nav.requestQuote}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
