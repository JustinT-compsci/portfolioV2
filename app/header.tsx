'use client'
import { TextEffect } from '@/components/ui/text-effect'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/lib/utils'
import { motion } from 'motion/react'
// import localFont from "next/font/local";
import { Syncopate } from 'next/font/google'
import Link from 'next/link'

const syncopate = Syncopate({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-syncopate',
})

// localFont
// const panchang = localFont({
//   src: "./../public/fonts/...",
//   variable: "--font-panchang",
//   display: "swap",
// });

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <div className="mb-1">
          <Link
            href="/"
            className={`${syncopate.className} bg-gradient-to-br from-zinc-300 to-blue-400 bg-clip-text text-3xl text-transparent`}
          >
            Justin Thomas
          </Link>
        </div>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-500"
          delay={0.5}
        >
          Operations Systems Technical Lead
        </TextEffect>
        <motion.main
          className="space-y-24"
          variants={VARIANTS_CONTAINER}
          initial="hidden"
          animate="visible"
        >
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
          >
            <div className="mt-4 inline-block rounded-full border border-green-600/50 bg-[#02180b] px-2 py-1 text-sm text-zinc-100">
              Actively seeking new opportunities
            </div>
          </motion.section>
        </motion.main>
      </div>
    </header>
  )
}
