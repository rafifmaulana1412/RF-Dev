"use client";

import { motion } from "framer-motion";
import { Zap, MessageSquare, ShieldCheck, Code } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Landing pages done in 3–7 business days. Fullstack apps in 2–4 weeks. Timeline is agreed upfront, not just an estimate.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    desc: "Regular progress updates, no ghosting. You always know what stage your project is at without having to ask.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Pricing, No Hidden Fees",
    desc: "All costs are stated in the proposal before work begins. No surprise charges in the middle of the project.",
  },
  {
    icon: Code,
    title: "Production-Ready Code",
    desc: "Not just good-looking — clean, structured, and scalable code. You can continue or modify it yourself.",
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
            Why Choose <span className="gold-text">Us?</span>
          </h2>
          <p className="text-cream/50 max-w-xl">
            Many developers can build websites. Here's what makes us different.
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
