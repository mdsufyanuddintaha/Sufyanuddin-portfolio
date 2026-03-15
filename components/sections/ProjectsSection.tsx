"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SkillsSection";

const projects = [
  {
    id: 1,
    title: "Facial Emotion Recognition",
    desc: "Built a real-time facial expression recognition system that detects and classifies human emotions using computer vision and machine learning.",
    tech: ["JavaScript", "OpenCV", "Canvas", "CSS", "Face-api"],
    github: "https://sufyanfacescans.netlify.app/",
    live: "https://sufyanfacescans.netlify.app/",
    color: "#6366f1",
    featured: true,
    metrics: ["$2M+ Monthly Volume", "99.9% Uptime", "0.01% Fraud Rate"],
  },
  {
    id: 2,
    title: "FlowBoard",
    desc: "Real-time collaborative project management tool with WebSocket sync, drag-and-drop interface, and AI task prioritization.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "OpenAI"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#8b5cf6",
    featured: true,
    metrics: ["10K+ Active Users", "< 50ms Latency", "AI-Powered"],
  },
  {
    id: 3,
    title: "AeroShop",
    desc: "High-performance e-commerce platform with 3D product visualization, AR try-on features, and sub-second page loads.",
    tech: ["Next.js", "Three.js", "Shopify", "Tailwind", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#a78bfa",
    featured: false,
    metrics: ["0.8s Load Time", "3D Visualization", "AR Try-On"],
  },
  {
    id: 4,
    title: "DataPulse",
    desc: "Analytics platform with real-time data visualization, custom dashboards, and automated reporting for SaaS businesses.",
    tech: ["React", "D3.js", "FastAPI", "TimescaleDB", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    color: "#7c3aed",
    featured: false,
    metrics: ["500+ Dashboards", "Real-time Data", "Auto Reports"],
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <SectionHeader tag="03 — PROJECTS" title="Selected Work" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-card border border-border rounded-2xl p-7 card-hover overflow-hidden"
            >
              {/* Color glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}15, transparent 70%)` }}
              />

              <div className="relative z-10">
                {project.featured && (
                  <span className="inline-block mb-3 font-mono text-xs tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}

                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs font-mono px-2.5 py-1 rounded-md"
                      style={{ background: `${project.color}15`, color: project.color }}
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-foreground-muted bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1.5 text-sm text-foreground-muted hover:text-accent transition-colors"
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-1.5 text-sm text-foreground-muted hover:text-accent transition-colors"
                  >
                    <ExternalLink size={15} /> Live
                  </a>
                  <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    View <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
