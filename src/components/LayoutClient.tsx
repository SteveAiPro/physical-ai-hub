"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QuoteModal from "./QuoteModal";
import { I18nProvider } from "@/i18n/I18nContext";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [targetRobotName, setTargetRobotName] = useState("General Humanoid Robot");

  const handleOpenQuoteModal = (robotName?: string) => {
    if (robotName) setTargetRobotName(robotName);
    setQuoteModalOpen(true);
  };

  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100 selection:bg-cyan-500 selection:text-black">
        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />
        <main className="flex-1">{children}</main>
        <Footer />
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          robotName={targetRobotName}
        />
      </div>
    </I18nProvider>
  );
}
