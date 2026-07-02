'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type Variant = 'primary' | 'outline'

interface ButtonProps {
  href: string
  variant?: Variant
  children: React.ReactNode
  external?: boolean
  className?: string
}

const MotionLink = motion.create(Link)
const ease = [0.22, 1, 0.36, 1] as const

export default function Button({
  href,
  variant = 'primary',
  children,
  external = false,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center text-sm font-semibold uppercase tracking-widest px-8 py-4 transition-colors'

  const variants: Record<Variant, string> = {
    primary: 'bg-silver-500 text-black hover:bg-silver-400',
    outline: 'border border-zinc-600 text-white hover:border-silver-500 hover:text-silver-500',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const hover =
    variant === 'primary'
      ? { scale: 1.03, boxShadow: '0 0 24px rgba(201, 168, 76, 0.4)' }
      : { scale: 1.02 }

  const motionProps = {
    whileHover: hover,
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2, ease },
  }

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <MotionLink href={href} className={classes} {...motionProps}>
      {children}
    </MotionLink>
  )
}
