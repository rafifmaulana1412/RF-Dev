"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Depends on complexity. Landing pages take 3–7 business days, fullstack apps 2–4 weeks. An exact timeline will be agreed upon before work begins.",
  },
  {
    q: "How much is the down payment?",
    a: "50% upfront before work starts, 50% upon completion and approval. For larger projects, installment schemes can be negotiated.",
  },
  {
    q: "How many revisions are included?",
    a: "Unlimited minor revisions are included during development. Major revisions outside the original scope will incur an additional fee agreed upon together.",
  },
  {
    q: "Can I request custom features?",
    a: "Absolutely. All projects are built to each client's specific needs. Free consultation to discuss scope and cost estimates for custom features.",
  },
  {
    q: "Is there a warranty after completion?",
    a: "Yes, 30-day bug fixing warranty after delivery. Any bugs from our side will be fixed at no extra charge.",
  },
  {
    q: "What technologies do you use?",
    a: "We use Next.js, React, Node.js, Express, PostgreSQL, Prisma, Supabase, and Tailwind CSS. Stack is chosen based on project needs for best performance and scalability.",
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
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
          <p className="text-cream/50 max-w-xl">
            Still have questions? Just chat with us directly.
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
