"use client";

import { LINKS } from "@/data/links";
import { SKILLS } from "@/data/skills";
import { PROJECTS, EXPERIENCE } from "@/data/projects";
import NeoCard from "@/components/NeoCard";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Award, Sparkles, Zap, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main id="home" className="min-h-screen p-8 md:p-12 max-w-5xl mx-auto flex flex-col gap-16 relative">
      
      {/* Decorative background elements */}
      <div className="fixed top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="fixed bottom-40 left-20 w-40 h-40 bg-main/20 rounded-full blur-3xl -z-10 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="fixed top-1/2 left-1/2 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10 animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* HERO SECTION */}
      <section className="flex flex-col gap-8">
        <NeoCard className="bg-gradient-to-br from-secondary via-main to-accent border-black relative overflow-hidden animate-gradient"> 
          <div className="absolute top-4 right-4 animate-bounce">
            <Sparkles className="text-white" size={32} />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter relative z-10">
            <span className="inline-block hover:rotate-3 transition-transform">Hey,</span>{" "}
            <span className="inline-block hover:-rotate-2 transition-transform">I'm</span>{" "}
            <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] inline-block hover:scale-110 transition-transform">
              Yash
            </span>
          </h1>
          <div className="flex items-center gap-3 border-t-3 border-black pt-4">
            <Zap className="text-white animate-pulse" size={28} />
            <p className="text-xl md:text-2xl font-black">
              Building intelligent robots & AI systems
            </p>
          </div>
        </NeoCard>

        {/* SOCIAL LINKS */}
        <div className="flex gap-4 flex-wrap">
          {LINKS.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href} 
              target="_blank" 
              className={`
                ${idx === 0 ? 'bg-main hover:bg-accent' : idx === 1 ? 'bg-accent hover:bg-secondary' : 'bg-secondary hover:bg-main'}
                text-white no-underline
                border-3 border-black px-6 py-3 
                font-black text-lg
                shadow-neobrutalism 
                hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]
                active:translate-x-[2px] active:translate-y-[2px] active:shadow-none 
                transition-all flex items-center gap-3
                group
              `}
            >
              <link.icon size={24} className="group-hover:rotate-12 transition-transform" />
              {link.name}
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills">
        <div className="mb-8 inline-block animate-pulse">
            <h2 className="text-4xl font-black bg-gradient-to-r from-main to-accent text-white px-6 py-2 border-3 border-black shadow-neobrutalism-sm rotate-1">
            ⚡ TECH STACK
            </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((field, idx) => (
            <NeoCard 
              key={field.field} 
              className={`
                ${idx === 0 ? 'bg-main/10 border-main/30' : idx === 1 ? 'bg-accent/10 border-accent/30' : idx === 2 ? 'bg-secondary/10 border-secondary/30' : 'bg-white'}
                hover:scale-105 transition-transform duration-300
              `}
            >
              <h3 className="text-2xl font-black mb-6 border-b-3 border-black pb-2 uppercase flex items-center gap-2">
                <Rocket size={24} />
                {field.field}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {field.skills.map((item) => (
                  <div 
                    key={item.skill} 
                    className="flex flex-col items-center gap-2 group cursor-pointer p-3 hover:bg-black hover:text-white rounded-lg border-2 border-transparent hover:border-black transition-all transform hover:scale-110"
                  >
                    <item.icon size={36} className="group-hover:animate-spin" />
                    <span className="text-xs font-bold text-center uppercase">{item.skill}</span>
                  </div>
                ))}
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <div className="mb-8 inline-block">
            <h2 className="text-4xl font-black bg-gradient-to-r from-secondary to-accent text-white px-6 py-2 border-3 border-black shadow-neobrutalism-sm -rotate-1 flex items-center gap-2">
            COOL STUFF I BUILT
            </h2>
        </div>
        
        <div className="grid gap-6">
          {PROJECTS.map((project, idx) => (
            <NeoCard 
              key={project.title} 
              className={`
                ${project.highlight ? 'bg-gradient-to-br from-main/20 via-accent/15 to-secondary/20 border-4 border-accent/50' : 'bg-white'} 
                hover:translate-x-[-4px] hover:translate-y-[-4px] 
                transition-all duration-300
                cursor-pointer
              `}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black flex items-center gap-2">
                  {project.title}
                </h3>
                {project.highlight && (
                  <span className="bg-accent text-white px-4 py-2 text-xs font-black border-3 border-black animate-pulse">
                    FEATURED ⭐
                  </span>
                )}
              </div>
              <p className="text-base font-medium mb-5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, tagIdx) => (
                  <span 
                    key={tag} 
                    className={`
                      ${tagIdx % 3 === 0 ? 'bg-main text-white' : tagIdx % 3 === 1 ? 'bg-accent text-white' : 'bg-secondary text-white'}
                      border-2 border-black px-3 py-1 text-xs font-black
                      hover:scale-110 transition-transform cursor-pointer
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience">
        <div className="mb-8 inline-block">
            <h2 className="text-4xl font-black bg-gradient-to-r from-accent to-main text-white px-6 py-2 border-3 border-black shadow-neobrutalism-sm rotate-1">
            💼 WHERE I'VE WORKED
            </h2>
        </div>
        
        <div className="grid gap-6">
          {EXPERIENCE.map((exp, idx) => (
            <NeoCard 
              key={idx} 
              className={`
                ${idx % 2 === 0 ? 'bg-main/5 border-main/20' : 'bg-accent/5 border-accent/20'} 
                hover:scale-105 transition-transform duration-300
              `}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-3">
                <div>
                  <h3 className="text-xl font-black mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-base font-bold">
                    <Briefcase size={18} />
                    {exp.company}
                  </div>
                </div>
                <span className={`
                  ${idx === 0 ? 'bg-accent' : idx === 1 ? 'bg-main' : 'bg-secondary'} 
                  text-white
                  border-3 border-black px-4 py-2 text-sm font-black whitespace-nowrap
                `}>
                  {exp.period}
                </span>
              </div>
              <p className="text-sm font-medium leading-relaxed">
                {exp.description}
              </p>
            </NeoCard>
          ))}
        </div>
      </section>

    </main>
  );
}
