'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_URL } from '@/lib/data'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false)
  const [tooltipVisible, setTooltipVisible] = useState(false)

  // Delayed entrance — not intrusive on page load
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {mounted && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {tooltipVisible && (
              <motion.span
                role="tooltip"
                initial={{ opacity: 0, x: 6, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 6, scale: 0.97 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="pointer-events-none select-none whitespace-nowrap rounded-lg border border-zinc-800 bg-zinc-950/90 px-3.5 py-2 text-sm font-medium text-zinc-200 shadow-2xl backdrop-blur-sm"
              >
                Questions? Chat with us
              </motion.span>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            initial={{ opacity: 0, scale: 0.6, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 16 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            onFocus={() => setTooltipVisible(true)}
            onBlur={() => setTooltipVisible(false)}
            className="relative flex h-14 w-14 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-[#25D366] shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-[border-color,box-shadow] duration-300 hover:border-[#25D366]/25 hover:shadow-[0_8px_32px_rgba(37,211,102,0.12)]"
          >
            {/* Soft pulse ring */}
            <motion.span
              className="pointer-events-none absolute inset-0 rounded-full border border-[#25D366]/30"
              animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.6 }}
            />
            <WhatsAppIcon />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  )
}
