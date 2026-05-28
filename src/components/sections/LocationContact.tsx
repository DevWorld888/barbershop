import Reveal from '@/components/animations/Reveal'
import { businessInfo, openingHours } from '@/lib/data'

interface ContactItemProps {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}

function ContactItem({ icon, label, children }: ContactItemProps) {
  return (
    <div className="flex gap-5">
      <div className="shrink-0 mt-0.5 text-gold-500">{icon}</div>
      <div>
        <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">{label}</p>
        {children}
      </div>
    </div>
  )
}

export default function LocationContact() {
  return (
    <section id="contact" className="bg-zinc-900 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <Reveal>
          <div className="mb-14 sm:mb-16">
            <p className="text-gold-500 text-xs font-medium uppercase tracking-[0.3em] mb-4">
              Location & Contact
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Find Us
            </h2>
            <div className="w-12 h-px bg-gold-500" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16">

          {/* Left: contact info + hours */}
          <Reveal>
            <div className="flex flex-col gap-10">

              {/* Contact details */}
              <address className="not-italic flex flex-col gap-7">
                <ContactItem
                  label="Address"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  }
                >
                  <p className="text-white text-sm">{businessInfo.address}</p>
                  <a
                    href={businessInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-500 text-xs uppercase tracking-widest hover:text-gold-400 transition-colors mt-1.5 inline-block"
                  >
                    Get Directions &rarr;
                  </a>
                </ContactItem>

                <ContactItem
                  label="Phone"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  }
                >
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-white text-sm hover:text-gold-500 transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                </ContactItem>

                <ContactItem
                  label="Email"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  }
                >
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-white text-sm hover:text-gold-500 transition-colors"
                  >
                    {businessInfo.email}
                  </a>
                </ContactItem>

                <ContactItem
                  label="Instagram"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  }
                >
                  <a
                    href={businessInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:text-gold-500 transition-colors"
                  >
                    @manafadestudio
                  </a>
                </ContactItem>
              </address>

              {/* Opening hours */}
              <div>
                <h3 className="text-white font-bold text-base uppercase tracking-widest mb-5">
                  Opening Hours
                </h3>
                <div className="flex flex-col">
                  {openingHours.map(({ days, hours }) => (
                    <div
                      key={days}
                      className="flex justify-between items-center py-3 border-b border-zinc-800 last:border-0"
                    >
                      <span className="text-zinc-400 text-sm">{days}</span>
                      <span className="text-white text-sm font-medium tabular-nums">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>

          {/* Right: map embed */}
          <Reveal delay={0.15}>
            <div className="h-72 sm:h-96 lg:h-full min-h-[360px] overflow-hidden">
              <iframe
                src={businessInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'grayscale(1) invert(0.88) contrast(0.88) brightness(0.95)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mana Fade Studio — Hobart CBD, Tasmania"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
