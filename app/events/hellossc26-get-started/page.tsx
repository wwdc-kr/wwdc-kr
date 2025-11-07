import { redirect } from 'next/navigation'

export default function WatchPartyPage() {
    redirect('https://luma.com/390vq8re')
}

// 정적 내보내기를 위한 설정
export const dynamic = 'force-static'
export const revalidate = false
