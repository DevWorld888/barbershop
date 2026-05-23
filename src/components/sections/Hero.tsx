import Image from 'next/image'
import Button from '@/components/ui/Button'
import BookingTrigger from '@/components/ui/BookingTrigger'


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background photo */}
      <Image
        src="/hero/b.png"
        alt="Diego's Barbershop – professional haircut in Hobart, Tasmania"
        fill
        priority
        className="object-cover object-center opacity-40"
        sizes="100vw"
      />

      {/* Gradient overlay — keeps text readable on the left */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"
        aria-hidden="true"
      />

      {/* Gold vertical accent bar */}
      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gold-500" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 w-full">
        {/* Location eyebrow */}
        <p className="text-gold-500 text-xs font-medium uppercase tracking-[0.3em] mb-6">
          Hobart, Tasmania
        </p>

        {/* H1 — only one per page */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-2xl">
          Premium Barber
          <br />
          in Hobart
        </h1>

        {/* Subheading */}
        <p className="text-zinc-400 text-lg sm:text-xl max-w-xl leading-relaxed mb-10">
          Sharp fades, expert beard trims and modern grooming — by Diego,
          Hobart&apos;s trusted Colombian barber.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <BookingTrigger variant="primary">
            Book Now
          </BookingTrigger>
          <Button href="#services" variant="outline">
            Our Services
          </Button>
        </div>

        {/* Location indicator */}
        <div className="mt-12 flex items-center gap-2 text-zinc-500 text-sm">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span>Hobart CBD, Tasmania, Australia</span>
        </div>
      </div>
    </section>
  )
}
