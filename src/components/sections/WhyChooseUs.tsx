import type { ReactNode } from 'react'
import Reveal from '@/components/animations/Reveal'

interface Reason {
  id: string
  icon: ReactNode
  heading: string
  description: string
}

const reasons: Reason[] = [
  {
    id: 'expertise',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    heading: 'Hobart\'s Fade Specialist',
    description:
      'Sharp fades, clean lines, and precision barbering for men in Hobart — built for modern styles and a sharp, confident finish.',
  },
  {
    id: 'precision',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
      </svg>
    ),
    heading: 'Precision & Detail',
    description:
      'Every cut is finished with care. No rushing, no shortcuts — just sharp, clean results that speak for themselves.',
  },
  {
    id: 'booking',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="20" height="20" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    heading: 'Easy Online Booking',
    description:
      'Reserve your spot in seconds — no phone calls, no waiting. Pick a time and show up ready.',
  },
  {
    id: 'location',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    heading: 'Mount Nelson, Hobart',
    description:
      'Located in Mount Nelson, Hobart — easy to reach from Sandy Bay, Kingston, South Hobart, North Hobart and across Tasmania.',
  },
  {
    id: 'experience',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
      </svg>
    ),
    heading: 'Premium Environment',
    description:
      'A modern, welcoming space built for the full experience — not just a haircut, but a confidence upgrade.',
  },
  {
    id: 'versatile',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    heading: 'All Hair Types Welcome',
    description:
      'Whether straight, wavy, or curly — we have the skill and experience to work with any texture and any style.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <Reveal>
          <div className="mb-14 sm:mb-16">
            <p className="text-silver-500 text-xs font-medium uppercase tracking-[0.3em] mb-4">
              Why Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Why Choose Mana Fade
            </h2>
            <div className="w-12 h-px bg-silver-500" aria-hidden="true" />
          </div>
        </Reveal>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-16 lg:gap-y-12">
          {reasons.map((reason, i) => (
            <Reveal key={reason.id} delay={i * 0.09}>
              <div className="flex gap-8">
                {/* Icon */}
                <div className="shrink-0 mt-1 w-12 h-12 border border-silver-700 flex items-center justify-center text-silver-500">
                  {reason.icon}
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2">
                    {reason.heading}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
