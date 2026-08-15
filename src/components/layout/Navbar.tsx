'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FRESHA_BOOKING_URL } from '@/lib/data'
import PromoBar from './PromoBar'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Contact',  href: '#contact' },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion() === true

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <PromoBar />

      <motion.header
        className={`transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-zinc-800/80'
            : 'bg-transparent border-b border-transparent'
        }`}
        initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <nav
          className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between h-24 sm:h-24"
          aria-label="Main navigation"
        >
          {/* Logo — image only, proportions preserved */}
          <Link
            href="/"
            className="flex items-center shrink-0 group"
            aria-label="Mana Fade Studio — home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/logo1.png"
              alt="Mana Fade Studio"
              className="h-24 sm:h-16 md:h-24 w-auto object-contain select-none transition-[filter,opacity] duration-200 group-hover:brightness-110 group-hover:opacity-90"
              draggable={false}
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-zinc-400 text-sm uppercase tracking-wider hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={FRESHA_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center bg-silver-500 text-black text-sm font-semibold uppercase tracking-widest px-6 py-2.5 hover:bg-silver-400 transition-colors duration-200"
          >
            Book Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white hover:text-zinc-300 transition-colors duration-150"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h18M3 16h18" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu — animated slide down */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-zinc-800 overflow-hidden"
              initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease }}
            >
              <div className="px-6 py-4">
                <ul className="flex flex-col" role="list">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block py-3 text-zinc-300 text-sm uppercase tracking-wider hover:text-white border-b border-zinc-800 last:border-0 transition-colors duration-150"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href={FRESHA_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 w-full flex items-center justify-center bg-silver-500 text-black text-sm font-semibold uppercase tracking-widest py-3 hover:bg-silver-400 transition-colors duration-200"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  )
}
