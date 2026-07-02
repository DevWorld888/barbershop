'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BOOKING_URL, WHATSAPP_URL } from '@/lib/data'

// ── Future: per-service booking URLs ────────────────────────────────────────
// When Fresha provides direct URLs per service, populate SERVICE_URLS and
// swap resolveBookingUrl below. Then add an optional `serviceId?: string`
// prop to BookingModal and thread it through to handleBook in ModalOverlay.
//
// const SERVICE_URLS: Record<string, string> = {
//   haircut: 'https://www.fresha.com/book-now/...',
//   fade:    'https://www.fresha.com/book-now/...',
//   beard:   'https://www.fresha.com/book-now/...',
//   combo:   'https://www.fresha.com/book-now/...',
//   kids:    'https://www.fresha.com/book-now/...',
// }
// function resolveBookingUrl(serviceId?: string): string {
//   return (serviceId && SERVICE_URLS[serviceId]) ?? BOOKING_URL
// }

const BENEFITS = [
  'Choose your service',
  'Select your preferred time',
  'Confirm your appointment online',
] as const

// ── Icons ──────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="w-4 h-4 shrink-0 mt-px"
      aria-hidden="true"
    >
      <path
        d="M2.5 8.5L6 12L13.5 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

// ── Overlay ─────────────────────────────────────────────────────────────────

function ModalOverlay({ onClose }: { onClose: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  useEffect(() => { cardRef.current?.focus() }, [])

  const handleBook = () => {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Card */}
      <motion.div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        tabIndex={-1}
        className="relative z-10 w-full sm:max-w-md flex flex-col bg-zinc-950 border-t border-zinc-800 sm:border sm:rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.9)] outline-none"
        initial={{ y: 64, scale: 0.97, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 64, scale: 0.97, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Silver top accent */}
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-silver-500 to-transparent"
          aria-hidden="true"
        />

        {/* Mobile drag handle */}
        <div className="sm:hidden flex justify-center pt-3 pb-0.5">
          <div className="h-1 w-10 rounded-full bg-zinc-800" />
        </div>

        {/* Header */}
        <div className="px-6 pt-5 sm:pt-8 pb-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <p className="text-silver-500 text-[10px] font-semibold uppercase tracking-[0.28em] pt-1">
              Mana Fade Studio · Hobart
            </p>
            <button
              onClick={onClose}
              aria-label="Close booking modal"
              className="shrink-0 h-8 w-8 flex items-center justify-center rounded-full border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-200 transition-colors duration-150"
            >
              <CloseIcon />
            </button>
          </div>

          <h2
            id="booking-modal-title"
            className="text-white text-2xl sm:text-[26px] font-bold tracking-tight mb-2"
          >
            Ready to Book?
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Continue to our secure online booking system to choose your service
            and appointment time.
          </p>
        </div>

        {/* Benefits */}
        <div className="px-6 pb-6 border-t border-zinc-800/50 pt-5">
          <ul className="space-y-3.5" aria-label="What to expect">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-zinc-300 text-sm">
                <span className="text-silver-500">
                  <CheckIcon />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="px-6 pt-4 pb-8 sm:pb-6 border-t border-zinc-800/60">
          <motion.button
            onClick={handleBook}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.12 }}
            className="w-full py-[15px] bg-silver-500 text-black text-[13px] font-semibold uppercase tracking-[0.13em] hover:bg-silver-400 transition-colors duration-200"
          >
            Continue to Online Booking
          </motion.button>

          <p className="mt-3.5 text-center text-[11px] text-zinc-600 leading-relaxed">
            Prefer to ask a question first?{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 underline underline-offset-2 hover:text-silver-500 transition-colors duration-150"
            >
              Chat with us on WhatsApp
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── Public API ──────────────────────────────────────────────────────────────

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && <ModalOverlay key="booking-modal-overlay" onClose={onClose} />}
    </AnimatePresence>
  )
}
