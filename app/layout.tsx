import './global.css'
import 'katex/dist/katex.css'

import { SquircleNoScript } from '@squircle-js/react'
import { RootProvider } from 'fumadocs-ui/provider'
import type { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '대한민국 WWDC 위너 모임',
  description: 'Apple WWDC Scholarship 수상자들의 모임입니다. Swift를 공부하는 학생들을 위한 커뮤니티를 만들어가고 있습니다.',
  openGraph: {
    title: '대한민국 WWDC 위너 모임',
    description: 'Apple WWDC Scholarship 수상자들의 모임입니다. Swift를 공부하는 학생들을 위한 커뮤니티를 만들어가고 있습니다.',
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
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans">
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
