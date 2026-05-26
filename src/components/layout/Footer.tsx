import Link from 'next/link'
import Reveal from '@/components/animations/Reveal'
import { businessInfo, FRESHA_BOOKING_URL } from '@/lib/data'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Reviews',  href: '#reviews' },
  { label: 'Contact',  href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Brand */}
            <div>
              <Link href="/" className="flex flex-col leading-none mb-5">
                <span className="text-white font-bold text-xl uppercase tracking-wider">
                  Diego&apos;s
                </span>
                <span className="text-gold-500 text-[10px] uppercase tracking-[0.25em]">
                  Barbershop
                </span>
              </Link>
              <p className="text-zinc-400 text-sm leading-relaxed mb-7 max-w-xs">
                Premium Colombian barbering in the heart of Hobart, Tasmania.
                Sharp fades, expert beard trims, and a premium experience every visit.
              </p>
              <a
                href={FRESHA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gold-500 text-black hover:bg-gold-400 text-xs px-6 py-3 font-semibold uppercase tracking-widest transition-colors"
              >
                Book Now
              </a>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3.5" role="list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-zinc-400 text-sm hover:text-gold-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
                Contact
              </h3>
              <ul className="flex flex-col gap-3.5" role="list">
                <li className="text-zinc-400 text-sm">{businessInfo.address}</li>
                <li>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-zinc-400 text-sm hover:text-white transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-zinc-400 text-sm hover:text-white transition-colors"
                  >
                    {businessInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={businessInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 text-sm hover:text-gold-500 transition-colors"
                  >
                    @diegosbarbershop
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </Reveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} Diego&apos;s Barbershop. All rights reserved.
          </p>
          <a
            href="https://www.iaugustodev.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 text-xs hover:text-zinc-400 transition-colors"
          >
            Designed &amp; built by iaugustodev
          </a>
        </div>
      </div>

    </footer>
  )
}
