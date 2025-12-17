'use client';

import { useState } from 'react';
import { Eye, Cpu, Code, Rocket, Zap } from 'lucide-react';

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Aadhaar Verification System',
      description: 'Architected high-performance document processing with YOLOv8 + multilingual OCR. Deployed async FastAPI service achieving 95%+ accuracy with sub-second latency. Redis-based model caching for distributed memory management.',
      tech: ['Python', 'YOLOv8', 'FastAPI', 'Redis', 'OpenCV', 'Tesseract'],
      gradient: 'from-cyan-500 to-blue-500',
      icon: Eye,
    },
    {
      title: 'Autonomous Miniature Car',
      description: 'Built self-driving car using Raspberry Pi with real-time lane detection and obstacle avoidance. Implemented sensor fusion with ultrasonic and IR sensors, achieving semi-autonomous driving in structured environments.',
      tech: ['Python', 'OpenCV', 'Raspberry Pi', 'Linux', 'Sensor Fusion'],
      gradient: 'from-purple-500 to-pink-500',
      icon: Cpu,
    },
    {
      title: 'LLM-Powered Testing Agent',
      description: 'Deployed AI testing agent with Ollama and Maestro across distributed Linux servers. Boosted CI pipeline throughput by 40% and detected 3× more critical bugs pre-release.',
      tech: ['LLM', 'Ollama', 'Maestro', 'Docker', 'CI/CD'],
      gradient: 'from-pink-500 to-orange-500',
      icon: Rocket,
    },
    {
      title: 'Real-Time Gesture Processing',
      description: 'Ported Paura Gestures Library to Avendish runtime with optimized C++ implementations. Achieved sub-millisecond latency for live performance scenarios serving professional musicians.',
      tech: ['C++', 'Real-Time Systems', 'Audio Processing', 'Performance Optimization'],
      gradient: 'from-yellow-500 to-red-500',
      icon: Zap,
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-purple-900/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <project.icon className={`w-12 h-12 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                  <div className="flex gap-2">
                    <Code className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors cursor-pointer" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
