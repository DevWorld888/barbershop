
// Replace with the real Fresha URL before launch
export const FRESHA_BOOKING_URL = 'https://bookeo.com/manafadehomestudio'

export const BOOKING_URL = FRESHA_BOOKING_URL

export const WHATSAPP_NUMBER = '61402573920'

export const WHATSAPP_MESSAGE =
  "Hi 👋 Thanks for contacting Mana Fade Studio.\n\n" +
  "For the fastest experience, please book your appointment online through our website using the 'Book Appointment' button.\n\n" +
  "If you have a question before booking, we'll be happy to help."

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// Update all fields below with real business details before launch
export const businessInfo = {
  address: '35-37 Olinda Grove, Mount Nelson TAS 7007',
  phone: '+61 402 573 920',
  email: 'manafadestudio@gmail.com',
  instagram: 'https://www.instagram.com/diegosbarberhobart?igsh=MTM4ZXJ4Y2NyeTc0dQ==',
  facebook: 'https://www.facebook.com/share/1DqmmuotCJ/',
  googleMapsUrl: 'https://maps.app.goo.gl/8QMhgkoTPSY4KeYRA',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.850175252977!2d147.32046250000002!3d-42.91820069999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6dd8b144650927%3A0xf1193aee478b5310!2s35-37%20Olinda%20Grove%2C%20Mount%20Nelson%20TAS%207007!5e0!3m2!1ses-419!2sau!4v1787397006663!5m2!1ses-419!2sau',
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
    name: 'David Iza',
    location: 'Hobart',
    rating: 5,
    service: 'Skin Fade',
    text: 'The best place I’ve found in Hobart so far. Daniel is highly professional and provides excellent service. Definitely recommended!',
    date: 'september 2026',
  },
  {
    id: 'r2',
    name: 'Augusto Caceres Suarez.',
    location: 'Hobart CBD',
    rating: 5,
    service: 'Skin Fade',
    text: 'I’ve had a great experience at Mana Fade Studio. The barber is professional, friendly and really pays attention to detail. I’m always happy with my haircut and fade. If you’re looking for a good barber in Hobart, especially around Mount Nelson, I definitely recommend Mana Fade Studio. Great service, relaxed atmosphere and quality cuts. I will definitely be coming back!',
    date: 'september 2026',
  },
  {
    id: 'r3',
    name: 'Margin Driving',
    location: 'Hobart',
    rating: 5,
    service: 'Skin Fade',
    text: 'Very good cut at a very good price',
    date: 'september 2026',
  },  
  {
    id: 'r4',
    name: 'Anup Khadge.',
    location: 'North Hobart',
    rating: 5,
    service: 'fade cut & Beard trim',
    text: 'Diego the barber, has got some style and skill on his fingers, definitely does his job with passion and I highly recommend him.Also, his recent act of donating 3 days of his work pay to the victim of the earthquake in Colombia has earned my respect 🫡Thank you Diego for the haircut, keep doing what you do ',
    date: 'september 2026',
  },
  {
    id: 'r5',
    name: 'Umesh',
    location: 'Hobart',
    rating: 5,
    service: 'Skin Fade',
    text: 'Great service and great atmosphere. The place is clean and stylish, and the haircut is always on point. Friendly and professional service every time. Definitely recommend.',
    date: 'september 2026',
  },
  {
    id: 'r6',
    name: 'Mauro Pintado',
    location: 'Hobart',
    rating: 5,
    service: 'Beard maintenance, Fade cut',
    text: 'Great service from Diego. He’s a really nice guy and very professional. I’ve had my hair cut by him several times now and I’ve always been happy with the result. Definitely recommend!',
    date: 'september 2026',
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
    src: '/gallery/haircut-lines-barber-hobart-.webp',
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
    // priceLabel: 'From',
    price: '$40',
    image: '/gallery/skin-fade-barber-hobart.webp',
    imagePosition: '50% 35%',
  },
  {
    title: 'Men Regular Hair Cut',
    duration: '25 min',
    // priceLabel: 'Between',
    price: '$35',
    image: '/gallery/haircut-barber-hobart.webp',
    imagePosition: '50% 20%',
  },
  {
    title: 'Skinfade and Beard Combo',
    duration: '50 min',
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
    duration: '40 min',
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
    title: 'Scissor Haircut',
    duration: '25 min',
    price: '$35',
    image: '/gallery/haircut-lines-barber-hobart-.webp',
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
    price: '$20',
    image: '/services/senior-haircut.webp',
    imagePosition: '50% 15%',
  },
  {
    title: 'Kids Fade Haircut (Under Age Of 9)',
    duration: '30 min',
    price: '$35',
    image: '/services/kids-fade.webp',
    imagePosition: '50% 20%',
  },
  {
    title: 'Kids Regular Haircut (Under Age of 9)',
    duration: '30 min',
    price: '$30',
    image: '/services/kids-regular.webp',
    imagePosition: '50% 20%',
  },
 
]
