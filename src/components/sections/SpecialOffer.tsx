import { FRESHA_BOOKING_URL } from '@/lib/data'

export default function SpecialOffer() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: text content */}
          <div>
            <p className="text-gold-500 text-xs font-medium uppercase tracking-[0.3em] mb-4">
              Limited Offer
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              New to Diego&apos;s?
            </h2>
            <div className="w-12 h-px bg-gold-500 mb-6" aria-hidden="true" />
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
              Book your first appointment and receive{' '}
              <span className="text-white font-semibold">15% off</span> any service.
              Experience premium Colombian barbering right here in Hobart.
            </p>
            <a
              href={FRESHA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold-500 text-black hover:bg-gold-400 text-sm px-8 py-4 font-semibold uppercase tracking-widest transition-colors"
            >
              Book &amp; Save Now
            </a>
            <p className="mt-5 text-zinc-600 text-xs">
              *Valid for first-time clients only. Not valid with other offers.
            </p>
          </div>

          {/* Right: offer display panel */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="border border-gold-500 px-16 py-14 text-center min-w-[260px]">
              <p className="text-gold-500 text-xs font-medium uppercase tracking-[0.3em] mb-6">
                You Save
              </p>
              <p
                className="text-white font-bold leading-none mb-4"
                style={{ fontSize: 'clamp(5rem, 12vw, 8rem)' }}
              >
                15%
              </p>
              <p className="text-zinc-400 text-sm uppercase tracking-widest">
                On Your First Visit
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
