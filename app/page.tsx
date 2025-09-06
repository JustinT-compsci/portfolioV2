'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { FaRegCopy } from 'react-icons/fa6'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/lib/utils'
// import Link from 'next/link'
// import { AnimatedBackground } from '@/components/ui/animated-background'
import { SocialLinkButton } from "@/components/ui/social-links"
import {
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
  // PROJECTS,
  // BLOG_POSTS,
} from './data'

export default function Personal() {
  return (
    <motion.main
      className="space-y-18"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-300">
            I’m an Operations Systems Technical Lead with a strong background in
            data analysis, system validation, quality assurance and client
            relations. I’m currently seeking new opportunities in data-focused
            roles where I can apply my skills and make a meaningful impact.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {SOCIAL_LINKS.map((link) => (
            <SocialLinkButton key={link.label} {...link} />
          ))}
        </div>
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
            <div className="relative h-full w-full rounded-[15px] bg-zinc-950 px-4 py-3 border border-zinc-800" key={job.id}>
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="text-zinc-100 pr-4">{job.title}</h4>
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 underline transition-colors duration-200 hover:text-zinc-100 sm:text-base"
                    >
                      {job.company}
                    </a>
                  </div>
                  <p className="text-sm text-zinc-400 sm:text-base whitespace-nowrap">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              <div className="relative rounded-2xl bg-zinc-950/40 p-1 ring-1 ring-zinc-800/50 ring-inset">
              Content
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section> */}

      {/* Blog */}
      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal text-zinc-100">{post.title}</h4>
                  <p className="text-zinc-400">{post.description}</p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section> */}

      {/* Education */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium text-zinc-100">Education</h3>
        <div className="flex flex-col space-y-2">
            <div className="relative h-full w-full rounded-[15px] bg-zinc-950 px-4 py-3 border border-zinc-800">
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="text-zinc-100">BSc. Computer Science</h4>
                                      <a
                      href="https://ontariotechu.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 underline transition-colors duration-200 hover:text-zinc-100 sm:text-base"
                    >
                    Ontario Tech University
                    </a>
                </div>
                <p className="text-sm text-zinc-400 sm:text-base">
                  2018 - 2023
                </p>
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
          <div className="relative overflow-hidden rounded-2xl bg-green-600/50 p-[1px]">
            <Spotlight
              className="from-zinc-100via-zinc-200 to-zinc-50"
              size={64}
            />
            <div className="relative h-full w-full rounded-[15px] bg-[#022611] px-4 py-3">
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="text-zinc-100">
                    I am currently seeking new opportunities – 
                  </h4>
                  <span className="text-zinc-300">
                    Feel free to contact me at{' '}
                  </span>
                  <div className="inline-flex items-center gap-2">
                    <a
                      className="text-zinc-300 underline transition-colors duration-200 hover:text-zinc-100"
                      href={`mailto:${EMAIL}`}
                    >
                      {EMAIL}
                    </a>
                    <button
                      onClick={() => navigator.clipboard.writeText(EMAIL)}
                      className="text-zinc-400 transition-colors duration-200 hover:text-zinc-200"
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
