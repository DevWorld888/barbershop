import Image from 'next/image'
import Reveal from '@/components/animations/Reveal'
import { BOOKING_URL } from '@/lib/data'
import { PROMOTION_SECTION_ID, formatPrice, formatPromotionDates } from '@/lib/promotions'
import type { Promotion } from '@/types/promotion'
import { ACCENT_STYLES } from './accents'

export default function PromotionSection({ promotion }: { promotion: Promotion }) {
  const {
    eyebrow,
    label,
    title,
    subtitle,
    description,
    discount,
    originalPrice,
    promoPrice,
    terms,
    cta,
    image,
    startDate,
    endDate,
  } = promotion

  const accent = ACCENT_STYLES[promotion.accent ?? 'silver']
  // Split layouts need an image; fall back to centered without one
  const variant = image ? promotion.variant ?? 'split' : 'centered'
  const isCentered = variant === 'centered'

  const href = cta.href ?? BOOKING_URL
  const isExternal = href.startsWith('http')
  const hasPrices = originalPrice !== undefined && promoPrice !== undefined
  const headingId = `${PROMOTION_SECTION_ID}-heading`

  return (
    <section
      id={PROMOTION_SECTION_ID}
      aria-labelledby={headingId}
      className="relative -mt-px scroll-mt-32 overflow-hidden bg-zinc-950 py-20 sm:py-28"
    >
      <div className={`pointer-events-none absolute inset-0 ${accent.glow}`} aria-hidden="true" />

      <div
        className={`relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 ${
          isCentered ? '' : 'grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16'
        }`}
      >
        {/* Text */}
        <Reveal
          className={
            isCentered
              ? 'mx-auto flex max-w-2xl flex-col items-center text-center'
              : variant === 'split-reverse'
                ? 'lg:order-2'
                : ''
          }
        >
          {(eyebrow || label) && (
            <div className="mb-5 flex flex-wrap items-center gap-3">
              {eyebrow && (
                <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${accent.text}`}>
                  {eyebrow}
                </p>
              )}
              {label && (
                <span
                  className={`border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-300 ${accent.border}`}
                >
                  {label}
                </span>
              )}
            </div>
          )}

          <h2
            id={headingId}
            className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {title}
          </h2>

          {subtitle && (
            <p className={`mt-4 font-serif text-2xl italic sm:text-3xl ${accent.text}`}>{subtitle}</p>
          )}

          <div className={`mt-7 h-px w-12 ${accent.rule}`} aria-hidden="true" />

          <p className="mt-7 max-w-md text-lg leading-relaxed text-zinc-400">{description}</p>

          {(discount || hasPrices) && (
            <div
              className={`mt-8 flex flex-wrap items-end gap-x-6 gap-y-3 ${isCentered ? 'justify-center' : ''}`}
            >
              {discount && (
                <p className="text-6xl font-black leading-none tracking-tight text-white sm:text-7xl">
                  {discount}
                </p>
              )}
              {hasPrices && (
                <p className="flex items-baseline gap-3 pb-1">
                  <span className="sr-only">Was</span>
                  <del className="text-lg text-zinc-500">{formatPrice(originalPrice)}</del>
                  <span className="sr-only">now</span>
                  <span className={`text-3xl font-bold ${accent.text}`}>{formatPrice(promoPrice)}</span>
                </p>
              )}
            </div>
          )}

          <p className="mt-5 flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-400">
            <CalendarIcon />
            <span>
              Valid{' '}
              <time dateTime={startDate}>{formatPromotionDates(startDate, endDate)}</time>
            </span>
          </p>

          <a
            href={href}
            {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
            className={`group mt-9 inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-semibold uppercase tracking-widest transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 ${accent.button}`}
          >
            {cta.label}
            <span
              className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            >
              →
            </span>
          </a>

          {terms && <p className="mt-5 max-w-md text-xs text-zinc-500">*{terms}</p>}
        </Reveal>

        {/* Image */}
        {image && !isCentered && (
          <Reveal delay={0.15} className={variant === 'split-reverse' ? 'lg:order-1' : ''}>
            <figure
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border bg-zinc-900 sm:aspect-[16/10] lg:aspect-[4/5] ${accent.border}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                style={{ objectPosition: image.position ?? 'center' }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                aria-hidden="true"
              />
            </figure>
          </Reveal>
        )}
      </div>
    </section>
  )
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="1" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  )
}
