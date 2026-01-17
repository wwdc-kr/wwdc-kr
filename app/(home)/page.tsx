'use client'

import { Squircle } from '@squircle-js/react'
import { motion } from 'motion/react'
import { useMagneticPull } from 'motion-plus/react'
import Link from 'next/link'
import { useRef } from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { KoreanFlag } from '@/lib/flag'

const CORNER_RADIUS = 32
const CORNER_SMOOTHING = 0.6

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const discordRef = useRef<HTMLAnchorElement>(null)
  const instagramRef = useRef<HTMLAnchorElement>(null)
  const linkedinRef = useRef<HTMLAnchorElement>(null)
  const githubRef = useRef<HTMLAnchorElement>(null)

  const heroPull = useMagneticPull(heroRef, 0.05)
  const discordPull = useMagneticPull(discordRef, 0.1)
  const instagramPull = useMagneticPull(instagramRef, 0.1)
  const linkedinPull = useMagneticPull(linkedinRef, 0.1)
  const githubPull = useMagneticPull(githubRef, 0.1)

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4">
      <div className="mx-auto w-full max-w-2xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <motion.div
            className="col-span-2 md:col-span-3"
            ref={heroRef}
            style={heroPull}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            whileHover={{ scale: 1.01 }}
          >
            <Squircle
              className="flex h-44 w-full flex-col justify-between bg-gradient-to-br from-[#FF3B30] via-[#FF9500] to-[#FFCC00] p-6 shadow-xl"
              cornerRadius={CORNER_RADIUS}
              cornerSmoothing={CORNER_SMOOTHING}
            >
              <KoreanFlag height={48} width={48} />
              <div className="text-left">
                <span className="font-bold text-white text-xl">Swift Student Challenge 커뮤니티</span>
                <p className="mt-1 text-sm text-white/90">For all students, by SSC winners</p>
              </div>
            </Squircle>
          </motion.div>

          <Link
            className="col-span-2 block"
            href="https://discord.com/invite/AES2GmPMc7"
            ref={discordRef}
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.div
              className="h-full"
              style={discordPull}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              whileHover={{ scale: 1.02 }}
            >
              <Squircle
                className="flex h-44 w-full flex-col justify-between bg-[#5865F2] p-6 shadow-xl"
                cornerRadius={CORNER_RADIUS}
                cornerSmoothing={CORNER_SMOOTHING}
              >
                <FaDiscord className="h-12 w-12 text-white" />
                <div className="text-left">
                  <span className="font-bold text-white text-xl">Join our Discord</span>
                  <p className="mt-1 text-sm text-white/80">Connect with the community</p>
                </div>
              </Squircle>
            </motion.div>
          </Link>

          <Link
            className="block"
            href="https://instagram.com/wwdc_scholars_kr"
            ref={instagramRef}
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.div
              className="h-full"
              style={instagramPull}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              whileHover={{ scale: 1.03 }}
            >
              <Squircle
                className="flex h-44 w-full flex-col justify-between bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] p-6 shadow-xl"
                cornerRadius={CORNER_RADIUS}
                cornerSmoothing={CORNER_SMOOTHING}
              >
                <FaInstagram className="h-10 w-10 text-white" />
                <span className="text-left font-bold text-lg text-white">Instagram</span>
              </Squircle>
            </motion.div>
          </Link>

          <Link
            className="block"
            href="https://linkedin.com/company/community-for-swift-students"
            ref={linkedinRef}
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.div
              className="h-full"
              style={linkedinPull}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              whileHover={{ scale: 1.03 }}
            >
              <Squircle
                className="flex h-44 w-full flex-col justify-between bg-[#0A66C2] p-6 shadow-xl"
                cornerRadius={CORNER_RADIUS}
                cornerSmoothing={CORNER_SMOOTHING}
              >
                <FaLinkedin className="h-10 w-10 text-white" />
                <span className="text-left font-bold text-lg text-white">LinkedIn</span>
              </Squircle>
            </motion.div>
          </Link>

          <Link
            className="col-span-2 block"
            href="https://github.com/wwdc-kr"
            ref={githubRef}
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.div
              className="h-full"
              style={githubPull}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              whileHover={{ scale: 1.02 }}
            >
              <Squircle
                className="flex h-44 w-full flex-col justify-between bg-[#24292F] p-6 shadow-xl"
                cornerRadius={CORNER_RADIUS}
                cornerSmoothing={CORNER_SMOOTHING}
              >
                <FaGithub className="h-12 w-12 text-white" />
                <div className="text-left">
                  <span className="font-bold text-white text-xl">GitHub</span>
                  <p className="mt-1 text-sm text-white/70">Explore our open source projects</p>
                </div>
              </Squircle>
            </motion.div>
          </Link>
        </div>
      </div>
    </main>
  )
}
