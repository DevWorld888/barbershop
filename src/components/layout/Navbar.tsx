'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BOOKING_URL } from '@/lib/data'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800">
      <nav
        className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16 sm:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/logobarber1.png"
            alt="Diego's Barbershop logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-cover group-hover:brightness-110 transition"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-white font-bold text-xl sm:text-2xl uppercase tracking-wider">
              Diego&apos;s
            </span>
            <span className="text-gold-500 text-[10px] uppercase tracking-[0.25em]">
              Barbershop
            </span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-zinc-400 text-sm uppercase tracking-wider hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center bg-gold-500 text-black text-sm font-semibold uppercase tracking-widest px-6 py-2.5 hover:bg-gold-400 transition-colors"
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 8h18M3 16h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-4"
        >
          <ul className="flex flex-col" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-zinc-300 text-sm uppercase tracking-wider hover:text-white border-b border-zinc-800 last:border-0 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center bg-gold-500 text-black text-sm font-semibold uppercase tracking-widest py-3 hover:bg-gold-400 transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  )
}
