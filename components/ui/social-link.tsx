import { ReactNode, ComponentType } from "react"
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'

export function SocialLink({
  children,
  icon: Icon,
  link,
  className,
}: {
  children: React.ReactNode
  link: string
  icon: React.ComponentType<any>
  className?: string
}) {
  return (
    <div className="relative overflow-hidden rounded-full bg-zinc-500/40 p-0.25">
      {/* Spotlight border effect */}
      <Spotlight className="from-zinc-100 via-zinc-200 to-zinc-50" size={64} />

      {/* Actual button */}
      <a
        href={link}
        target="_blank" 
        className={cn(
          'relative inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-2 py-1 text-sm text-zinc-100 transition-colors duration-200 hover:bg-zinc-900 hover:text-white',
          className,
        )}
      >
        {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
        <span className="truncate">{children}</span>
      </a>
    </div>
  )
}