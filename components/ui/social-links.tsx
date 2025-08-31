import { SocialLink } from '@/app/data' // adjust the path if needed
// import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'

export function SocialLinkButton({
  label,
  link,
  icon: Icon,
  className,
}: SocialLink) {
  return (
    // <div className="relative overflow-hidden rounded-full bg-zinc-300/40 p-[1px] pt-[0.5px]">
    //   <Spotlight
    //     className="from-violet-300 via-violet-400 to-violet-500"
    //     size={70}
    //   />

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'relative inline-flex items-center gap-1 rounded-full border border-zinc-600 bg-zinc-800 px-2 py-1 text-sm text-zinc-300 transition-colors duration-200 hover:border-zinc-300 hover:bg-[#322751] hover:text-zinc-100',
        className,
      )}
      //       className={cn(
      //   'relative inline-flex items-center gap-1 rounded-full border border-zinc-600 bg-[#322751] sm:bg-zinc-800 px-2 py-1 text-sm text-zinc-300 transition-colors duration-200 sm:hover:bg-[#322751] hover:text-zinc-100 hover:border-zinc-300',
      //   className
      // )}
    >
      {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
      <span className="truncate">{label}</span>
    </a>
    // </div>
  )
}
