
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Trophy, Users } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+", icon: Briefcase },
  { label: "Projects Done", value: "40+", icon: Trophy },
  { label: "Happy Clients", value: "25+", icon: Users },
];

export function About() {
  const aboutAvatar = PlaceHolderImages.find((img) => img.id === "about-avatar")!;

  return (
    <section id="about" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-[40px] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl rotate-3">
              <Image 
                src={aboutAvatar.imageUrl} 
                alt="About Avatar" 
                fill 
                className="object-cover" 
                data-ai-hint={aboutAvatar.imageHint}
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent rounded-full -z-10 blur-2xl opacity-40"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-primary font-bold text-lg">ABOUT ME</h3>
              <h2 className="text-4xl font-bold leading-tight">
                Crafting digital experiences with <span className="text-primary italic underline underline-offset-8">Passion</span> and Code
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                [Your Name] is a dedicated developer based in [Location]. With a deep background in modern web technologies, I focus on creating performant, beautiful, and intuitive products that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe that code is an art form, and every pixel matters. My goal is to build software that not only works but inspires.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <Card key={idx} className="border-none shadow-md bg-white dark:bg-slate-800 hover:scale-105 transition-transform">
                  <CardContent className="p-6 text-center space-y-2">
                    <stat.icon className="h-8 w-8 text-primary mx-auto" />
                    <h4 className="text-3xl font-bold">{stat.value}</h4>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-10 h-14 text-lg">
              Hire Me Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
