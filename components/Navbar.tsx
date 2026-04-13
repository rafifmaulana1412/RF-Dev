"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((i) => i.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0f1a]/90 backdrop-blur-md border-b border-dark-border"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo("hero")}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/logo.jpeg"
              alt="rf dev"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <span className="font-heading font-700 text-lg text-cream">
              RF <span className="gold-text">dev</span>
            </span>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative text-sm font-body transition-colors duration-200 group"
                >
                  <span
                    className={
                      isActive ? "text-gold" : "text-cream/60 hover:text-cream"
                    }
                  >
                    {item.label}
                  </span>
                  {/* underline indicator */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-gold rounded-full"
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.25 }}
                  />
                </button>
              );
            })}
            <motion.button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 bg-gold text-[#0a0f1a] text-sm font-semibold rounded-lg hover:bg-gold-light transition-colors duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Quote
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-dark-card border-l border-dark-border z-50 md:hidden flex flex-col pt-20 pb-8 px-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left px-4 py-3 rounded-lg transition-all text-sm ${
                      activeId === item.id
                        ? "text-gold bg-gold/5 border border-gold/20"
                        : "text-cream/70 hover:text-cream hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full py-3 bg-gold text-[#0a0f1a] font-semibold rounded-lg text-sm"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
