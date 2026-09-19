"use client";

import { useEffect, useRef } from "react";

export default function AdsterraBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.dataset.adLoaded) return;
    containerRef.current.dataset.adLoaded = "true";

    try {
      const atOptionsScript = document.createElement("script");
      atOptionsScript.type = "text/javascript";
      atOptionsScript.innerHTML = `
        atOptions = {
          'key' : '4de7243e67b4e18fd31a5ce85ce25f04',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;

      const invokeScript = document.createElement("script");
      invokeScript.type = "text/javascript";
      invokeScript.src = "https://www.highrevenueformat.com/4de7243e67b4e18fd31a5ce85ce25f04/invoke.js";

      containerRef.current.appendChild(atOptionsScript);
      containerRef.current.appendChild(invokeScript);
    } catch (e) {
      console.error("Adsterra Banner load error", e);
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center my-6 px-4">
      <div className="flex items-center gap-2 mb-1.5 text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span>Sponsored Ad</span>
        <span className="text-zinc-600">•</span>
        <span className="text-zinc-600">Adsterra 728x90</span>
      </div>
      <div
        ref={containerRef}
        className="w-full max-w-[728px] min-h-[90px] bg-zinc-900/40 border border-zinc-800/60 rounded-lg flex items-center justify-center overflow-hidden shadow-inner"
      />
    </div>
  );
}
