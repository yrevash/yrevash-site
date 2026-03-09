'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

const pillTransition = {
  type: 'spring' as const,
  stiffness: 350,
  damping: 30,
  mass: 0.4,
}

export default function Nav() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

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

  // The pill follows hover; if not hovering, falls back to active route
  const activePill = hovered ?? pathname

  return (
    <>
      <motion.nav
        className="fixed left-1/2 top-4 z-50 -translate-x-1/2"
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Desktop nav */}
        <div
          className="relative hidden items-center rounded-full md:flex"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow:
              'inset 0 1px 2px rgba(255,255,255,0.18), inset 0 -1px 2px rgba(0,0,0,0.25), 0 8px 32px rgba(0,0,0,0.18)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            padding: '6px 8px',
          }}
          onMouseLeave={() => setHovered(null)}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            const isHighlighted = activePill === link.href

            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setHovered(link.href)}
              >
                {/* Sliding liquid glass pill */}
                {isHighlighted && (
                  <motion.div
                    layoutId="navPill"
                    transition={pillTransition}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: isActive
                        ? 'rgba(253,151,69,0.25)'
                        : 'rgba(255,255,255,0.12)',
                      border: isActive
                        ? '1px solid rgba(253,151,69,0.4)'
                        : '1px solid rgba(255,255,255,0.2)',
                      boxShadow: isActive
                        ? 'inset 0 1px 1px rgba(255,255,255,0.3), 0 4px 16px rgba(253,151,69,0.2)'
                        : 'inset 0 1px 1px rgba(255,255,255,0.25), 0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  />
                )}

                <Link
                  href={link.href}
                  className={`relative z-10 block rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : hovered === link.href
                        ? 'text-white'
                        : 'text-gray-300 dark:text-gray-400'
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            )
          })}

          {/* Thin divider before theme switcher */}
          <div className="mx-2 h-4 w-px bg-white/20" />
          <div className="relative z-10">
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile menu button */}
        <div
          className="flex items-center gap-2 rounded-full px-4 py-2 md:hidden"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.15), 0 4px 16px rgba(0,0,0,0.2)',
          }}
        >
          <span className="text-sm font-bold text-main">yrevash</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-1 text-gray-300"
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
              className="fixed right-0 top-0 z-50 h-full w-64 bg-white shadow-2xl dark:bg-gray-900"
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
