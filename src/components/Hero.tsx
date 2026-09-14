
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const techStack = ["React Native", "Next.js", "Flutter", "Burp Suite", "OWASP", "TypeScript", "Python", "Metasploit"];

const floatingIcons = [
  {
    name: "React",
    icon: "https://img.icons8.com/color/144/react-native.png",
    color: "shadow-[0_0_20px_rgba(0,245,255,0.4)]",
    initialPos: { top: "15%", left: "10%" }
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/color/144/python.png",
    color: "shadow-[0_0_20px_rgba(255,222,89,0.4)]",
    initialPos: { top: "20%", left: "80%" }
  },
  {
    name: "Shield",
    icon: "https://img.icons8.com/fluency/144/shield.png",
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
  const { language, t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = language === "fr" 
    ? ["Dév. Web & Mobile Sécurisé", "Audit & Pentesting Web/Mobile", "Expertise Cybersécurité"]
    : ["Secure Web & Mobile Dev", "Web/Mobile Pentesting & Audit", "Cybersecurity Expert"];

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

    return () => setTimeout(timeout);
  }, [displayText, isDeleting, index, titles]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-3xl lg:text-5xl font-bold leading-[0.95] tracking-tight">
            {t("hero_hi")} <br />
            <span className="text-gradient-cyan-violet text-6xl lg:text-8xl">
              Anaïs AHOSSI
            </span>
          </h1>
          <div className="text-2xl lg:text-4xl font-medium text-white/80 h-[1.2em]">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </div>
          <p className="text-xl text-white/60 max-w-lg font-light leading-relaxed">
            {t("hero_desc")}
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <Button 
              asChild
              className="glass rounded-xl px-8 h-14 text-lg font-bold border-primary/50 text-white hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all flex items-center gap-2"
            >
              <a href="/Ana_CV.pdf" target="_blank" rel="noopener noreferrer">
                {t("hero_cv")} <Download size={20} />
              </a>
            </Button>
            <Button 
              asChild
              className="glass rounded-xl px-8 h-14 text-lg font-bold border-secondary/50 text-white bg-transparent hover:bg-secondary/40 hover:text-white hover:shadow-[0_0_20px_rgba(167,139,250,0.4)] transition-all"
            >
              <a href="#contact">
                {t("hero_contact")}
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-[450px] h-[450px] lg:w-[700px] lg:h-[700px] rounded-full overflow-hidden"
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
