import { redirect } from 'next/navigation'

export default function WatchPartyPage() {
  redirect('https://swift-students.notion.site/WWDC25-Watch-Party-1f64297016f5812ab4b5e6ef9a846e60?pvs=4')
}

// 정적 내보내기를 위한 설정
export const dynamic = 'force-static'
export const revalidate = false 