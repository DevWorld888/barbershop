import ServiceCard from '@/components/ui/ServiceCard'
import BookingTrigger from '@/components/ui/BookingTrigger'
import { services } from '@/lib/data'

export default function Services() {
  return (
    <section id="services" className="bg-black py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mb-14 sm:mb-16">
          <p className="text-gold-500 text-xs font-medium uppercase tracking-[0.3em] mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Our Services
          </h2>
          <div className="w-12 h-px bg-gold-500" aria-hidden="true" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-14 flex justify-center">
          <BookingTrigger variant="primary">
            Book Your Appointment
          </BookingTrigger>
        </div>
      </div>
    </section>
  )
}
