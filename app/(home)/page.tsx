'use client'

import { Squircle } from '@squircle-js/react'
import Link from 'next/link'
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

  const { zone } = useCursorState()

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
            <motion.div style={instagramPull}>
              <Squircle
                className="widget-instagram flex size-48 h-full flex-col justify-between p-6 shadow-lg shadow-sm"
                cornerRadius={CORNER_RADIUS}
                cornerSmoothing={CORNER_SMOOTHING}
              >
                <FaInstagram className="h-12 w-12 text-white drop-shadow-md" />
                <span className="text-left font-bold text-base text-white drop-shadow-sm">Instagram</span>
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
            <motion.div style={linkedinPull}>
              <Squircle
                className="widget-linkedin flex size-48 h-full flex-col justify-between p-6 shadow-lg shadow-sm"
                cornerRadius={CORNER_RADIUS}
                cornerSmoothing={CORNER_SMOOTHING}
              >
                <FaLinkedin className="h-12 w-12 text-white drop-shadow-md" />
                <span className="text-left font-bold text-base text-white drop-shadow-sm">LinkedIn</span>
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
            <motion.div style={discordPull}>
              <Squircle
                className="widget-discord flex size-48 h-full flex-col justify-between p-6 shadow-lg shadow-sm"
                cornerRadius={CORNER_RADIUS}
                cornerSmoothing={CORNER_SMOOTHING}
              >
                <FaDiscord className="h-12 w-12 text-white drop-shadow-md" />
                <span className="text-left font-bold text-base text-white drop-shadow-sm">
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
            <motion.div style={githubPull}>
              <Squircle
                className="widget-github flex size-48 h-full flex-col justify-between p-6 shadow-lg shadow-sm"
                cornerRadius={CORNER_RADIUS}
                cornerSmoothing={CORNER_SMOOTHING}
              >
                <FaGithub className="h-12 w-12 text-white drop-shadow-md" />
                <span className="text-left font-bold text-base text-white drop-shadow-sm">GitHub</span>
              </Squircle>
            </motion.div>
          </Link>
        </div>
      </div>

      <Cursor
        className="cursor"
        magnetic
        style={{
          borderRadius: 10,
          mixBlendMode: zone === 'overlay' ? 'difference' : 'multiply',
        }}
        variants={{
          default: {
            backgroundColor: zone === 'overlay' ? '#eee' : '#7e7e7e',
          },
          pointer: {
            backgroundColor: zone === 'overlay' ? '#fff' : '#ddd',
          },
        }}
      />
    </main>
  )
}
