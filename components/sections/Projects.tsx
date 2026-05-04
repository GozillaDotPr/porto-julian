"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/AnimatedText";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          label="Portfolio"
          title="Key Projects"
          description="A selection of production systems I've architected and delivered."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`
                relative group overflow-hidden rounded-2xl glass border border-white/5
                hover:border-white/10 transition-all duration-500
                hover:shadow-2xl
              `}
            >
              {/* Gradient overlay at top */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Glowing top border on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to right, transparent, ${project.accent}80, transparent)`,
                }}
              />

              <div className="relative p-7">
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="inline-block text-2xl mb-3">{project.icon}</span>
                    <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="font-display text-lg md:text-xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:border-white/20 transition-all"
                  >
                    <ArrowUpRight size={14} />
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="grid grid-cols-2 gap-1.5 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-1.5 text-xs text-zinc-400"
                    >
                      <CheckCircle2
                        size={11}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: project.accent + "cc" }}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-400 bg-white/5 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
