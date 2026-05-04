"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/AnimatedText";

const categoryColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  Backend: {
    bg: "bg-blue-500/5",
    border: "border-blue-500/20",
    text: "text-blue-400",
    glow: "hover:shadow-blue-500/10",
  },
  Frontend: {
    bg: "bg-purple-500/5",
    border: "border-purple-500/20",
    text: "text-purple-400",
    glow: "hover:shadow-purple-500/10",
  },
  Database: {
    bg: "bg-emerald-500/5",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    glow: "hover:shadow-emerald-500/10",
  },
  Tools: {
    bg: "bg-orange-500/5",
    border: "border-orange-500/20",
    text: "text-orange-400",
    glow: "hover:shadow-orange-500/10",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

export function TechStack() {
  return (
    <section id="stack" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          label="Technologies"
          title="My Tech Stack"
          description="The tools and technologies I use to build robust, scalable backend systems."
        />

        <div className="space-y-12">
          {Object.entries(techStack).map(([category, skills], catIndex) => {
            const colors = categoryColors[category] || categoryColors.Backend;
            return (
              <div key={category}>
                <FadeIn delay={catIndex * 0.1}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-2 h-2 rounded-full ${colors.text} opacity-80`}
                      style={{ background: "currentColor" }}
                    />
                    <h3 className={`font-mono text-xs uppercase tracking-[0.2em] ${colors.text}`}>
                      {category}
                    </h3>
                    <div className={`flex-1 h-px ${colors.border} opacity-30`}
                      style={{ borderTop: "1px solid" }}
                    />
                  </div>
                </FadeIn>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="flex flex-wrap gap-3"
                >
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{
                        y: -6,
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 400, damping: 15 },
                      }}
                      className={`
                        relative group flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                        glass border ${colors.border} ${colors.bg}
                        cursor-default transition-all duration-300
                        hover:shadow-lg ${colors.glow}
                      `}
                    >
                      {/* Skill level bar at the bottom */}
                      <div
                        className={`absolute bottom-0 left-0 h-0.5 rounded-b-xl transition-all duration-700 opacity-0 group-hover:opacity-100 ${colors.text}`}
                        style={{
                          width: `${skill.level}%`,
                          background: "currentColor",
                        }}
                      />

                      <span className="text-lg leading-none">{skill.icon}</span>
                      <span className="font-body text-sm text-zinc-200 font-medium whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
