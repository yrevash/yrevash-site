'use client'

import { SiGithub } from '@icons-pack/react-simple-icons'
import { Mail, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yrevash', icon: SiGithub },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yrevash', icon: Linkedin },
  { name: 'Email', href: 'mailto:yashtiwari9182@gmail.com', icon: Mail },
]

export default function Links() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 text-xs text-gray-500 dark:text-gray-400">
      <span>© {new Date().getFullYear()} yrevash</span>
      <div className="flex items-center gap-4">
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            whileHover={{ y: -3, color: '#FD9745' }}
            transition={{ duration: 0.2 }}
            className="text-gray-500 dark:text-gray-400"
          >
            <link.icon className="h-4 w-4" />
          </motion.a>
        ))}
      </div>
    </footer>
  )
}
