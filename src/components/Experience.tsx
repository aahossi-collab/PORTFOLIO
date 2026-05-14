
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const workExperience = [
  {
    title: "Stagiaire Développeur Front-end",
    company: "MUXT",
    period: "Juillet 2024",
    description: "Apprentissage et mise en œuvre de solutions front-end innovantes.",
    accent: "border-t-primary shadow-[0_-5px_15px_-5px_rgba(0,245,255,0.4)]"
  },
  {
    title: "Stagiaire Développeur Front-end",
    company: "Deep Cleaning",
    period: "Avril 2023 - Août 2023",
    description: "Développement et maintenance de composants front-end réutilisables.",
    accent: "border-t-primary shadow-[0_-5px_15px_-5px_rgba(0,245,255,0.4)]"
  },
  {
    title: "Alternante | HUB d'Innovation",
    company: "EPITECH",
    period: "Octobre 2022 - Mars 2023",
    description: "Réalisation de maquettes Figma pour un site web de vente automobile et développement web avec le framework Vue.js.",
    accent: "border-t-primary shadow-[0_-5px_15px_-5px_rgba(0,245,255,0.4)]"
  },
  {
    title: "Stagiaire",
    company: "MTN BÉNIN",
    period: "Août 2021 - Décembre 2021",
    description: "Gestion de projets pour le Novembre Numérique. Animation d'ateliers robotique/électronique. Conception de projets robotiques et développement d'un jeu Bomberman avec Unity.",
    accent: "border-t-primary shadow-[0_-5px_15px_-5px_rgba(0,245,255,0.4)]"
  },
];

const education = [
  {
    degree: "Bachelor en Expertise Informatique",
    institution: "Epitech Bénin",
    period: "2020 - 2023",
    description: "Cycle complet focalisé sur la pratique et l'expertise logicielle.",
    accent: "border-t-secondary shadow-[0_-5px_15px_-5px_rgba(167,139,250,0.4)]"
  },
  {
    degree: "Baccalauréat",
    institution: "Lucie Verone College",
    period: "2019 - 2020",
    description: "Série scientifique. Akpakpa Ayélawadjè, Cotonou.",
    accent: "border-t-secondary shadow-[0_-5px_15px_-5px_rgba(167,139,250,0.4)]"
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-5xl font-bold text-gradient-cyan-violet">Mon Parcours</h2>
          <p className="text-white/60 text-xl font-light">Expériences professionnelles et formations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          {/* Centered Icon Decor */}
          <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 justify-center pt-20">
             <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary text-2xl border-primary/30">✨</div>
          </div>

          {/* Work Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary"><Briefcase size={24}/></div>
              <h3 className="text-3xl font-bold">Expériences</h3>
            </div>
            {workExperience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`glass p-8 space-y-4 border-t-4 hover:bg-white/10 transition-all ${item.accent}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                    <p className="text-primary font-semibold uppercase tracking-widest text-xs mt-1">{item.company}</p>
                  </div>
                  <span className="text-xs font-bold text-white/40 glass px-3 py-1 rounded-full uppercase">{item.period}</span>
                </div>
                <p className="text-white/60 leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8 lg:justify-end">
              <h3 className="text-3xl font-bold">Formations</h3>
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-secondary"><GraduationCap size={24}/></div>
            </div>
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`glass p-8 space-y-4 border-t-4 hover:bg-white/10 transition-all ${item.accent}`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-white/40 glass px-3 py-1 rounded-full uppercase">{item.period}</span>
                  <div className="text-right">
                    <h4 className="text-2xl font-bold text-white">{item.degree}</h4>
                    <p className="text-secondary font-semibold uppercase tracking-widest text-xs mt-1">{item.institution}</p>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed font-light text-right">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
