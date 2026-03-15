"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const errs = validate();
  if (Object.keys(errs).length > 0) { setErrors(errs); return; }
  setErrors({});
  setStatus("loading");
  
  try {
  const res = await fetch(
    `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    }
  );

  if (!res.ok) throw new Error();

  setStatus("success");
  setForm({ name: "", email: "", subject: "", message: "" });

} catch {
  setStatus("error");
}
};

  const inputClass = (field: string) => `
    w-full bg-card border rounded-xl px-4 py-3 text-fg text-sm
    placeholder:text-fg-muted outline-none transition-all duration-300
    ${errors[field] ? "border-red-500/60 focus:border-red-500" : "border-border focus:border-accent"}
    hover:border-accent/50
  `;

  return (
    <section id="contact" className="py-32 px-6 relative bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-accent text-sm mb-3 tracking-widest">05. CONTACT</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-fg-muted mt-4 max-w-xl">
            Have a project in mind or want to explore opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "Sufyanuddintaha@gmail.com", sub: "I reply within 24hrs" },
              { icon: MapPin, label: "Location", value: "Chicago, Illinois", sub: "Open to remote" },
              { icon: Clock, label: "Availability", value: "Freelance / Full-time", sub: "Starting Q1 2025" },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="flex gap-4 p-5 bg-card border border-border rounded-xl hover:border-accent/40 transition-colors">
                <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-xl h-fit">
                  <Icon size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-mono text-fg-muted mb-0.5">{label}</p>
                  <p className="text-fg font-medium text-sm">{value}</p>
                  <p className="text-fg-muted text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            <div className="p-5 bg-accent/5 border border-accent/20 rounded-xl">
              <p className="text-sm text-fg-muted leading-relaxed">
                Currently accepting freelance projects and open to discussing full-time opportunities with innovative teams. 🚀
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center p-12 bg-card border border-emerald-500/30 rounded-2xl">
                <div className="p-4 bg-emerald-500/10 rounded-full">
                  <CheckCircle2 className="text-emerald-400" size={40} />
                </div>
                <h3 className="font-display text-2xl font-bold text-fg">Message Sent! 🎉</h3>
                <p className="text-fg-muted max-w-sm">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      className={inputClass("name")}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      className={inputClass("email")}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Subject (optional)"
                  value={form.subject}
                  onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                  className={inputClass("subject")}
                />

                <div>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {status === "error" && (
                  <div className="flex gap-2 items-center text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
