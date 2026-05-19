import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import SpecialOffer from '@/components/sections/SpecialOffer'
import Gallery from '@/components/sections/Gallery'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SpecialOffer />
        <Gallery />
      </main>
    </>
  )
}
