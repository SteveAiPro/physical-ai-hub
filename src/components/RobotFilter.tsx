"use client";

import { useState } from "react";
import { RobotSpec } from "@/data/robots";
import RobotCard from "./RobotCard";
import { Search, SlidersHorizontal, Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";

interface RobotFilterProps {
  robots: RobotSpec[];
  onRequestQuote?: (robotName: string) => void;
}

export default function RobotFilter({ robots, onRequestQuote }: RobotFilterProps) {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { key: "All", label: t.filters.all },
    { key: "Humanoid", label: t.filters.humanoid },
    { key: "Quadruped", label: t.filters.quadruped },
    { key: "Open Source Kit", label: t.filters.openSource },
  ];

  const statuses = [
    { key: "All", label: t.filters.statusAll },
    { key: "In Stock & For Sale", label: t.filters.inStock },
    { key: "Accepting Pre-Orders", label: t.filters.preOrders },
    { key: "Enterprise Pilot", label: t.filters.enterprisePilot },
  ];

  const filteredRobots = robots.filter((r) => {
    const matchesCategory = selectedCategory === "All" || r.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || r.status === selectedStatus;
    const matchesSearch =
      searchQuery === "" ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.keyFeatures.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <div>
      {/* Filter Header */}
      <div className="mb-4 text-left">
        <h2 className="text-xl font-bold text-white tracking-tight">
          {t.filters.title}
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          {t.filters.subtitle}
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                selectedCategory === cat.key
                  ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20"
                  : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.filters.searchPlaceholder}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-2 pl-9 pr-3 text-xs text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Secondary Status Filters */}
      <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400 overflow-x-auto pb-1">
        <span className="flex items-center gap-1 text-zinc-400 flex-shrink-0">
          <SlidersHorizontal className="h-3 w-3" /> Status:
        </span>
        {statuses.map((st) => (
          <button
            key={st.key}
            onClick={() => setSelectedStatus(st.key)}
            className={`rounded-full px-2.5 py-1 text-[11px] border transition flex-shrink-0 ${
              selectedStatus === st.key
                ? "border-cyan-500/60 bg-cyan-500/10 text-cyan-300 font-medium"
                : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {st.label}
          </button>
        ))}
      </div>

      {/* Robots Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRobots.length > 0 ? (
          filteredRobots.map((robot) => (
            <RobotCard key={robot.slug} robot={robot} onRequestQuote={onRequestQuote} />
          ))
        ) : (
          <div className="col-span-full py-16 text-center text-zinc-400">
            <p className="text-sm">No robots matched your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedStatus("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-cyan-400 underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
