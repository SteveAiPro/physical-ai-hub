"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, ExternalLink, ArrowRight, ShieldCheck, Gauge, Zap, AlertCircle, Video } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

interface RobotVideoShowcaseProps {
  onOpenQuoteModal?: (robotName?: string) => void;
}

export default function RobotVideoShowcase({ onOpenQuoteModal }: RobotVideoShowcaseProps) {
  const { t } = useI18n();
  const [activeVideo, setActiveVideo] = useState<"demo1" | "demo2" | "youtube">("demo1");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Guarantee autoplay and state synchronization
  useEffect(() => {
    if (videoRef.current && (activeVideo === "demo1" || activeVideo === "demo2")) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activeVideo]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // VideoObject Schema.org JSON-LD for Google Video Search Indexing
  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Unitree G1 Humanoid Agent Dynamic Field Demonstration",
    "description": "Official real-world demonstration of the Unitree G1 humanoid robot ($16,000) showcasing bipedal dynamic balance, kip-up recovery, and dexterous force-controlled manipulation.",
    "thumbnailUrl": "https://physicalaidirectory.com/images/robots/unitree-g1.jpg",
    "uploadDate": "2026-05-15T08:00:00+08:00",
    "contentUrl": "https://physicalaidirectory.com/videos/unitree-g1-demo.mp4",
    "embedUrl": "https://www.youtube.com/embed/GzX1qOIO1bE"
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />

      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          <span>{t.videoShowcase.badge}</span>
        </div>
        <h2 className="mt-4 text-2xl sm:text-4xl font-black text-white tracking-tight">
          {t.videoShowcase.title}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
          {t.videoShowcase.subtitle}
        </p>

        {/* Source Switcher Multi-Angle Tabs */}
        <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-1 rounded-xl border border-zinc-800 bg-zinc-950/80 p-1">
          <button
            onClick={() => setActiveVideo("demo1")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              activeVideo === "demo1"
                ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20 font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Video className="h-3.5 w-3.5" />
            <span>极速实测 1：起立自愈 (3MB)</span>
          </button>

          <button
            onClick={() => setActiveVideo("demo2")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              activeVideo === "demo2"
                ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20 font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Zap className="h-3.5 w-3.5" />
            <span>极速实测 2：跑跳与灵巧手 (6.7MB)</span>
          </button>

          <button
            onClick={() => setActiveVideo("youtube")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              activeVideo === "youtube"
                ? "bg-red-600 text-white shadow-md shadow-red-600/20 font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            <span>YouTube 官方发布会 (4K)</span>
          </button>
        </div>
      </div>

      {/* Futuristic Video Player Showcase Frame */}
      <div className="cyber-card relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-2 sm:p-3 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black">
          {activeVideo !== "youtube" ? (
            <div className="relative h-full w-full group cursor-pointer" onClick={togglePlay}>
              <video
                ref={videoRef}
                src={activeVideo === "demo1" ? "/videos/unitree-g1-demo.mp4" : "/videos/unitree-g1-full.mp4"}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={() => {
                  if (videoRef.current && videoRef.current.duration) {
                    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
                  }
                }}
                className="h-full w-full object-cover object-center"
              />

              {/* Center Play Button Overlay when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition">
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-cyan-500 text-black shadow-2xl shadow-cyan-500/50 hover:scale-110 transition duration-300">
                    <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-black translate-x-0.5" />
                  </div>
                  <span className="mt-3 text-xs sm:text-sm font-bold text-white tracking-wide uppercase bg-black/80 px-4 py-1.5 rounded-full border border-cyan-500/40 shadow-lg">
                    点击播放动态实测
                  </span>
                </div>
              )}

              {/* HUD Corner Accents */}
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

              {/* Top Telemetry Overlay */}
              <div className="absolute top-4 left-6 right-6 flex items-center justify-between pointer-events-none text-[11px] font-mono text-cyan-300">
                <span className="flex items-center gap-2 rounded-lg bg-black/60 px-2.5 py-1 border border-cyan-500/30 backdrop-blur-md">
                  <span className={`h-2 w-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-ping" : "bg-amber-400"}`} />
                  {isPlaying ? t.videoShowcase.telemetryStatus : "PAUSED • CLICK TO PLAY"}
                </span>
                <span className="hidden sm:inline-block rounded-lg bg-black/60 px-2.5 py-1 border border-zinc-800 backdrop-blur-md text-zinc-300">
                  {activeVideo === "demo1" ? "ANGLE 01: DYNAMIC KIP-UP TEST" : "ANGLE 02: DEXTEROUS LOCOMOTION"} • 60 FPS
                </span>
              </div>

              {/* Dynamic Video Progress Bar */}
              <div className="absolute bottom-16 left-4 right-4 h-1 bg-zinc-800/80 rounded-full overflow-hidden pointer-events-none">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Custom Player Controls Bar */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/70 px-4 py-2 border border-zinc-800/80 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition"
                    aria-label="Play or Pause"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-black" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-200 hover:text-white transition"
                    aria-label="Toggle Mute"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>

                  <span className="text-xs font-mono text-zinc-300 hidden sm:inline">
                    {activeVideo === "demo1" ? "Unitree G1 • Dynamic Self-Recovery Stride" : "Unitree G1 • Force-Controlled Manipulation"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleFullscreen}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-200 hover:text-white transition"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative h-full w-full bg-black">
              {/* Responsive YouTube Iframe with Verified Active Unitree G1 Video */}
              <iframe
                src="https://www.youtube-nocookie.com/embed/GzX1qOIO1bE?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1"
                title="Unitree G1 Humanoid Agent Official Launch Video"
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              {/* Quick external link badge for direct access */}
              <div className="absolute top-3 right-3 flex items-center gap-2">
                <a
                  href="https://www.youtube.com/watch?v=GzX1qOIO1bE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-black/80 px-3 py-1.5 text-xs font-semibold text-white border border-red-500/40 hover:bg-red-600 transition backdrop-blur-md shadow-lg"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>在 YouTube 原站打开</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Telemetry Feature Cards Under Video */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 p-2">
          <div className="flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <div>
              <span className="block text-xs font-bold text-white">{t.videoShowcase.telemetryBalance}</span>
              <span className="text-[10px] text-zinc-400">Continuous posture stability under perturbation</span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3">
            <Zap className="h-5 w-5 text-cyan-400 flex-shrink-0" />
            <div>
              <span className="block text-xs font-bold text-white">{t.videoShowcase.telemetrySpeed}</span>
              <span className="text-[10px] text-zinc-400">High-torque knee & hip planetary motors</span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3">
            <Gauge className="h-5 w-5 text-purple-400 flex-shrink-0" />
            <div>
              <span className="block text-xs font-bold text-white">{t.videoShowcase.telemetryTorque}</span>
              <span className="text-[10px] text-zinc-400">23-43 DoF force-controlled dexterity</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-3 border-t border-zinc-800/80 pt-3 px-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-zinc-400 font-medium text-center sm:text-left">
            {t.videoShowcase.specsHighlight}
          </span>
          <div className="flex items-center gap-2">
            <Link
              href="/robots/unitree-g1"
              className="flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-black hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
            >
              {t.videoShowcase.viewSpecs} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={() => onOpenQuoteModal && onOpenQuoteModal("Unitree G1")}
              className="rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-700 transition"
            >
              {t.videoShowcase.getPricing}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
