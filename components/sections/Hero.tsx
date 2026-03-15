"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Twitter, Download } from "lucide-react";
import React from "react";
import { FaReact, FaDocker, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiSpringboot, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";


const isLightColor = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
};

const FloatingOrb = () => {
  const [popup, setPopup] = React.useState<{ name: string; question: string; answer: string; color: string } | null>(null);
  const [userAnswer, setUserAnswer] = React.useState("");
  const [answerStatus, setAnswerStatus] = React.useState<"idle" | "correct" | "wrong">("idle");
  const [showFireworks, setShowFireworks] = React.useState(false);

  const techData: Record<string, { question: string; answer: string }> = {
    "React": { question: "What is the Virtual DOM in React?", answer: "virtual dom" },
    "Next.js": { question: "What is Server Side Rendering in Next.js?", answer: "ssr" },
    "HTML": { question: "What does HTML stand for?", answer: "hypertext markup language" },
    "TypeScript": { question: "What is the difference between type and interface?", answer: "type" },
    "Spring Boot": { question: "What annotation is used to mark a Spring Boot main class?", answer: "springbootapplication" },
    "MongoDB": { question: "What type of database is MongoDB?", answer: "nosql" },
    "MySQL": { question: "What does SQL stand for?", answer: "structured query language" },
    "Docker": { question: "What is the difference between image and container?", answer: "image" },
  };

  const inner = [
    { icon: FaReact, color: "#61DAFB", name: "React" },
    { icon: SiNextdotjs, color: "#e2e8f0", name: "Next.js" },
    { icon: FaHtml5, color: "#E34F26", name: "HTML" },
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  ];

  const outer = [
    { icon: SiSpringboot, color: "#6DB33F", name: "Spring Boot" },
    { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { icon: SiMysql, color: "#4479A1", name: "MySQL" },
    { icon: FaDocker, color: "#2496ED", name: "Docker" },
  ];

  const allTechs = [...inner, ...outer];

  const handleClick = (tech: { name: string; color: string }) => {
    setPopup({
      name: tech.name,
      color: tech.color,
      question: techData[tech.name]?.question || `Tell me about ${tech.name}`,
      answer: techData[tech.name]?.answer || "",
    });
    setUserAnswer("");
    setAnswerStatus("idle");
    setShowFireworks(false);
  };

  const checkAnswer = () => {
    if (!popup) return;
    const clean = userAnswer.toLowerCase().replace(/\s+/g, "");
    const expected = popup.answer.toLowerCase().replace(/\s+/g, "");
    if (clean.includes(expected) || expected.includes(clean)) {
      setAnswerStatus("correct");
      setShowFireworks(true);
      setTimeout(() => setShowFireworks(false), 4000);
    } else {
      setAnswerStatus("wrong");
    }
  };

  const closePopup = () => {
    setPopup(null);
    setUserAnswer("");
    setAnswerStatus("idle");
    setShowFireworks(false);
  };
  const IconCard = ({ tech, orbitDuration, delay }: any) => (
  <div
    onClick={() => handleClick(tech)}
    className="absolute z-20 w-12 h-12 rounded-xl flex items-center justify-center border cursor-pointer transition-all duration-200 hover:scale-125"
    style={{
      color: tech.color,
      borderColor: `${tech.color}80`,
      background: `${tech.color}30`,
      boxShadow: `0 0 20px ${tech.color}60, 0 0 40px ${tech.color}20`,
      animation: `${orbitDuration} linear infinite`,
      animationDelay: delay,
      filter: `brightness(1.3)`,
    }}
  >
    <tech.icon size={22} />
  </div>
);

  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: ["#ff0", "#f0f", "#0ff", "#f60", "#6f0", "#06f", "#ff6666", "#66ffcc"][Math.floor(Math.random() * 8)],
    size: Math.random() * 10 + 4,
    delay: Math.random() * 1.5,
    duration: Math.random() * 1.5 + 0.8,
  }));

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-40 h-40 rounded-full blur-[80px] bg-indigo-500/30 animate-pulse" />

      {/* Hint text at top */}
      <p className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-mono text-indigo-400 animate-pulse text-center whitespace-nowrap z-10 tracking-widest"
             style={{ textShadow: "0 0 10px rgba(99,102,241,0.8)" }}>
             ✦ Click an icon to test your knowledge
        </p>

              {/* Center */}
        <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold text-indigo-400 border border-indigo-500/40 bg-indigo-500/10">
              &lt;/&gt;
           </div>
        </div>

      {inner.map((tech, i) => (
        <IconCard key={tech.name} tech={tech} orbitDuration="orbit-inner 12s" delay={`${-i * 3}s`} />
      ))}
      {outer.map((tech, i) => (
        <IconCard key={tech.name} tech={tech} orbitDuration="orbit-outer 20s" delay={`${-i * 5}s`} />
      ))}

      <div className="absolute w-52 h-52 rounded-full border border-indigo-500/40"
         style={{ boxShadow: "0 0 15px rgba(99,102,241,0.3), inset 0 0 15px rgba(99,102,241,0.1)" }}
           />
     <div className="absolute w-80 h-80 rounded-full border border-purple-500/30"
             style={{ boxShadow: "0 0 20px rgba(139,92,246,0.2), inset 0 0 20px rgba(139,92,246,0.05)" }}
             />

      {/* Popup */}
      {popup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={closePopup}
        >
          {/* Fireworks */}
          {showFireworks && (
            <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
              {particles.map(p => (
                <div
                  key={p.id}
                  className="absolute rounded-full"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                    background: p.color,
                    boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                    animation: `firework ${p.duration}s ease-out ${p.delay}s forwards`,
                  }}
                />
              ))}
            </div>
          )}

          <div
            className="relative bg-[#111] border rounded-2xl p-8 max-w-md w-full mx-6 shadow-2xl"
            style={{ borderColor: `${popup.color}40`, boxShadow: `0 0 40px ${popup.color}20` }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${popup.color}20`, color: popup.color }}
              >
                {React.createElement(allTechs.find(t => t.name === popup.name)!.icon, { size: 20 })}
              </div>
              <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Interview Question</p>
                <h3 className="font-bold text-lg" style={{ color: popup.color }}>{popup.name}</h3>
              </div>
            </div>

            {/* Question */}
            <div
              className="p-4 rounded-xl mb-5"
              style={{ background: `${popup.color}10`, border: `1px solid ${popup.color}20` }}
            >
              <p className="text-white font-medium leading-relaxed">❓ {popup.question}</p>
            </div>

            {/* Success */}
            {answerStatus === "correct" && (
              <div className="mb-5 p-6 bg-green-500/10 border border-green-500/30 rounded-xl text-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-green-400/10 to-green-500/5 animate-pulse" />
                <div className="relative z-10">
                  <div className="text-5xl mb-3" style={{ animation: "bounce 0.6s ease infinite" }}>
                    🎉
                  </div>
                  <p className="text-green-400 font-bold text-xl mb-1">Congratulations!</p>
                  <p className="text-green-300 text-sm">
                    You're a <span className="font-bold" style={{ color: popup.color }}>{popup.name}</span> pro! 🚀
                  </p>
                  <div className="flex justify-center gap-1 mt-3">
                    {["⭐", "⭐", "⭐"].map((star, i) => (
                      <span
                        key={i}
                        className="text-xl"
                        style={{ animation: `fadeUp 0.4s ease ${i * 0.15}s both` }}
                      >
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Wrong */}
            {answerStatus === "wrong" && (
              <div className="mb-5 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-red-400 font-bold">❌ Not quite right — try again!</p>
              </div>
            )}

            {/* Answer input */}
            {answerStatus !== "correct" && (
              <>
                <input
                  type="text"
                  placeholder="Type your answer here..."
                  value={userAnswer}
                  onChange={e => setUserAnswer(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && checkAnswer()}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-indigo-500 transition-all mb-4"
                />
                <div className="flex gap-3">
                  <button
                    onClick={checkAnswer}
                    className="flex-1 py-3 rounded-xl font-semibold transition-all hover:opacity-90"
                    style={{
                      background: popup.color,
                      color: isLightColor(popup.color) ? "#000000" : "#ffffff",
                    }}
                  >
                    Submit Answer ✓
                  </button>
                  <button
                    onClick={closePopup}
                    className="px-4 py-3 rounded-xl font-semibold text-gray-400 bg-white/5 hover:bg-white/10 transition-all"
                  >
                    Skip ✕
                  </button>
                </div>
              </>
            )}

            {answerStatus === "correct" && (
              <button
                onClick={closePopup}
                className="w-full py-3 rounded-xl font-semibold transition-all hover:opacity-90"
                style={{
                  background: popup.color,
                  color: isLightColor(popup.color) ? "#000000" : "#ffffff",
                }}
              >
                Close 🎊
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const ParticleField = () => null;

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <ParticleField />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent2/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-6">Available for work ✦</Badge>
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building{" "}
            <span className="gradient-text">digital</span>
            <br />
            experiences
            <br />
            <span className="text-fg-muted">that matter.</span>
          </motion.h1>

          <motion.p
            className="text-fg-muted text-lg max-w-md mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm Sufyan! Full-stack developer crafting high-performance web applications with
            modern technologies. Passionate about clean code and exceptional UX.
          </motion.p>

        <motion.div
               className="flex flex-wrap gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
>
            <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View Projects
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get in Touch
            </Button>
            <a href="/resume.pdf" download="Sufyan_Resume.pdf" className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-accent/50 text-foreground rounded-full transition-all duration-200 hover:text-accent text-sm font-medium">
             <Download size={16} />
                 Download Resume
                     </a>
          </motion.div>

          <motion.div
            className="flex gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { icon: Github, href: "https://github.com/mdsufyanuddintaha", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mohammed-sufyanuddin-taha/", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border text-fg-muted hover:text-accent hover:border-accent transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Orb */}
        <motion.div
          className="relative h-[400px] lg:h-[550px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-float">
            <FloatingOrb />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full border-2 border-indigo-500/60 animate-ping" 
                style={{ 
             animationDuration: "3s",
             boxShadow: "0 0 20px rgba(99,102,241,0.5)"
  }} 
/>
          </div>
        </motion.div>
      </div>

    <motion.div
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fg-muted text-xs cursor-pointer"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
      >
  <span className="font-mono hover:text-accent transition-colors">scroll</span>
  <ArrowDown size={14} className="animate-bounce" />
</motion.div>
    </section>
  );
}