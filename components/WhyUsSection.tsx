"use client";

import { motion } from "framer-motion";
import { Zap, MessageSquare, ShieldCheck, Code } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Landing page selesai dalam 3–7 hari kerja. Fullstack app 2–4 minggu. Timeline disepakati di awal, bukan estimasi asal.",
  },
  {
    icon: MessageSquare,
    title: "Komunikasi Transparan",
    desc: "Update progress rutin, tidak ghosting. Lo selalu tahu project ada di tahap mana tanpa harus nanya duluan.",
  },
  {
    icon: ShieldCheck,
    title: "Harga Jelas, No Hidden Fee",
    desc: "Semua biaya tertera di proposal sebelum pengerjaan. Tidak ada biaya tambahan mendadak di tengah jalan.",
  },
  {
    icon: Code,
    title: "Production-Ready Code",
    desc: "Bukan sekadar tampil bagus — kode bersih, terstruktur, dan siap scale. Lo bisa lanjutkan atau modifikasi sendiri.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="whyus" className="py-24 border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gold font-mono text-xs tracking-widest uppercase mb-3">
            Why rf dev
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-800 text-cream mb-4">
            Kenapa Pilih <span className="gold-text">Kami?</span>
          </h2>
          <p className="text-cream/50 max-w-xl">
            Banyak developer bisa bikin website. Ini yang bikin kami beda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                className="studio-card rounded-2xl p-6 flex gap-5 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading font-700 text-cream text-base mb-2">
                    {r.title}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
