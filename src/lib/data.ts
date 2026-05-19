export const BOOKING_URL = 'https://booksy.com'

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
