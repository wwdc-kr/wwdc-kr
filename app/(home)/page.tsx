'use client'

import { Squircle } from '@squircle-js/react'
import { motion } from 'motion/react'
import { useMagneticPull } from 'motion-plus/react'
import Link from 'next/link'
import { useRef } from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { KoreanFlag } from '@/lib/flag'

const CORNER_RADIUS = 42
const CORNER_SMOOTHING = 0.6

export default function HomePage() {
  const instagramRef = useRef<HTMLAnchorElement>(null)
  const linkedinRef = useRef<HTMLAnchorElement>(null)
  const discordRef = useRef<HTMLAnchorElement>(null)
  const githubRef = useRef<HTMLAnchorElement>(null)

  const instagramPull = useMagneticPull(instagramRef, 0.1)
  const linkedinPull = useMagneticPull(linkedinRef, 0.1)
  const discordPull = useMagneticPull(discordRef, 0.1)
  const githubPull = useMagneticPull(githubRef, 0.1)

  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center">
      <KoreanFlag height={48} width={48} />
      <h1 className="mt-6 mb-12 font-bold text-2xl">
        Swift Student Challenge에 관심 있는 모두를 위한 커뮤니티
        <br />
        For all students, by Swift Student Challenge winners
      </h1>

      <div className="mx-auto">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Link
            className="block h-48"
            href="https://instagram.com/wwdc_scholars_kr"
            ref={instagramRef}
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.div
              style={instagramPull}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.05 }}
            >
              <Squircle
                className="flex size-48 h-full flex-col justify-between border border-white/40 bg-gradient-to-br from-white/70 to-white/50 p-6 shadow-lg backdrop-blur-xl dark:border-white/10 dark:from-zinc-800/70 dark:to-zinc-800/50"
                cornerRadius={CORNER_RADIUS}
                cornerSmoothing={CORNER_SMOOTHING}
              >
                <FaInstagram className="h-12 w-12 text-pink-600 drop-shadow-sm dark:text-pink-400" />
                <span className="text-left font-bold text-base text-zinc-900 drop-shadow-sm dark:text-white">
                  Instagram
                </span>
              </Squircle>
            </motion.div>
          </Link>

          <Link
            className="block h-48"
            href="https://linkedin.com/company/community-for-swift-students"
            ref={linkedinRef}
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.div
              style={linkedinPull}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.05 }}
            >
              <Squircle
                className="flex size-48 h-full flex-col justify-between border border-white/40 bg-gradient-to-br from-white/70 to-white/50 p-6 shadow-lg backdrop-blur-xl dark:border-white/10 dark:from-zinc-800/70 dark:to-zinc-800/50"
                cornerRadius={CORNER_RADIUS}
                cornerSmoothing={CORNER_SMOOTHING}
              >
                <FaLinkedin className="h-12 w-12 text-blue-600 drop-shadow-sm dark:text-blue-400" />
                <span className="text-left font-bold text-base text-zinc-900 drop-shadow-sm dark:text-white">
                  LinkedIn
                </span>
              </Squircle>
            </motion.div>
          </Link>

          <Link
            className="block h-48"
            href="https://discord.com/invite/AES2GmPMc7"
            ref={discordRef}
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.div
              style={discordPull}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.05 }}
            >
              <Squircle
                className="flex size-48 h-full flex-col justify-between border border-white/40 bg-gradient-to-br from-white/70 to-white/50 p-6 shadow-lg backdrop-blur-xl dark:border-white/10 dark:from-zinc-800/70 dark:to-zinc-800/50"
                cornerRadius={CORNER_RADIUS}
                cornerSmoothing={CORNER_SMOOTHING}
              >
                <FaDiscord className="h-12 w-12 text-indigo-600 drop-shadow-sm dark:text-indigo-400" />
                <span className="text-left font-bold text-base text-zinc-900 drop-shadow-sm dark:text-white">
                  👋Welcome!
                  <br />
                  Feel free to join
                  <br />
                  Discord
                </span>
              </Squircle>
            </motion.div>
          </Link>

          <Link
            className="block h-48"
            href="https://github.com/wwdc-kr"
            ref={githubRef}
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.div
              style={githubPull}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.05 }}
            >
              <Squircle
                className="flex size-48 h-full flex-col justify-between border border-white/40 bg-gradient-to-br from-white/70 to-white/50 p-6 shadow-lg backdrop-blur-xl dark:border-white/10 dark:from-zinc-800/70 dark:to-zinc-800/50"
                cornerRadius={CORNER_RADIUS}
                cornerSmoothing={CORNER_SMOOTHING}
              >
                <FaGithub className="h-12 w-12 text-zinc-900 drop-shadow-sm dark:text-white" />
                <span className="text-left font-bold text-base text-zinc-900 drop-shadow-sm dark:text-white">
                  GitHub
                </span>
              </Squircle>
            </motion.div>
          </Link>
        </div>
      </div>
    </main>
  )
}
