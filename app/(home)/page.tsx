'use client'

import { KoreanFlag } from '@/lib/flag'
import { Squircle } from '@squircle-js/react'
import Link from 'next/link'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const CORNER_RADIUS = 42
const CORNER_SMOOTHING = 0.6

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center">
      <KoreanFlag width={48} height={48} />
      <h1 className="mt-6 mb-12 text-2xl font-bold">Swift Student Challenge에 관심 있는 모두를 위한 커뮤니티<br/>For all students, by Swift Student Challenge winners</h1>
      
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <Link
            href="https://instagram.com/wwdc_scholars_kr"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-48"
          >
            <Squircle
              cornerRadius={CORNER_RADIUS}
              cornerSmoothing={CORNER_SMOOTHING}
              className="h-full size-48 widget-instagram shadow-lg p-6 flex flex-col justify-between shadow-sm"
            >
              <FaInstagram className="h-12 w-12 text-white drop-shadow-md" />
              <span className="text-base font-bold text-white drop-shadow-sm text-left">Instagram</span>
            </Squircle>
          </Link>

          <Link
            href="https://linkedin.com/company/community-for-swift-students"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-48"
          >
            <Squircle
              cornerRadius={CORNER_RADIUS}
              cornerSmoothing={CORNER_SMOOTHING}
              className="h-full size-48 widget-linkedin shadow-lg p-6 flex flex-col justify-between shadow-sm"
            >
              <FaLinkedin className="h-12 w-12 text-white drop-shadow-md" />
              <span className="text-base font-bold text-white drop-shadow-sm text-left">LinkedIn</span>
            </Squircle>
          </Link>

          <Link
            href="https://discord.com/invite/AES2GmPMc7"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-48"
          >
            <Squircle
              cornerRadius={CORNER_RADIUS}
              cornerSmoothing={CORNER_SMOOTHING}
              className="h-full size-48 widget-discord shadow-lg p-6 flex flex-col justify-between shadow-sm"
            >
              <FaDiscord className="h-12 w-12 text-white drop-shadow-md" />
              <span className="text-base font-bold text-white drop-shadow-sm text-left">👋Welcome!<br/>Feel free to join<br/>Discord</span>
            </Squircle>
          </Link>

          <Link href="https://github.com/wwdc-kr" target="_blank" rel="noopener noreferrer" className="block h-48">
            <Squircle
              cornerRadius={CORNER_RADIUS}
              cornerSmoothing={CORNER_SMOOTHING}
              className="h-full size-48 widget-github shadow-lg p-6 flex flex-col justify-between shadow-sm"
            >
              <FaGithub className="h-12 w-12 text-white drop-shadow-md" />
              <span className="text-base font-bold text-white drop-shadow-sm text-left">GitHub</span>
            </Squircle>
          </Link>
        </div>
      </div>
    </main>
  )
}
