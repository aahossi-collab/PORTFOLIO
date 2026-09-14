
"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight, Play, X, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    id: "devsecops_arch",
    title: "Architecture DevSecOps",
    tags: ["DevSecOps", "CI/CD", "Docker", "Security"],
    description: "Conception et déploiement d'une architecture DevSecOps intégrant la CI/CD, la conteneurisation et des mécanismes de sécurité pour une application web. Mise en place de pipelines automatisés avec scans de vulnérabilités statiques et dynamiques.",
    url: "#",
    videoUrl: "/devsecops.mov",
    color: "group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
  },
  {
    id: "vuln_scanner",
    title: "VulnScanner",
    tags: ["Cybersecurity", "Pentesting", "Automation"],
    description: "Outil automatisé de détection de vulnérabilités web (XSS, SQLi) avec génération de rapports PDF professionnels et corrélation CVE en temps réel. Analyse complète des en-têtes de sécurité et crawling authentifié.",
    url: "https://vuln-scanner.netlify.app/",
    color: "group-hover:border-accent/50 group-hover:shadow-[0_0_30px_rgba(244,114,182,0.3)]"
  },
  {
    id: "safewoman",
    title: "SafeWoman",
    tags: ["Web Platform", "Community", "Security"],
    description: "Plateforme de soutien et de sécurité dédiée aux femmes. Crée une communauté bienveillante et fournit des ressources pour faire face à l'adversité, intégrant des systèmes de signalement sécurisés.",
    url: "https://safewoman.netlify.app",
    color: "group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
  },
  {
    id: "hordmir_perfums",
    title: "HORDMIR Luxury Perfums",
    tags: ["E-commerce B2B", "Luxury Perfumes", "Wholesale"],
    description: "Grossiste de parfums de luxe, proposant un catalogue de plus de 350 références de prestige pour les revendeurs professionnels. Système de gestion de stock et commandes sécurisé.",
    url: "https://hordmir.com",
    color: "group-hover:border-secondary/50 group-hover:shadow-[0_0_30px_rgba(167,139,250,0.3)]"
  },
  {
    id: "chouf_casa",
    title: "Chouf Casa",
    tags: ["City Guide", "Urban Exploration", "Interactive Map"],
    description: "Plateforme d'exploration de Casablanca. Permet de découvrir des lieux, des itinéraires et de gérer ses favoris avec des filtres intelligents et une interface intuitive.",
    url: "https://chouf-casa.vercel.app",
    color: "group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
  },
];

function ProjectCard({ project, idx, onClick }: { project: any; idx: number; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const img = PlaceHolderImages.find((p) => p.id === project.id);
  
  if (!img) return null;

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Error playing video:", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`group glass rounded-[40px] overflow-hidden transition-all duration-500 hover:-translate-y-4 cursor-pointer ${project.color}`}
    >
      <div className="aspect-video relative overflow-hidden m-4 rounded-[30px] border border-white/10 bg-[#0f0c29]">
        {project.videoUrl ? (
          <video 
            ref={videoRef}
            src={project.videoUrl} 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <Image 
            src={img.imageUrl} 
            alt={project.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700" 
            data-ai-hint={img.imageHint}
          />
        )}
        
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 backdrop-blur-sm">
          <div className="w-14 h-14 glass rounded-full flex items-center justify-center text-white border-white/20">
            <Maximize2 size={24}/>
          </div>
        </div>
      </div>
      <div className="p-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border-primary/20">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
        <p className="text-white/60 leading-relaxed font-light text-sm line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
          Cliquez pour en savoir plus <ArrowRight size={12}/>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-gradient-cyan-violet">Projets</h2>
            <p className="text-white/60 text-xl font-light">Mes dernières réalisations numériques & cybersécurité</p>
          </div>
          <div className="flex gap-4 glass p-2 rounded-2xl">
            <Badge className="bg-primary text-black hover:bg-primary/80 px-4 py-2 rounded-xl border-none font-bold">Tous</Badge>
            <Badge variant="ghost" className="text-white/60 hover:text-white px-4 py-2 rounded-xl font-bold">Sécurité</Badge>
            <Badge variant="ghost" className="text-white/60 hover:text-white px-4 py-2 rounded-xl font-bold">Web</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              idx={idx} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl glass border-white/10 text-white p-0 overflow-hidden outline-none">
          {selectedProject && (
            <div className="flex flex-col h-full max-h-[90vh]">
              <div className="aspect-video relative bg-black flex items-center justify-center">
                {selectedProject.videoUrl ? (
                  <video 
                    src={selectedProject.videoUrl} 
                    controls 
                    autoPlay 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image 
                    src={PlaceHolderImages.find(p => p.id === selectedProject.id)?.imageUrl || ""} 
                    alt={selectedProject.title} 
                    fill 
                    className="object-cover"
                  />
                )}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-50 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-primary transition-colors border-white/20"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8 space-y-6 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: string) => (
                      <span key={tag} className="glass px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-4xl font-bold text-gradient-cyan-violet">{selectedProject.title}</h2>
                </div>
                
                <p className="text-white/70 text-lg leading-relaxed font-light">
                  {selectedProject.description}
                </p>

                {selectedProject.url !== "#" && (
                  <a 
                    href={selectedProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 glass px-8 py-4 rounded-2xl text-primary font-bold uppercase tracking-widest text-sm hover:bg-primary/10 transition-all border-primary/30"
                  >
                    Visiter le Projet <ExternalLink size={18}/>
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

