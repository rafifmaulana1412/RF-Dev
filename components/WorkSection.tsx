"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type Project = {
  title: string;
  tag: string;
  desc: string;
  detail: string;
  tech: string[];
  image: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "Restoran Montevia",
    tag: "Fullstack App",
    desc: "Restaurant management system with menu, order tracking, and admin dashboard.",
    detail:
      "A sophisticated restaurant management system built with modern web technologies. Features include online reservation system, menu management, order tracking, customer management, and admin dashboard. The system provides a seamless experience for both customers and restaurant staff with its intuitive interface and robust functionality.",
    tech: ["React", "Node.js", "PostgreSQL", "Bootstrap"],
    image: "/restoran-montevia.png",
    live: "https://final-project-frontend-tau-seven.vercel.app/",
  },
  {
    title: "Wedding Invitation — Rizky & Rizka",
    tag: "Landing Page",
    desc: "Elegant digital wedding invitation with RSVP, countdown, and gallery.",
    detail:
      "A beautiful and interactive digital wedding invitation created for Rizky & Rizka's special day. Features include RSVP functionality, event details, photo gallery, love story timeline, and guest book. Built with modern web technologies to provide a memorable experience for wedding guests with smooth animations and responsive design.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/wedding-invitation.png",
    live: "https://wedding-invitation-psi-lac.vercel.app/",
  },
  {
    title: "Yayasan Hidayatullah Gorontalo",
    tag: "Company Profile",
    desc: "Foundation website with donation system and program information.",
    detail:
      "A comprehensive website for Yayasan Hidayatullah Gorontalo foundation, focusing on charity work and educational programs for orphans and underprivileged children. Features include program information, donation system, volunteer registration, news updates, and administrative dashboard. Built with accessibility and user experience in mind to effectively communicate the foundation's mission.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: "/yayasan-hidayatullah.png",
    live: "https://yayasan-hidayatullah-gorontaloutara.vercel.app/",
  },
  {
    title: "Portal Iuran Pendidikan Qur'ani",
    tag: "Internal System",
    desc: "Internal payment portal for Quranic education institution.",
    detail:
      "An internal payment management portal specifically designed for Quranic education institutions. The system handles student fee payments, generates reports, manages student data, tracks payment history, and provides administrative tools for educational staff. Features include automated payment reminders, receipt generation, and comprehensive reporting dashboard.",
    tech: ["react js", "payment gateaway", "Bootstrap", "framer motion"],
    image: "/portal-quran.png",
    live: "https://yayasan-almuttaqiin.vercel.app/",
  },
  {
    title: "Nahda Showroom",
    tag: "Fullstack + Payment",
    desc: "Used car marketplace with admin dashboard, Cloudinary, and payment gateway.",
    detail:
      "Nahda Showroom is a full-stack used car marketplace built entirely with Next.js (frontend & backend). Users can browse car listings, view detailed specs, and complete purchases through an integrated payment gateway. The platform features user authentication, car listing management, transaction history, and an admin dashboard. Data is stored on PostgreSQL via Supabase for a scalable and reliable cloud database solution.",
    tech: ["Next.js", "Prisma", "Supabase", "NextAuth"],
    image: "/nahda-showroom.png",
    live: "https://nahda-showroom.vercel.app/",
  },
  {
    title: "Ruwang Arsip",
    tag: "Enterprise System",
    desc: "Digital archive management system for BPRS/BPR banking institutions.",
    detail:
      "Ruwang Arsip is a digital archive management system specifically designed for BPRS (Bank Pembiayaan Rakyat Syariah) and BPR (Bank Perkreditan Rakyat) institutions. The frontend is built with Next.js while the backend runs on Express.js with Prisma ORM for database management. The backend is deployed on a dedicated server with its own IP, ensuring reliable and secure access for banking operations. Features include document upload, categorization, search, access control, and audit trail.",
    tech: ["Next.js", "Express.js", "Prisma", "PostgreSQL"],
    image: "/ruwang-arsip.png",
    live: "https://ruang-arsip.vercel.app/",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-2xl bg-dark-card border border-dark-border rounded-2xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Image */}
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-cream/70 hover:text-cream hover:bg-black/80 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
          <span className="absolute bottom-4 left-4 text-xs font-mono text-gold/80 uppercase tracking-widest bg-gold/10 border border-gold/20 px-3 py-1 rounded-full">
            {project.tag}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading font-700 text-cream text-xl mb-3">
            {project.title}
          </h3>
          <p className="text-cream/60 text-sm leading-relaxed mb-6">
            {project.detail}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs text-gold/70 bg-gold/5 border border-gold/20 px-3 py-1 rounded-lg"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-[#0a0f1a] text-sm font-semibold rounded-xl hover:bg-gold-light transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-dark-border text-cream/50 hover:text-cream text-sm rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WorkSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gold font-mono text-xs tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-800 text-cream mb-4">
            Selected <span className="gold-text">Work</span>
          </h2>
          <p className="text-cream/50 max-w-xl">
            Real projects, real clients, real results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="studio-card rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(project)}
            >
              {/* Thumbnail */}
              <div className="relative w-full h-44 overflow-hidden bg-dark-card">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-gold/60 uppercase tracking-widest bg-gold/5 border border-gold/20 px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                  <span className="text-cream/20 group-hover:text-gold transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="font-heading font-600 text-cream text-base mb-2 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-cream/40 text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-cream/40 bg-white/5 px-2.5 py-1 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
