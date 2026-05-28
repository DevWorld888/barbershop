import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'MANA FADE STUDIO | Premium Barber Shop in Hobart',
  description:
    'Premium barber studio in Hobart specialising in fades, beard trims and modern men\'s grooming.',
  openGraph: {
    title: 'MANA FADE STUDIO | Premium Barber Shop in Hobart',
    description:
      'Premium barber studio in Hobart specialising in fades, beard trims and modern men\'s grooming.',
    type: 'website',
    locale: 'en_AU',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BarberShop',
  name: 'Mana Fade Studio',
  description: 'Premium barber studio in Hobart, Tasmania specialising in fades, beard trims and modern men\'s grooming.',
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
