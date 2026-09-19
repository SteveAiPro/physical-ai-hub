import Link from "next/link";
import { Bot, ExternalLink, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Col 1: Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">PhysicalAI Hub</span>
            </Link>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-zinc-400">
              The premier independent global database tracking commercial humanoid robots, embodied AI hardware, open-source robotics kits, and real-time manufacturer pricing.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Verified Manufacturer Specs & Live Pricing Updates (2026)</span>
            </div>
          </div>

          {/* Col 2: Top Humanoids */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Featured Humanoids
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/robots/unitree-g1" className="hover:text-cyan-400 transition">
                  Unitree G1 ($16,000)
                </Link>
              </li>
              <li>
                <Link href="/robots/tesla-optimus-gen-2" className="hover:text-cyan-400 transition">
                  Tesla Optimus Gen 2
                </Link>
              </li>
              <li>
                <Link href="/robots/figure-02" className="hover:text-cyan-400 transition">
                  Figure 02 (BMW Pilot)
                </Link>
              </li>
              <li>
                <Link href="/robots/1x-neo" className="hover:text-cyan-400 transition">
                  1X NEO Home Bipedal
                </Link>
              </li>
              <li>
                <Link href="/robots/boston-dynamics-atlas" className="hover:text-cyan-400 transition">
                  Electric Atlas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Buying & Pricing */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Buying & Comparisons
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/humanoid-robots-for-sale" className="text-emerald-400 hover:underline">
                  Humanoid Robots for Sale
                </Link>
              </li>
              <li>
                <Link href="/humanoid-robot-price-guide" className="hover:text-cyan-400 transition">
                  Humanoid Robot Price Guide
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-cyan-400 transition">
                  Compare Robot Specs (VS)
                </Link>
              </li>
              <li>
                <Link href="/open-source/lerobot-guide" className="text-amber-400 hover:underline">
                  LeRobot SO-ARM100 DIY
                </Link>
              </li>
              <li>
                <Link href="/robots/unitree-go2" className="hover:text-cyan-400 transition">
                  Unitree Go2 AI Dog ($1,600)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Open Source */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Ecosystem
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a
                  href="https://github.com/huggingface/lerobot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition"
                >
                  Hugging Face LeRobot <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.nvidia.com/en-us/robotics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition"
                >
                  NVIDIA Isaac Physical AI <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <Link href="/humanoid-robot-price-guide#faq" className="hover:text-cyan-400 transition">
                  Humanoid Robotics FAQ
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-cyan-400 transition">
                  XML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400">
          <p>© 2026 PhysicalAI Hub. All rights reserved. Independent research and directory platform.</p>
          <p className="mt-2 sm:mt-0">
            Targeting Physical AI, Humanoid Robotics & Embodied Hardware Ecosystems.
          </p>
        </div>
      </div>
    </footer>
  );
}
