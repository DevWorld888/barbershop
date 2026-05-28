'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ServiceCard from '@/components/ui/ServiceCard'
import Reveal from '@/components/animations/Reveal'
import { services, FRESHA_BOOKING_URL } from '@/lib/data'

// ── Types ────────────────────────────────────────────────────────────────────

type Category = 'All' | 'Haircuts' | 'Beard' | 'Kids' | 'Premium'

const CATEGORIES: Category[] = ['All', 'Haircuts', 'Beard', 'Kids', 'Premium']

// Every service belongs to exactly one category (except "All")
const CATEGORY_MAP: Record<Exclude<Category, 'All'>, Set<string>> = {
  Haircuts: new Set([
    'Fade Haircut',
    'Men Regular Hair Cut',
    'Buzz Cut',
    'Scissor Haircut',
    'Restyling',
    'Senior Haircut',
  ]),
  Beard: new Set([
    'Regular Beard Trim and Line Up',
    'Long Beard Trim',
    'Wet Shave (Beard or Head)',
  ]),
  Kids: new Set([
    'Kids Fade Haircut (Under Age Of 9)',
    'Kids Regular Haircut (Under Age of 9)',
  ]),
  Premium: new Set([
    'Skinfade and Beard Combo',
    'Regular Haircut and Beard Trim',
    'Buzz Cut and Beard Combo',
    'Waxing (nose, ear, eyebrows, cheek) each',
  ]),
}

// Default 6 shown when "All" is selected and not expanded
const FEATURED_TITLES = new Set([
  'Fade Haircut',
  'Men Regular Hair Cut',
  'Skinfade and Beard Combo',
  'Regular Beard Trim and Line Up',
  'Kids Fade Haircut (Under Age Of 9)',
  'Senior Haircut',
])

const featuredServices = services.filter((s) => FEATURED_TITLES.has(s.title))

// ── Animation ────────────────────────────────────────────────────────────────

const cardVariant = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.22, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as const },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
}

// ── Component ────────────────────────────────────────────────────────────────

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [expanded, setExpanded] = useState(false)

  const visibleServices =
    activeCategory === 'All'
      ? expanded ? services : featuredServices
      : services.filter((s) => CATEGORY_MAP[activeCategory].has(s.title))

  function handleCategory(cat: Category) {
    setActiveCategory(cat)
    setExpanded(false)
  }

  return (
    <section id="services" className="bg-black py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <Reveal>
          <div className="mb-10 sm:mb-12">
            <p className="text-gold-500 text-xs font-medium uppercase tracking-[0.3em] mb-4">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Our Services
            </h2>
            <div className="w-12 h-px bg-gold-500" aria-hidden="true" />
          </div>
        </Reveal>

        {/* Category filters — horizontal scroll on mobile */}
        <Reveal delay={0.1}>
          <div
            className="mb-10 sm:mb-12 -mx-6 px-6 sm:mx-0 sm:px-0 overflow-x-auto"
            role="group"
            aria-label="Filter services by category"
          >
            <div className="flex gap-2 sm:gap-3 min-w-max sm:min-w-0">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategory(cat)}
                    aria-pressed={isActive}
                    className={[
                      'px-5 py-2.5 text-xs font-semibold uppercase tracking-widest border whitespace-nowrap transition-all duration-200',
                      isActive
                        ? 'border-gold-500 bg-gold-500 text-black shadow-[0_0_18px_rgba(212,175,55,0.32)]'
                        : 'border-zinc-700 bg-transparent text-zinc-400 hover:border-gold-500/50 hover:text-white',
                    ].join(' ')}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>

        {/* Services grid with filter animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleServices.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="h-full"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Expand/collapse — only visible under "All" */}
        {activeCategory === 'All' && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="inline-flex items-center justify-center border border-gold-500/60 text-gold-500 hover:bg-gold-500 hover:text-black text-sm px-8 py-4 font-semibold uppercase tracking-widest transition-colors duration-200"
            >
              {expanded ? 'Show Less' : 'View All Services'}
            </button>
          </div>
        )}

        {/* Book CTA */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <a
              href={FRESHA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold-500 text-black hover:bg-gold-400 text-sm px-8 py-4 font-semibold uppercase tracking-widest transition-colors"
            >
              Book Your Appointment
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
