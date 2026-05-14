
"use client";

import React from "react";
import { motion } from "framer-motion";

const languages = [
  { name: "English", level: "Native", percent: 95, flag: "🇬🇧", color: "hsl(var(--primary))" },
  { name: "Spanish", level: "Fluent", percent: 75, flag: "🇪🇸", color: "hsl(var(--accent))" },
  { name: "German", level: "Intermediate", percent: 45, flag: "🇩🇪", color: "#6366f1" },
  { name: "French", level: "Beginner", percent: 30, flag: "🇫🇷", color: "#f43f5e" },
];

export function Languages() {
  return (
    <section id="languages" className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">
            Languages I <span className="text-primary">Speak</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Communication is key. Here are the languages I use to connect with people around the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {languages.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="58"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-muted/20"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="58"
                    fill="none"
                    stroke={lang.color}
                    strokeWidth="8"
                    strokeDasharray={364.42}
                    initial={{ strokeDashoffset: 364.42 }}
                    whileInView={{ strokeDashoffset: 364.42 - (364.42 * lang.percent) / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-4xl">{lang.flag}</span>
                  <span className="text-lg font-bold">{lang.percent}%</span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold">{lang.name}</h4>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">{lang.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
