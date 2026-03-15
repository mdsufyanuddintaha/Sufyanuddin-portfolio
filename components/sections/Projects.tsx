"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Facial Emotion Recognition",
    description: "Built a real-time facial expression recognition system that detects and classifies human emotions using computer vision and machine learning.",
    tags: ["JavaScript", "OpenCV", "Canvas", "CSS", "Face-api", "html"],
    category: "fullstack",
    github: "https://sufyanfacescans.netlify.app/",
    live: "https://sufyanfacescans.netlify.app/",
    gradient: "from-indigo-500/20 to-purple-500/10",
    image: "/project1-img.jpeg",
    year: "2024",
    status: "Live",
  },
  {
    id: 2,
    image: "project2-img.png",
    title: "QueryFix",
    description: "A full-stack support ticketing system built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Supabase. Features role-based authentication, admin dashboard, and ticket management.",
    tags: ["Next.js 15",  "Node.js", "PostgreSQL", "TypeScript", "Shadcn", "SuperBase", "Vercel" ],
    category:  ["fullstack", "backend"],
    github: "https://github.com/mdsufyanuddintaha/Queryfix",
    live: "https://queryfix.vercel.app/",
    gradient: "from-emerald-500/20 to-teal-500/10",
    year: "2026",
    status: "Live",
  },
  {
    id: 3,
    image: "project3-img.png",
    title: "CodeStudio",
    description: "A modern, browser-based code editor with multi-language support.",
    tags: ["Nextjs 14", "Tailwind", "Node.js", "React 18", "Radix UI", "TypeScript"],
    category: "frontend",
    github: "https://github.com/mdsufyanuddintaha/codeStudio",
    live: "https://codestudio-run.vercel.app/",
    gradient: "from-blue-500/20 to-cyan-500/10",
    year: "2026",
    status: "Live",
  },
  {
    id: 4,
    image: "project4-img.png",
    title: "Color-Memory-Game",
    description: "Interactive color memory game built with Next.js where players test and improve their memory by matching color patterns. Includes a multiplayer mode that allows two players to compete and compare scores in real time.",
    tags: ["TypeScript", "Next.js 14", "Web Audio API", "Tailwind", "React Hooks "],
    category: "frontend",
    github: "https://github.com/mdsufyanuddintaha/Color-Memory-Game",
    live: "https://color-memory-game-multiplayer.vercel.app/",
    gradient: "from-pink-500/20 to-rose-500/10",
    year: "2026",
    status: "Live",
  },
  {
    id: 5,
    title: "findpics",
    image: "project5-img.png",
    description: "A React-based image gallery app that enables real-time image search using the Unsplash API, featuring a clean and responsive UI built with Tailwind CSS.",
    tags: ["React", "Tailwind", "Javascript", "Unsplash Image API", "Nodejs"],
    category: "frontend",
    github: "https://findpics.netlify.app/",
    live: "https://findpics.netlify.app/",
    gradient: "from-amber-500/20 to-orange-500/10",
    year: "2023",
    status: "Live",
  },
  {
    id: 6,
    title: "Note-All",
    image: "project6-img.png",
    description: "A responsive notes application built with React and JavaScript that allows users to create, delete, and search notes, featuring a clean UI styled with Tailwind CSS.",
    tags: ["React Native", "Python", "Whisper AI", "FastAPI", "PostgreSQL"],
    category: "mobile",
    github: "https://note-all.netlify.app/",
    live: "https://note-all.netlify.app/",
    gradient: "from-violet-500/20 to-purple-500/10",
    year: "2024",
    status: "Live",
  },
];

const filters = ["all", "fullstack", "frontend", "backend", "mobile"];

export default function Projects() {
  const [active, setActive] = useState("all");

      const filtered = active === "all" ? projects : projects.filter(p => 
          Array.isArray(p.category) ? p.category.includes(active) : p.category === active
);

  return (
    <section id="projects" className="py-32 px-6 relative bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-accent text-sm mb-3 tracking-widest">03. PORTFOLIO</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-lg text-sm font-mono capitalize transition-all duration-300 ${
                active === f
                  ? "bg-accent text-white"
                  : "border border-border text-fg-muted hover:border-accent/50 hover:text-fg"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                {/* Project Image */}
                {project.image && (
             <div className="relative h-52 overflow-hidden rounded-t-2xl">
                   <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                     />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
             </div>
 )}
                {/* Gradient top */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.gradient.replace('/20', '').replace('/10', '')}`} />

                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-mono text-fg-muted">{project.year}</span>
                      <span className="mx-2 text-fg-muted">·</span>
                      <span className={`text-xs font-mono ${
                        project.status === "Live" ? "text-emerald-400" :
                        project.status === "Open Source" ? "text-accent" :
                        project.status === "Beta" ? "text-amber-400" : "text-fg-muted"
                      }`}>{project.status}</span>
                    </div>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" className="p-1.5 rounded-lg text-fg-muted hover:text-fg transition-colors">
                        <Github size={15} />
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" className="p-1.5 rounded-lg text-fg-muted hover:text-accent transition-colors">
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-fg-muted text-sm leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} className="text-xs py-0.5">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="https://github.com/mdsufyanuddintaha" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="md" className="gap-2">
              View all on GitHub <ArrowUpRight size={14} />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
