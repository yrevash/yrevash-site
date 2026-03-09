'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [show, setShow] = useState(false)
  const [exit, setExit] = useState(false)

  const text = 'yrevash'
  const letters = text.split('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const seen = sessionStorage.getItem('preloader-seen')
    if (seen) return

    setShow(true)
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setExit(true)
      setTimeout(() => {
        setShow(false)
        document.body.style.overflow = ''
        sessionStorage.setItem('preloader-seen', '1')
      }, 600)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-gray-950"
          animate={exit ? { y: '-100%' } : { y: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center gap-1">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="text-4xl font-bold tracking-wider text-white sm:text-6xl"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full rounded-full bg-main"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.2, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.div
            className="mt-3 h-2 w-2 rounded-full bg-main"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
