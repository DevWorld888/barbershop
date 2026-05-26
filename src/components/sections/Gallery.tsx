import Image from 'next/image'
import Reveal from '@/components/animations/Reveal'
import { galleryImages } from '@/lib/data'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <Reveal>
          <div className="mb-14 sm:mb-16">
            <p className="text-gold-500 text-xs font-medium uppercase tracking-[0.3em] mb-4">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              The Gallery
            </h2>
            <div className="w-12 h-px bg-gold-500" aria-hidden="true" />
          </div>
        </Reveal>

        {/* Photo grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((image, i) => (
            <Reveal
              key={image.src}
              delay={i * 0.07}
              className="relative aspect-square overflow-hidden bg-zinc-900"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </Reveal>
          ))}
        </div>

        {/* Instagram CTA */}
        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 text-sm uppercase tracking-widest hover:text-gold-500 transition-colors"
            >
              Follow us on Instagram &rarr;
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
