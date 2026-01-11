'use client'

import { Squircle } from '@squircle-js/react'
import Link from 'next/link'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { KoreanFlag } from '@/lib/flag'

const CORNER_RADIUS = 42
const CORNER_SMOOTHING = 0.6

export default function HomePage() {
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
            rel="noopener noreferrer"
            target="_blank"
          >
            <Squircle
              className="widget-instagram flex size-48 h-full flex-col justify-between p-6 shadow-lg shadow-sm"
              cornerRadius={CORNER_RADIUS}
              cornerSmoothing={CORNER_SMOOTHING}
            >
              <FaInstagram className="h-12 w-12 text-white drop-shadow-md" />
              <span className="text-left font-bold text-base text-white drop-shadow-sm">Instagram</span>
            </Squircle>
          </Link>

          <Link
            className="block h-48"
            href="https://linkedin.com/company/community-for-swift-students"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Squircle
              className="widget-linkedin flex size-48 h-full flex-col justify-between p-6 shadow-lg shadow-sm"
              cornerRadius={CORNER_RADIUS}
              cornerSmoothing={CORNER_SMOOTHING}
            >
              <FaLinkedin className="h-12 w-12 text-white drop-shadow-md" />
              <span className="text-left font-bold text-base text-white drop-shadow-sm">LinkedIn</span>
            </Squircle>
          </Link>

          <Link
            className="block h-48"
            href="https://discord.com/invite/AES2GmPMc7"
            rel="noopener noreferrer"
            target="_blank"
          >
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
          </Link>

          <Link className="block h-48" href="https://github.com/wwdc-kr" rel="noopener noreferrer" target="_blank">
            <Squircle
              className="widget-github flex size-48 h-full flex-col justify-between p-6 shadow-lg shadow-sm"
              cornerRadius={CORNER_RADIUS}
              cornerSmoothing={CORNER_SMOOTHING}
            >
              <FaGithub className="h-12 w-12 text-white drop-shadow-md" />
              <span className="text-left font-bold text-base text-white drop-shadow-sm">GitHub</span>
            </Squircle>
          </Link>
        </div>
      </div>
    </main>
  )
}
