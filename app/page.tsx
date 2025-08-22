'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { WORK_EXPERIENCE, EMAIL, SOCIAL_LINKS } from './data'
import { cn } from '@/lib/utils'
import { FaRegCopy } from 'react-icons/fa6'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = { duration: 0.3 }

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

;<button className="rounded-xl border border-neutral-600 bg-white px-4 py-2 text-black transition duration-200 hover:bg-gray-100">
  Outline
</button>

export default function Personal() {
  return (
    <motion.main
      className="space-y-20"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* About Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 space-y-8">
          <p className="text-zinc-400">
            I’m an Operations Systems Technical Lead with a strong background in
            data analysis, system validation, and client relations. I’m
            currently seeking new opportunities in data-focused roles where I
            can provide experience, expand my skills and make a meaningful
            impact.
          </p>
          <div className="mb-12 flex flex-wrap gap-2.5">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink
                key={link.link}
                link={link.link}
                icon={link.icon}
                className={link.className}
              >
                {link.label}
              </SocialLink>
            ))}
          </div>
        </div>
        {/* <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div> */}
      </motion.section>

      {/* Work Experience */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-100">
          Work Experience
        </h3>
        <div className="flex flex-col space-y-3">
          {WORK_EXPERIENCE.map((job) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-600/30 p-[1px]"
              key={job.id}
            >
              <div className="relative h-full w-full rounded-[15px] bg-zinc-950 px-4 py-3">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="text-zinc-100">{job.title}</h4>
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-100 sm:text-base"
                    >
                      {job.company}
                    </a>
                  </div>
                  <p className="text-sm text-zinc-400 sm:text-base">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium text-zinc-100">Education</h3>
        <div className="flex flex-col space-y-2">
          <div className="relative overflow-hidden rounded-2xl bg-zinc-600/30 p-[1px]">
            <div className="relative h-full w-full rounded-[15px] bg-zinc-950 px-4 py-3">
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="text-zinc-100">BSc. Computer Science</h4>
                  <span className="text-sm text-zinc-400 sm:text-base">
                    Ontario Tech University
                  </span>
                </div>
                <p className="text-sm text-zinc-400 sm:text-base">
                  2018 - 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-zinc-100">Connect</h3>
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-green-600/30 p-[1px]">
            <Spotlight
              className="from-zinc-100via-zinc-200 to-zinc-50"
              size={64}
            />
            <div className="relative h-full w-full rounded-[15px]  bg-[#02180b] px-4 py-3">
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="text-zinc-100">
                    I am currently seeking new opportunities
                  </h4>
                  <span className="text-zinc-300">
                    Feel free to contact me at{' '}
                  </span>
                  <div className="inline-flex items-center gap-2">
                    <a
                      className="text-zinc-300 underline"
                      href={`mailto:${EMAIL}`}
                    >
                      {EMAIL}
                    </a>
                    <button
                      onClick={() => navigator.clipboard.writeText(EMAIL)}
                      className="text-zinc-400 transition hover:text-zinc-200"
                      title="Copy email"
                    >
                      <FaRegCopy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute top-0 right-0 flex size-3 -translate-y-[12.5%] translate-x-[12/5%]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>{' '}
        </div>
      </motion.section>
    </motion.main>
  )
}
