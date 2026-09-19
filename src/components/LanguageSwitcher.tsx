"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/i18n/I18nContext";
import { Locale } from "@/i18n/translations";
import { Globe, ChevronDown, Check } from "lucide-react";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Locale; label: string; flag: string; nativeName: string }[] = [
    { code: "en", label: "EN", flag: "🇺🇸", nativeName: "English" },
    { code: "zh", label: "中文", flag: "🇨🇳", nativeName: "简体中文" },
    { code: "ja", label: "日本語", flag: "🇯🇵", nativeName: "日本語" },
  ];

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-cyan-500/50 hover:bg-zinc-900 hover:text-white"
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5 text-cyan-400" />
        <span className="mr-0.5">{currentLang.flag}</span>
        <span>{currentLang.label}</span>
        <ChevronDown className={`h-3 w-3 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 origin-top-right rounded-xl border border-zinc-800 bg-zinc-950/95 p-1.5 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
          {languages.map((l) => {
            const isSelected = l.code === locale;
            return (
              <button
                key={l.code}
                onClick={() => {
                  setLocale(l.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium transition ${
                  isSelected
                    ? "bg-cyan-500/10 text-cyan-400 font-bold"
                    : "text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{l.flag}</span>
                  <span>{l.nativeName}</span>
                </span>
                {isSelected && <Check className="h-3.5 w-3.5 text-cyan-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
