'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { Syncopate } from "next/font/google";
import Link from 'next/link'

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-syncopate", 
});

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <div className='mb-1'>
        <Link href="/" className={`${syncopate.className} text-3xl text-transparent bg-clip-text bg-gradient-to-br from-zinc-300 to-blue-400`}> 
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
      </div>
    </header>
  )
}