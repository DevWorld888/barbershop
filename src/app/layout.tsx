import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
// import { Geist, Cinzel } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { BOOKING_URL, businessInfo } from '@/lib/data'

// const geist = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// export const cinzel = Cinzel({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-cinzel",
// });

const nathanScript = localFont({
  src: '../assets/fonts/Nathan Script OTF.otf',
  variable: '--font-nathan-script',
});
export const metadata: Metadata = {
  metadataBase: new URL('https://www.manafadebarbershop.com.au'),
  alternates: {
    canonical: "/",
  },
  title: 'Mana Fade Barber Studio | Premium Barber Shop in Mount Nelson Hobart Tasmania',
  description:
    "Mana Fade Barber Studio in Mount Nelson, Hobart. Skin fades, tapers and beard trims, open late until 11pm. Near Sandy Bay & UTAS. Book online 24/7.",
  keywords: [
    'barber Hobart',
    'barber shop Hobart',
    'fade haircut Hobart',
    'skin fade Hobart',
    'mens haircut Hobart',
    'beard trim Hobart',
    'Mount Nelson barber',
    'Tasmania barber shop',
  ],
  openGraph: {
    title: 'Mana Fade Barber Studio | Premium Barber Shop in Mount Nelson Hobart Tasmania',
    description:
      "Mana Fade Barber Studio in Mount Nelson, Hobart. Skin fades, tapers and beard trims, open late until 11pm. Near Sandy Bay & UTAS. Book online 24/7.",
    type: 'website',
    url: "/",
    locale: 'en_AU',
    siteName: 'Mana Fade Barber Studio',
    images: [
      {
        url: '/hero/premium-barber-hobart-tasmania-hobart.webp',
        width: 1200,
        height: 630,
        alt: 'Premium barber shop in Mount Nelson Hobart Tasmania',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mana Fade Barber Studio | Premium Barber Shop in Hobart Tasmania',
    description:
      "Mana Fade Barber Studio in Mount Nelson, Hobart. Skin fades, tapers and beard trims, open late until 11pm. Near Sandy Bay & UTAS. Book online 24/7.",
    images: ['/hero/premium-barber-hobart-tasmania-hobart.webp'],
  },
}

const SITE_URL = 'https://www.manafadebarbershop.com.au'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  '@id': `${SITE_URL}/#barbershop`,
  name: 'Mana Fade Barber Studio',
  description:
    "Premium barber shop in Mount Nelson, Hobart Tasmania specialising in skin fades, beard trims and modern men's grooming.",
  url: SITE_URL,
  image: `${SITE_URL}/hero/premium-barber-hobart-tasmania-hobart.webp`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '35-37 Olinda Grove',
    addressLocality: 'Mount Nelson',
    addressRegion: 'TAS',
    postalCode: '7007',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -42.9182007,
    longitude: 147.3204625,
  },
  hasMap: businessInfo.googleMapsUrl,
  telephone: businessInfo.phone,
  email: businessInfo.email,
  priceRange: '$20 – $55',
  currenciesAccepted: 'AUD',
  potentialAction: {
    '@type': 'ReserveAction',
    target: BOOKING_URL,
  },
  // Keep in sync with openingHours in src/lib/data.ts (shown on the page)
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday'],
      opens: '19:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '18:30',
      closes: '21:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '16:30',
      closes: '21:00',
    },
  ],
  sameAs: [businessInfo.instagram, businessInfo.facebook],
  areaServed: [
    'Mount Nelson',
    'Sandy Bay',
    'North Hobart',
    'South Hobart',
    'Kingston',
    'Hobart',
    'Taroona',
    'Tasmania',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" className={`${nathanScript.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="min-h-full bg-black text-white antialiased">{children}</body>
      <GoogleTagManager gtmId="GTM-KQNFLR78" />
    </html>
  )
}
