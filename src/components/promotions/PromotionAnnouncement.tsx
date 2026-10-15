import { PROMOTION_SECTION_ID, formatPromotionDates } from '@/lib/promotions'
import type { Promotion } from '@/types/promotion'
import { ACCENT_STYLES } from './accents'

/** Slim bar above the navbar that jumps to the promotion section. */
export default function PromotionAnnouncement({ promotion }: { promotion: Promotion }) {
  const accent = ACCENT_STYLES[promotion.accent ?? 'silver']

  return (
    <a
      href={`#${PROMOTION_SECTION_ID}`}
      className="group block w-full border-b border-zinc-800/80 bg-black text-white transition-colors duration-200 hover:bg-zinc-950 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-silver-500"
    >
      <span className="mx-auto flex h-9 items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap px-4 text-[10px] uppercase tracking-wide sm:h-10 sm:gap-3 sm:px-8 sm:text-xs">
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} aria-hidden="true" />
        <span className="truncate font-semibold">{promotion.announcement}</span>
        <span className="hidden text-zinc-600 sm:inline" aria-hidden="true">
          |
        </span>
        <span className="hidden shrink-0 text-zinc-400 sm:inline">
          {formatPromotionDates(promotion.startDate, promotion.endDate)}
        </span>
        <span
          className={`shrink-0 font-semibold underline-offset-4 group-hover:underline ${accent.text}`}
        >
          View offer
          <span
            className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
            aria-hidden="true"
          >
            →
          </span>
        </span>
      </span>
    </a>
  )
}
