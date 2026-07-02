'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useBooking } from '@/context/booking'

// Variants:
//   primary    — silver bg, black text, standard size  (Hero, Services, default)
//   primary-sm — silver bg, black text, compact size   (Footer)
//   outline    — transparent with border             (secondary actions)
//   dark       — black bg, white text               (BookingCTA section)

type TriggerVariant = 'primary' | 'primary-sm' | 'outline' | 'dark'

const VARIANT_STYLES: Record<TriggerVariant, string> = {
  'primary':    'bg-silver-500 text-black hover:bg-silver-400 text-sm px-8 py-4',
  'primary-sm': 'bg-silver-500 text-black hover:bg-silver-400 text-xs px-6 py-3',
  'outline':    'border border-zinc-600 text-white hover:border-silver-500 hover:text-silver-500 text-sm px-8 py-4',
  'dark':       'bg-black text-white hover:bg-zinc-900 text-sm px-10 py-4',
}

const ease = [0.22, 1, 0.36, 1] as const

interface BookingTriggerProps {
  children: ReactNode
  variant?: TriggerVariant
  /** Extra classes — appended after variant. Use for display/width overrides only. */
  className?: string
  /** Called before the modal opens — use in Navbar to close the mobile menu. */
  onBeforeOpen?: () => void
}

export default function BookingTrigger({
  children,
  variant = 'primary',
  className = '',
  onBeforeOpen,
}: BookingTriggerProps) {
  const { open } = useBooking()

  const handleClick = () => {
    onBeforeOpen?.()
    open()
  }

  const isSilver = variant === 'primary' || variant === 'primary-sm'

  const hoverEffect = isSilver
    ? { scale: 1.03, boxShadow: '0 0 24px rgba(192, 192, 192, 0.4)' }
    : { scale: 1.02 }

  return (
    <motion.button
      onClick={handleClick}
      className={`inline-flex items-center justify-center font-semibold uppercase tracking-widest transition-colors ${VARIANT_STYLES[variant]} ${className}`}
      whileHover={hoverEffect}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease }}
    >
      {children}
    </motion.button>
  )
}
