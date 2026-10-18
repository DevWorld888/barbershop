import type { Promotion } from '@/types/promotion'

// ── Campaigns ───────────────────────────────────────────────────────────────
// To run a promotion, edit its object below: dates, copy, discount, image.
// It shows automatically between startDate and endDate (Hobart time) while
// `enabled` is true. If several overlap, the highest `priority` wins.
// The CTA uses the shared Bookeo link (BOOKING_URL) unless `cta.href` is set.

export const promotions: Promotion[] = [
  {
    id: 'back-to-school',
    enabled: true,
    priority: 20,
    startDate: '2026-10-15',
    endDate: '2026-10-25',
    eyebrow: 'Student Exclusive',
    label: 'Limited Time',
    title: 'Back to School',
    subtitle: 'Fresh Fade. Fresh Start.',
    description: 'Start the new school term looking sharp.',
    discount: '$5 OFF',
    // Set both once the barber confirms pricing, e.g. originalPrice: 40, promoPrice: 35
    originalPrice: undefined,
    promoPrice: undefined,
    terms: 'Student offer only. Discount applied at appointment.',
    cta: { label: 'Book Now' },
    image: {
      src: '/services/kids-regularcut.webp',
      alt: 'kid with a fresh curly-top skin fade at Mana Fade Barber Studio in Hobart',
      position: 'center 30%',
    },
    announcement: 'Back to School — $5 off for students',
    variant: 'split',
    accent: 'silver',
  },
  {
    id: 'christmas-special',
    enabled: false,
    priority: 30,
    startDate: '2026-12-01',
    endDate: '2026-12-24',
    eyebrow: 'Holiday Season',
    label: 'Christmas',
    title: 'Christmas Special',
    subtitle: 'Sharp for the Season.',
    description: 'Look your best for every Christmas party and family photo this December.',
    discount: '10% OFF',
    terms: 'Valid on haircut services. Discount applied at appointment.',
    cta: { label: 'Book Your Christmas Cut' },
    image: {
      src: '/services/fade-haircut.webp',
      alt: 'Textured skin fade haircut at Mana Fade Barber Studio in Hobart',
    },
    announcement: 'Christmas Special — 10% off haircuts',
    variant: 'split',
    accent: 'crimson',
  },
  {
    id: 'fathers-day',
    enabled: false,
    priority: 30,
    startDate: '2027-08-30',
    endDate: '2027-09-05',
    eyebrow: "Father's Day",
    title: 'Like Father, Like Son',
    subtitle: 'Two Chairs. One Tradition.',
    description: 'Bring your dad, your son or both — fresh cuts for the whole family this Father’s Day week.',
    discount: '$10 OFF',
    terms: 'Valid when two or more family members book together. Discount applied at appointment.',
    cta: { label: 'Book Together' },
    image: {
      src: '/services/regular-haircut-beard.webp',
      alt: 'Classic haircut and beard trim at Mana Fade Barber Studio in Hobart',
    },
    announcement: "Father's Day — $10 off family bookings",
    variant: 'split-reverse',
    accent: 'gold',
  },
  {
    id: 'first-time-customer',
    enabled: false,
    priority: 10,
    startDate: '2026-01-01',
    endDate: '2027-12-31',
    eyebrow: 'New Clients',
    title: 'New to Mana Fade?',
    subtitle: 'Your First Chair. Our Best Welcome.',
    description:
      'Book your first appointment and receive 15% off any service. Experience premium Colombian barbering right here in Hobart.',
    discount: '15% OFF',
    terms: 'Valid for first-time clients only. Not valid with other offers.',
    cta: { label: 'Book & Save Now' },
    image: {
      src: '/gallery/skin-fade-barber-hobart.webp',
      alt: 'Skin fade with slick-back top at Mana Fade Barber Studio in Hobart',
    },
    announcement: 'First visit? Get 15% off any service',
    variant: 'split',
    accent: 'silver',
  },
]

// ── Activation ──────────────────────────────────────────────────────────────

/** Anchor id of the promotion section; the announcement bar links to it. */
export const PROMOTION_SECTION_ID = 'promotion'

const HOBART_TIME_ZONE = 'Australia/Hobart'

/** Today's date in Hobart as 'YYYY-MM-DD' (en-CA formats dates in ISO order). */
function getHobartDate(now: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: HOBART_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
}

export function isPromotionActive(promotion: Promotion, now: Date = new Date()): boolean {
  if (!promotion.enabled) return false
  // ISO date strings compare correctly as plain strings
  const today = getHobartDate(now)
  return promotion.startDate <= today && today <= promotion.endDate
}

/** The highest-priority promotion running today in Hobart, or null. */
export function getActivePromotion(
  list: Promotion[] = promotions,
  now: Date = new Date(),
): Promotion | null {
  return (
    list
      .filter((promotion) => isPromotionActive(promotion, now))
      .sort((a, b) => b.priority - a.priority)[0] ?? null
  )
}

// ── Formatting ──────────────────────────────────────────────────────────────

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function parseDate(iso: string) {
  const [year, month, day] = iso.split('-').map(Number)
  return { year, month: MONTHS[month - 1], day }
}

/** '2026-10-15' + '2026-10-25' → '15–25 October 2026' */
export function formatPromotionDates(startDate: string, endDate: string): string {
  const start = parseDate(startDate)
  const end = parseDate(endDate)

  if (start.year !== end.year) {
    return `${start.day} ${start.month} ${start.year} – ${end.day} ${end.month} ${end.year}`
  }
  if (start.month !== end.month) {
    return `${start.day} ${start.month} – ${end.day} ${end.month} ${end.year}`
  }
  return `${start.day}–${end.day} ${end.month} ${end.year}`
}

export function formatPrice(amount: number): string {
  return `$${Number.isInteger(amount) ? amount : amount.toFixed(2)}`
}
