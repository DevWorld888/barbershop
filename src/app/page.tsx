import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import SpecialOffer from '@/components/sections/SpecialOffer'
import Gallery from '@/components/sections/Gallery'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Reviews from '@/components/sections/Reviews'
import BookingCTA from '@/components/sections/BookingCTA'
import LocationContact from '@/components/sections/LocationContact'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SpecialOffer />
        <Gallery />
        <WhyChooseUs />
        <Reviews />
        <BookingCTA />
        <LocationContact />
      </main>
      <Footer />
    </>
  )
}
