import { KoreanFlag } from '@/lib/flag'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center">
      <KoreanFlag width={48} height={48} />
      <h1 className="mt-6 mb-3 text-2xl font-bold">대한민국 WWDC 위너 모임</h1>
      <Link href="/docs" className="font-medium underline text-fd-foreground">
        톺아보기
      </Link>
    </main>
  )
}
