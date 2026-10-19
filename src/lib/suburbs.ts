// Content for suburb landing pages served at /barber/[slug].
// To add a suburb, append an entry here — the route, sitemap and
// homepage Service Areas link all pick it up automatically.

export interface SuburbFaq {
  question: string
  answer: string
}

export interface SuburbPage {
  slug: string
  /** Must match the name used in serviceAreas (src/lib/data.ts) */
  name: string
  postcode: string
  metaTitle: string
  metaDescription: string
  h1: string
  heroIntro: string
  intro: string[]
  /** Local places used in the "Getting here" section */
  landmarks: { name: string; note: string }[]
  /** Titles from `services` in src/lib/data.ts to feature on the page */
  featuredServiceTitles: string[]
  faqs: SuburbFaq[]
}

export const suburbPages: SuburbPage[] = [
  {
    slug: 'sandy-bay',
    name: 'Sandy Bay',
    postcode: '7005',
    metaTitle: 'Barber Sandy Bay Hobart | Skin Fades & Beard Trims | Mana Fade',
    metaDescription:
      'Barber near Sandy Bay & UTAS, just up the hill in Mount Nelson. Skin fades, men’s haircuts and beard trims, open late. Book online 24/7.',
    h1: 'Barber Near Sandy Bay, Hobart',
    heroIntro:
      'Skin fades, men’s haircuts and beard trims — just up the hill from Sandy Bay in Mount Nelson, with late-night appointments that fit around uni and work.',
    intro: [
      'Mana Fade Barber Studio sits on Olinda Grove in Mount Nelson, directly above Sandy Bay. For anyone living near Sandy Bay Road, Long Beach or the University of Tasmania campus, it’s a short drive up Nelson Road to a private, unhurried chair.',
      'We focus on what Sandy Bay clients ask for most: clean skin fades, tapers, classic scissor cuts and sharp beard line-ups. Every appointment is booked online, so you choose a time that suits you and walk straight in.',
      'Evening and weekend hours make it easy to fit a cut in after lectures, after work or before a night out on the waterfront.',
    ],
    landmarks: [
      {
        name: 'University of Tasmania',
        note: 'Students and staff from the Sandy Bay campus can head up Nelson Road for a fresh fade between classes or in the evening.',
      },
      {
        name: 'Sandy Bay Road',
        note: 'From the Sandy Bay shops, follow Nelson Road up the hill to Mount Nelson and Olinda Grove.',
      },
      {
        name: 'Long Beach & Wrest Point',
        note: 'Live near the foreshore? We’re a quick trip up the hill — no city parking, no waiting room.',
      },
    ],
    featuredServiceTitles: [
      'Fade Haircut',
      'Skinfade and Beard Combo',
      'Regular Hair Cut',
      'Beard Trim & Line Up',
      'Scissor Haircut',
      'Kids Fade Haircut (Under Age Of 9)',
    ],
    faqs: [
      {
        question: 'How far is Mana Fade from Sandy Bay?',
        answer:
          'The studio is at 35-37 Olinda Grove, Mount Nelson — directly above Sandy Bay. From Sandy Bay Road, take Nelson Road up the hill; it’s a short drive from the UTAS campus and the Sandy Bay shops.',
      },
      {
        question: 'Do you take appointments in the evening?',
        answer:
          'Yes. We’re open until 11pm on Mondays and Tuesdays, until 9pm Wednesday to Friday, and on Saturday and Sunday evenings. Check the hours below and book the time that suits you.',
      },
      {
        question: 'How do I book a haircut?',
        answer:
          'Book online 24/7 using the Book Now button. Pick your service and time, and you’ll get confirmation straight away — no phone calls needed.',
      },
      {
        question: 'Do you cut kids’ hair and offer pensioner pricing?',
        answer:
          'Yes. We offer kids’ fades and regular cuts for children under 9, plus a reduced price for Senior Card and Pensioner Card holders.',
      },
    ],
  },
]

export function getSuburbPage(slug: string): SuburbPage | undefined {
  return suburbPages.find((page) => page.slug === slug)
}

export function getSuburbPageByName(name: string): SuburbPage | undefined {
  return suburbPages.find((page) => page.name === name)
}
