import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Premium Barber in Hobart | Diego's Barbershop",
  description:
    "Premium Colombian barbershop in Hobart, Tasmania. Sharp fades, beard trims & modern grooming. Book online today.",
  openGraph: {
    title: "Premium Barber in Hobart | Diego's Barbershop",
    description:
      "Premium Colombian barbershop in Hobart, Tasmania. Sharp fades, beard trims & modern grooming.",
    type: 'website',
    locale: 'en_AU',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  name: "Diego's Barbershop",
  description: 'Premium Colombian barbershop in Hobart, Tasmania.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hobart',
    addressRegion: 'TAS',
    addressCountry: 'AU',
  },
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" className={`${geist.variable} h-full`}>
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
