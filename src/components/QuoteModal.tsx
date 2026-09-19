"use client";

import { useState } from "react";
import { X, Send, ShieldCheck, CheckCircle2, Building, Mail, User, Phone, Sparkles } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  robotName?: string;
}

export default function QuoteModal({ isOpen, onClose, robotName = "General Humanoid Robot" }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    timeline: "Immediate (1-3 months)",
    quantity: "1 unit",
    notes: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this can connect to Supabase, API route, or webhook
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl shadow-cyan-500/10 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">Quote Request Received!</h3>
            <p className="mt-2 text-xs text-zinc-300 max-w-sm mx-auto">
              Our hardware specialist will review your request for <span className="text-cyan-400 font-semibold">{robotName}</span> and forward official dealer pricing and availability within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 rounded-lg bg-zinc-800 px-5 py-2.5 text-xs font-semibold text-white hover:bg-zinc-700"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              <span>Official Manufacturer & Dealer Inquiries</span>
            </div>
            <h3 className="mt-1 text-xl font-bold text-white">
              Request a Quote: <span className="text-cyan-400">{robotName}</span>
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              Connect directly with verified distributors for enterprise batch pricing, warranty terms, and delivery lead times.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Your Name *</label>
                  <div className="relative">
                    <User className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-zinc-500" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Sarah Jenkins"
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950/80 py-2 pl-8 pr-3 text-xs text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Work Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-zinc-500" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="s.jenkins@robotics-lab.edu"
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950/80 py-2 pl-8 pr-3 text-xs text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Company / University *</label>
                  <div className="relative">
                    <Building className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-zinc-500" />
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Stanford Robotics Lab / Inc"
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950/80 py-2 pl-8 pr-3 text-xs text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Phone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-zinc-500" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950/80 py-2 pl-8 pr-3 text-xs text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Purchase Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 py-2 px-3 text-xs text-zinc-300 focus:border-cyan-500 focus:outline-none"
                  >
                    <option>Immediate (1-3 months)</option>
                    <option>Q3 / Q4 2026 Budget</option>
                    <option>Grant / Research Proposal (2027)</option>
                    <option>Information & Feasibility Study</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">Quantity</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 py-2 px-3 text-xs text-zinc-300 focus:border-cyan-500 focus:outline-none"
                  >
                    <option>1 unit (Evaluation & Research)</option>
                    <option>2 - 5 units (Pilot Deployment)</option>
                    <option>10+ units (Fleet / Warehouse)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1">Application & Requirements</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your use case (e.g., manipulation research, automated inspection, warehouse logistics)..."
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 py-2 px-3 text-xs text-white placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                <span>NDA protected. Your inquiry is handled directly by verified OEM distributors.</span>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-95 transition"
              >
                <Send className="h-3.5 w-3.5" />
                Submit Official Inquire & Get Pricing
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
