import { ROBOTS_DATABASE } from "@/data/robots";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ShoppingCart, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink, HelpCircle, PhoneCall, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Humanoid Robots for Sale (2026 Live Inventory & Pricing)",
  description: "Browse commercial humanoid robots available to purchase right now. Compare prices for Unitree G1 ($16,000), Unitree Go2 ($1,600), 1X NEO, and request official enterprise distributor quotes.",
  keywords: [
    "humanoid robot for sale",
    "humanoid robots for sale now",
    "buy humanoid robot",
    "unitree g1 for sale",
    "commercial humanoid robots",
    "humanoid robot price 2026"
  ]
};

export default function HumanoidRobotsForSalePage() {
  const forSaleRobots = ROBOTS_DATABASE.filter(
    (r) => r.status === "In Stock & For Sale" || r.status === "Accepting Pre-Orders"
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can an individual buy a humanoid robot in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Platforms like the Unitree G1 are mass-produced and commercially available to individual researchers, universities, and tech enthusiasts starting at $16,000 USD. Pre-orders are also open for consumer home humanoids like 1X NEO."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cheapest humanoid robot you can buy today?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Unitree G1 is currently the most affordable full-scale humanoid robot on the commercial market, priced at $16,000 for the base model. For desktop-scale robotic arms, open-source kits like Hugging Face LeRobot cost under $400 in parts."
        }
      },
      {
        "@type": "Question",
        "name": "How long is the delivery lead time for humanoid robots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard delivery times range from 4 to 8 weeks for in-production models like Unitree G1, shipped via specialized global air freight with wooden shock-absorbing crating. Enterprise industrial robots typically require 3 to 6 months including factory acceptance testing."
        }
      }
    ]
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <ShoppingCart className="h-3.5 w-3.5" />
          <span>Live 2026 Commercial Inventory &amp; Dealer Pricing</span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
          Humanoid Robots for Sale Now
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
          Looking to purchase a humanoid robot for AI research, industrial inspection, or enterprise automation? Here is the verified list of robots accepting commercial purchase orders and global pre-orders today.
        </p>
      </div>

      {/* For Sale Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {forSaleRobots.map((robot) => (
          <div
            key={robot.slug}
            className="group cyber-card flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 transition hover:border-emerald-500/50 hover:bg-zinc-900/95 hover:shadow-2xl hover:shadow-emerald-500/10"
          >
            <div>
              {/* Card Image Thumbnail */}
              <div className="scan-container relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800 mb-4">
                <Image
                  src={robot.imageUrl}
                  alt={robot.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {robot.status}
                </div>
                <div className="absolute top-2 right-2 rounded bg-black/60 px-2 py-0.5 text-[10px] font-bold text-zinc-300 backdrop-blur-md">
                  {robot.category}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition">
                <Link href={`/robots/${robot.slug}`}>
                  {robot.name}
                </Link>
              </h3>
              <p className="mt-1 text-xs text-zinc-400 line-clamp-2">{robot.tagline}</p>

              <div className="mt-4 rounded-xl bg-zinc-950 p-4 border border-zinc-800/80">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-zinc-400">Official Price</span>
                  <span className="text-xl font-extrabold text-white">{robot.displayPrice}</span>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-2 border-t border-zinc-800 pt-2 text-center text-xs">
                  <div>
                    <span className="block text-[10px] text-zinc-400">DoF</span>
                    <span className="font-bold text-white">{robot.dof}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-zinc-400">Payload</span>
                    <span className="font-bold text-emerald-400">{robot.payloadKg}kg</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-zinc-400">Battery</span>
                    <span className="font-bold text-white">{robot.batteryMinutes}m</span>
                  </div>
                </div>
              </div>

              <ul className="mt-4 space-y-1.5 text-xs text-zinc-300">
                {robot.keyFeatures.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-zinc-800 pt-4 flex items-center gap-3">
              {robot.buyUrl ? (
                <a
                  href={robot.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-emerald-500 py-2.5 px-3 text-center text-xs font-bold text-black shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition"
                >
                  Buy Directly Online
                </a>
              ) : (
                <Link
                  href={`/robots/${robot.slug}`}
                  className="flex-1 rounded-xl bg-cyan-500 py-2.5 px-3 text-center text-xs font-bold text-black hover:bg-cyan-400 transition"
                >
                  View Spec Sheet
                </Link>
              )}
              <Link
                href={`/robots/${robot.slug}`}
                className="rounded-xl border border-zinc-700 bg-zinc-800 py-2.5 px-3 text-xs font-medium text-white hover:bg-zinc-700"
              >
                Specs
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Procurement Process Stepper */}
      <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
        <h2 className="text-xl font-bold text-white text-center">
          How to Procure a Commercial Humanoid in 4 Steps
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800">
            <span className="text-lg font-bold text-cyan-400">01</span>
            <h4 className="mt-2 font-bold text-white">Application Matching</h4>
            <p className="mt-1 text-zinc-400 text-[11px] leading-relaxed">
              Define your payload requirements, manipulation dexterity (hands vs grippers), and simulation environment (Isaac Sim, MuJoCo).
            </p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800">
            <span className="text-lg font-bold text-cyan-400">02</span>
            <h4 className="mt-2 font-bold text-white">Distributor Quotation</h4>
            <p className="mt-1 text-zinc-400 text-[11px] leading-relaxed">
              Obtain formal proforma invoices, academic discounts (up to 15% for accredited labs), and lead-time guarantees.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800">
            <span className="text-lg font-bold text-cyan-400">03</span>
            <h4 className="mt-2 font-bold text-white">Factory Calibration</h4>
            <p className="mt-1 text-zinc-400 text-[11px] leading-relaxed">
              Each unit undergoes 72 hours of continuous joint stress tests and sensor alignment before crating.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800">
            <span className="text-lg font-bold text-cyan-400">04</span>
            <h4 className="mt-2 font-bold text-white">Global Air Freight</h4>
            <p className="mt-1 text-zinc-400 text-[11px] leading-relaxed">
              Shipped in reinforced flight cases with customs clearance documentation (HS Code 8479.50) to your facility door.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial FAQ Section */}
      <section className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-white text-center mb-6">
          Frequently Asked Questions About Buying Humanoids
        </h2>
        <div className="space-y-4 text-xs">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h3 className="font-bold text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-cyan-400" />
              Can an individual buy a humanoid robot in 2026?
            </h3>
            <p className="mt-2 text-zinc-400 leading-relaxed">
              Yes. Mass-produced robots like Unitree G1 ($16,000) are commercially available for individuals, universities, and commercial entities worldwide without military ITAR restrictions.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h3 className="font-bold text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-cyan-400" />
              What is the cheapest humanoid robot you can buy today?
            </h3>
            <p className="mt-2 text-zinc-400 leading-relaxed">
              The Unitree G1 starts at $16,000, establishing the baseline for full bipedal humanoids. For desktop manipulation arms, the Hugging Face LeRobot SO-ARM100 can be built for under $400.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
            <h3 className="font-bold text-white flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-cyan-400" />
              Do these robots include AI software and simulation models?
            </h3>
            <p className="mt-2 text-zinc-400 leading-relaxed">
              Yes. Most commercial platforms come pre-loaded with walking and balance controllers, Python SDKs, and ROS2 packages, allowing engineers to deploy reinforcement learning and VLA models immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
