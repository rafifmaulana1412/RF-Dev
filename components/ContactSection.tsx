"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo rf dev! 👋\n\nNama: ${form.name}\nLayanan: ${form.service}\n\nPesan:\n${form.message}`;
    const url = `https://wa.me/6285770290754?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const services = [
    "Landing Page",
    "Fullstack Web App",
    "Payment Gateway",
    "Maintenance",
    "Lainnya",
  ];

  return (
    <section id="contact" className="py-24 border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gold font-mono text-xs tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-800 text-cream mb-4">
            Let's Build <span className="gold-text">Something.</span>
          </h2>
          <p className="text-cream/50 max-w-xl">
            Isi form di bawah dan kami akan langsung balas via WhatsApp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Name */}
            <div>
              <label className="text-cream/50 text-xs font-mono uppercase tracking-widest block mb-2">
                Nama
              </label>
              <input
                type="text"
                required
                placeholder="Nama kamu"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            {/* Service */}
            <div>
              <label className="text-cream/50 text-xs font-mono uppercase tracking-widest block mb-2">
                Layanan yang dibutuhkan
              </label>
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                style={{
                  color: form.service ? "#e8f0f5" : "rgba(232,240,245,0.2)",
                }}
              >
                <option value="" disabled>
                  Pilih layanan...
                </option>
                {services.map((s) => (
                  <option key={s} value={s} className="text-cream bg-dark-card">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-cream/50 text-xs font-mono uppercase tracking-widest block mb-2">
                Ceritakan project kamu
              </label>
              <textarea
                required
                rows={4}
                placeholder="Deskripsikan kebutuhan project kamu..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-cream text-sm placeholder:text-cream/20 focus:outline-none focus:border-gold/50 transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold text-[#0a0f1a] font-semibold rounded-xl hover:bg-gold-light transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-4 h-4" />
              Kirim via WhatsApp
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="studio-card rounded-2xl p-6 space-y-5">
              <p className="text-cream/70 text-sm leading-relaxed">
                Konsultasi gratis, tanpa komitmen. Kami akan balas dalam{" "}
                <span className="text-gold font-semibold">
                  kurang dari 1 jam
                </span>{" "}
                di jam kerja.
              </p>

              <div className="space-y-3 pt-2 border-t border-dark-border">
                <a
                  href="https://wa.me/6285770290754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream/50 hover:text-gold transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  +62 857-7029-0754
                </a>
                <a
                  href="mailto:rafifmaulana1412@gmail.com"
                  className="flex items-center gap-3 text-cream/50 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  rafifmaulana1412@gmail.com
                </a>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "< 1 jam", label: "Response time" },
                { value: "Gratis", label: "Konsultasi" },
                { value: "50%", label: "DP di awal" },
                { value: "30 hari", label: "Garansi bug" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="studio-card rounded-xl p-4 text-center"
                >
                  <div className="font-heading text-lg font-700 gold-text">
                    {s.value}
                  </div>
                  <div className="text-cream/40 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
