
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-primary font-bold text-lg uppercase tracking-widest">Contact Me</h3>
              <h2 className="text-5xl font-bold">Let's <span className="text-primary">Connect</span></h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have a project idea or just want to say hi? I'm always open to discussing new opportunities and challenges.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm group hover:border-primary transition-colors">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Email Me</p>
                  <p className="text-lg font-medium">hello@yourname.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm group hover:border-primary transition-colors">
                <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Call Me</p>
                  <p className="text-lg font-medium">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm group hover:border-primary transition-colors">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-lg font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-4 bg-white dark:bg-slate-900 border border-border rounded-2xl hover:bg-primary hover:text-white transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="p-8 lg:p-12 glass rounded-[40px] space-y-6 shadow-xl relative">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                <Input required placeholder="Your Full Name" className="h-14 rounded-2xl bg-white/50 border-border focus:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                <Input required type="email" placeholder="email@example.com" className="h-14 rounded-2xl bg-white/50 border-border focus:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea required placeholder="Tell me about your project..." className="min-h-[160px] rounded-2xl bg-white/50 border-border focus:ring-primary py-4" />
              </div>
              <Button type="submit" className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white text-lg font-bold shadow-lg shadow-primary/20">
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
