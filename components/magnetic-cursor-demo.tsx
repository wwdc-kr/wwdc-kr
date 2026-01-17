'use client'

import { motion } from 'motion/react'
import { Magnetic } from '@/components/motion-primitives/magnetic'

function Chevron() {
  return (
    <svg fill="none" height="20" role="img" viewBox="0 0 12 20" width="12" xmlns="http://www.w3.org/2000/svg">
      <title>Chevron</title>
      <path d="M10 2L2 10L10 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}

export default function MagneticCursorDemo() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <Magnetic intensity={0.1} range={150}>
        <motion.button
          className="inline-flex items-center gap-2 rounded-md border border-white/20 border-dashed bg-none px-4 py-2 font-medium text-2xl text-[#0A84FF] outline-none transition-all hover:border-white/40"
          whileTap={{ scale: 0.95 }}
        >
          <Chevron />
          Appearance
        </motion.button>
      </Magnetic>
    </div>
  )
}
