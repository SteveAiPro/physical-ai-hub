import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getPostBySlug, getAllPosts, BlogPost, PostSection } from "@/data/posts";
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
  Award,
  Info,
  Lightbulb,
  AlertTriangle
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

// Inline formatted text helper that parses [text](url) markdown links into Next.js Links
function FormattedParagraph({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const label = match[1];
    const url = match[2];
    const isExternal = url.startsWith("http");

    parts.push(
      isExternal ? (
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
        >
          {label}
        </a>
      ) : (
        <Link
          key={match.index}
          href={url}
          className="font-semibold text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
        >
          {label}
        </Link>
      )
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <p className="leading-relaxed">{parts}</p>;
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

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
              <li>
                <a
                  href="#faq"
                  className="text-zinc-300 hover:text-cyan-400 transition flex items-center gap-1.5"
                >
                  <ChevronRight className="h-3 w-3 text-zinc-600" />
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contextual Jump Pill */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                Procurement Shortcut
              </div>
              <p className="text-xs text-zinc-400 leading-snug">
                Need factory quotes, lead times, or commercial warranties? Check our verified supplier directory.
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

        {/* Dynamic Article Sections */}
        <div className="prose prose-invert max-w-none space-y-10 text-zinc-300 text-sm sm:text-base leading-relaxed">
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Bot className="h-5 w-5 text-cyan-400" />
                {section.title}
              </h2>

              <div className="space-y-4">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <FormattedParagraph key={pIdx} text={paragraph} />
                ))}
              </div>

              {/* Optional Callout Box */}
              {section.callout && (
                <div className="my-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-200">
                    {section.callout.text}
                  </div>
                </div>
              )}

              {/* Optional Spec/Data Table */}
              {section.table && (
                <div className="overflow-x-auto my-6 rounded-xl border border-zinc-800 bg-zinc-900/60 p-1">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-800 bg-zinc-900/90 text-zinc-300">
                        {section.table.headers.map((header, hIdx) => (
                          <th
                            key={hIdx}
                            className={`p-3 font-semibold ${
                              hIdx === 1
                                ? "text-cyan-400"
                                : hIdx === 2
                                ? "text-blue-400"
                                : "text-white"
                            }`}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-zinc-800/30 transition">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-3 ${
                                cIdx === 0
                                  ? "font-medium text-white"
                                  : cIdx === 1
                                  ? "font-mono text-emerald-400 font-medium"
                                  : "text-zinc-300"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          {/* Section: FAQ Accordion / Google FAQPage */}
          <section id="faq" className="pt-6 scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-cyan-400" />
              Frequently Asked Questions
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
