import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
// import { Geist, Cinzel } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  name: 'Mana Fade Barber Studio',
  description:
    "Premium barber shop in Mount Nelson, Hobart Tasmania specialising in skin fades, beard trims and modern men's grooming.",
  url: 'https://www.manafadebarbershop.com.au',
  image:
  'https://www.manafadebarbershop.com.au/hero/premium-barber-hobart-tasmania-hobart.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '35-37 Olinda Grove',
    addressLocality: 'Mount Nelson',
    addressRegion: 'TAS',
    postalCode: '7007',
    addressCountry: 'AU',
  },
  telephone: '+61402573920',
  email: 'manafadestudio@gmail.com',
  priceRange: '$$',
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
  sameAs: [
  'https://www.instagram.com/manahomebasestudio/',
  'https://www.facebook.com/share/1DqmmuotCJ/',
],
  areaServed: [
    'Mount Nelson',
    'Sandy Bay',
    'North Hobart',
    'South Hobart',
    'Kingston',
    'Hobart',
    'Taroona',
    'South Hobart',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full bg-black text-white antialiased"><script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>{children}</body>
      <GoogleTagManager gtmId="GTM-KQNFLR78" />
    </html>
  )
}
