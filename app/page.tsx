'use client';

import { useState, useEffect } from 'react';
import { Terminal, ChevronDown, Sparkles } from 'lucide-react';
import { Nav } from "./components/ui/Nav";
import { Hero } from "./components/ui/Hero";
import { About } from "./components/ui/About";
import { Projects } from "./components/ui/Projects";
import { Experience } from "./components/ui/Experience";
import { Skills } from "./components/ui/Skills";
import { Contact } from "./components/ui/Contact";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    // Generate particles only on client side
    const generatedParticles = [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));
    setParticles(generatedParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15) 0%, transparent 50%)`,
          }}
        />
        {/* Floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center z-10">
        <Hero scrollY={scrollY} />
      </section>

      <div className="relative z-10">
        {/* About Section */}
        <About />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Contact Section */}
        <Contact />
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500">
        <p>© 2025 Yash Tiwari. Built with Next.js & way too much caffeine.</p>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}