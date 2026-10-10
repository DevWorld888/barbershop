import Reveal from '@/components/animations/Reveal'
import BookingTrigger from '@/components/ui/BookingTrigger'
import { businessInfo, serviceAreas } from '@/lib/data'

export default function ServiceAreas() {
  return (
    <section id="areas" aria-labelledby="areas-heading" className="bg-black py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <Reveal>
          <div className="mb-14 sm:mb-16 max-w-3xl">
            <p className="text-silver-500 text-xs font-medium uppercase tracking-[0.3em] mb-4">
              Areas We Serve
            </p>
            <h2
              id="areas-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              Your Barber in Hobart &amp; Surrounding Suburbs
            </h2>
            <div className="w-12 h-px bg-silver-500 mb-6" aria-hidden="true" />
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Mana Fade Barber Studio is based in Mount Nelson, Hobart, and welcomes clients
              from across southern Tasmania. Whether you need a fade haircut, a men&apos;s
              haircut or a beard trim, we&apos;re a short drive from these Hobart suburbs.
            </p>
          </div>
        </Reveal>

        {/* Suburb grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceAreas.map((area, i) => (
            <li key={area.name}>
              <Reveal delay={i * 0.06} className="h-full">
                <article className="h-full border border-zinc-800 bg-zinc-900/40 p-7 transition-colors hover:border-silver-700">
                  <div className="flex items-center gap-3 mb-3 text-silver-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    <h3 className="text-white font-bold text-base sm:text-lg">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Reveal>
          <div className="mt-14 flex flex-col sm:flex-row gap-4 sm:items-center">
            <BookingTrigger>Book Your Cut</BookingTrigger>
            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-zinc-600 text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 hover:border-silver-500 hover:text-silver-500 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
