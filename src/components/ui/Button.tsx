import Link from 'next/link'

type Variant = 'primary' | 'outline'

interface ButtonProps {
  href: string
  variant?: Variant
  children: React.ReactNode
  external?: boolean
  className?: string
}

export default function Button({
  href,
  variant = 'primary',
  children,
  external = false,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center text-sm font-semibold uppercase tracking-widest px-8 py-4 transition-colors'

  const variants: Record<Variant, string> = {
    primary: 'bg-gold-500 text-black hover:bg-gold-400',
    outline: 'border border-zinc-600 text-white hover:border-gold-500 hover:text-gold-500',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
