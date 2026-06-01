
// Replace with the real Fresha URL before launch
export const FRESHA_BOOKING_URL = 'https://app.squareup.com/appointments/book/e3yygld17ou9he/L2WRBW1XGTBJ4/start'

export const BOOKING_URL = FRESHA_BOOKING_URL

export const WHATSAPP_NUMBER = '61412053218'

export const WHATSAPP_MESSAGE =
  "Hi 👋 Thanks for contacting Mana Fade Studio.\n\n" +
  "For the fastest experience, please book your appointment online through our website using the 'Book Appointment' button.\n\n" +
  "If you have a question before booking, we'll be happy to help."

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// Update all fields below with real business details before launch
export const businessInfo = {
  address: 'Olinda Grove, Mount Nelson TAS 7007, Australia',
  phone: '+61 400 000 000',
  email: 'hello@manafadestudio.com.au',
  instagram: 'https://instagram.com/manafadestudio',
  googleMapsUrl: 'https://maps.google.com/?q=Mount+Nelson+Hobart+Tasmania+Australia',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Mount+Nelson+Hobart+Tasmania+Australia&t=&z=15&ie=UTF8&iwloc=B&output=embed',
}

export interface OpeningHour {
  days: string
  hours: string
}

export const openingHours: OpeningHour[] = [
  { days: 'Mon – Tue', hours: '8:00 AM – 10:00 PM' },
  { days: 'Wed – Sat', hours: '5:50 PM – 10:00 PM' },
  { days: 'Sunday',    hours: '3:50 PM – 10:00 PM' },
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
    text: 'Got the cleanest fade I have had in years. The attention to detail is next level — I drove all the way from Sandy Bay and it was absolutely worth it.',
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
    text: 'Brought my son for his first proper haircut. The barber was patient, relaxed him straight away, and the result was perfect. We are regulars now.',
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
    text: 'Finally a barber in Hobart who actually knows how to do a skin fade properly. Mana Fade is the real deal — professional, precise, and easy to talk to.',
    date: 'December 2023',
  },
]

export interface Service {
  title: string
  duration: string
  priceLabel?: string
  price: string
  image: string
  /** CSS object-position value to control focal crop inside the card frame */
  imagePosition?: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/skin-fade-barber-hobart.webp',
    alt: "Skin fade haircut at Mana Fade Studio Hobart",
  },
  {
    src: '/gallery/haircut-barber-hobart.webp',
    alt: 'Classic haircut and style — barbershop Hobart Tasmania',
  },
  {
    src: '/gallery/haircut-lines-barber-hobart.webp',
    alt: "Haircut with lines at Mana Fade Studio Hobart",
  },
  {
    src: '/gallery/modern-curly-fade-haircut-hobart.webp',
    alt: "Modern curly fade haircut at Mana Fade Studio Hobart",
  },
  {
    src: '/gallery/mens-beard-trim-fade-hobart.webp',
    alt: "Men's beard trim and fade at Mana Fade Studio Hobart",
  },
  {
    src: '/gallery/curly-skin-fade-barber-hobart.webp',
    alt: "Curly skin fade haircut at Mana Fade Studio Hobart",
  },
]

export const services: Service[] = [
  {
    title: 'Fade Haircut',
    duration: '30 min',
    priceLabel: 'From',
    price: '$40',
    image: '/gallery/skin-fade-barber-hobart.webp',
    imagePosition: '50% 35%',
  },
  {
    title: 'Men Regular Hair Cut',
    duration: '25 min',
    priceLabel: 'Between',
    price: '$35',
    image: '/gallery/haircut-barber-hobart.webp',
    imagePosition: '50% 20%',
  },
  {
    title: 'Skinfade and Beard Combo',
    duration: '30 min',
    price: '$55',
    image: '/gallery/mens-beard-trim-fade-hobart.webp',
    imagePosition: 'center',
  },
  {
    title: 'Regular Haircut and Beard Trim',
    duration: '30 min',
    price: '$50',
    image: '/services/regular-haircut-beard.webp',
    imagePosition: '50% 20%',
  },
  {
    title: 'Buzz Cut and Beard Combo',
    duration: '25 min',
    price: '$38',
    image: '/services/buzzcut-beard.webp',
    imagePosition: 'center',
  },
  {
    title: 'Buzz Cut',
    duration: '15 min',
    priceLabel: 'From',
    price: '$15',
    image: '/services/buzzcut.webp',
    imagePosition: '50% 15%',
  },
  {
    title: 'Regular Beard Trim and Line Up',
    duration: '30 min',
    price: '$25',
    image: '/services/beard-trim.webp',
    imagePosition: 'center',
  },
  {
    title: 'Long Beard Trim',
    duration: '30 min',
    price: '$28',
    image: '/services/long-beard.webp',
    imagePosition: 'center',
  },
  {
    title: 'Wet Shave (Beard or Head)',
    duration: '30 min',
    price: '$25',
    image: '/services/wet-shave.webp',
    imagePosition: 'center',
  },
  {
    title: 'Scissor Haircut',
    duration: '25 min',
    price: '$35',
    image: '/gallery/haircut-lines-barber-hobart.webp',
    imagePosition: '50% 25%',
  },
  {
    title: 'Restyling',
    duration: '30 min',
    price: '$40',
    image: '/gallery/modern-curly-fade-haircut-hobart.webp',
    imagePosition: 'center',
  },
  {
    title: 'Senior Haircut',
    duration: '30 min',
    price: '$30',
    image: '/services/senior-haircut.webp',
    imagePosition: '50% 15%',
  },
  {
    title: 'Kids Fade Haircut (Under Age Of 9)',
    duration: '25 min',
    price: '$38',
    image: '/services/kids-fade.webp',
    imagePosition: '50% 20%',
  },
  {
    title: 'Kids Regular Haircut (Under Age of 9)',
    duration: '25 min',
    price: '$35',
    image: '/services/kids-regular.webp',
    imagePosition: '50% 20%',
  },
  {
    title: 'Waxing (nose, ear, eyebrows, cheek) each',
    duration: '5 min',
    priceLabel: 'From',
    price: '$5',
    image: '/services/waxing.webp',
    imagePosition: 'center',
  },
]
