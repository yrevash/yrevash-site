import { LINKS } from "@/data/links";
import { SKILLS } from "@/data/skills";
import { PROJECTS, EXPERIENCE, HIGHLIGHTS } from "@/data/projects";
import NeoCard from "@/components/NeoCard";
import Link from "next/link";
import { ArrowUpRight, Briefcase, MapPin, Award } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-12 max-w-5xl mx-auto flex flex-col gap-16">
      
      {/* HERO SECTION */}
      <section className="flex flex-col gap-8">
        <NeoCard className="bg-secondary border-black"> 
          {/* bg-secondary gives it that Yellow pop */}
          <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
            Hey, I'm <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Yash Tiwari</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold border-t-3 border-black pt-4">
            Building intelligent systems • Mechatronics @ NHIT
          </p>
          <div className="flex items-center gap-2 mt-4 text-lg font-bold">
            <MapPin size={20} />
            Thane, Maharashtra
          </div>
        </NeoCard>

        {/* SOCIAL LINKS (Fixed Buttons) */}
        <div className="flex gap-4 flex-wrap">
          {LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target="_blank" 
              className="
                bg-white text-black no-underline
                border-3 border-black px-6 py-3 
                font-black text-lg
                shadow-neobrutalism 
                hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-none hover:bg-main
                active:translate-x-[2px] active:translate-y-[2px] active:shadow-none 
                transition-all flex items-center gap-3
              "
            >
              <link.icon size={24} />
              {link.name}
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section>
        <div className="mb-8 inline-block">
            <h2 className="text-4xl font-black bg-accent text-white px-4 py-1 border-3 border-black shadow-neobrutalism-sm rotate-1">
            SKILLS
            </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((field) => (
            <NeoCard key={field.field} className="bg-white">
              <h3 className="text-2xl font-black mb-6 border-b-3 border-black pb-2 uppercase">
                {field.field}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {field.skills.map((item) => (
                  <div key={item.skill} className="flex flex-col items-center gap-2 group cursor-pointer p-2 hover:bg-gray-100 rounded-md transition-colors">
                    <item.icon size={32} />
                    <span className="text-xs font-bold text-center uppercase">{item.skill}</span>
                  </div>
                ))}
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section>
        <div className="mb-8 inline-block">
            <h2 className="text-4xl font-black bg-main text-white px-4 py-1 border-3 border-black shadow-neobrutalism-sm -rotate-1">
            PROJECTS
            </h2>
        </div>
        
        <div className="grid gap-6">
          {PROJECTS.map((project) => (
            <NeoCard key={project.title} className={project.highlight ? "bg-accent/10" : "bg-white"}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-black">{project.title}</h3>
                {project.highlight && (
                  <span className="bg-accent text-white px-3 py-1 text-xs font-black border-2 border-black">
                    FEATURED
                  </span>
                )}
              </div>
              <p className="text-base font-medium mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-white border-2 border-black px-3 py-1 text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section>
        <div className="mb-8 inline-block">
            <h2 className="text-4xl font-black bg-white text-black px-4 py-1 border-3 border-black shadow-neobrutalism-sm rotate-1">
            EXPERIENCE
            </h2>
        </div>
        
        <div className="grid gap-6">
          {EXPERIENCE.map((exp, idx) => (
            <NeoCard key={idx} className="bg-white">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                <div>
                  <h3 className="text-xl font-black">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-base font-bold">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                </div>
                <span className="bg-secondary border-2 border-black px-3 py-1 text-sm font-black whitespace-nowrap">
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

      {/* HIGHLIGHTS SECTION */}
      <section>
        <div className="mb-8 inline-block">
            <h2 className="text-4xl font-black bg-accent text-white px-4 py-1 border-3 border-black shadow-neobrutalism-sm -rotate-1">
            HIGHLIGHTS
            </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {HIGHLIGHTS.map((highlight, idx) => (
            <NeoCard key={idx} className="bg-white flex items-start gap-3 p-4">
              <Award size={20} className="flex-shrink-0 mt-1" />
              <p className="text-sm font-bold">{highlight}</p>
            </NeoCard>
          ))}
        </div>
      </section>

    </main>
  );
}