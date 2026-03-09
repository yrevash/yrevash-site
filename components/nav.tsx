'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Magnetic from './magnetic'
import { ThemeSwitcher } from './theme-switcher'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > 150) {
        setVisible(currentY < lastScrollY)
      } else {
        setVisible(true)
      }
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Desktop nav */}
        <div className="hidden items-center gap-1 rounded-full border border-gray-200 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/90 md:flex">
          {navLinks.map((link) => (
            <Magnetic key={link.href} strength={0.2}>
              <Link
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-main text-white'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </Magnetic>
          ))}
          <div className="ml-2">
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/90 md:hidden">
          <span className="text-sm font-bold text-main">yrevash</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-2xl dark:bg-gray-900"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col gap-2 p-8 pt-20">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      pathname === link.href
                        ? 'bg-main text-white'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4">
                  <ThemeSwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
