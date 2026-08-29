import Image from 'next/image'
import Reveal from '@/components/animations/Reveal'
import CountUp from '@/components/animations/CountUp'

interface ImpactStat {
  index: string
  title: string
  detail: string
}

const impactStats: ImpactStat[] = [
  { index: '01', title: 'Three Days', detail: 'of haircuts' },
  { index: '02', title: 'One Community', detail: 'coming together' },
  { index: '03', title: 'One Cause', detail: 'supporting Colombia' },
]

export default function CharityPromo() {
  return (
    <section
      aria-labelledby="community-impact-heading"
      className="relative -mt-px border-y border-zinc-800/80 bg-zinc-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14">

          {/* Intro — mobile: first; desktop: right column, top row */}
          <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1 lg:self-end">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                Community • Mana Gives Back
              </p>
              <h2
                id="community-impact-heading"
                className="mt-4 text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                A Small Initiative.
                <br />
                A Big Impact.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className="mt-7 flex items-baseline gap-2 sm:gap-3"
                aria-label="805 Australian dollars raised for Colombia"
              >
                <CountUp
                  value={805}
                  prefix="$"
                  aria-hidden="true"
                  className="text-[3.25rem] font-black leading-none tracking-tight text-amber-400 sm:text-7xl lg:text-8xl"
                />
                <span
                  aria-hidden="true"
                  className="text-lg font-bold uppercase tracking-wide text-amber-400/70 sm:text-2xl"
                >
                  AUD
                </span>
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-white sm:text-base">
                Raised for Colombia <span aria-hidden="true">🇨🇴</span>
              </p>
            </Reveal>
          </div>

          {/* Event image — mobile: after the headline; desktop: left column, spans both rows */}
          <Reveal className="relative order-2 min-h-[300px] overflow-hidden rounded-2xl bg-zinc-900 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:min-h-[460px]">
            <figure className="relative h-full w-full">
              {/* Swap for a real Fades for Colombia event photo when available */}
              <Image
                src="/mana-colombia-community-impact.webp"
                alt="MANA Fade Studio community fundraiser supporting Colombia"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                aria-hidden="true"
              />
              <figcaption className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/85">
                Fades for Colombia · Charity Weekend
              </figcaption>
            </figure>
          </Reveal>

          {/* Impact detail — mobile: last; desktop: right column, bottom row */}
          <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 lg:self-start">
            <div className="grid grid-cols-3 gap-3 border-t border-zinc-800/80 pt-8 sm:gap-6">
              {impactStats.map((stat, i) => (
                <Reveal key={stat.index} delay={i * 0.08}>
                  <p className="text-xs font-bold tracking-widest text-amber-400/80">{stat.index}</p>
                  <p className="mt-2 text-[13px] font-bold uppercase leading-tight tracking-tight text-white sm:text-base">
                    {stat.title}
                  </p>
                  <p className="mt-1 text-xs text-zinc-400 sm:text-sm">{stat.detail}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-zinc-400">
                Thank you to everyone who booked, donated and took part in the initiative.
              </p>
              <p className="mt-3 font-serif text-xl italic text-amber-400 sm:text-2xl">
                This is what community looks like.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 border-t border-zinc-800/80 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white">
                  Mana Fade Studio
                </p>
                <p className="mt-1 text-sm text-zinc-500">More than a haircut.</p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
