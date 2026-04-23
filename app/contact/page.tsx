'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Linkedin } from 'lucide-react'
import { Mail, FileText, ExternalLink } from 'lucide-react'
import BackgroundScene from '@/components/three/background-scene'
import GlowCard from '@/components/animations/glow-card'
import Parallax from '@/components/animations/parallax'
import TextReveal from '@/components/animations/text-reveal'
import { StaggerReveal, StaggerItem } from '@/components/animations/stagger-reveal'

const contactCards = [
  {
    name: 'Email',
    value: 'yashtiwari9182@gmail.com',
    href: 'mailto:yashtiwari9182@gmail.com',
    icon: Mail,
    description: 'The fastest way to get to me',
  },
  {
    name: 'GitHub',
    value: 'github.com/yrevash',
    href: 'https://github.com/yrevash',
    icon: SiGithub,
    description: 'Where the code actually lives',
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/yrevash',
    href: 'https://linkedin.com/in/yrevash',
    icon: Linkedin,
    description: 'Say hi, connect, or stalk a little',
  },
]

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundScene scene="contact" />

      <div className="mx-auto max-w-4xl px-6 pb-32 pt-28">
        <TextReveal
          text="Let's Connect"
          as="h1"
          className="mb-4 text-4xl font-black text-gray-900 dark:text-white sm:text-5xl"
          mode="words"
        />
        <motion.p
          className="mb-16 text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Got an idea you want to build, or just want to nerd out about AI? Drop me a line.
        </motion.p>

        {/* Spider-Man meme */}
        <Parallax speed={-0.1}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <div className="xs:h-[350px] mx-auto flex h-[300px] select-none flex-col text-gray-600 dark:text-gray-400 sm:h-[400px]">
              <div className="flex justify-around text-center">
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="xs:w-[140px] xs:text-xs mx-2 mt-3 w-[120px] text-[10px] font-bold sm:mx-4 sm:mt-5 sm:w-[160px] sm:text-sm"
                >
                  You looking for a gud developer
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="xs:w-[140px] xs:text-xs mx-2 mt-3 w-[120px] text-[10px] font-bold sm:mx-4 sm:mt-5 sm:w-[160px] sm:text-sm"
                >
                  Me looking for a gud job
                </motion.p>
              </div>
              <div className="xs:h-[250px] xs:w-[320px] relative m-auto h-[200px] w-[280px] sm:h-[350px] sm:w-[400px] md:h-[450px] md:w-[450px]">
                <Image
                  src="/meme.png"
                  alt="spiderman-meme"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </Parallax>

        <StaggerReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map((card) => (
              <StaggerItem key={card.name}>
                <GlowCard className="h-full border border-gray-200 bg-white/80 dark:border-gray-700 dark:bg-gray-800/50">
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col gap-3 p-6"
                  >
                    <div className="flex items-center justify-between">
                      <card.icon className="h-6 w-6 text-gray-500 group-hover:text-main dark:text-gray-400 transition-colors duration-300" />
                      <ExternalLink className="h-4 w-4 text-gray-300 group-hover:text-main dark:text-gray-600 transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{card.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{card.description}</p>
                    </div>
                    <p className="mt-auto text-xs font-medium text-main">{card.value}</p>
                  </a>
                </GlowCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerReveal>

        {/* Resume */}
        <Parallax speed={0.3}>
          <motion.div
            className="mt-16 rounded-xl border border-gray-200 bg-white/80 p-8 text-center dark:border-gray-700 dark:bg-gray-800/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FileText className="mx-auto mb-4 h-10 w-10 text-main" />
            <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Resume</h2>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              View or download my resume for a full overview of my experience.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://drive.google.com/file/d/1CyVQA6icszTgGQ7k5Ioku4MSNlFV3tFW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-main px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-mainAccent"
              >
                View Resume <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://drive.google.com/file/d/1CyVQA6icszTgGQ7k5Ioku4MSNlFV3tFW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:border-main dark:border-gray-600 dark:text-gray-300"
              >
                Download
              </a>
            </div>
          </motion.div>
        </Parallax>
      </div>
    </main>
  )
}
