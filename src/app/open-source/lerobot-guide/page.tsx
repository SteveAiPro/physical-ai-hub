import PartsChecklist from "@/components/PartsChecklist";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Wrench, Terminal, Cpu, CheckCircle2, ArrowLeft, ExternalLink, Code2, Sparkles, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Hugging Face LeRobot SO-ARM100: Open Source DIY Robot Guide 2026",
  description: "Complete guide to building the viral open-source Hugging Face LeRobot SO-ARM100 6-DoF robotic arm for under $400. Full bill of materials (BOM), 3D STL print files, and PyTorch training tutorial.",
  keywords: [
    "lerobot",
    "lerobot github",
    "so-arm100",
    "hugging face lerobot",
    "humanoid robot kit",
    "diy robot arm",
    "open source robotics 2026",
    "lerobot train"
  ]
};

export default function LeRobotGuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-xs text-zinc-400">
        <Link href="/" className="flex items-center gap-1 hover:text-white transition">
          <ArrowLeft className="h-3 w-3" /> Home
        </Link>
        <span>/</span>
        <span className="text-zinc-500">Open Source</span>
        <span>/</span>
        <span className="text-zinc-200">LeRobot SO-ARM100 Guide</span>
      </div>

      {/* Hero Header with Authentic Hardware Photo */}
      <div className="cyber-card overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
              <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
              <span>Hugging Face Open Source Ecosystem</span>
            </div>
            <h1 className="mt-4 text-2xl sm:text-4xl font-extrabold text-white">
              LeRobot SO-ARM100: DIY Build Guide
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              The viral sub-$400 6-DoF robotic arm for training Vision-Language-Action (VLA) AI models on consumer GPUs.
            </p>

            <div className="mt-4 flex items-center gap-4">
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-left">
                <span className="block text-[10px] text-zinc-400">Total DIY Build Cost</span>
                <span className="text-xl font-extrabold text-amber-400">~$300 – $400</span>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-left">
                <span className="block text-[10px] text-zinc-400">Assembly Time</span>
                <span className="text-xl font-extrabold text-white">4 - 6 Hours</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/huggingface/lerobot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-black shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition"
              >
                Official GitHub Repo <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://huggingface.co/lerobot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-xs font-medium text-white hover:bg-zinc-700 transition"
              >
                Model Weights Hub
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="scan-container relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950 shadow-2xl shadow-amber-500/10">
              <Image
                src="/images/robots/lerobot-so-arm100.jpg"
                alt="Hugging Face LeRobot SO-ARM100 Leader and Follower Open Source Hardware"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute bottom-2 left-2 right-2 rounded bg-black/70 px-2.5 py-1 text-[10px] font-mono text-amber-300 backdrop-blur-md flex items-center justify-between">
                <span>LEADER-FOLLOWER TELEOP</span>
                <span>6-DOF BUS SERVO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why LeRobot is the "Linux of Robotics" */}
      <section className="mt-10 prose prose-invert max-w-none text-xs sm:text-sm text-zinc-300">
        <h2 className="text-xl font-bold text-white">Why LeRobot is the "Linux Moment" for AI Robotics</h2>
        <p className="leading-relaxed text-zinc-400">
          Historically, robotic manipulation research required $30,000+ industrial arms (Franka Emika, UR5) and proprietary closed-source driver stacks. Hugging Face launched <strong>LeRobot</strong> with the radical premise of democratizing physical AI.
        </p>
        <p className="leading-relaxed text-zinc-400 mt-2">
          By combining low-cost 3D-printable arms like the <strong>SO-ARM100</strong> with modern imitation learning (Action Chunking with Transformers and Diffusion Policies), any developer with a consumer GPU can train a robot to fold clothes, pick up keys, or pack boxes.
        </p>
      </section>

      {/* Parts BOM Checklist */}
      <section className="mt-12">
        <PartsChecklist />
      </section>

      {/* 4 Steps to Build & Train */}
      <section className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white">4 Steps: From 3D Print to Neural Policy</h2>
        <div className="mt-6 space-y-4 text-xs">
          <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800">
            <h4 className="font-bold text-amber-400 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-[10px]">1</span>
              3D Print Arm Chassis &amp; Base
            </h4>
            <p className="mt-1.5 text-zinc-400 leading-relaxed">
              Download the official CAD STL files from the LeRobot repository. Print with PETG or PLA+ at 40% gyroid infill for maximum structural rigidity during high-torque accelerations.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800">
            <h4 className="font-bold text-amber-400 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-[10px]">2</span>
              Assemble Feetech STS3215 Magnetic Servos
            </h4>
            <p className="mt-1.5 text-zinc-400 leading-relaxed">
              Bolt the 6 serial bus servos in daisy-chain wiring. Connect the Waveshare bus servo adapter to your host PC via standard USB-C.
            </p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800">
            <h4 className="font-bold text-amber-400 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-[10px]">3</span>
              Collect Demonstration Teleoperation Data
            </h4>
            <p className="mt-1.5 text-zinc-400 leading-relaxed">
              Use a lightweight 3D-printed leader arm or game controller to record 50 episodes of a target task (e.g. grasping a marker and placing it in a cup).
            </p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4 border border-zinc-800">
            <h4 className="font-bold text-amber-400 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-[10px]">4</span>
              Train &amp; Evaluate with PyTorch ACT / Diffusion
            </h4>
            <p className="mt-1.5 text-zinc-400 leading-relaxed">
              Run the native LeRobot training script. Train for 2-3 hours on a single RTX 3080/4090 GPU, and run autonomous visual closed-loop evaluation.
            </p>
          </div>
        </div>

        {/* Quick CLI Code Snippet */}
        <div className="mt-6 rounded-xl bg-black p-4 font-mono text-[11px] text-zinc-300 border border-zinc-800">
          <div className="flex items-center gap-2 text-zinc-500 pb-2 border-b border-zinc-800">
            <Terminal className="h-3.5 w-3.5" />
            <span>Terminal: Quickstart LeRobot</span>
          </div>
          <pre className="pt-3 overflow-x-auto text-emerald-400">
{`git clone https://github.com/huggingface/lerobot.git
cd lerobot && pip install -e .

# Record 50 teleoperation demonstrations
python lerobot/scripts/record.py --robot-type so_arm100 --task "pick_and_place"

# Train ACT (Action Chunking with Transformers) policy
python lerobot/scripts/train.py --policy act --dataset lerobot/so_arm100_pick_and_place`}
          </pre>
        </div>
      </section>
    </div>
  );
}
