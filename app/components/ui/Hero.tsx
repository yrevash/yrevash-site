import { Rocket, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

export function Hero({ scrollY }: HeroProps) {
  return (
    <div 
      className="text-center px-6"
      style={{ transform: `translateY(${scrollY * 0.5}px)` }}
    >
      <div className="mb-8 inline-block">
        <Sparkles className="w-12 h-12 text-cyan-400 animate-pulse mx-auto mb-4" />
      </div>
      <h1 className="text-7xl md:text-9xl font-black mb-6">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{
          backgroundSize: '200% 200%',
          animation: 'gradient 3s ease infinite',
        }}>
          YASH TIWARI
        </span>
      </h1>
      <p className="text-2xl md:text-4xl font-bold mb-4 text-gray-300">
        AI Engineer <span className="text-cyan-400">&</span> Robotics Architect
      </p>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
        Building intelligent systems that bridge the gap between code and reality. 
        Specialized in computer vision, autonomous systems, and scalable ML infrastructure.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2">
          <Rocket className="w-5 h-5" />
          View Work
        </a>
        <a href="#contact" className="px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-colors">
          Get In Touch
        </a>
      </div>
      <ChevronDown className="w-8 h-8 mx-auto mt-16 animate-bounce text-cyan-400" />

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
