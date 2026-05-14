import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Languages } from "@/components/Languages";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { FloatingCircles } from "@/components/FloatingCircles";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <FloatingCircles />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Languages />
      <Projects />
      <Contact />
      
      <footer className="py-12 text-center border-t border-border">
        <p className="text-muted-foreground font-medium">
          &copy; {new Date().getFullYear()} Anaïs AHOSSI. Built with Passion & Code.
        </p>
      </footer>
    </main>
  );
}
