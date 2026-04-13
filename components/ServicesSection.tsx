"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Globe,
  Zap,
  CreditCard,
  RefreshCw,
  Shield,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Globe,
    tag: "Landing Page",
    title: "Website Landing Page",
    desc: "Precision-built landing pages for foundations, personal branding, and company profiles. Responsive, fast, and deployed to production.",
    packages: [
      {
        name: "Basic",
        price: "Rp 2.500.000",
        withDomain: "Rp 2.700.000",
        features: [
          "1–3 halaman",
          "Responsive mobile",
          "Desain modern & clean",
          "Deploy ke Vercel",
        ],
      },
      {
        name: "Standard",
        price: "Rp 4.000.000",
        withDomain: "Rp 4.200.000",
        features: [
          "4–6 halaman",
          "Animasi interaktif",
          "Form kontak WA/Email",
          "SEO basic",
        ],
        highlight: true,
      },
      {
        name: "Premium",
        price: "Rp 6.000.000+",
        withDomain: "Rp 6.200.000+",
        features: [
          "Unlimited section",
          "UI kompleks + animasi",
          "Dashboard admin (opsional)",
          "Optimasi performa & SEO",
        ],
      },
    ],
  },
  {
    id: 2,
    icon: Zap,
    tag: "Fullstack App",
    title: "Fullstack Web Application",
    desc: "End-to-end systems with auth, database, CRUD, and admin panel. Scalable architecture, production-ready from day one.",
    packages: [
      {
        name: "Standard",
        price: "Rp 7.000.000",
        withDomain: "Rp 7.500.000",
        features: [
          "Frontend + Backend",
          "Database integration",
          "Admin panel basic",
          "REST API",
        ],
      },
      {
        name: "Advanced",
        price: "Rp 10.000.000 – 14.000.000",
        withDomain: "Rp 10.500.000+",
        features: [
          "Multi-role login",
          "Dashboard lengkap",
          "Notifikasi/email",
          "API kompleks & scalable",
        ],
        highlight: true,
      },
    ],
  },
  {
    id: 3,
    icon: CreditCard,
    tag: "Payment Gateway",
    title: "Payment Gateway Integration",
    desc: "Midtrans & Xendit setup from sandbox to live production. SNAP API, webhooks, and full transaction flow.",
    packages: [
      {
        name: "Midtrans",
        price: "Rp 2.000.000 – 2.500.000",
        withDomain: null,
        features: [
          "Setup SNAP Payment",
          "Backend API transaksi",
          "Redirect + status pembayaran",
          "Sandbox & production testing",
        ],
      },
      {
        name: "Xendit",
        price: "Rp 3.500.000",
        withDomain: null,
        features: [
          "Setup invoice system",
          "Webhook callback otomatis",
          "Penyesuaian backend + frontend",
          "Testing & deployment",
        ],
        highlight: true,
      },
    ],
  },
  {
    id: 4,
    icon: RefreshCw,
    tag: "Migration",
    title: "Payment Gateway Migration",
    desc: "Zero-downtime migration between Midtrans and Xendit. Full rebuild, testing, and go-live validation.",
    packages: [
      {
        name: "Migration Package",
        price: "Rp 4.000.000 – 5.000.000",
        withDomain: null,
        features: [
          "Rebuild flow pembayaran",
          "Update backend endpoint",
          "Update halaman checkout",
          "Testing ulang full sistem",
        ],
      },
    ],
  },
  {
    id: 5,
    icon: Shield,
    tag: "Maintenance",
    title: "Maintenance & Support",
    desc: "Proactive system health monitoring, bug fixes, and fast-response support to keep your site running.",
    packages: [
      {
        name: "Bulanan",
        price: "Rp 750.000 / bulan",
        withDomain: null,
        features: [
          "Bug fixing minor",
          "Update konten ringan",
          "Monitoring website",
        ],
      },
      {
        name: "Full Priority",
        price: "Rp 1.500.000 / bulan",
        withDomain: null,
        features: [
          "Perubahan fitur kecil",
          "Fast response SLA",
          "Backup & security check",
        ],
        highlight: true,
      },
    ],
  },
];

const addons = [
  { label: "Custom UI/UX Design", price: "Rp 500.000 – 1.500.000" },
  { label: "Admin Dashboard", price: "Rp 1.000.000+" },
  { label: "Deploy ke VPS + Domain Setup", price: "Rp 700.000" },
  { label: "Sistem Upload Bukti Transfer", price: "Rp 800.000" },
  { label: "WhatsApp API Integration", price: "Rp 1.000.000+" },
];

export default function ServicesSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gold font-mono text-xs tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-800 text-cream mb-4">
            Services & <span className="gold-text">Pricing</span>
          </h2>
          <p className="text-cream/50 max-w-xl">
            Transparent pricing, no hidden fees. Every project is scoped clearly
            before we start.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openId === service.id;
            return (
              <motion.div
                key={service.id}
                className="studio-card rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <button
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-xl transition-colors duration-200 ${isOpen ? "bg-gold/20 text-gold" : "bg-white/5 text-cream/40 group-hover:text-gold group-hover:bg-gold/10"}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-mono text-gold/50 uppercase tracking-widest block mb-0.5">
                        {service.tag}
                      </span>
                      <h3
                        className={`font-heading font-600 text-base transition-colors ${isOpen ? "text-cream" : "text-cream/70 group-hover:text-cream"}`}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-cream/30 flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-dark-border pt-5">
                        <p className="text-cream/50 text-sm mb-6 leading-relaxed">
                          {service.desc}
                        </p>
                        <div
                          className={`grid gap-4 ${service.packages.length === 3 ? "md:grid-cols-3" : service.packages.length === 2 ? "md:grid-cols-2" : "max-w-xs"}`}
                        >
                          {service.packages.map((pkg) => (
                            <div
                              key={pkg.name}
                              className={`rounded-xl p-5 border transition-all ${
                                pkg.highlight
                                  ? "border-gold/40 bg-gold/5"
                                  : "border-dark-border bg-dark/40"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <span
                                  className={`text-xs font-mono uppercase tracking-wider ${pkg.highlight ? "text-gold" : "text-cream/40"}`}
                                >
                                  {pkg.name}
                                </span>
                                {pkg.highlight && (
                                  <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <div className="font-heading text-xl font-700 text-cream mb-1">
                                {pkg.price}
                              </div>
                              {pkg.withDomain && (
                                <div className="text-xs text-cream/30 mb-4">
                                  +domain:{" "}
                                  <span className="text-gold/70">
                                    {pkg.withDomain}
                                  </span>
                                </div>
                              )}
                              <ul className="space-y-2 mt-4">
                                {pkg.features.map((f) => (
                                  <li
                                    key={f}
                                    className="flex items-start gap-2 text-cream/60 text-sm"
                                  >
                                    <span className="text-gold mt-0.5 flex-shrink-0">
                                      ▹
                                    </span>
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Add-ons */}
        <motion.div
          className="studio-card rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-mono text-gold/50 uppercase tracking-widest mb-4">
            Add-On Services
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {addons.map((addon) => (
              <div
                key={addon.label}
                className="flex items-center justify-between bg-dark/60 border border-dark-border rounded-xl px-4 py-3 hover:border-gold/30 transition-colors"
              >
                <span className="text-cream/60 text-sm">{addon.label}</span>
                <span className="text-gold text-xs font-semibold ml-3 whitespace-nowrap">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
