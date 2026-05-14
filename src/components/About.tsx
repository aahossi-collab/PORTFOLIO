
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Années d'Expérience", value: 3, suffix: "+", color: "text-primary shadow-primary/20" },
  { label: "Projets Réalisés", value: 5, suffix: "+", color: "text-secondary shadow-secondary/20" },
  { label: "Technologies Maîtrisées", value: 10, suffix: "+", color: "text-accent shadow-accent/20" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const step = duration / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

export function About() {
  const aboutAvatar = PlaceHolderImages.find((img) => img.id === "about-avatar")!;

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl lg:text-7xl font-bold text-gradient-cyan-violet">À propos de moi</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-[60px] glass overflow-hidden p-4 rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="w-full h-full rounded-[45px] overflow-hidden relative border-2 border-white/20">
                <Image 
                  src={aboutAvatar.imageUrl} 
                  alt="Anaïs Ahossi Avatar" 
                  fill 
                  className="object-cover" 
                  data-ai-hint={aboutAvatar.imageHint}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29]/80 to-transparent pointer-events-none" />
            </div>
            <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-[70px] -z-10 animate-pulse" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white leading-tight">
                Allier technique et créativité pour des <span className="text-primary italic underline underline-offset-8">interfaces uniques</span>
              </h3>
              <p className="text-xl text-white/60 leading-relaxed font-light">
                Titulaire d'un bachelor en expertise informatique d'EPITECH Bénin, je suis une développeuse front-end passionnée par l'UX design et la cybersecurité. 
              </p>
              <p className="text-xl text-white/60 leading-relaxed font-light">
                Mes compétences transversales sont un atout majeur dans la gestion de projets complexes, allant de la securité à la création d'interfaces web fluides et intuitives. Je suis perpétuellement à la recherche de nouveaux défis technologiques.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass p-6 text-center space-y-2 hover:translate-y-[-5px] transition-all group">
                  <h4 className={`text-4xl font-bold ${stat.color} group-hover:scale-110 transition-transform`}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </h4>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button className="w-full sm:w-auto px-12 h-16 rounded-2xl glass border-primary/50 text-xl font-bold relative overflow-hidden group">
              <span className="relative z-10 group-hover:text-primary transition-colors">Travaillons ensemble</span>
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
