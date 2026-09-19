"use client";

import { useEffect, useRef } from "react";

export default function AdsterraNative() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.adLoaded) return;
    containerRef.current.dataset.adLoaded = "true";

    try {
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = "https://pl31417290.profitableratecpmnetwork.com/80bbb8aa14ebb4209b86ba7065181bc3/invoke.js";

      containerRef.current.appendChild(script);
    } catch (e) {
      console.error("Adsterra Native load error", e);
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
            Sponsored Industry Showcase
          </span>
        </div>
        <span className="text-[10px] text-zinc-600 font-mono">Verified Adsterra Partner</span>
      </div>
      <div
        ref={containerRef}
        className="w-full min-h-[140px] bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-3 relative overflow-hidden backdrop-blur-sm"
      >
        <div id="container-80bbb8aa14ebb4209b86ba7065181bc3" />
      </div>
    </div>
  );
}
