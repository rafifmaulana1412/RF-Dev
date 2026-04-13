"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// ✏️ Edit testimonials langsung di sini
const testimonials = [
  {
    name: "Andi Pratama",
    role: "Owner, Nahda Showroom",
    text: "Website showroom kami jadi jauh lebih profesional. Proses pengerjaan cepat, komunikasi lancar, dan hasilnya melebihi ekspektasi.",
    rating: 5,
  },
  {
    name: "Siti Rahmawati",
    role: "Panitia, Yayasan Hidayatullah",
    text: "Tim rf dev sangat responsif dan paham kebutuhan kami. Website yayasan sekarang lebih mudah diakses dan tampilannya modern.",
    rating: 5,
  },
  {
    name: "Rizky Firmansyah",
    role: "Pengantin, Wedding Invitation",
    text: "Undangan digital kami dibuat dengan sangat detail dan elegan. Banyak tamu yang memuji tampilannya. Highly recommended!",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Manager, Restoran Montevia",
    text: "Sistem manajemen restoran kami sekarang jauh lebih efisien. Order tracking dan dashboard admin sangat membantu operasional harian.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gold font-mono text-xs tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-800 text-cream mb-4">
            What Clients <span className="gold-text">Say</span>
          </h2>
          <p className="text-cream/50 max-w-xl">
            Real feedback from real clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="studio-card rounded-2xl p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Quote className="w-6 h-6 text-gold/40" />

              <p className="text-cream/60 text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                <div>
                  <p className="text-cream text-sm font-semibold">{t.name}</p>
                  <p className="text-cream/40 text-xs mt-0.5">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-gold text-sm">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
