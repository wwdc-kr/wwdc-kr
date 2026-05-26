import { redirect } from 'next/navigation'

export default function WatchParty26Page() {
  redirect('https://developeracademy.postech.ac.kr/wwdc26-watchpartyinseoul')
}

// 정적 내보내기를 위한 설정
export const dynamic = 'force-static'
export const revalidate = false