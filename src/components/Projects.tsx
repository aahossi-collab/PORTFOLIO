
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "project-1",
    title: "E-Commerce Dashboard",
    tags: ["Next.js", "Tailwind", "Prisma"],
    description: "A full-featured admin dashboard for managing products, orders, and customer analytics.",
  },
  {
    id: "project-2",
    title: "SaaS Landing Creator",
    tags: ["React", "Motion", "Firebase"],
    description: "Drag-and-drop landing page builder for startups looking to launch quickly.",
  },
  {
    id: "project-3",
    title: "AI Mobile Assistant",
    tags: ["React Native", "OpenAI", "Node"],
    description: "Intelligent personal assistant app that uses GPT-4 for natural language processing.",
  },
  {
    id: "project-4",
    title: "Real-time Crypto Tracker",
    tags: ["WebSocket", "Redux", "Charts"],
    description: "High-performance data visualizer for tracking live cryptocurrency price fluctuations.",
  },
];

export function Projects() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-4">
            <h3 className="text-primary font-bold text-lg">PORTFOLIO</h3>
            <h2 className="text-4xl font-bold">Latest <span className="text-primary">Masterpieces</span></h2>
          </div>
          <div className="flex gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full">All Projects</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm rounded-full">Web App</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm rounded-full">Mobile</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const img = PlaceHolderImages.find((p) => p.id === project.id)!;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src={img.imageUrl} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    data-ai-hint={img.imageHint}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <div className="p-3 bg-white text-primary rounded-full cursor-pointer hover:bg-primary hover:text-white transition-colors">
                      <Github />
                    </div>
                    <div className="p-3 bg-white text-primary rounded-full cursor-pointer hover:bg-primary hover:text-white transition-colors">
                      <ExternalLink />
                    </div>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
