"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "safewoman",
    title: "SafeWoman",
    tags: ["Web Platform", "Community", "Support", "Security", "Resources"],
    description: "SafeWoman est une plateforme de soutien et de sécurité dédiée aux femmes. Elle vise à créer une communauté bienveillante et à fournir des ressources pour aider les femmes à faire face à l'adversité, garantissant qu'elles ne se sentent jamais seules.",
    url: "https://safewoman.netlify.app",
    color: "group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
  },
  {
    id: "hordmir_perfums",
    title: "HORDMIR Luxury Perfums",
    tags: ["E-commerce B2B", "Product Catalog", "Luxury Perfumes", "Wholesale"],
    description: "HORDMIR est un grossiste de parfums de luxe, proposant un catalogue de plus de 350 références de prestige pour les revendeurs professionnels. La plateforme met en avant une sélection exclusive et un service B2B.",
    url: "https://hordmir.com",
    color: "group-hover:border-secondary/50 group-hover:shadow-[0_0_30px_rgba(167,139,250,0.3)]"
  },
  {
    id: "alexandre_moreau_coach",
    title: "Alexandre Moreau — Coach de Vie & Performance",
    tags: ["Sports Coaching", "Physical Transformation", "Performance", "Well-being"],
    description: "Site web professionnel pour Alexandre Moreau, coach sportif certifié, spécialisé dans la transformation physique et la performance. Il propose un accompagnement personnalisé pour la perte de poids et la prise de muscle.",
    url: "https://site-web-sport.vercel.app",
    color: "group-hover:border-accent/50 group-hover:shadow-[0_0_30px_rgba(244,114,182,0.3)]"
  },
  {
    id: "chouf_casa",
    title: "Chouf Casa",
    tags: ["City Guide", "Urban Exploration", "Favorites Management", "Interactive Map"],
    description: "Chouf Casa est une plateforme d'exploration de Casablanca, la 'Ville Blanche'. Elle permet de découvrir des lieux, des itinéraires, des cartes et de gérer ses favoris avec des filtres intelligents.",
    url: "https://chouf-casa.vercel.app",
    color: "group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
  },
];

export function Projects() {
  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-gradient-cyan-violet">Projets</h2>
            <p className="text-white/60 text-xl font-light">Mes dernières réalisations numériques</p>
          </div>
          <div className="flex gap-4 glass p-2 rounded-2xl">
            <Badge className="bg-primary text-black hover:bg-primary/80 px-4 py-2 rounded-xl border-none font-bold">Tous</Badge>
            <Badge variant="ghost" className="text-white/60 hover:text-white px-4 py-2 rounded-xl font-bold">Web</Badge>
            <Badge variant="ghost" className="text-white/60 hover:text-white px-4 py-2 rounded-xl font-bold">UI/UX</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => {
            const img = PlaceHolderImages.find((p) => p.id === project.id);
            if (!img) return null;
            
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
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 glass rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors border-white/20"
                    >
                      <ExternalLink size={24}/>
                    </a>
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
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
                  <p className="text-white/60 leading-relaxed font-light text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all"
                  >
                    Voir le Projet <ArrowRight size={16}/>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
