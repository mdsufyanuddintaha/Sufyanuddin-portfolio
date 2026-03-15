"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle, MapPin, Clock } from "lucide-react";
import { SectionHeader } from "./SkillsSection";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    try {
      // Using Formspree as a reliable free contact backend
      // Replace "YOUR_FORM_ID" with your actual Formspree form ID
      const res = await fetch("https://formspree.io/f/xpwzgkap", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <SectionHeader tag="05 — CONTACT" title="Let's Connect" />

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-8"
          >
            <p className="text-foreground-muted leading-relaxed">
              Have a project in mind or just want to chat? I'm always open to discussing
              new opportunities, ideas, or collaborations.
            </p>

            <div className="space-y-4">
              <ContactInfo icon={<Mail size={16} />} label="Email" value="alex@example.com" />
              <ContactInfo icon={<MapPin size={16} />} label="Location" value="San Francisco, CA" />
              <ContactInfo icon={<Clock size={16} />} label="Response Time" value="Within 24 hours" />
            </div>

            <div>
              <p className="font-mono text-xs text-foreground-muted tracking-widest uppercase mb-3">
                Availability
              </p>
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-400 font-mono">Open to opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-card border border-border rounded-2xl p-8 glow-border"
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <FormField
                label="Name *"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="John Doe"
                type="text"
              />
              <FormField
                label="Email *"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="john@example.com"
                type="email"
              />
            </div>
            <div className="mb-4">
              <FormField
                label="Subject"
                value={form.subject}
                onChange={(v) => setForm({ ...form, subject: v })}
                placeholder="Project Inquiry"
                type="text"
              />
            </div>
            <div className="mb-6">
              <label className="block font-mono text-xs text-foreground-muted tracking-wider uppercase mb-2">
                Message *
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none font-sans"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                status === "success"
                  ? "bg-green-500/20 border border-green-500/30 text-green-400"
                  : status === "error"
                  ? "bg-red-500/20 border border-red-500/30 text-red-400"
                  : "bg-accent hover:bg-accent/90 text-white hover:shadow-lg hover:shadow-accent/30"
              }`}
            >
              {status === "idle" && <><Send size={16} /> Send Message</>}
              {status === "sending" && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </>
              )}
              {status === "success" && <><CheckCircle size={16} /> Message Sent!</>}
              {status === "error" && <><AlertCircle size={16} /> Failed — Try Again</>}
            </button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-center text-sm text-green-400 font-mono"
              >
                ✓ I'll get back to you within 24 hours!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
        {icon}
      </div>
      <div>
        <p className="text-xs text-foreground-muted font-mono">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

function FormField({
  label, value, onChange, placeholder, type,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; type: string;
}) {
  return (
    <div>
      <label className="block font-mono text-xs text-foreground-muted tracking-wider uppercase mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
      />
    </div>
  );
}
