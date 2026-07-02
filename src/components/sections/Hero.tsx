'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '@/components/ui/Button'
import BookingTrigger from '@/components/ui/BookingTrigger'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const shouldReduceMotion = useReducedMotion() === true

  const fadeUp = (delay: number, y = 20) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease },
        }

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background photo — not animated to preserve LCP */}
      <Image
        src="/hero/premium-barber-hobart-tasmania-hobart.webp"
        alt="Premium barber shop skin fade haircut in Mount Nelson Hobart Tasmania"
        fill
        priority
        className="object-cover object-center opacity-40"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"
        aria-hidden="true"
      />

      {/* Silver vertical accent bar */}
      <div className="absolute top-0 bottom-0 left-0 w-1 bg-silver-500" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 w-full">
        <motion.p
          className="text-silver-500 text-xs font-medium uppercase tracking-[0.3em] mb-6"
          {...fadeUp(0.1, 16)}
        >
          Mount Nelson, Hobart, Tasmania
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-2xl"
          {...fadeUp(0.25, 28)}
        >
          <span className="font-[family-name:var(--font-nathan-script)]">Private Barber Studio</span>
          <br />
          <span className="font-[family-name:var(--font-nathan-script)]">in Hobart Tasmania</span>
        </motion.h1>

        <motion.p
          className="text-zinc-400 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          {...fadeUp(0.45, 16)}
        >
          Sharp skin fades, beard trims and modern men&apos;s haircuts —
          your local barber shop in Mount Nelson, Hobart.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          {...fadeUp(0.6, 16)}
        >
          <BookingTrigger variant="primary">Book Now</BookingTrigger>
          <Button href="#services" variant="outline">Our Services</Button>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center gap-2 text-zinc-500 text-sm"
          {...fadeUp(0.75, 0)}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span>Mount Nelson, Hobart, Tasmania, Australia</span>
        </motion.div>
      </div>
    </section>
  )
}
