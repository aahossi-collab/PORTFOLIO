
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const titles = ["Front end Developer", "Ingénieure Informatique & IA", "UX/UI Designer", "Expertise Informatique"];
const techStack = ["React", "Vue.js", "TypeScript", "Flutter", "Figma", "SASS", "Node.js", "Python"];

const floatingIcons = [
  {
    name: "React",
    icon: "https://img.icons8.com/color/144/react-native.png",
    color: "shadow-[0_0_20px_rgba(0,245,255,0.4)]",
    initialPos: { top: "15%", left: "10%" }
  },
  {
    name: "Vue",
    icon: "https://img.icons8.com/color/144/vue-js.png",
    color: "shadow-[0_0_20px_rgba(66,184,131,0.4)]",
    initialPos: { top: "20%", left: "80%" }
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/color/144/typescript.png",
    color: "shadow-[0_0_20px_rgba(167,139,250,0.4)]",
    initialPos: { top: "70%", left: "15%" }
  },
  {
    name: "Figma",
    icon: "https://img.icons8.com/color/144/figma--v1.png",
    color: "shadow-[0_0_20px_rgba(244,114,182,0.4)]",
    initialPos: { top: "75%", left: "75%" }
  }
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          
          <h1 className="text-3xl lg:text-5xl font-bold leading-[0.95] tracking-tight">
            Salut, je suis <br />
            <span className="text-gradient-cyan-violet text-6xl lg:text-8xl">
              Anaïs AHOSSI
            </span>
          </h1>
          <div className="text-2xl lg:text-4xl font-medium text-white/80 h-[1.2em]">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </div>
          <p className="text-xl text-white/60 max-w-lg font-light leading-relaxed">
            Passionnée par le développement front-end, l'UX design et l'IA. Actuellement en cycle Ingénieur Informatique au Maroc.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <Button className="glass rounded-xl px-8 h-14 text-lg font-bold border-primary/50 hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all">
              Mon CV
            </Button>
            <Button variant="outline" className="glass rounded-xl px-8 h-14 text-lg font-bold border-secondary/50 hover:bg-secondary/20 hover:shadow-[0_0_20px_rgba(167,139,250,0.4)] transition-all">
              Me contacter
            </Button>
          </div>
        </motion.div>

        {/* Right Side Video - Large and borderless */}
        <div className="relative flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden"
          >
            <video 
              src="/animation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating Icons - Contained in hero */}
          {floatingIcons.map((icon, idx) => (
            <motion.div
              key={icon.name}
              className={`absolute glass w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center z-20 ${icon.color}`}
              style={{
                top: icon.initialPos.top,
                left: icon.initialPos.left,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 4 + idx,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img 
                src={icon.icon} 
                alt={icon.name} 
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain" 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Marquee */}
      <div className="w-full mt-24 py-10 glass-pill border-x-0 rounded-none overflow-hidden bg-white/5">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div key={idx} className="glass px-6 py-2 rounded-xl text-sm font-bold tracking-widest text-white/40 hover:text-primary transition-all cursor-default uppercase">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
