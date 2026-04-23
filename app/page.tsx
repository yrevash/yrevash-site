'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import TypingText from '@/components/typing-text'
import Magnetic from '@/components/magnetic'
import BackgroundScene from '@/components/three/background-scene'

const orbitSkills = [
  ['LLM', 'RAG', 'AI', 'ML'],
  ['YOLO', 'Python', 'PyTorch', 'Docker'],
]

const typingLines = [
  { text: "Hey there! I'm", className: 'text-lg font-medium text-gray-500 dark:text-gray-400' },
  {
    text: 'Yash Tiwari',
    className: 'text-5xl sm:text-7xl font-black text-gray-900 dark:text-white leading-none mt-1',
  },
  {
    text: 'building production AI systems,',
    className: 'text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-3',
  },
  {
    text: 'crafting LLM agents and',
    className: 'text-base sm:text-lg text-gray-600 dark:text-gray-300',
  },
  {
    text: 'computer vision pipelines at scale.',
    className: 'text-base sm:text-lg text-gray-600 dark:text-gray-300',
  },
]

export default function HomePage() {
  const [typingDone, setTypingDone] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <main className="relative min-h-screen">
      <BackgroundScene scene="home" />

      <div className="flex min-h-screen items-center justify-center px-4 py-20">
        <div className="flex w-full max-w-6xl items-center justify-between gap-6">

          {/* Left orbit column */}
          <div className="hidden flex-col gap-4 lg:flex">
            {orbitSkills[0].map((skill, i) => (
              <motion.div
                key={skill}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-xs font-bold text-gray-700 shadow-sm backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-300"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                whileHover={{ scale: 1.1, borderColor: '#FD9745', color: '#FD9745' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>

          {/* Center: Image + Text */}
          <div className="flex flex-1 flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">

            {/* Optimus Prime GIF with parallax */}
            <div ref={imageRef} className="shrink-0">
              <motion.div
                style={{ y: imageY }}
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="absolute -inset-4 rounded-full bg-main/20 blur-2xl" />
                <div className="relative h-56 w-56 overflow-hidden rounded-2xl border-2 border-main/30 shadow-2xl shadow-main/20 sm:h-72 sm:w-72">
                  <Image
                    src="/optimus.gif"
                    alt="Optimus Prime"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <motion.div
                  className="absolute -bottom-3 -right-3 rounded-full border border-main/40 bg-white/90 px-3 py-1 text-xs font-bold text-main shadow-lg backdrop-blur-sm dark:bg-gray-900/90"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  AI & LLMs ✨
                </motion.div>
              </motion.div>
            </div>

            {/* Typing text + CTAs */}
            <div className="text-center lg:text-left">
              <TypingText lines={typingLines} onComplete={() => setTypingDone(true)} />

              <AnimatePresence>
                {typingDone && (
                  <motion.div
                    className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Magnetic strength={0.2}>
                      <Link
                        href="/about"
                        className="flex items-center gap-2 rounded-full bg-main px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-mainAccent"
                      >
                        Know More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Magnetic>
                    <Magnetic strength={0.2}>
                      <Link
                        href="/projects"
                        className="flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-700 backdrop-blur-sm transition-all hover:border-main dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:border-main"
                      >
                        View Projects
                      </Link>
                    </Magnetic>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right orbit column */}
          <div className="hidden flex-col gap-4 lg:flex">
            {orbitSkills[1].map((skill, i) => (
              <motion.div
                key={skill}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-xs font-bold text-gray-700 shadow-sm backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-300"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 + 0.2 }}
                whileHover={{ scale: 1.1, borderColor: '#FD9745', color: '#FD9745' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}
