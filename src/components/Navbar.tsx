"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Languages", href: "#languages" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav
        className={cn(
          "glass flex items-center justify-between h-14 px-8 w-full max-w-4xl transition-all duration-500",
          isScrolled ? "scale-95 shadow-[0_0_20px_rgba(0,245,255,0.2)]" : ""
        )}
      >
        <a href="#home" className="text-xl font-bold text-white tracking-tighter">
          Portfolio<span className="text-primary">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-white/60 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.8)] transition-all uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-px bg-white/10" />
          <Button variant="ghost" size="icon" className="rounded-full text-white/60 hover:text-white">
            <Sun className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 glass p-6 flex flex-col space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-white/80 hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
