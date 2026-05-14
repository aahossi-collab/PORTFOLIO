
"use client";

import React from "react";
import { motion } from "framer-motion";

const languages = [
  { name: "Français", level: "Langue Maternelle", percent: 100, flag: "🇫🇷", color: "#00F5FF" },
  { name: "Anglais", level: "Usage Professionnel", percent: 70, flag: "🇺🇸", color: "#A78BFA" },
];

export function Languages() {
  return (
    <section id="languages" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-bold text-gradient-cyan-violet">Langues</h2>
          <p className="text-white/60 text-xl font-light">La communication au cœur de l'échange</p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-32">
          {languages.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="10"
                  />
                  <motion.circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke={lang.color}
                    strokeWidth="10"
                    strokeDasharray={439.8}
                    initial={{ strokeDashoffset: 439.8 }}
                    whileInView={{ strokeDashoffset: 439.8 - (439.8 * lang.percent) / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{ filter: `drop-shadow(0 0 8px ${lang.color})` }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center glass w-24 h-24 rounded-full border-white/20">
                  <span className="text-4xl mb-1">{lang.flag}</span>
                  <span className="text-lg font-bold">{lang.percent}%</span>
                </div>
              </div>
              <div className="text-center mt-6 space-y-1">
                <h4 className="text-2xl font-bold text-white">{lang.name}</h4>
                <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">{lang.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
