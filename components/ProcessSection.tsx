"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We discuss your goals, requirements, and timeline. Free consultation, no commitment.",
  },
  {
    num: "02",
    title: "Proposal",
    desc: "Clear scope, transparent pricing, and realistic delivery timeline — before any work begins.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Iterative builds with regular updates. You see progress, not just a final result.",
  },
  {
    num: "04",
    title: "Delivery",
    desc: "Tested, deployed, and handed over with documentation. Post-launch support included.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gold font-mono text-xs tracking-widest uppercase mb-3">
            How We Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-800 text-cream mb-4">
            Our <span className="gold-text">Process</span>
          </h2>
          <p className="text-cream/50 max-w-xl">
            Simple, transparent, and collaborative. No surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              className="studio-card rounded-2xl p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="font-heading text-5xl font-800 text-gold/10 group-hover:text-gold/20 transition-colors absolute top-4 right-4 leading-none">
                {step.num}
              </div>
              <div className="font-mono text-gold text-sm mb-3">{step.num}</div>
              <h3 className="font-heading font-700 text-cream text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-cream/40 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
