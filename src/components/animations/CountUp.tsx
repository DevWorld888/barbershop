'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface CountUpProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Final value to count up to */
  value: number
  /** Prefix rendered before the number, e.g. "$" */
  prefix?: string
  /** Animation length in ms */
  duration?: number
}

/**
 * Counts from 0 up to `value` once the element scrolls into view.
 * Renders the final value immediately when JS is unavailable or the
 * visitor prefers reduced motion, so it stays accessible and SEO-safe.
 */
export default function CountUp({ value, prefix = '', duration = 1100, ...rest }: CountUpProps) {
  const shouldReduceMotion = useReducedMotion() === true
  const [display, setDisplay] = useState(value)
  const ref = useRef<HTMLSpanElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    if (shouldReduceMotion || hasRun.current) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasRun.current) return
        hasRun.current = true
        observer.disconnect()

        const start = performance.now()
        setDisplay(0)
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(eased * value))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [shouldReduceMotion, value, duration])

  return (
    <span ref={ref} {...rest}>
      {prefix}
      {display.toLocaleString()}
    </span>
  )
}
