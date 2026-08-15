
import Image from 'next/image'

export default function PromoBar() {
  return (
    <div className="w-full border-b border-zinc-800/80 bg-black text-white">
      <div className="mx-auto flex h-9 items-center justify-center gap-3 px-4 sm:h-10 sm:px-8">
        <div className="flex min-w-0 items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap text-center text-[10px] sm:gap-2 sm:text-xs">
          <Image
            src="/Promo/col.ico"
            alt="Bandera de Colombia"
            width={16}
            height={16}
            className="shrink-0"
            priority
          />
          <span className="shrink-0 font-semibold uppercase tracking-wide">
            Fades for Colombia
          </span>
          <span className="hidden text-silver-500 sm:inline" aria-hidden="true">
            ❤
          </span>
          <span className="hidden shrink-0 uppercase tracking-wide text-zinc-300 sm:inline">
            Charity Weekend &mdash; 21 &amp; 23 August
          </span>
          <span className="hidden text-zinc-600 lg:inline" aria-hidden="true">
            |
          </span>
          <span className="hidden truncate text-zinc-400 lg:inline">
            100% of proceeds will support people affected by the earthquake in Colombia.
          </span>
        </div>
      </div>
    </div>
  )
}
