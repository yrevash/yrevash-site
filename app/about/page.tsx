'use client'

import { useEffect, useRef, useState } from 'react'
import BackgroundScene from '@/components/three/background-scene'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import TypingText from '@/components/typing-text'

const sections = ['intro', 'skills', 'experience']

const introLines = [
  {
    text: "Hey, I'm Yash",
    className: 'text-3xl sm:text-4xl font-black text-gray-900 dark:text-white',
  },
  {
    text: 'Mechatronics Engineer · Robotics & AI.',
    className: 'text-xl sm:text-2xl font-semibold text-main mt-1',
  },
]

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState('intro')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' },
    )
    sections.forEach((id) => {
      const el = sectionRefs.current[id]
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative">
      <BackgroundScene scene="about" />

      <div className="mx-auto max-w-4xl px-6 pb-32 pt-28">
        {/* Navigation dots */}
        <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' })}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? 'scale-150 bg-main'
                  : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
              }`}
              aria-label={id}
            />
          ))}
        </div>

        {/* Intro */}
        <section
          id="intro"
          ref={(el) => { sectionRefs.current.intro = el }}
          className="mb-24 min-h-[60vh] flex flex-col justify-center relative"
        >
          <TypingText lines={introLines} />
          <div className="mt-8 max-w-2xl space-y-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              Mechatronics Engineering student at <span className="font-semibold text-main">New Horizon Institute of Technology</span>, Thane (GPA: 8.2/10) — building at the intersection of robotics, embedded systems, and AI.
            </p>
            <p>
              Currently working as a <span className="font-semibold text-main">Software Engineer at Qoneqt</span>, where I previously built a scalable Aadhaar authentication pipeline serving 20,000+ users, raising verification accuracy from 28% to 95%.
            </p>
            <p>
              As a <span className="font-semibold text-main">Google Summer of Code</span> developer, I architected a real-time gesture processing system for professional musicians — porting the Paura Gestures Library to Avendish runtime with sub-millisecond C++ latency.
            </p>
            <p>
              At <span className="font-semibold text-main">Stamp 'IT Robotai</span>, I optimized deep learning inference on Raspberry Pi hardware, achieving 30+ FPS YOLO object detection at 720p using TensorFlow Lite. I also built a Qt-based CAD application that cut deployment setup time by 50%.
            </p>
          </div>

          <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-main/10 blur-3xl" />
          <div className="pointer-events-none absolute left-0 top-3/4 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />
        </section>

        {/* Skills */}
        <section
          id="skills"
          ref={(el) => { sectionRefs.current.skills = el }}
          className="mb-24"
        >
          <h2 className="mb-8 text-2xl font-black text-gray-900 dark:text-white sm:text-3xl">
            <span className="text-main">/</span> Skills
          </h2>
          <Skills />
        </section>

        {/* Experience */}
        <section
          id="experience"
          ref={(el) => { sectionRefs.current.experience = el }}
          className="mb-24"
        >
          <h2 className="mb-8 text-2xl font-black text-gray-900 dark:text-white sm:text-3xl">
            <span className="text-main">/</span> Experience
          </h2>
          <Experience />
        </section>
      </div>
    </main>
  )
}
