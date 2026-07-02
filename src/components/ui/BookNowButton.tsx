'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BOOKING_URL } from '@/lib/data'

export default function BookNowButton() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {mounted && (
        <motion.a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book an appointment online"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-6 z-50 flex h-14 items-center justify-center rounded-full bg-silver-500 px-6 font-semibold uppercase tracking-widest text-black shadow-[0_8px_32px_rgba(192,192,192,0.3)] transition-[background-color,box-shadow] duration-300 hover:bg-silver-400 hover:shadow-[0_8px_40px_rgba(192,192,192,0.45)] text-sm"
        >
          Book Now
        </motion.a>
      )}
    </AnimatePresence>
  )
}
