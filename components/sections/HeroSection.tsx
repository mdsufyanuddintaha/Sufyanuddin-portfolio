"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("@/components/three/ThreeScene"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

const words = ["Developer", "Designer", "Creator", "Builder"];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pt-24">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs text-foreground-muted tracking-widest uppercase">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-none tracking-tight mb-4"
          >
            Alex
            <br />
            <span className="gradient-text">Chen</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-foreground-muted font-mono text-lg">Full Stack</span>
            <RotatingText words={words} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-foreground-muted text-lg max-w-md mb-10 leading-relaxed"
          >
            I build fast, beautiful, and accessible web experiences with modern
            technologies. Passionate about clean code and pixel-perfect design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 border border-white/10 hover:border-accent/50 text-foreground rounded-full transition-all duration-200"
            >
              View Work
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com" target="_blank" className="text-foreground-muted hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-foreground-muted hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right - 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[400px] md:h-[500px] relative"
        >
          <ThreeScene />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-muted"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function RotatingText({ words }: { words: string[] }) {
  return (
    <motion.div className="overflow-hidden h-8">
      <motion.div
        animate={{ y: words.map((_, i) => `-${i * 100}%`) }}
        transition={{
          repeat: Infinity,
          duration: words.length * 2,
          ease: "easeInOut",
          times: words.map((_, i) => i / words.length),
        }}
      >
        {[...words, words[0]].map((word, i) => (
          <div key={i} className="h-8 flex items-center">
            <span className="gradient-text font-bold text-xl">{word}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
