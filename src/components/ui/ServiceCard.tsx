import type { Service } from '@/lib/data'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 flex flex-col gap-4 hover:border-zinc-700 transition-colors">
      <span className="text-gold-500 text-xs font-medium tracking-[0.25em]">
        {service.index}
      </span>
      <div className="flex-1">
        <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{service.name}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
      </div>
      <p className="text-gold-500 text-sm font-semibold">{service.price}</p>
    </article>
  )
}
