"use client";

import { useState } from "react";
import { ExternalLink, Check, ShoppingCart, Info, Wrench } from "lucide-react";

interface PartItem {
  name: string;
  category: "Actuators" | "Electronics" | "Structure" | "Vision";
  estPriceUSD: number;
  qty: number;
  description: string;
  sourceUrl: string;
}

const BOM_PARTS: PartItem[] = [
  {
    name: "Feetech STS3215 Magnetic Encoder Servos",
    category: "Actuators",
    estPriceUSD: 165,
    qty: 6,
    description: "High-precision serial bus servos with 360-degree magnetic absolute encoders for joint feedback.",
    sourceUrl: "https://www.aliexpress.com/w/wholesale-feetech-sts3215.html"
  },
  {
    name: "Waveshare Waveshare Serial Bus Servo Driver Board",
    category: "Electronics",
    estPriceUSD: 25,
    qty: 1,
    description: "ESP32-based USB to UART serial bus servo controller with integrated power regulation.",
    sourceUrl: "https://www.amazon.com/s?k=waveshare+bus+servo+driver"
  },
  {
    name: "12V 5A DC Power Supply & Barrel Jack",
    category: "Electronics",
    estPriceUSD: 18,
    qty: 1,
    description: "Stable switching power supply providing clean current for all 6 active servos.",
    sourceUrl: "https://www.amazon.com/s?k=12v+5a+power+supply"
  },
  {
    name: "PETG / PLA+ 3D Printer Filament (1kg Spool)",
    category: "Structure",
    estPriceUSD: 22,
    qty: 1,
    description: "High-rigidity filament to 3D print the SO-ARM100 arm segments, base turntable, and gripper.",
    sourceUrl: "https://www.amazon.com/s?k=petg+filament+1kg"
  },
  {
    name: "M3 / M4 Stainless Steel Hardware Assortment & Bearings",
    category: "Structure",
    estPriceUSD: 15,
    qty: 1,
    description: "Hex socket screws, brass heat-set threaded inserts, and 6700ZZ miniature ball bearings.",
    sourceUrl: "https://www.amazon.com/s?k=m3+heat+set+inserts+screws"
  },
  {
    name: "Dual 1080p USB Wide-Angle Webcams",
    category: "Vision",
    estPriceUSD: 45,
    qty: 2,
    description: "One camera mounted overhead and one on the wrist gripper for LeRobot multi-camera dataset collection.",
    sourceUrl: "https://www.amazon.com/s?k=1080p+wide+angle+usb+webcam"
  }
];

export default function PartsChecklist() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (idx: number) => {
    if (checkedItems.includes(idx)) {
      setCheckedItems(checkedItems.filter((i) => i !== idx));
    } else {
      setCheckedItems([...checkedItems, idx]);
    }
  };

  const totalCost = BOM_PARTS.reduce((sum, p) => sum + p.estPriceUSD, 0);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Wrench className="h-5 w-5 text-amber-400" />
            SO-ARM100 Bill of Materials (BOM) & Parts List
          </h3>
          <p className="mt-1 text-xs text-zinc-400">
            Official recommended off-the-shelf parts to assemble a 6-DoF LeRobot follower arm under $300.
          </p>
        </div>
        <div className="rounded-xl bg-zinc-950 p-3 text-right border border-zinc-800">
          <span className="block text-[11px] text-zinc-400">Total Estimated BOM:</span>
          <span className="text-lg font-extrabold text-amber-400">~${totalCost} USD</span>
        </div>
      </div>

      {/* Parts Table */}
      <div className="mt-4 divide-y divide-zinc-800/60">
        {BOM_PARTS.map((part, idx) => {
          const isChecked = checkedItems.includes(idx);
          return (
            <div key={part.name} className="py-3.5 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <button
                  onClick={() => toggleCheck(idx)}
                  className={`mt-0.5 flex h-4 w-4 items-center justify-center rounded border transition ${
                    isChecked
                      ? "bg-amber-500 border-amber-500 text-black"
                      : "border-zinc-700 bg-zinc-950 text-transparent hover:border-zinc-500"
                  }`}
                >
                  <Check className="h-3 w-3" />
                </button>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold ${isChecked ? "line-through text-zinc-500" : "text-white"}`}>
                      {part.name}
                    </span>
                    <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300">
                      Qty: {part.qty}
                    </span>
                    <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] text-amber-400 border border-amber-500/20">
                      {part.category}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-zinc-400 leading-relaxed max-w-xl">
                    {part.description}
                  </p>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <span className="block text-xs font-bold text-white">${part.estPriceUSD}</span>
                <a
                  href={part.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 rounded bg-zinc-800 px-2 py-1 text-[10px] font-medium text-amber-400 hover:bg-zinc-700 transition"
                >
                  Buy Online <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
