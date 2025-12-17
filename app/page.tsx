import { Spotlight } from "./components/ui/SpotLight";
import { Hero } from "./components/ui/Hero";
import { About } from "./components/ui/About";
import { Projects } from "./components/ui/Projects";
import { Experience } from "./components/ui/Experience";
import { Skills } from "./components/ui/Skills";
import { Contact } from "./components/ui/Contact";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-stretch bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* The Spotlight Beam */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <main className="flex-1">
        <Hero />
        <div className="max-w-5xl mx-auto px-4">
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  );
}