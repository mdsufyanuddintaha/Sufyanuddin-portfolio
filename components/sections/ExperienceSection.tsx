"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./SkillsSection";

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "Stripe",
    period: "2022 — Present",
    location: "San Francisco, CA",
    desc: "Led development of next-gen payment infrastructure serving 10M+ transactions daily. Architected microservices reducing latency by 40%. Mentored 5 junior engineers.",
    highlights: ["40% latency reduction", "10M+ daily transactions", "Led team of 8"],
    tech: ["Next.js", "Go", "Kubernetes", "PostgreSQL", "Redis"],
    color: "#6366f1",
  },
  {
    role: "Full Stack Developer",
    company: "Vercel",
    period: "2020 — 2022",
    location: "Remote",
    desc: "Built and maintained core features of the Vercel deployment platform. Contributed to Edge Runtime and improved build pipeline performance by 60%.",
    highlights: ["60% build speedup", "Edge Runtime contrib", "5K+ customers"],
    tech: ["React", "Node.js", "Rust", "AWS", "TypeScript"],
    color: "#8b5cf6",
  },
  {
    role: "Frontend Engineer",
    company: "Airbnb",
    period: "2018 — 2020",
    location: "San Francisco, CA",
    desc: "Developed key UI components for Airbnb's host dashboard. Implemented design system used by 50+ engineers. Improved Core Web Vitals scores by 35%.",
    highlights: ["35% CWV improvement", "Design system", "50+ eng users"],
    tech: ["React", "GraphQL", "TypeScript", "Jest", "Figma"],
    color: "#a78bfa",
  },
  {
    role: "Junior Developer",
    company: "Startup (Seed)",
    period: "2016 — 2018",
    location: "New York, NY",
    desc: "First engineering hire. Built the product from scratch using React and Node.js. Helped grow company from 0 to 5,000 users before Series A.",
    highlights: ["0 → 5K users", "First engineer", "Series A raise"],
    tech: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    color: "#7c3aed",
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <SectionHeader tag="04 — EXPERIENCE" title="Work History" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative md:pl-24"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 top-8 w-4 h-4 rounded-full border-2 border-background hidden md:block transition-transform duration-300 group-hover:scale-150"
                  style={{ background: exp.color, borderColor: exp.color }}
                />

                <div className="bg-card border border-border rounded-2xl p-7 card-hover overflow-hidden relative group">
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                    style={{ background: `linear-gradient(to bottom, ${exp.color}, transparent)` }}
                  />

                  <div className="flex flex-wrap justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{exp.role}</h3>
                      <p className="font-mono text-sm" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm text-foreground-muted">{exp.period}</p>
                      <p className="text-xs text-foreground-muted">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-foreground-muted text-sm leading-relaxed mb-5">{exp.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs font-mono px-2.5 py-1 rounded-md"
                        style={{ background: `${exp.color}15`, color: exp.color }}
                      >
                        ↗ {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-foreground-muted bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
