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
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-5xl font-bold text-gradient-cyan-violet">Get in Touch</h2>
          <p className="text-white/60 text-xl font-light">Let's build something amazing together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
             <div className="space-y-6">
               {[
                 { icon: Mail, label: "Email Me", val: "hello@yourname.com", color: "text-primary bg-primary/10" },
                 { icon: Phone, label: "Call Me", val: "+1 (234) 567-890", color: "text-secondary bg-secondary/10" },
                 { icon: MapPin, label: "Location", val: "San Francisco, CA", color: "text-accent bg-accent/10" },
               ].map((item, i) => (
                 <div key={i} className="glass p-6 flex items-center gap-6 group hover:border-white/40 transition-all">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon size={24}/>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{item.label}</p>
                      <p className="text-lg font-bold text-white">{item.val}</p>
                    </div>
                 </div>
               ))}
             </div>

             <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all"
                  >
                    <social.icon size={28}/>
                  </a>
                ))}
             </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass p-10 lg:p-14 space-y-8 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Name</label>
                  <Input required placeholder="Your Name" className="h-14 glass rounded-xl border-white/10 focus:border-primary/50 focus:ring-primary/20 text-white placeholder:text-white/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Email</label>
                  <Input required type="email" placeholder="email@example.com" className="h-14 glass rounded-xl border-white/10 focus:border-primary/50 focus:ring-primary/20 text-white placeholder:text-white/20" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                <Textarea required placeholder="Tell me about your project..." className="min-h-[180px] glass rounded-xl border-white/10 focus:border-primary/50 focus:ring-primary/20 text-white placeholder:text-white/20 pt-6" />
              </div>
              <Button type="submit" className="w-full h-16 rounded-xl bg-gradient-to-r from-primary to-secondary text-black font-black text-lg uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all flex items-center justify-center gap-3">
                Send Message <Send size={20}/>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
