import { redirect } from 'next/navigation'

export default function ChallengApplyingPage() {
  redirect('https://developer.apple.com/kr/swift-student-challenge')
}

// 정적 내보내기를 위한 설정
export const dynamic = 'force-static'
export const revalidate = false
