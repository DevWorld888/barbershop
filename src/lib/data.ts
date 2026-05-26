
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
  title: string
  duration: string
  priceLabel?: string
  price: string
  image: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/skin-fade-barber-hobart.webp',
    alt: "Skin fade haircut at Diego's Barbershop Hobart",
  },
  {
    src: '/gallery/haircut-barber-hobart.webp',
    alt: 'Classic haircut and style — barbershop Hobart Tasmania',
  },
  {
    src: '/gallery/haircut-lines-barber-hobart.webp',
    alt: "Haircut with lines at Diego's Barbershop Hobart",
  },
  {
    src: '/gallery/modern-curly-fade-haircut-hobart.webp',
    alt: "Modern curly fade haircut at Diego's Barbershop Hobart",
  },
  {
    src: '/gallery/mens-beard-trim-fade-hobart.webp',
    alt: "Men's beard trim and fade at Diego's Barbershop Hobart",
  },
  {
    src: '/gallery/curly-skin-fade-barber-hobart.webp',
    alt: "Curly skin fade haircut at Diego's Barbershop Hobart",
  },
]

export const services: Service[] = [
  {
    title: 'Fade Haircut',
    duration: '30 min',
    priceLabel: 'From',
    price: '$40',
    image: '/services/fade-haircut.webp',
  },
  {
    title: 'Men Regular Hair Cut',
    duration: '25 min',
    priceLabel: 'Between',
    price: '$35',
    image: '/services/regular-haircut.webp',
  },
  {
    title: 'Skinfade and Beard Combo',
    duration: '30 min',
    price: '$55',
    image: '/services/skinfade-beard.webp',
  },
  {
    title: 'Regular Haircut and Beard Trim',
    duration: '30 min',
    price: '$50',
    image: '/services/regular-haircut-beard.webp',
  },
  {
    title: 'Buzz Cut and Beard Combo',
    duration: '25 min',
    price: '$38',
    image: '/services/buzzcut-beard.webp',
  },
  {
    title: 'Buzz Cut',
    duration: '15 min',
    priceLabel: 'From',
    price: '$15',
    image: '/services/buzzcut.webp',
  },
  {
    title: 'Regular Beard Trim and Line Up',
    duration: '30 min',
    price: '$25',
    image: '/services/beard-trim.webp',
  },
  {
    title: 'Long Beard Trim',
    duration: '30 min',
    price: '$28',
    image: '/services/long-beard.webp',
  },
  {
    title: 'Wet Shave (Beard or Head)',
    duration: '30 min',
    price: '$25',
    image: '/services/wet-shave.webp',
  },
  {
    title: 'Scissor Haircut',
    duration: '25 min',
    price: '$35',
    image: '/services/scissor-haircut.webp',
  },
  {
    title: 'Restyling',
    duration: '30 min',
    price: '$40',
    image: '/services/restyling.webp',
  },
  {
    title: 'Senior Haircut',
    duration: '30 min',
    price: '$30',
    image: '/services/senior-haircut.webp',
  },
  {
    title: 'Kids Fade Haircut (Under Age Of 9)',
    duration: '25 min',
    price: '$38',
    image: '/services/kids-fade.webp',
  },
  {
    title: 'Kids Regular Haircut (Under Age of 9)',
    duration: '25 min',
    price: '$35',
    image: '/services/kids-regular.webp',
  },
  {
    title: 'Waxing (nose, ear, eyebrows, cheek) each',
    duration: '5 min',
    priceLabel: 'From',
    price: '$5',
    image: '/services/waxing.webp',
  },
]
