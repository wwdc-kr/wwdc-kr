import './global.css'
import 'katex/dist/katex.css'

import { SquircleNoScript } from '@squircle-js/react'
import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '🇰🇷 Community for Swift Students & WWDC Winners Korea',
  description: 'Apple WWDC Scholarship 수상자들이 모여 Swift를 공부하는 학생들을 위한 커뮤니티를 만들어가고 있습니다.',
  openGraph: {
    title: '🇰🇷 Community for Swift Students',
    description:
      'Apple WWDC Scholarship 수상자들이 모여 Swift를 공부하는 학생들을 위한 커뮤니티를 만들어가고 있습니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'WWDC KR',
    images: [
      {
        url: '/og-main.png',
        width: 1200,
        height: 630,
        alt: 'WWDC KR 로고',
      },
    ],
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <SquircleNoScript />
        <RootProvider
          search={{
            options: {
              type: 'static',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
