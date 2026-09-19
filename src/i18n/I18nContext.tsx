"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, TRANSLATIONS, TranslationDictionary } from "./translations";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationDictionary;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  setLocale: () => {},
  t: TRANSLATIONS.en,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Check URL query param ?lang= or localStorage or browser navigator
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const urlLang = searchParams.get("lang") as Locale | null;
      if (urlLang && (urlLang === "en" || urlLang === "zh" || urlLang === "ja")) {
        setLocaleState(urlLang);
        localStorage.setItem("app_locale", urlLang);
        return;
      }

      const saved = localStorage.getItem("app_locale") as Locale | null;
      if (saved && (saved === "en" || saved === "zh" || saved === "ja")) {
        setLocaleState(saved);
        return;
      }

      // Browser detection
      const navLang = navigator.language.toLowerCase();
      if (navLang.startsWith("zh")) {
        setLocaleState("zh");
      } else if (navLang.startsWith("ja")) {
        setLocaleState("ja");
      }
    } catch {
      // fallback to default "en"
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("app_locale", newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // ignore
    }
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: TRANSLATIONS[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
