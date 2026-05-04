"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Clock } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/AnimatedText";

const stats = [
  { label: "Years Experience", value: "3+", icon: Clock },
  { label: "Projects Delivered", value: "10+", icon: Briefcase },
  { label: "Technologies", value: "15+", icon: GraduationCap },
];

const infoCards = [
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: GraduationCap, label: "Education", value: personalInfo.education },
  { icon: Briefcase, label: "Current Role", value: "Backend Developer @ AssistX" },
  { icon: Clock, label: "Experience", value: personalInfo.experience },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          label="Who I Am"
          title="About Me"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text content */}
          <div className="space-y-6">
            <FadeIn delay={0.1} direction="left">
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                Hi, I&apos;m{" "}
                <span className="text-white font-semibold">Julian Saputro</span> — a
                backend engineer based in Yogyakarta, Indonesia, with a D3 in
                Informatics Management and over{" "}
                <span className="text-blue-400 font-semibold">3 years of professional experience</span>{" "}
                at AssistX Enterprise.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <p className="text-zinc-400 text-base leading-relaxed">
                I specialize in architecting scalable APIs, distributed backend
                systems, and high-throughput microservices. My work spans enterprise
                video streaming infrastructure, real-time CCTV monitoring platforms,
                and high-volume data export pipelines — each built with a focus on
                reliability, clean architecture, and production-grade performance.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} direction="left">
              <p className="text-zinc-400 text-base leading-relaxed">
                I&apos;m highly adaptive and genuinely passionate about solving
                complex engineering problems. I approach every challenge with a
                systems-thinking mindset, picking up new technologies quickly and
                applying them where they matter most.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.4} direction="left">
              <div className="flex gap-8 pt-4">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="text-center">
                    <div className="font-display text-3xl font-bold text-gradient mb-1">
                      {value}
                    </div>
                    <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map(({ icon: Icon, label, value }, i) => (
              <FadeIn key={label} delay={0.15 + i * 0.1} direction="right">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-5 rounded-2xl glass border-gradient hover:glow-blue transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors">
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  <p className="text-zinc-200 text-sm font-medium">{value}</p>
                </motion.div>
              </FadeIn>
            ))}

            {/* Decorative card */}
            <FadeIn delay={0.55} direction="right">
              <div className="sm:col-span-2 p-5 rounded-2xl glass border border-purple-500/20 bg-purple-500/5">
                <p className="font-mono text-[10px] text-purple-400/80 uppercase tracking-wider mb-2">
                  Philosophy
                </p>
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  &ldquo;Clean architecture isn&apos;t a luxury — it&apos;s the foundation of
                  systems that scale, teams that move fast, and products that last.&rdquo;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
