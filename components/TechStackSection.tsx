"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    color: "#00C8E0",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    title: "Backend",
    color: "#00C8E0",
    skills: [
      { name: "Next.js API", level: 78 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "Prisma", level: 75 },
      { name: "Sequelize", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Supabase", level: 78 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Tools & Others",
    color: "#00C8E0",
    skills: [
      { name: "Git", level: 85 },
      { name: "DBeaver", level: 78 },
      { name: "VS Code", level: 90 },
      { name: "Vercel", level: 80 },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section id="techstack" className="py-24 border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gold font-mono text-xs tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-800 text-cream mb-4">
            Tools We <span className="gold-text">Master</span>
          </h2>
          <p className="text-cream/50 max-w-xl">
            Technologies we use to build fast, scalable, and production-ready
            systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              className="studio-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-700 text-gold text-lg">
                  {cat.title}
                </h3>
                <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_8px_#00C8E0]" />
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {cat.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-cream/70 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gold text-xs font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, #00C8E0, #60E8F8)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 0.8,
                          delay: catIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
