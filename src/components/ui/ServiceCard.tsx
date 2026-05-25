'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Service } from '@/lib/data'
import { FRESHA_BOOKING_URL } from '@/lib/data'

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -4 },
}

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.07 },
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      className="flex flex-col overflow-hidden bg-zinc-900 border border-zinc-800 shadow-lg hover:border-gold-500/40 transition-colors duration-300"
      initial="rest"
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          variants={imageVariants}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Image
            src={service.image}
            alt={`${service.title} — Diego's Barbershop Hobart`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
          {service.title}
        </h3>

        <div className="w-8 h-px bg-gold-500" aria-hidden="true" />

        <div className="flex items-center justify-between gap-2 flex-1">
          <span className="text-zinc-500 text-xs tracking-wide self-start">
            {service.duration}
          </span>
          <p className="text-right self-start">
            {service.priceLabel && (
              <span className="text-zinc-400 text-xs font-normal mr-1">
                {service.priceLabel}
              </span>
            )}
            <span className="text-gold-500 font-semibold text-sm">
              {service.price}
            </span>
          </p>
        </div>

        <a
          href={FRESHA_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center border border-gold-500/60 text-gold-500 hover:bg-gold-500 hover:text-black text-xs font-semibold uppercase tracking-widest py-3 px-4 transition-all duration-200"
          aria-label={`Book ${service.title} at Diego's Barbershop Hobart`}
        >
          Book Now
        </a>
      </div>
    </motion.article>
  )
}
