import { ROBOTS_DATABASE, RobotSpec } from "@/data/robots";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowLeft, CheckCircle2, Cpu, DollarSign, ShieldCheck, Gauge, ExternalLink, ArrowRight, Bot, Zap, Globe, Sparkles, BatteryCharging, Weight, Maximize2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ROBOTS_DATABASE.map((robot) => ({
    slug: robot.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const robot = ROBOTS_DATABASE.find((r) => r.slug === slug);
  if (!robot) return { title: "Robot Not Found" };

  return {
    title: `${robot.name} Specs, Price & Buying Guide 2026`,
    description: `${robot.tagline} Detailed review of ${robot.dof} DoF kinematics, ${robot.displayPrice} pricing, onboard ${robot.specs.aiModel}, and manufacturer availability.`,
    keywords: [
      robot.name,
      `${robot.name} price`,
      `${robot.name} specs`,
      `${robot.name} review`,
      `${robot.manufacturer} robot`,
      "humanoid robot specs"
    ],
    openGraph: {
      title: `${robot.name}: Full Specs & Pricing Analysis`,
      description: robot.description,
      type: "article",
      images: [
        {
          url: robot.imageUrl,
          width: 1200,
          height: 675,
          alt: robot.name
        }
      ]
    }
  };
}

export default async function RobotDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const robot = ROBOTS_DATABASE.find((r) => r.slug === slug);

  if (!robot) {
    notFound();
  }

  // Related robots (other robots in database)
  const relatedRobots = ROBOTS_DATABASE.filter((r) => r.slug !== robot.slug).slice(0, 3);

  // Benchmarks for visual progress meters
  const dofPercent = Math.min(100, Math.round((robot.dof / 40) * 100));
  const payloadPercent = Math.min(100, Math.round((robot.payloadKg / 25) * 100));
  const batteryPercent = robot.batteryMinutes > 0 ? Math.min(100, Math.round((robot.batteryMinutes / 300) * 100)) : 100;
  const speedPercent = Math.min(100, Math.round((robot.specs.speedMaxKmH / 18) * 100));

  // Schema.org Product JSON-LD
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": robot.name,
    "image": robot.imageUrl,
    "description": robot.description,
    "brand": {
      "@type": "Brand",
      "name": robot.manufacturer
    },
    "category": robot.category,
    "offers": {
      "@type": "Offer",
      "price": typeof robot.priceUSD === "number" ? robot.priceUSD : "0",
      "priceCurrency": "USD",
      "availability": robot.status === "In Stock & For Sale" 
        ? "https://schema.org/InStock" 
        : "https://schema.org/PreOrder"
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Back breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-xs text-zinc-400">
        <Link href="/" className="flex items-center gap-1 hover:text-white transition">
          <ArrowLeft className="h-3 w-3" /> All Robots
        </Link>
        <span>/</span>
        <span className="text-zinc-500">{robot.category}</span>
        <span>/</span>
        <span className="text-cyan-400 font-medium">{robot.name}</span>
      </div>

      {/* Hero Showcase Section with Image & Specs */}
      <div className="cyber-card overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Info & Description */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 text-xs font-semibold text-cyan-400">
                {robot.category}
              </span>
              <span className="rounded-full bg-zinc-800 border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                {robot.status}
              </span>
              <span className="flex items-center gap-1 text-xs text-zinc-400">
                <Globe className="h-3.5 w-3.5 text-zinc-500" /> {robot.country}
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                {robot.name}
              </h1>
              <p className="mt-1 text-sm font-semibold text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4" /> By {robot.manufacturer}
              </p>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {robot.tagline}
            </p>

            {/* Price Card Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-zinc-950 p-4">
              <div>
                <span className="block text-[11px] font-medium text-cyan-400 uppercase tracking-wider">Manufacturer MSRP / Status</span>
                <span className="text-2xl font-extrabold text-white">{robot.displayPrice}</span>
              </div>
              <div className="flex items-center gap-2">
                {robot.buyUrl ? (
                  <a
                    href={robot.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-bold text-black shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition"
                  >
                    Official Store <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    href="/humanoid-robots-for-sale"
                    className="flex items-center gap-1.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30 px-4 py-2.5 text-xs font-bold text-cyan-300 hover:bg-cyan-500/30 transition"
                  >
                    Dealer Inquiry <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
                <Link
                  href="/compare"
                  className="flex items-center gap-1 rounded-xl border border-zinc-700 bg-zinc-800/80 px-3.5 py-2.5 text-xs font-medium text-white hover:bg-zinc-700 transition"
                >
                  VS Matrix
                </Link>
              </div>
            </div>

            {/* AI Onboard Highlight */}
            <div className="flex items-center gap-2 rounded-xl bg-zinc-950/70 border border-zinc-800 p-3 text-xs text-zinc-300">
              <Cpu className="h-4 w-4 text-cyan-400 flex-shrink-0 animate-pulse" />
              <span><strong className="text-white">Neural Brain:</strong> {robot.onboardBrain}</span>
            </div>
          </div>

          {/* Right Column: Hero Image Showcase Frame */}
          <div className="lg:col-span-5">
            <div className="scan-container group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-zinc-700/80 bg-zinc-950 shadow-2xl shadow-cyan-500/10">
              <Image
                src={robot.imageUrl}
                alt={`${robot.name} High Definition Hardware Photo`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              {/* High-tech HUD Corner Brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

              {/* Real-time Telemetry Overlay */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-cyan-300 backdrop-blur-md bg-black/60 px-3 py-1.5 rounded-lg border border-cyan-500/30">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  VERIFIED HARDWARE
                </span>
                <span>{robot.dof} DOF / {robot.weightKg}KG</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Animated Kinematic Spec Meters */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* DoF Joints */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
            <span className="flex items-center gap-1.5">
              <Gauge className="h-4 w-4 text-cyan-400" /> Degrees of Freedom
            </span>
            <span className="font-mono font-bold text-white">{robot.dof} DoF</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800 mt-2">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000"
              style={{ width: `${dofPercent}%` }}
            />
          </div>
          <span className="block text-[10px] text-zinc-500 mt-1.5">Benchmark capacity: {dofPercent}% of 40-DoF max</span>
        </div>

        {/* Payload */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
            <span className="flex items-center gap-1.5">
              <Weight className="h-4 w-4 text-emerald-400" /> Arm Payload
            </span>
            <span className="font-mono font-bold text-emerald-400">{robot.payloadKg} kg</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800 mt-2">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-1000"
              style={{ width: `${payloadPercent}%` }}
            />
          </div>
          <span className="block text-[10px] text-zinc-500 mt-1.5">Lifting power: {payloadPercent}% of 25kg standard</span>
        </div>

        {/* Battery */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
            <span className="flex items-center gap-1.5">
              <BatteryCharging className="h-4 w-4 text-purple-400" /> Battery Life
            </span>
            <span className="font-mono font-bold text-purple-300">
              {robot.batteryMinutes > 0 ? `${robot.batteryMinutes}m` : "AC Power"}
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800 mt-2">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
              style={{ width: `${batteryPercent}%` }}
            />
          </div>
          <span className="block text-[10px] text-zinc-500 mt-1.5">Active shift: {batteryPercent}% continuous duty</span>
        </div>

        {/* Speed */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-amber-400" /> Max Velocity
            </span>
            <span className="font-mono font-bold text-amber-300">{robot.specs.speedMaxKmH} km/h</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800 mt-2">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-1000"
              style={{ width: `${speedPercent}%` }}
            />
          </div>
          <span className="block text-[10px] text-zinc-500 mt-1.5">Sprint mobility: {speedPercent}% of 18km/h tier</span>
        </div>
      </div>

      {/* Detailed Technical Specs Table */}
      <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Bot className="h-4 w-4 text-cyan-400" /> Full Technical Specifications
        </h3>
        <div className="mt-4 divide-y divide-zinc-800/80 text-xs">
          <div className="py-3 flex justify-between gap-4">
            <span className="font-medium text-zinc-400 w-1/3">Actuators &amp; Drive</span>
            <span className="text-white w-2/3">{robot.specs.actuators}</span>
          </div>
          <div className="py-3 flex justify-between gap-4">
            <span className="font-medium text-zinc-400 w-1/3">Perception &amp; Sensors</span>
            <span className="text-white w-2/3">{robot.specs.sensors}</span>
          </div>
          <div className="py-3 flex justify-between gap-4">
            <span className="font-medium text-zinc-400 w-1/3">Onboard AI &amp; Compute</span>
            <span className="text-cyan-400 font-semibold w-2/3">{robot.onboardBrain}</span>
          </div>
          <div className="py-3 flex justify-between gap-4">
            <span className="font-medium text-zinc-400 w-1/3">Foundation Model</span>
            <span className="text-white w-2/3">{robot.specs.aiModel}</span>
          </div>
          <div className="py-3 flex justify-between gap-4">
            <span className="font-medium text-zinc-400 w-1/3">Maximum Speed</span>
            <span className="text-white w-2/3">{robot.specs.speedMaxKmH} km/h</span>
          </div>
          <div className="py-3 flex justify-between gap-4">
            <span className="font-medium text-zinc-400 w-1/3">Connectivity</span>
            <span className="text-white w-2/3">{robot.specs.connectivity}</span>
          </div>
        </div>
      </div>

      {/* Key Architectural Features */}
      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h3 className="text-base font-bold text-white">Engineering Highlights</h3>
        <ul className="mt-4 space-y-2.5">
          {robot.keyFeatures.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Editorial Overview Section */}
      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-xs sm:text-sm text-zinc-300">
        <h3 className="text-base font-bold text-white mb-2">Editorial Review &amp; Market Position</h3>
        <p className="leading-relaxed text-zinc-400">
          {robot.description}
        </p>
      </div>

      {/* Related Platforms */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-white mb-4">Explore Related Physical AI Platforms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedRobots.map((rel) => (
            <Link
              key={rel.slug}
              href={`/robots/${rel.slug}`}
              className="group flex items-center gap-3.5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-3 transition hover:border-cyan-500/40 hover:bg-zinc-900"
            >
              <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800">
                <Image
                  src={rel.imageUrl}
                  alt={rel.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold text-white truncate group-hover:text-cyan-400 transition">
                  {rel.name}
                </h4>
                <p className="text-[11px] text-zinc-400">{rel.displayPrice}</p>
                <span className="text-[10px] text-cyan-400 font-mono">{rel.dof} DoF</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
