'use client'

import { type ReactNode } from 'react'
import { useBooking } from '@/context/booking'

// Variants:
//   primary    — gold bg, black text, standard size  (Hero, Services, default)
//   primary-sm — gold bg, black text, compact size   (Footer)
//   outline    — transparent with border             (secondary actions)
//   dark       — black bg, white text               (BookingCTA section)

type TriggerVariant = 'primary' | 'primary-sm' | 'outline' | 'dark'

const VARIANT_STYLES: Record<TriggerVariant, string> = {
  'primary':    'bg-gold-500 text-black hover:bg-gold-400 text-sm px-8 py-4',
  'primary-sm': 'bg-gold-500 text-black hover:bg-gold-400 text-xs px-6 py-3',
  'outline':    'border border-zinc-600 text-white hover:border-gold-500 hover:text-gold-500 text-sm px-8 py-4',
  'dark':       'bg-black text-white hover:bg-zinc-900 text-sm px-10 py-4',
}

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

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center font-semibold uppercase tracking-widest transition-colors ${VARIANT_STYLES[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
