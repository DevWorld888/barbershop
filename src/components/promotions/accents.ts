import type { PromotionAccent } from '@/types/promotion'

interface AccentStyles {
  text: string
  border: string
  rule: string
  dot: string
  glow: string
  button: string
}

// Full class strings (not interpolated) so Tailwind can detect them.
export const ACCENT_STYLES: Record<PromotionAccent, AccentStyles> = {
  silver: {
    text: 'text-silver-500',
    border: 'border-silver-500/40',
    rule: 'bg-silver-500',
    dot: 'bg-silver-500',
    glow: 'bg-[radial-gradient(ellipse_at_top_right,rgba(192,192,192,0.08),transparent_60%)]',
    button:
      'bg-silver-500 text-black hover:bg-silver-400 hover:shadow-[0_0_24px_rgba(192,192,192,0.4)] focus-visible:outline-silver-500',
  },
  gold: {
    text: 'text-amber-400',
    border: 'border-amber-400/40',
    rule: 'bg-amber-400',
    dot: 'bg-amber-400',
    glow: 'bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.08),transparent_60%)]',
    button:
      'bg-amber-400 text-black hover:bg-amber-300 hover:shadow-[0_0_24px_rgba(251,191,36,0.35)] focus-visible:outline-amber-400',
  },
  crimson: {
    text: 'text-red-400',
    border: 'border-red-400/40',
    rule: 'bg-red-500',
    dot: 'bg-red-500',
    glow: 'bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.1),transparent_60%)]',
    button:
      'bg-red-600 text-white hover:bg-red-500 hover:shadow-[0_0_24px_rgba(239,68,68,0.35)] focus-visible:outline-red-500',
  },
}
