import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/data/posts";
import { ROBOTS_DATABASE } from "@/data/robots";
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Bot,
  DollarSign,
  Cpu,
  Layers,
  Sparkles,
  Award
} from "lucide-react";
import AdsterraNative from "@/components/AdsterraNative";
import AdsterraBanner from "@/components/AdsterraBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found | Physical AI Hub",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      url: `https://physicalaidirectory.com/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Related robots for fast reference
  const relatedRobots = ROBOTS_DATABASE.filter((r) =>
    post.relatedRobotSlugs.includes(r.slug)
  );

  // Schema.org Article + FAQPage JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://physicalaidirectory.com${post.coverImage}`,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.title,
      "description": post.author.bio,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Physical AI Directory Hub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://physicalaidirectory.com/icon.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://physicalaidirectory.com/blog/${post.slug}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-zinc-400">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <ChevronRight className="h-3 w-3 text-zinc-600" />
          <Link href="/blog" className="hover:text-cyan-400 transition">Blog</Link>
          <ChevronRight className="h-3 w-3 text-zinc-600" />
          <span className="text-zinc-200 truncate">{post.category}</span>
        </nav>

        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Blog Index
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-400">
              <Clock className="h-3.5 w-3.5 text-zinc-500" />
              {post.readTimeMinutes} min read
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-400">
              <Calendar className="h-3.5 w-3.5 text-zinc-500" />
              Updated {new Date(post.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            {post.excerpt}
          </p>

          {/* E-E-A-T Author Box */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-cyan-500/40"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-white">{post.author.name}</span>
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  <span className="text-[10px] text-amber-400 bg-amber-400/10 px-1.5 py-0.2 rounded font-mono">
                    E-E-A-T Verified
                  </span>
                </div>
                <div className="text-xs text-zinc-400">{post.author.title}</div>
              </div>
            </div>
            <div className="text-xs text-zinc-400 sm:max-w-xs text-left sm:text-right">
              {post.author.bio}
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-zinc-900/60 to-zinc-900/90 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm mb-3">
            <Sparkles className="h-4 w-4" />
            <span>Executive Takeaways for Engineering &amp; Procurement Teams</span>
          </div>
          <ul className="space-y-2.5">
            {post.executiveSummary.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Table of Contents & Quick Internal Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-cyan-400" />
              Table of Contents
            </h2>
            <ul className="space-y-2 text-xs">
              {post.tableOfContents.map((toc) => (
                <li key={toc.id}>
                  <a
                    href={`#${toc.id}`}
                    className="text-zinc-300 hover:text-cyan-400 transition flex items-center gap-1.5"
                  >
                    <ChevronRight className="h-3 w-3 text-zinc-600" />
                    {toc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contextual Jump Pill */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                Procurement Shortcut
              </div>
              <p className="text-xs text-zinc-400 leading-snug">
                Need factory quotes or live lead times for Unitree G1? Check our verified supplier directory.
              </p>
            </div>
            <Link
              href="/humanoid-robots-for-sale"
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-3 py-2 text-xs font-bold text-emerald-300 hover:bg-emerald-500/30 transition"
            >
              View In-Stock Humanoids
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Article Body with Rich Contextual Internal Links */}
        <div className="prose prose-invert max-w-none space-y-10 text-zinc-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section id="market-overview">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Bot className="h-5 w-5 text-cyan-400" />
              1. Market Overview &amp; Availability Status
            </h2>
            <p>
              As humanoid robotics transitions from laboratory curiosities to active factory pilots, two architectures define the 2026 market: the agile, low-cost{" "}
              <Link href="/robots/unitree-g1" className="font-semibold text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
                Unitree G1 Humanoid Agent
              </Link>{" "}
              and the vertically integrated, high-dexterity{" "}
              <Link href="/robots/tesla-optimus-gen-2" className="font-semibold text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
                Tesla Optimus Gen 2
              </Link>.
            </p>
            <p className="mt-3">
              The fundamental divergence lies in commercial accessibility. Unitree has entered serial mass production, retailing the G1 at an aggressive $16,000 USD baseline (see our{" "}
              <Link href="/humanoid-robot-price-guide" className="font-semibold text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
                2026 Humanoid Robot Price Guide
              </Link>{" "}
              for complete tier analysis). Conversely, Tesla keeps Optimus Gen 2 captive inside its Gigafactory network for battery handling and component conveyance, aiming for general commercial availability once production line economies scale.
            </p>
          </section>

          {/* Side-by-Side Spec Matrix */}
          <div className="overflow-x-auto my-8 rounded-xl border border-zinc-800 bg-zinc-900/60 p-1">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/90 text-zinc-300">
                  <th className="p-3 font-semibold">Specification</th>
                  <th className="p-3 font-semibold text-cyan-400">Unitree G1</th>
                  <th className="p-3 font-semibold text-blue-400">Tesla Optimus Gen 2</th>
                  <th className="p-3 font-semibold text-zinc-400">Analysis &amp; Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="p-3 font-medium text-white">Commercial Price</td>
                  <td className="p-3 text-emerald-400 font-mono font-bold">$16,000 FOB</td>
                  <td className="p-3 text-amber-400 font-mono font-bold">Internal Pilot (~$25k target)</td>
                  <td className="p-3 text-zinc-400">G1 is 100% commercially purchasable today</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-white">Degrees of Freedom (DoF)</td>
                  <td className="p-3 font-mono">23 to 43 DoF</td>
                  <td className="p-3 font-mono">28 DoF Body + 11 DoF Hands</td>
                  <td className="p-3 text-zinc-400">Optimus leads in hand DoF; G1 offers flexible joint extensions</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-white">Height / Weight</td>
                  <td className="p-3">127 cm / 35 kg</td>
                  <td className="p-3">173 cm / 57 kg</td>
                  <td className="p-3 text-zinc-400">G1 is ultra-compact and fold-packable; Optimus is full human scale</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-white">Payload Capacity</td>
                  <td className="p-3 font-mono">3 kg continuous</td>
                  <td className="p-3 font-mono">20 kg maximum</td>
                  <td className="p-3 text-zinc-400">Optimus engineered for heavier industrial packaging</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-white">Secondary Development</td>
                  <td className="p-3 text-emerald-400 font-medium">Open ROS2 / Python SDK</td>
                  <td className="p-3 text-zinc-500">Proprietary Tesla AI Stack</td>
                  <td className="p-3 text-zinc-400">
                    G1 easily bridges with{" "}
                    <Link href="/open-source/lerobot-guide" className="text-amber-400 underline">
                      Hugging Face LeRobot
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 2 */}
          <section id="kinematics-actuation">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-cyan-400" />
              2. Kinematics, Actuators &amp; Torque Density
            </h2>
            <p>
              Unitree leverages proprietary high-torque joint motors capable of delivering peak torque up to 120 N·m. Because the robot weighs only 35 kg, its torque-to-weight ratio allows dramatic dynamic stabilization—such as resisting side kicks, high jumps, and rapid folding. For an interactive comparison across other competitors like Boston Dynamics Atlas or Figure 02, visit our{" "}
              <Link href="/compare" className="font-semibold text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
                Interactive Robot Comparison Matrix
              </Link>.
            </p>
            <p className="mt-3">
              Tesla Optimus Gen 2 features custom-engineered rotary and linear actuators with integrated electronics. Tesla eliminated exposed cabling, reduced total mass by 10 kg compared to Gen 1, and introduced custom articulated 2-DoF neck and foot force sensors with calibrated compliance.
            </p>
          </section>

          {/* Section 3 */}
          <section id="end-effector-dexterity">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="h-5 w-5 text-cyan-400" />
              3. End-Effector Dexterity &amp; Tactile Feedback
            </h2>
            <p>
              Manipulator dexterity remains the defining battleground for embodied AI tasks. Optimus Gen 2 features revolutionary 11-DoF hands actuated by cable-driven linkages located in the forearm, accompanied by high-density tactile sensors across all five fingers. This enables delicate dual-arm manipulation, such as cracking eggs and inserting electrical harnesses without crushing fragile surfaces.
            </p>
            <p className="mt-3">
              Unitree G1 adopts modular end-effectors: standard 3-finger force-controlled grippers for research tasks, with an optional upgrade to full dexterous five-finger tactile hands. For academic researchers testing imitation policies, G1 provides direct torque telemetry from each finger joint.
            </p>
          </section>

          {/* Section 4 */}
          <section id="ai-compute-teleop">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              4. Autonomous AI Stack &amp; Teleoperation
            </h2>
            <p>
              Optimus Gen 2 runs directly on Tesla’s FSD Computer hardware, running an end-to-end vision neural network trained on millions of hours of simulation and real-world teleoperation. Video inputs from head-mounted cameras feed directly into occupancy networks and trajectory planners without hand-crafted heuristics.
            </p>
            <p className="mt-3">
              Unitree G1 deploys an 8-core CPU paired with their UnifoLM Physical AI foundation model. Critically for the developer community, G1 exposes complete joint-space kinematics and ROS2 topics. Developers can capture demonstrations using low-cost VR or bilateral leader-follower arms (detailed in our{" "}
              <Link href="/open-source/lerobot-guide" className="font-semibold text-amber-400 underline underline-offset-4 hover:text-amber-300">
                LeRobot DIY Teleoperation Guide
              </Link>) and train Diffusion Policy or ACT models in Isaac Gym.
            </p>
          </section>

          {/* Section 5 */}
          <section id="tco-procurement">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-cyan-400" />
              5. TCO, Commercial Availability &amp; Verdict
            </h2>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-4">
              <h3 className="text-base font-bold text-white">Procurement Recommendations by Team Type:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="text-xs font-bold text-emerald-400 mb-1">
                    Select Unitree G1 If:
                  </div>
                  <ul className="text-xs space-y-1.5 text-zinc-300 list-disc list-inside">
                    <li>You need physical hardware delivered in Q2 2026.</li>
                    <li>Your budget is constrained to the $16,000–$30,000 bracket.</li>
                    <li>Your lab requires ROS2, Python SDK, or custom neural models.</li>
                    <li>
                      Ready to order? Check{" "}
                      <Link href="/humanoid-robots-for-sale" className="text-emerald-400 underline">
                        In-Stock Units &amp; Lead Times
                      </Link>.
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="text-xs font-bold text-blue-400 mb-1">
                    Wait for Tesla Optimus If:
                  </div>
                  <ul className="text-xs space-y-1.5 text-zinc-300 list-disc list-inside">
                    <li>Your operations require 170cm+ human stature &amp; 20kg payload.</li>
                    <li>You want a complete turnkey end-to-end vision solution.</li>
                    <li>You have patience for enterprise release schedules (2026/2027).</li>
                    <li>
                      Explore other enterprise options in our{" "}
                      <Link href="/compare" className="text-blue-400 underline">
                        Enterprise Comparison Matrix
                      </Link>.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ Accordion / Google FAQPage */}
          <section id="faq" className="pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-cyan-400" />
              6. Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-zinc-700"
                >
                  <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-[11px] font-mono text-cyan-300">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 pl-7 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Dedicated Contextual Internal Links Card Hub */}
        <section className="mt-14 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <h2 className="text-base sm:text-lg font-bold text-white">
              Related Directory Resources &amp; Guides
            </h2>
          </div>
          <p className="text-xs text-zinc-400 mb-6">
            Deepen your hardware evaluation with our curated procurement tools, pricing breakdowns, and technical profiles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {post.internalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/50 p-4 transition hover:border-cyan-500/40 hover:bg-zinc-800/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="rounded bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-300 border border-cyan-500/20">
                      {link.badge}
                    </span>
                    <ChevronRight className="h-3.5 w-3.5 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition" />
                  </div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition">
                    {link.title}
                  </div>
                  <div className="mt-1.5 text-[11px] text-zinc-400 leading-snug">
                    {link.description}
                  </div>
                </div>
                <div className="mt-3 text-[10px] font-mono text-cyan-400 font-semibold">
                  Visit {link.href} &rarr;
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Adsterra Native Sponsored Showcase */}
        <div className="mt-12">
          <AdsterraNative />
        </div>
      </article>
    </>
  );
}
