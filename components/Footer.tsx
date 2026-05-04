"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <span className="font-display text-lg font-bold text-white">
              JS<span className="text-blue-400">.</span>
            </span>
            <div className="w-px h-4 bg-zinc-800" />
            <span className="font-mono text-xs text-zinc-600 tracking-wider">
              Julian Saputro
            </span>
          </div>

          {/* Center */}
          <p className="font-mono text-xs text-zinc-600 text-center">
            © {year} Julian Saputro · Built with Next.js & Framer Motion
          </p>

          {/* Right */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05 }}
            className="font-mono text-xs text-zinc-500 hover:text-blue-400 transition-colors"
          >
            {personalInfo.email}
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
