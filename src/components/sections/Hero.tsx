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

      {/* Dark overlay — even vignette since content is now centered, not left-anchored */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 py-32 sm:py-40 w-full flex flex-col items-center text-center">
        <motion.div className="mb-8" {...fadeUp(0, 20)}>
          <Image
            src="/logo/logo1.png"
            alt="Mana Home Base Studio barber logo"
            width={1254}
            height={1254}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 object-contain"
          />
        </motion.div>

        <motion.p
          className="text-silver-500 text-xs font-medium uppercase tracking-[0.3em] mb-6"
          {...fadeUp(0.1, 16)}
        >
          Mount Nelson, Hobart, Tasmania
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6 max-w-2xl"
          {...fadeUp(0.25, 28)}
        >
          Private Barber Studio in Hobart Tasmania
        </motion.h1>

        <motion.p
          className="text-zinc-400 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10"
          {...fadeUp(0.45, 16)}
        >
          Sharp skin fades, beard trims and modern men&apos;s haircuts —
          your local barber shop in Mount Nelson, Hobart.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          {...fadeUp(0.6, 16)}
        >
          <BookingTrigger variant="primary">Book Now</BookingTrigger>
          <Button href="#services" variant="outline">Our Services</Button>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-center gap-2 text-zinc-500 text-sm"
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

      {/* Wave divider — fills with Services bg colour so the edge is curved */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20 block"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C360,120 1080,-40 1440,40 L1440,120 L0,120 Z" fill="#09090B" />
        </svg>
      </div>
    </section>
  )
}
