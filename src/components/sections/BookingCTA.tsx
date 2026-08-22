import Reveal from '@/components/animations/Reveal'
import BookingTrigger from '@/components/ui/BookingTrigger'

export default function BookingCTA() {
  return (
    <section className="relative bg-silver-500 py-24 sm:py-32 overflow-hidden">
      <Reveal>
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">

          <p className="text-black/50 text-xs font-medium uppercase tracking-[0.3em] mb-5">
            Online Booking
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight mb-6">
            Ready for a<br className="hidden sm:block" /> Fresh Cut?
          </h2>

          <p className="text-black/65 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Book your appointment online in seconds —
            no phone calls, no waiting. Just pick a time and show up.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingTrigger variant="dark">
              Book Your Appointment
            </BookingTrigger>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-black/25 text-black text-sm font-semibold uppercase tracking-widest px-10 py-4 hover:border-black/60 transition-colors"
            >
              View Services
            </a>
          </div>

          <p className="mt-10 text-black/40 text-xs uppercase tracking-widest">
            35-37 Olinda Grove, Mount Nelson TAS 7007 &middot; Book online 24/7
          </p>

        </div>
      </Reveal>

      {/* Wave divider — fills with Location section bg colour so the edge is curved */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20 block"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C360,120 1080,-40 1440,40 L1440,120 L0,120 Z" fill="#18181b" />
        </svg>
      </div>
    </section>
  )
}
