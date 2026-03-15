"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: "⚡",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Three.js / WebGL", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: "🔧",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python / FastAPI", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    title: "DevOps",
    icon: "🚀",
    skills: [
      { name: "Docker / K8s", level: 78 },
      { name: "AWS / GCP", level: 80 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Terraform", level: 70 },
    ],
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "AWS", "Figma", "Git", "GraphQL", "Prisma",
];

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <SectionHeader tag="02 — SKILLS" title="What I Work With" />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-6 card-hover glow-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-bold text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-foreground-muted font-mono">{skill.name}</span>
                      <span className="text-xs text-accent font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-accent-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: i * 0.15 + j * 0.1 + 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="overflow-hidden"
        >
          <p className="text-center text-foreground-muted font-mono text-xs tracking-widest mb-6 uppercase">
            Tech Stack
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="px-4 py-2 bg-card border border-border rounded-full font-mono text-sm text-foreground-muted hover:border-accent/50 hover:text-accent transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-16">
      <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-3">{tag}</p>
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      <div className="mt-4 w-16 h-px bg-accent" />
    </div>
  );
}
