
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const titles = ["Front end Developer", "UI/UX Designer", "Mobile Developer"];
const techStack = ["React", "Next.js", "TypeScript", "Node.js", "Firebase", "Tailwind", "Figma", "PostgreSQL", "Flutter"];

const orbitingIcons = [
  {
    name: "React",
    icon: "https://img.icons8.com/color/96/react-native.png",
    color: "shadow-[0_0_15px_rgba(0,245,255,0.5)]"
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/color/96/typescript.png",
    color: "shadow-[0_0_15px_rgba(167,139,250,0.5)]"
  },
  {
    name: "Node",
    icon: "https://img.icons8.com/fluency/96/node-js.png",
    color: "shadow-[0_0_15px_rgba(244,114,182,0.5)]"
  },
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
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1 glass rounded-full text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Available for Projects
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Hi, I'm <br />
            <span className="text-gradient-cyan-violet">
              [Name]
            </span>
          </h1>
          <div className="text-2xl lg:text-4xl font-medium text-white/80 h-[1.2em]">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </div>
          <p className="text-xl text-white/60 max-w-lg font-light leading-relaxed">
            I specialize in building high-performance web applications with a focus on immersive user experiences and elegant code architecture.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <Button className="glass rounded-xl px-8 h-14 text-lg font-bold border-primary/50 hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all">
              Resume
            </Button>
            <Button variant="outline" className="glass rounded-xl px-8 h-14 text-lg font-bold border-secondary/50 hover:bg-secondary/20 hover:shadow-[0_0_20px_rgba(167,139,250,0.4)] transition-all">
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Right Side Video & Orbit */}
        <div className="relative flex justify-center items-center">
          {/* Main Video Circle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-[340px] h-[340px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-md"
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

          {/* Orbiting Icons */}
          {orbitingIcons.map((icon, idx) => (
            <motion.div
              key={icon.name}
              className={`absolute glass w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center z-20 ${icon.color}`}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                top: "50%",
                left: "50%",
                marginTop: "-40px",
                marginLeft: "-40px",
                transformOrigin: `${idx === 0 ? "350px" : idx === 1 ? "-350px" : "0 -350px"}`,
              }}
            >
              <div style={{ transform: `rotate(-${idx * 120}deg)` }} className="relative w-10 h-10 lg:w-12 lg:h-12">
                <img 
                  src={icon.icon} 
                  alt={icon.name} 
                  className="w-full h-full object-contain" 
                />
              </div>
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
