import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">🇰🇷 대한민국 WWDC 위너 모임</h1>
      <p className="text-fd-muted-foreground">
        <Link href="/docs" className="text-fd-foreground font-semibold underline">
          톺아보기
        </Link>{' '}
        페이지를 방문해서 더 알아보세요.
      </p>
    </main>
  )
}
