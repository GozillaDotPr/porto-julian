"use client";

import { FadeIn } from "./AnimatedText";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <FadeIn delay={0.1}>
        <span className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-blue-400 mb-4 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5">
          {label}
        </span>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h2
          className={cn(
            "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 leading-tight",
          )}
        >
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.3}>
          <p
            className={cn(
              "text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed",
              align === "center" ? "mx-auto" : ""
            )}
          >
            {description}
          </p>
        </FadeIn>
      )}
      <FadeIn delay={0.35}>
        <div
          className={cn(
            "section-line mt-6",
            align === "center" ? "mx-auto" : ""
          )}
        />
      </FadeIn>
    </div>
  );
}
