import type { ReactNode } from 'react'
import Reveal from '@/components/animations/Reveal'
import { FRESHA_BOOKING_URL } from '@/lib/data'

// Update manually after the event — no backend/analytics wired up yet.
const RAISED_AUD = 0
const GOAL_AUD = 1500

interface Bullet {
  id: string
  icon: ReactNode
  title: string
  description: string
}

const bullets: Bullet[] = [
  {
    id: 'purpose',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
      </svg>
    ),
    title: 'Cut With Purpose',
    description: 'Get a fresh cut and help people in Colombia.',
  },
  {
    id: 'proceeds',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21s-7.5-4.35-7.5-10.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 7.5 4.5C19.5 16.65 12 21 12 21z" />
      </svg>
    ),
    title: '100% of Proceeds',
    description: 'All proceeds from these two days will be donated.',
  },
  {
    id: 'together',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Together We Can Help',
    description: 'Your support makes a real difference.',
  },
]

function ColombiaFlagHeart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="colombia-flag-heart" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCD116" />
          <stop offset="50%" stopColor="#FCD116" />
          <stop offset="50%" stopColor="#003893" />
          <stop offset="75%" stopColor="#003893" />
          <stop offset="75%" stopColor="#CE1126" />
          <stop offset="100%" stopColor="#CE1126" />
        </linearGradient>
      </defs>
      <path
        fill="url(#colombia-flag-heart)"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  )
}

export default function CharityPromo() {
  const progress = Math.min(100, Math.round((RAISED_AUD / GOAL_AUD) * 100))

  return (
    <section
      aria-labelledby="charity-promo-heading"
      className=" relative bg-zinc-950 -mt-px border-y border-zinc-800/80 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 lg:divide-x lg:divide-zinc-800/80">

            {/* Event details */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:pr-10">
              <ColombiaFlagHeart className="w-14 h-14 mb-5" />
              <h2
                id="charity-promo-heading"
                className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight leading-tight"
              >
                Fades for Colombia
              </h2>
              <p className="font-serif italic text-amber-400 text-xl sm:text-2xl mt-1">
                Charity Weekend
              </p>
              <p className="text-white font-bold uppercase tracking-wide mt-3">
                21, 22 &amp; 23 August
              </p>
              <div className="mt-4 inline-flex items-center gap-2 border border-amber-400/40 text-amber-400 text-xs font-semibold uppercase tracking-wide px-4 py-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 16 14" />
                </svg>
                8:00 AM &ndash; 6:00 PM
              </div>
            </div>

            {/* Why it matters */}
            <div className="flex flex-col gap-6 lg:px-10">
              {bullets.map((bullet) => (
                <div key={bullet.id} className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5 w-10 h-10 border border-amber-400/40 flex items-center justify-center text-amber-400">
                    {bullet.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base">{bullet.title}</h3>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">{bullet.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fundraising goal + CTA */}
            <div className="flex flex-col items-center text-center lg:pl-10">
              {/* <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Fundraising Goal
                <span className="text-amber-400" aria-hidden="true">❤</span>
              </p>

              <div className="w-full max-w-xs mt-5">
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                  <span>${RAISED_AUD.toLocaleString()}</span>
                  <span>${GOAL_AUD.toLocaleString()}</span>
                </div>
                <div
                  className="h-2 w-full bg-zinc-800"
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`$${RAISED_AUD} raised of $${GOAL_AUD} goal`}
                >
                  <div className="h-full bg-amber-400" style={{ width: `${progress}%` }} />
                </div>
              </div> */}

              {/* <p className="mt-4">
                <span className="text-white font-bold text-2xl">${RAISED_AUD.toLocaleString()}</span>{' '}
                <span className="text-zinc-500 text-xs uppercase tracking-wide">AUD</span>
              </p> */}
              <div className="flex max-w-xs flex-col items-center gap-1 text-center sm:max-w-sm">
                <p className="text-amber-400 text-[10px] font-black uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.28em]">
                  COLOMBIA TE NECESITA
                </p>
                <p className="text-white/90 text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.24em]">
                  COLOMBIA NEEDS US.
                </p>
                <p className="mt-1 text-amber-400 text-[10px] font-semibold uppercase tracking-wide leading-relaxed sm:text-xs">
                  Every haircut on 21 &amp; 23 August helps support people affected by the earthquake in Colombia.
                </p>
              </div>

              <a
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-amber-400 text-black text-sm font-semibold uppercase tracking-widest px-8 py-4 hover:bg-amber-300 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Book Charity Cut
              </a>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}
