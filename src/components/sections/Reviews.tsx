'use client'

import { useState } from 'react'
import { reviews } from '@/lib/data'
import Reveal from '@/components/animations/Reveal'

const GOOGLE_REVIEW_URL = 'https://g.page/r/' // TODO: replace with Diego's Google Business Profile review link

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-silver-500"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent((i) => (i + 1) % reviews.length)

  return (
    <section id="reviews" className="bg-black py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <Reveal>
          <div className="mb-14 sm:mb-16">
            <p className="text-silver-500 text-xs font-medium uppercase tracking-[0.3em] mb-4">
              Client Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              What Clients Say
            </h2>
            <div className="w-12 h-px bg-silver-500" aria-hidden="true" />
          </div>
        </Reveal>

        {/* Slider track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {reviews.map((review) => (
              <article
                key={review.id}
                className="w-full shrink-0 border border-zinc-800 p-8 sm:p-10"
              >
                {/* Top row: stars + service */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <StarRating rating={review.rating} />
                  <span className="text-zinc-500 text-xs uppercase tracking-widest shrink-0">
                    {review.service}
                  </span>
                </div>

                {/* Review text */}
                <p className="text-white text-lg sm:text-xl font-light leading-relaxed mb-8">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-silver-500" aria-hidden="true" />
                  <div>
                    <p className="text-white text-sm font-semibold">{review.name}</p>
                    <p className="text-zinc-500 text-xs">
                      {review.location} &middot; {review.date}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          {/* Prev */}
          <button
            onClick={prev}
            className="w-11 h-11 border border-zinc-700 flex items-center justify-center text-white hover:border-silver-500 hover:text-silver-500 transition-colors"
            aria-label="Previous review"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Review navigation">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-silver-500 w-6' : 'bg-zinc-700 w-1.5 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-11 h-11 border border-zinc-700 flex items-center justify-center text-white hover:border-silver-500 hover:text-silver-500 transition-colors"
            aria-label="Next review"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Google review CTA */}
        <div className="mt-14 text-center">
          <p className="text-zinc-500 text-sm mb-5">
            Visited Diego&apos;s? Help other Hobart locals find their new barber.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-zinc-700 text-white text-sm font-semibold uppercase tracking-widest px-7 py-3.5 hover:border-silver-500 hover:text-silver-500 transition-colors"
          >
            Leave a Google Review
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
