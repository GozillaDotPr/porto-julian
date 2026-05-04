"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/AnimatedText";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: "Drop me a message anytime",
    accent: "#3B82F6",
    gradient: "from-blue-500/10 to-blue-600/5",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/50",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "julian-saputro",
    href: personalInfo.linkedin,
    description: "Let's connect professionally",
    accent: "#8B5CF6",
    gradient: "from-purple-500/10 to-purple-600/5",
    border: "border-purple-500/20",
    hoverBorder: "hover:border-purple-500/50",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.phone}`,
    description: "Quick chat via WhatsApp",
    accent: "#10B981",
    gradient: "from-emerald-500/10 to-emerald-600/5",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/50",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-[0.06]"
          style={{
            background: "radial-gradient(ellipse, #3B82F6 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <SectionHeader
          label="Get In Touch"
          title="Let's Work Together"
          description="Open to backend engineering roles, freelance projects, and technical collaborations. Let's build something great."
        />

        {/* Ambient CTA */}
        <FadeIn delay={0.1}>
          <div className="relative mb-12 p-8 md:p-10 rounded-3xl overflow-hidden glass border border-white/5">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: "radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.15) 0%, transparent 60%)",
              }}
            />
            <div className="relative z-10 text-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Send size={28} className="text-blue-400 opacity-80" />
              </motion.div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to collaborate?
              </h3>
              <p className="text-zinc-400 text-base max-w-md mx-auto mb-6">
                Whether you have a specific project in mind or just want to explore
                possibilities — I&apos;m all ears.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display text-sm font-semibold text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Send Me an Email</span>
                <ArrowUpRight size={14} className="relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactLinks.map(({ icon: Icon, label, value, href, description, accent, gradient, border, hoverBorder }, i) => (
            <FadeIn key={label} delay={0.15 + i * 0.1} direction="up">
              <motion.a
                href={href}
                target={href.startsWith("mailto") || href.startsWith("https://wa") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`
                  block group p-6 rounded-2xl glass border ${border} ${hoverBorder}
                  bg-gradient-to-br ${gradient}
                  transition-all duration-400 hover:shadow-xl
                `}
                style={{
                  "--hover-shadow": `0 20px 40px ${accent}20`,
                } as React.CSSProperties}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors"
                  style={{ background: accent + "20", border: `1px solid ${accent}40` }}
                >
                  <Icon size={18} style={{ color: accent }} />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
                  {label}
                </p>
                <p className="text-white text-sm font-medium mb-2 group-hover:text-white transition-colors">
                  {value}
                </p>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-mono transition-colors"
                  style={{ color: accent + "aa" }}>
                  <span>Connect</span>
                  <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
