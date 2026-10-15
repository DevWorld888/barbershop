/** Layout of the promotion section. `split` = text left, image right (desktop). */
export type PromotionVariant = 'split' | 'split-reverse' | 'centered'

/** Accent palette — limited to brand-safe colours, see components/promotions/accents.ts */
export type PromotionAccent = 'silver' | 'gold' | 'crimson'

export interface PromotionImage {
  src: string
  alt: string
  /** CSS object-position, e.g. 'center top'. Defaults to 'center'. */
  position?: string
}

export interface Promotion {
  /** Unique, stable identifier (kebab-case). */
  id: string
  /** Master switch. `false` hides the promotion regardless of dates. */
  enabled: boolean
  /** Higher number wins when several promotions are active at once. */
  priority: number
  /** First day of the offer, inclusive, Hobart local date: 'YYYY-MM-DD'. */
  startDate: string
  /** Last day of the offer, inclusive, Hobart local date: 'YYYY-MM-DD'. */
  endDate: string

  eyebrow?: string
  /** Small pill shown next to the eyebrow, e.g. 'Limited time'. */
  label?: string
  title: string
  subtitle?: string
  description: string
  /** Free-form discount text, e.g. '$5 OFF' or '15% OFF'. */
  discount?: string
  /** Prices in AUD. Both must be set for the price comparison to show. */
  originalPrice?: number
  promoPrice?: number
  /** Fine print shown under the CTA. */
  terms?: string

  cta: {
    label: string
    /** Defaults to the shared Bookeo BOOKING_URL when omitted. */
    href?: string
  }
  image?: PromotionImage
  /** Short line for the top announcement bar. */
  announcement: string

  variant?: PromotionVariant
  accent?: PromotionAccent
}
