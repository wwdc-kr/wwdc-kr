import { redirect } from 'next/navigation'

export default function WatchPartyPage() {
  redirect('https://luma.com/vcs8ohev')
}

// 정적 내보내기를 위한 설정
export const dynamic = 'force-static'
export const revalidate = false
