import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BookingProvider } from '@/context/booking'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Reveal from '@/components/animations/Reveal'
import BookingTrigger from '@/components/ui/BookingTrigger'
import ServiceCard from '@/components/ui/ServiceCard'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/sections/Reviews'
import BookingCTA from '@/components/sections/BookingCTA'
import LocationContact from '@/components/sections/LocationContact'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import BookNowButton from '@/components/ui/BookNowButton'
import { businessInfo, services, serviceAreas } from '@/lib/data'
import { suburbPages, getSuburbPage, getSuburbPageByName } from '@/lib/suburbs'

const SITE_URL = 'https://www.manafadebarbershop.com.au'
const OG_IMAGE = '/hero/premium-barber-hobart-tasmania-hobart.webp'

// Only suburbs defined in src/lib/suburbs.ts are valid; anything else 404s
export const dynamicParams = false

export function generateStaticParams() {
  return suburbPages.map((page) => ({ suburb: page.slug }))
}

export async function generateMetadata(props: PageProps<'/barber/[suburb]'>): Promise<Metadata> {
  const { suburb } = await props.params
  const page = getSuburbPage(suburb)
  if (!page) return {}

  const path = `/barber/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: 'website',
      url: path,
      locale: 'en_AU',
      siteName: 'Mana Fade Barber Studio',
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `Mana Fade Barber Studio — barber near ${page.name}, Hobart`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: [OG_IMAGE],
    },
  }
}

export default async function SuburbPage(props: PageProps<'/barber/[suburb]'>) {
  const { suburb } = await props.params
  const page = getSuburbPage(suburb)
  if (!page) notFound()

  const featuredServices = page.featuredServiceTitles
    .map((title) => services.find((service) => service.title === title))
    .filter((service) => service !== undefined)

  const otherAreas = serviceAreas.filter((area) => area.name !== page.name)

  // The HairSalon business schema lives in the root layout; this adds page-level context
  const pageSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: `Barber ${page.name}`,
          item: `${SITE_URL}/barber/${page.slug}`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ]

  return (
    <BookingProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema).replace(/</g, '\\u003c') }}
      />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative flex items-center min-h-[80vh] bg-black overflow-hidden">
          <Image
            src="/hero/premium-barber-hobart-tasmania1.webp"
            alt={`Barber chair and tools at Mana Fade Barber Studio, near ${page.name}, Hobart`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 pt-40 pb-24 sm:pt-48 sm:pb-32 w-full text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex justify-center gap-2 text-zinc-500 text-xs uppercase tracking-widest">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-silver-500">{page.name}</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
              {page.h1}
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-10">
              {page.heroIntro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingTrigger>Book Now</BookingTrigger>
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-zinc-600 text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 hover:border-silver-500 hover:text-silver-500 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* Intro + getting here */}
        <section aria-labelledby="local-heading" className="bg-zinc-900 py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16">
            <Reveal>
              <p className="text-silver-500 text-xs font-medium uppercase tracking-[0.3em] mb-4">
                {page.name} {page.postcode}
              </p>
              <h2
                id="local-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              >
                Your Local Barber for {page.name}
              </h2>
              <div className="w-12 h-px bg-silver-500 mb-6" aria-hidden="true" />
              <div className="flex flex-col gap-5 text-zinc-400 text-base sm:text-lg leading-relaxed">
                {page.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="text-white font-bold text-base uppercase tracking-widest mb-6">
                Getting Here from {page.name}
              </h3>
              <ul className="flex flex-col gap-5">
                {page.landmarks.map((landmark) => (
                  <li key={landmark.name} className="border border-zinc-800 bg-black/40 p-6">
                    <p className="text-white font-bold mb-2">{landmark.name}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{landmark.note}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-zinc-500 text-sm">{businessInfo.address}</p>
            </Reveal>
          </div>
        </section>

        {/* Featured services */}
        <section id="services" aria-labelledby="services-heading" className="bg-black py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <Reveal>
              <div className="mb-10 sm:mb-12">
                <p className="text-silver-500 text-xs font-medium uppercase tracking-[0.3em] mb-4">
                  Popular with {page.name} Clients
                </p>
                <h2
                  id="services-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                >
                  Fades, Haircuts &amp; Beard Trims
                </h2>
                <div className="w-12 h-px bg-silver-500" aria-hidden="true" />
              </div>
            </Reveal>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service, i) => (
                <li key={service.title}>
                  <Reveal delay={i * 0.05} className="h-full">
                    <ServiceCard service={service} />
                  </Reveal>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex justify-center">
              <Link
                href="/#services"
                className="inline-flex items-center justify-center border border-silver-500/60 text-silver-500 hover:bg-silver-500 hover:text-black text-sm px-8 py-4 font-semibold uppercase tracking-widest transition-colors duration-200"
              >
                View Full Price List
              </Link>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <Reviews />

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="bg-zinc-900 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <Reveal>
              <p className="text-silver-500 text-xs font-medium uppercase tracking-[0.3em] mb-4">
                Good to Know
              </p>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              >
                {page.name} Barber FAQs
              </h2>
              <div className="w-12 h-px bg-silver-500 mb-10" aria-hidden="true" />
            </Reveal>

            <div className="flex flex-col">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="group border-b border-zinc-800 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-white font-semibold">
                    <h3 className="text-base sm:text-lg">{faq.question}</h3>
                    <span
                      className="text-silver-500 text-xl leading-none transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-zinc-400 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <BookingCTA />

        {/* Nearby areas — internal links to other suburb pages as they're added */}
        <section aria-labelledby="nearby-heading" className="bg-black pt-16 pb-24 sm:pb-32">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2
              id="nearby-heading"
              className="text-white text-xs font-bold uppercase tracking-widest mb-6"
            >
              Also Serving Nearby
            </h2>
            <ul className="flex flex-wrap gap-3">
              {otherAreas.map((area) => {
                const areaPage = getSuburbPageByName(area.name)
                const classes =
                  'inline-block border border-zinc-800 px-4 py-2 text-sm text-zinc-400'
                return (
                  <li key={area.name}>
                    {areaPage ? (
                      <Link
                        href={`/barber/${areaPage.slug}`}
                        className={`${classes} hover:border-silver-700 hover:text-white transition-colors`}
                      >
                        {area.name}
                      </Link>
                    ) : (
                      <span className={classes}>{area.name}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <LocationContact />
      </main>
      <Footer />
      <BookNowButton />
      <WhatsAppButton />
    </BookingProvider>
  )
}
