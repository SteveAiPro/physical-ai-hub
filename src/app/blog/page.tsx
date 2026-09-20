import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts } from "@/data/posts";
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, ChevronRight, Tag } from "lucide-react";
import AdsterraNative from "@/components/AdsterraNative";

export const metadata: Metadata = {
  title: "Robotics & Physical AI Blog | 2026 Procurement & Benchmarks",
  description: "In-depth engineering benchmarks, procurement guides, actuator teardowns, and TCO breakdowns for humanoid robots and physical AI systems.",
  keywords: [
    "humanoid robot blog",
    "physical ai analysis",
    "unitree g1 procurement",
    "tesla optimus benchmark",
    "robotics engineering guide",
    "embodied ai hardware"
  ]
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
          <BookOpen className="h-3.5 w-3.5" />
          <span>Physical AI Editorial &amp; Engineering Reports</span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl tracking-tight">
          Robotics &amp; Physical AI Blog
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
          Technical deep-dives, total cost of ownership (TCO) comparisons, actuator specifications, and empirical guidance for robotics engineers and enterprise buyers.
        </p>
      </div>

      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-cyan-500/40 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-cyan-500/5"
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                <span className="inline-flex items-center rounded-md bg-cyan-500/10 px-2 py-1 font-medium text-cyan-400 border border-cyan-500/20">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-zinc-500" />
                  {post.readTimeMinutes} min read
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition line-clamp-2 mt-2">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              {/* Excerpt */}
              <p className="mt-3 text-xs text-zinc-400 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded bg-zinc-800/80 px-2 py-0.5 text-[11px] text-zinc-300"
                  >
                    <Tag className="h-2.5 w-2.5 text-zinc-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author & CTA */}
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-7 w-7 rounded-full object-cover ring-1 ring-zinc-700"
                />
                <div className="text-left">
                  <div className="text-xs font-semibold text-zinc-200">{post.author.name}</div>
                  <div className="text-[10px] text-zinc-500 flex items-center gap-1">
                    <Calendar className="h-2.5 w-2.5" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </div>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-0.5 transition"
              >
                Read
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Contextual Directory Hub Links */}
      <section className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-4 w-4 text-cyan-400" />
          <h2 className="text-lg font-bold text-white">Explore Physical AI Knowledge Center</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/humanoid-robots-for-sale"
            className="group rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition hover:border-emerald-500/40 hover:bg-emerald-950/10"
          >
            <div className="text-xs font-bold text-emerald-400 mb-1">Humanoids For Sale</div>
            <div className="text-xs text-zinc-400 leading-snug">
              Order production units like Unitree G1 with global shipping &amp; warranties.
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-emerald-400 group-hover:translate-x-1 transition">
              View Inventory <ChevronRight className="h-3 w-3" />
            </div>
          </Link>

          <Link
            href="/humanoid-robot-price-guide"
            className="group rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition hover:border-cyan-500/40 hover:bg-cyan-950/10"
          >
            <div className="text-xs font-bold text-cyan-400 mb-1">2026 Price Index</div>
            <div className="text-xs text-zinc-400 leading-snug">
              Comprehensive budget breakdowns from $400 DIY kits to $150k enterprise fleets.
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-cyan-400 group-hover:translate-x-1 transition">
              View Price Tiers <ChevronRight className="h-3 w-3" />
            </div>
          </Link>

          <Link
            href="/compare"
            className="group rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition hover:border-blue-500/40 hover:bg-blue-950/10"
          >
            <div className="text-xs font-bold text-blue-400 mb-1">Compare Matrix</div>
            <div className="text-xs text-zinc-400 leading-snug">
              Side-by-side DoF, payload, actuator torque, and neural stack comparison.
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-blue-400 group-hover:translate-x-1 transition">
              Compare Models <ChevronRight className="h-3 w-3" />
            </div>
          </Link>

          <Link
            href="/open-source/lerobot-guide"
            className="group rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition hover:border-amber-500/40 hover:bg-amber-950/10"
          >
            <div className="text-xs font-bold text-amber-400 mb-1">LeRobot DIY Guide</div>
            <div className="text-xs text-zinc-400 leading-snug">
              Build a low-cost teleoperation rig and train Physical AI policies from scratch.
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-amber-400 group-hover:translate-x-1 transition">
              Build Rig <ChevronRight className="h-3 w-3" />
            </div>
          </Link>
        </div>
      </section>

      {/* Adsterra Native Ad */}
      <AdsterraNative />
    </div>
  );
}
