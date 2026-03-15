"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: " Software Engineer",
    company: "VegalTech",
    location: "Hyderabad,India",
    period: "Jan,2024 — July,2024",
    description: "Worked with senior engineers to build and optimize key e-commerce features for a high-traffic seasonal campaign, focusing on performance, responsiveness, and real-time user interactions.",
    achievements: [
      "Built a fully responsive Black Day Sale ads section from scratch using Next.js and TypeScript, delivering 5+ dynamic ad components that increased promotional visibility for 1,000+ monthly users.",
      "Developed real-time add-to-cart functionality using React.js, Node.js REST APIs, and MongoDB, reducing cart interaction latency by 50% and improving checkout experience during peak sale periods.",
      "Fixed 23+ frontend issues (race conditions, hydration errors, API handler bugs) and optimized e-commerce flows, reducing page load time from 2.5s to 1.5s and lowering error rates by 40% using MongoDB indexing, Next.js code splitting, and lazy loading.",
    ],
    tech: ["Next.js", "TypeScript", "Kubernetes", "PostgreSQL", "React", "MongoDB", "MySql", "Docker", "RESTful API"],
    color: "accent",
  },
  {
    role: "Graduate Teaching Assistant and Job Coach",
    company: "Elmhurst University",
    location: "Elmhurst, IL",
    period: "Jan,2026 — Present",
    description: "Provided individualized technical instruction and academic support to students with diverse disabilities, helping them build practical digital skills and successfully complete coursework.",
    achievements: [
      "Delivered 5+ hours of weekly one-on-one instruction to 10+ students on Microsoft Office, Excel, and PowerPoint, supporting successful course completion and academic progression.",
      "Monitored student progress by creating 15+ individualized performance reports, using data-driven insights to improve learning outcomes.",
      "Designed and led 5+ hands-on technical training sessions to build workplace-ready digital skills and improve career readiness.",
    ],
    tech: ["Microsoft Office Suite (Excel, PowerPoint)", "One-on-One Coaching", "Performance Evaluation", "Student Mentoring"],
    color: "accent2",
  },
  {
    role: "Frontend Developer",
    company: "The Sparks Foundation",
    location: "Singapore,Remote",
    period: "Feb,2022 — Mar,2022",
    description: "Developed interactive web experiences and motion-driven Websites. Specialized in performance optimization and animation engineering.",
    achievements: [
      "Developed reusable React components and responsive layouts using React.js, JavaScript, and Tailwind CSS to improve development efficiency and UI consistency.",
      "Optimized application performance by improving component rendering, API handling, and frontend logic, resulting in faster load times and better user experience",
      "Reduced average bundle size by 50%",
    ],
    tech: [ "React.js", "Three.js", "Tailwind", "Node.Js", "Css", "Bootstrap"],
    color: "accent",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm mb-3 tracking-widest">04. CAREER</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-6 w-2.5 h-2.5 rounded-full bg-accent border-2 border-[#050505] z-10" />

              {/* Spacer for alternate sides */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="pl-8 md:pl-0 md:w-1/2">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold group-hover:text-accent transition-colors">{exp.role}</h3>
                      <p className="text-fg-muted text-sm">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">{exp.period}</span>
                  </div>

                  <p className="text-fg-muted text-sm leading-relaxed mb-4">{exp.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map(a => (
                      <li key={a} className="text-sm text-fg flex gap-2">
                        <span className="text-accent mt-1">▸</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                    {exp.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-fg-muted bg-border/50 px-2.5 py-1 rounded-lg">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
