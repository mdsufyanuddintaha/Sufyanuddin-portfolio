"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
      { name: "Redis", level: 78 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🚀",
    skills: [
      { name: "Docker / K8s", level: 80 },
      { name: "AWS / GCP", level: 75 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Git", level: 95 },
    ],
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "Redis", "Docker", "AWS", "Tailwind", "GraphQL", "Prisma",
  "Framer Motion", "Three.js", "Figma", "Jest",
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-fg">{name}</span>
        <span className="text-sm font-mono text-accent">{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm mb-3 tracking-widest">02. EXPERTISE</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display text-xl font-semibold">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} delay={ci * 0.1 + si * 0.05} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              whileHover={{ scale: 1.05 }}
            >
              <Badge variant="outline" className="hover:border-accent hover:text-accent transition-colors cursor-default py-2 px-4">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
