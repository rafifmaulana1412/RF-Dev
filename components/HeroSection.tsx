"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

function AnimatedNumber({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, target, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { target: 6, suffix: "+", label: "Projects Delivered" },
  { target: 100, suffix: "%", label: "On-Time Delivery" },
  { target: 3, suffix: "", label: "Tech Stacks" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00C8E0 1px, transparent 1px), linear-gradient(90deg, #00C8E0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-xs font-mono tracking-widest uppercase">
              Open for Projects
            </span>
          </motion.div>

          {/* Location */}
          <motion.p
            className="text-cream/30 text-xs font-mono mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            📍 Pamulang, Tangerang Selatan · Serving clients across Indonesia
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="font-heading text-5xl md:text-7xl font-800 leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We Build <span className="gold-text">Web Systems</span> That Work.
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-cream/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full-stack web development studio. From landing pages to complex
            fullstack systems — engineered for production, delivered on time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="https://wa.me/6285770290754?text=Halo%20rf%20dev%2C%20saya%20ingin%20konsultasi%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold text-[#0a0f1a] font-semibold rounded-xl hover:bg-gold-light transition-colors duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-dark-border text-cream/70 hover:text-cream hover:border-cream/30 rounded-xl transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              See Our Work
            </motion.button>
          </motion.div>

          {/* Stats with animated counter */}
          <motion.div
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-dark-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl font-700 gold-text">
                  <AnimatedNumber target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-cream/40 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
