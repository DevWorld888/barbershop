import type { Metadata } from 'next'
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
  title: 'Mana Fade Studio | Premium Barber Shop in Mount Nelson Hobart Tasmania',
  description:
    "Premium barber shop in Mount Nelson, Hobart Tasmania specialising in fades, skin fades, beard trims and modern men's grooming. Book online today.",
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
    title: 'Mana Fade Studio | Premium Barber Shop in Mount Nelson Hobart Tasmania',
    description:
      "Premium barber shop in Mount Nelson, Hobart Tasmania specialising in fades, skin fades, beard trims and modern men's grooming.",
    type: 'website',
    locale: 'en_AU',
    siteName: 'Mana Fade Studio',
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
    title: 'Mana Fade Studio | Premium Barber Shop in Hobart Tasmania',
    description:
      "Premium barber shop in Mount Nelson, Hobart. Skin fades, beard trims and modern men's grooming.",
    images: ['/hero/premium-barber-hobart-tasmania-hobart.webp'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  name: 'Mana Fade Studio',
  description:
    "Premium barber shop in Mount Nelson, Hobart Tasmania specialising in skin fades, beard trims and modern men's grooming.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Olinda Grove',
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
      opens: '08:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '17:50',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '15:50',
      closes: '22:00',
    },
  ],
  areaServed: [
    'Mount Nelson',
    'Sandy Bay',
    'North Hobart',
    'South Hobart',
    'Kingston',
    'Hobart',
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
      <body className="min-h-full bg-black text-white antialiased">{children}</body>
    </html>
  )
}
