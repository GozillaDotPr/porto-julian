"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/AnimatedText";

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <SectionHeader
          label="Career"
          title="Work Experience"
          description="Where I've applied my skills to solve real engineering problems at scale."
        />

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent hidden md:block" />

          <div className="space-y-0">
            {experience.map((job, index) => (
              <FadeIn key={index} delay={0.2} direction="up">
                <div className="relative flex gap-8 md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-8 hidden md:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                      className="w-5 h-5 rounded-full border-2 border-blue-500 bg-blue-500/20 flex items-center justify-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex-1 p-8 rounded-2xl glass border-gradient hover:glow-blue transition-all duration-500 mb-8"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 size={14} className="text-blue-400" />
                          <span className="font-mono text-xs text-blue-400 uppercase tracking-wider">
                            {job.company}
                          </span>
                        </div>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                          {job.role}
                        </h3>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <div className="flex items-center gap-2 text-zinc-400 text-sm">
                          <Calendar size={12} />
                          <span className="font-mono text-xs">{job.period}</span>
                        </div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 border border-blue-500/20 text-blue-400">
                          {job.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {job.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">
                        Key Contributions
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {job.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.08 }}
                            className="flex items-start gap-2 text-sm text-zinc-300"
                          >
                            <CheckCircle2 size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech tags */}
                    <div>
                      <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg text-xs font-mono text-zinc-400 bg-zinc-800/60 border border-zinc-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            ))}

            {/* Timeline end - looking for next */}
            <FadeIn delay={0.4}>
              <div className="relative flex gap-8 md:pl-16">
                <div className="absolute left-4 top-4 hidden md:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="w-5 h-5 rounded-full border-2 border-dashed border-zinc-700 bg-zinc-900 flex items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                  </motion.div>
                </div>
                <div className="flex-1 p-6 rounded-2xl border border-dashed border-zinc-800 flex items-center gap-3">
                  <span className="text-zinc-600 text-sm font-mono">
                    Next chapter
                  </span>
                  <span className="text-zinc-700 text-sm">—</span>
                  <span className="text-zinc-500 text-sm">
                    Open to new opportunities
                  </span>
                  <motion.span
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-auto text-green-400 text-xs font-mono"
                  >
                    Available
                  </motion.span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
