"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Berapa lama pengerjaan website?",
    a: "Tergantung kompleksitas. Landing page 3–7 hari kerja, fullstack app 2–4 minggu. Timeline pasti akan disepakati di awal sebelum pengerjaan dimulai.",
  },
  {
    q: "Berapa DP yang harus dibayar?",
    a: "DP 50% di awal sebelum pengerjaan, pelunasan 50% setelah project selesai dan disetujui. Untuk project besar bisa dinegosiasikan dengan skema cicilan.",
  },
  {
    q: "Berapa kali revisi yang didapat?",
    a: "Setiap paket sudah termasuk revisi minor tanpa batas selama masa pengerjaan. Revisi besar di luar scope awal akan dikenakan biaya tambahan yang disepakati bersama.",
  },
  {
    q: "Apakah bisa request fitur custom?",
    a: "Tentu. Semua project dikerjakan sesuai kebutuhan spesifik klien. Konsultasi gratis untuk mendiskusikan scope dan estimasi biaya fitur custom.",
  },
  {
    q: "Apakah ada garansi setelah selesai?",
    a: "Ada garansi bug fixing 30 hari setelah delivery. Jika ada bug dari sisi pengerjaan kami, akan diperbaiki tanpa biaya tambahan.",
  },
  {
    q: "Teknologi apa yang digunakan?",
    a: "Kami menggunakan Next.js, React, Node.js, Express, PostgreSQL, Prisma, Supabase, dan Tailwind CSS. Stack dipilih sesuai kebutuhan project untuk performa dan skalabilitas terbaik.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gold font-mono text-xs tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-800 text-cream mb-4">
            Pertanyaan yang <span className="gold-text">Sering Ditanya</span>
          </h2>
          <p className="text-cream/50 max-w-xl">
            Masih ada pertanyaan lain? Langsung chat kami.
          </p>
        </motion.div>

        <div className="max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className="studio-card rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span
                    className={`text-sm font-semibold transition-colors ${isOpen ? "text-gold" : "text-cream/80"}`}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-cream/30 flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-cream/50 text-sm leading-relaxed border-t border-dark-border pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
