import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/LayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://physicalaidirectory.com"),
  title: {
    default: "Physical AI & Humanoid Robots Directory 2026: Specs, Prices & Buying Guide",
    template: "%s | PhysicalAI Hub"
  },
  description: "The global independent database tracking commercial humanoid robots, embodied AI hardware, Unitree G1 pricing, Tesla Optimus specs, and open-source LeRobot kits.",
  keywords: [
    "humanoid robot",
    "humanoid robot for sale",
    "humanoid robot price",
    "unitree g1",
    "physical ai",
    "embodied ai",
    "tesla optimus",
    "figure 02",
    "lerobot",
    "best humanoid robots 2026"
  ],
  alternates: {
    canonical: "https://physicalaidirectory.com",
    languages: {
      "en": "https://physicalaidirectory.com",
      "zh": "https://physicalaidirectory.com/?lang=zh",
      "ja": "https://physicalaidirectory.com/?lang=ja",
      "x-default": "https://physicalaidirectory.com"
    }
  },
  authors: [{ name: "PhysicalAI Hub Editorial Team" }],
  creator: "PhysicalAI Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://physicalaidirectory.com",
    title: "Physical AI & Humanoid Robots Directory 2026: Specs, Prices & Buying Guide",
    description: "Compare DoF, payload, pricing, and AI models across the world's leading commercial humanoid robots and embodied hardware.",
    siteName: "PhysicalAI Hub"
  },
  twitter: {
    card: "summary_large_image",
    title: "Physical AI & Humanoid Robots Directory 2026",
    description: "The global database for Physical AI, Embodied Hardware & Humanoid Robotics."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PhysicalAI Hub",
    "url": "https://physicalaidirectory.com",
    "description": "Global directory and specifications database for Physical AI, humanoid robots, and embodied hardware.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://physicalaidirectory.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased font-sans bg-zinc-950 text-zinc-100">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
