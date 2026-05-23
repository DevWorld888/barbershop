
// Replace with the real Fresha URL before launch
export const FRESHA_BOOKING_URL = 'https://www.fresha.com/book-now/diegosbarbershop'

export const BOOKING_URL = FRESHA_BOOKING_URL

export const WHATSAPP_NUMBER = '61412053218'

export const WHATSAPP_MESSAGE =
  "Hi 👋 Thanks for contacting Diego's Barbershop.\n\n" +
  "For the fastest experience, please book your appointment online through our website using the 'Book Appointment' button.\n\n" +
  "If you have a question before booking, we'll be happy to help."

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// Update all fields below with real business details before launch
export const businessInfo = {
  address: 'Hobart CBD, TAS 7000, Australia',
  phone: '+61 400 000 000',
  email: 'hello@diegosbarbershop.com.au',
  instagram: 'https://instagram.com/diegosbarbershop',
  googleMapsUrl: 'https://maps.google.com/?q=Hobart+CBD+Tasmania+Australia',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Hobart+CBD+Tasmania+Australia&t=&z=15&ie=UTF8&iwloc=B&output=embed',
}

export interface OpeningHour {
  days: string
  hours: string
}

export const openingHours: OpeningHour[] = [
  { days: 'Mon – Wed', hours: '9:00 AM – 6:00 PM' },
  { days: 'Thu – Fri', hours: '9:00 AM – 7:00 PM' },
  { days: 'Saturday',  hours: '8:00 AM – 5:00 PM' },
  { days: 'Sunday',    hours: '10:00 AM – 4:00 PM' },
]

// Replace these with real client testimonials before launch
export interface Review {
  id: string
  name: string
  location: string
  rating: number
  service: string
  text: string
  date: string
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'James R.',
    location: 'Sandy Bay',
    rating: 5,
    service: 'Skin Fade',
    text: 'Diego gave me the cleanest fade I have had in years. The attention to detail is next level — I drove all the way from Sandy Bay and it was absolutely worth it.',
    date: 'April 2024',
  },
  {
    id: 'r2',
    name: 'Michael T.',
    location: 'Hobart CBD',
    rating: 5,
    service: 'Beard Trim & Shape',
    text: 'Best beard trim I have ever had. Walked in looking rough, walked out looking sharp. Will be back every few weeks without a doubt.',
    date: 'March 2024',
  },
  {
    id: 'r3',
    name: 'Tom K.',
    location: 'Battery Point',
    rating: 5,
    service: 'Kids Haircut',
    text: 'Brought my son for his first proper haircut. Diego was patient, relaxed him straight away, and the result was perfect. We are regulars now.',
    date: 'February 2024',
  },
  {
    id: 'r4',
    name: 'Lucas B.',
    location: 'North Hobart',
    rating: 5,
    service: 'Hair & Beard Combo',
    text: 'Amazing value on the combo. Hair and beard both done to perfection in one session. Great atmosphere in the shop too — highly recommend.',
    date: 'January 2024',
  },
  {
    id: 'r5',
    name: 'Aaron M.',
    location: 'Glenorchy',
    rating: 5,
    service: 'Skin Fade',
    text: 'Finally a barber in Hobart who actually knows how to do a skin fade properly. Diego is the real deal — professional, precise, and easy to talk to.',
    date: 'December 2023',
  },
]

export interface Service {
  id: string
  index: string
  name: string
  description: string
  price: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/cut-1.jpg',
    alt: "Skin fade haircut at Diego's Barbershop Hobart",
  },
  {
    src: '/gallery/cut-2.jpg',
    alt: 'Classic haircut and style — barbershop Hobart Tasmania',
  },
  {
    src: '/gallery/cut-3.jpg',
    alt: "Beard trim and shape at Diego's Barbershop Hobart",
  },
  {
    src: '/gallery/cut-4.jpg',
    alt: 'Hair and beard combo — premium barber Hobart',
  },
  {
    src: '/gallery/cut-5.jpg',
    alt: 'Modern skin fade haircut Hobart Tasmania',
  },
  {
    src: '/gallery/cut-6.jpg',
    alt: "Premium grooming experience at Diego's Barbershop Hobart",
  },
]

export const services: Service[] = [
  {
    id: 'haircut',
    index: '01',
    name: 'Haircut & Style',
    description:
      'Classic and modern cuts shaped to your face and style. Includes wash and finish.',
    price: 'From $45',
  },
  {
    id: 'fade',
    index: '02',
    name: 'Skin Fade',
    description:
      "Razor-sharp fades from zero to any length — a signature specialty at Diego's.",
    price: 'From $45',
  },
  {
    id: 'beard',
    index: '03',
    name: 'Beard Trim & Shape',
    description:
      'Expert beard sculpting and grooming to keep your look clean and defined.',
    price: 'From $25',
  },
  {
    id: 'combo',
    index: '04',
    name: 'Hair & Beard Combo',
    description:
      'The full treatment — a fresh cut plus precision beard grooming in one session.',
    price: 'From $65',
  },
  {
    id: 'kids',
    index: '05',
    name: 'Kids Haircut',
    description:
      'Sharp, fun cuts for boys up to 12 years old. Fast, friendly and stress-free.',
    price: 'From $30',
  },
  {
    id: 'shave',
    index: '06',
    name: 'Hot Towel Shave',
    description:
      'A traditional straight-razor shave with hot towel finish and soothing aftercare.',
    price: 'From $40',
  },
]
