import { BookingProvider } from '@/context/booking'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import CharityPromo from '@/components/sections/CharityPromo'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/sections/Reviews'
import BookingCTA from '@/components/sections/BookingCTA'
import LocationContact from '@/components/sections/LocationContact'
import ServiceAreas from '@/components/sections/ServiceAreas'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import BookNowButton from '@/components/ui/BookNowButton'
import PromotionSection from '@/components/promotions/PromotionSection'
import PromotionAnnouncement from '@/components/promotions/PromotionAnnouncement'
import { getActivePromotion } from '@/lib/promotions'

// Re-render hourly so promotions switch on/off by date without a redeploy
export const revalidate = 3600

export default function HomePage() {
  const promotion = getActivePromotion()

  return (
    <BookingProvider>
      <Navbar announcement={promotion && <PromotionAnnouncement promotion={promotion} />} />
      <main>
        <Hero />
        {promotion && <PromotionSection promotion={promotion} />}
        <CharityPromo />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Reviews />
        <BookingCTA />
        <ServiceAreas />
        <LocationContact />
      </main>
      <Footer />
      <BookNowButton />
      <WhatsAppButton />
    </BookingProvider>
  )
}
