"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "project-1",
    title: "E-Commerce Dashboard",
    tags: ["Next.js", "Tailwind", "Prisma"],
    description: "A full-featured admin dashboard for managing products, orders, and customer analytics.",
    color: "group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
  },
  {
    id: "project-2",
    title: "SaaS Landing Creator",
    tags: ["React", "Motion", "Firebase"],
    description: "Drag-and-drop landing page builder for startups looking to launch quickly.",
    color: "group-hover:border-secondary/50 group-hover:shadow-[0_0_30px_rgba(167,139,250,0.3)]"
  },
  {
    id: "project-3",
    title: "AI Mobile Assistant",
    tags: ["React Native", "OpenAI", "Node"],
    description: "Intelligent personal assistant app that uses GPT-4 for natural language processing.",
    color: "group-hover:border-accent/50 group-hover:shadow-[0_0_30px_rgba(244,114,182,0.3)]"
  },
  {
    id: "project-4",
    title: "Real-time Crypto Tracker",
    tags: ["WebSocket", "Redux", "Charts"],
    description: "High-performance data visualizer for tracking live cryptocurrency price fluctuations.",
    color: "group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
  },
];

export function Projects() {
  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-gradient-cyan-violet">Masterpieces</h2>
            <p className="text-white/60 text-xl font-light">Showcasing my latest digital works</p>
          </div>
          <div className="flex gap-4 glass p-2 rounded-2xl">
            <Badge className="bg-primary text-black hover:bg-primary/80 px-4 py-2 rounded-xl border-none font-bold">All</Badge>
            <Badge variant="ghost" className="text-white/60 hover:text-white px-4 py-2 rounded-xl font-bold">Web</Badge>
            <Badge variant="ghost" className="text-white/60 hover:text-white px-4 py-2 rounded-xl font-bold">Mobile</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => {
            const img = PlaceHolderImages.find((p) => p.id === project.id)!;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group glass rounded-[40px] overflow-hidden transition-all duration-500 hover:-translate-y-4 ${project.color}`}
              >
                <div className="aspect-video relative overflow-hidden m-4 rounded-[30px] border border-white/10">
                  <Image 
                    src={img.imageUrl} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    data-ai-hint={img.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 backdrop-blur-sm">
                    <button className="w-14 h-14 glass rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors border-white/20">
                      <Github size={24}/>
                    </button>
                    <button className="w-14 h-14 glass rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors border-white/20">
                      <ExternalLink size={24}/>
                    </button>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-white/60 leading-relaxed font-light line-clamp-2">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                    View Project <ArrowRight size={16}/>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
