
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const titles = ["Full Stack Developer", "UI/UX Designer", "Software Architect", "Problem Solver"];
const techStack = [
  "Next.js", "TypeScript", "JavaScript", "Tailwind", "Redux", "React Query", "Node.js", "Express", "Nest.js", "Firebase", "PostgreSQL", "Prisma"
];

const orbitingIcons = [
  { name: "React", icon: "⚛️" },
  { name: "Node", icon: "🟢" },
  { name: "TS", icon: "📘" },
  { name: "Design", icon: "🎨" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index];
    const speed = isDeleting ? 50 : 150;

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

  const heroAvatar = PlaceHolderImages.find((img) => img.id === "hero-avatar")!;

  return (
    <section id="home" className="relative min-h-screen pt-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-medium text-primary tracking-wide">WELCOME TO MY WORLD</h2>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Hi, I'm [Your Name]<br />
            <span className="text-primary min-h-[1.2em] inline-block">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            I build highly scalable, user-centric web applications with modern technologies. 
            Transforming complex problems into elegant digital solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12">
              View Resume
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 px-8 h-12">
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* Right Side Image & Orbiting Icons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full border-4 border-dashed border-primary/40 p-4 animate-spin-[20s] duration-slow">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 shadow-2xl overflow-hidden relative z-10">
              <Image 
                src={heroAvatar.imageUrl} 
                alt="Avatar" 
                fill 
                className="object-cover" 
                data-ai-hint={heroAvatar.imageHint}
              />
            </div>
          </div>

          {/* Orbiting Icons */}
          {orbitingIcons.map((icon, idx) => (
            <motion.div
              key={icon.name}
              className="absolute bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-3 text-2xl flex items-center justify-center z-20 cursor-pointer"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: `${idx % 2 === 0 ? "150px" : "-150px"} ${idx < 2 ? "150px" : "-150px"}`,
              }}
            >
              <div style={{ transform: `rotate(-${idx * 90}deg)` }}>
                {icon.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tech Marquee */}
      <div className="w-full mt-24 py-12 glass border-y border-border overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {[...techStack, ...techStack].map((tech, idx) => (
            <span key={idx} className="text-2xl font-bold text-muted-foreground/40 hover:text-primary transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
