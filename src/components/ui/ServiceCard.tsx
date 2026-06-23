'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Service } from '@/lib/data'
import { FRESHA_BOOKING_URL } from '@/lib/data'

const lift = {
  rest: { y: 0 },
  hover: { y: -6 },
}

const zoom = {
  rest: { scale: 1 },
  hover: { scale: 1.09 },
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      className="group relative flex flex-col h-full overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-gold-500/40 hover:shadow-[0_12px_40px_rgba(212,175,55,0.1)] transition-[border-color,box-shadow] duration-300 cursor-pointer"
      initial="rest"
      whileHover="hover"
      variants={lift}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Full-card accessible link */}
      <a
        href={FRESHA_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Book ${service.title} at Mana Fade Studio Hobart`}
        className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-[-2px]"
      />

      {/* ── Image ──────────────────────────────────────────────────── */}
      <div className="relative h-62 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          variants={zoom}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={service.image}
            alt={`${service.title} — Mana Fade Studio Hobart`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            style={{ objectPosition: service.imagePosition ?? 'center' }}
          />
        </motion.div>

        {/* Gradient for text readability */}
        <div
          className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Duration badge */}
        <span className="absolute top-3 right-3 bg-black/75 backdrop-blur-sm text-zinc-400 text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 border border-zinc-700/50">
          {service.duration}
        </span>
      </div>

      {/* ── Content ────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 px-5 pt-5 pb-5 gap-3">

        {/* Title */}
        <h3 className="text-white font-bold text-[15px] sm:text-base leading-snug tracking-tight">
          {service.title}
        </h3>

        {/* Animated gold rule */}
        <div
          className="h-px bg-gold-500/60 group-hover:bg-gold-500 w-7 group-hover:w-10 transition-all duration-300"
          aria-hidden="true"
        />

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mt-auto pt-1">
          {service.priceLabel && (
            <span className="text-zinc-500 text-[10px] uppercase tracking-wider">
              {service.priceLabel}
            </span>
          )}
          <span className="text-gold-500 font-bold text-[1.6rem] leading-none tabular-nums">
            {service.price}
          </span>
        </div>

        {/*
          CTA row:
          - Mobile (default): always visible
          - Desktop (sm+): hidden at rest, slides up and fades in on hover
        */}
        <div
          className="
            flex items-center justify-between pt-3
            border-t border-zinc-800 group-hover:border-zinc-700
            transition-[opacity,transform,border-color] duration-300 ease-out
            opacity-100 translate-y-0
            sm:opacity-0 sm:translate-y-2
            sm:group-hover:opacity-100 sm:group-hover:translate-y-0
          "
        >
          <span className="text-zinc-300 group-hover:text-white text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200">
            Book Now
          </span>
          <span className="text-gold-500 text-sm leading-none" aria-hidden="true">
            →
          </span>
        </div>

      </div>
    </motion.article>
  )
}
