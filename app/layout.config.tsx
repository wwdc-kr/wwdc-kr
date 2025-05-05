import { KoreanFlag } from '@/lib/flag'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="flex items-center gap-2">
        <KoreanFlag />
        대한민국 WWDC 위너 모임
      </span>
    ),
  },
  links: [
    {
      type: 'main',
      text: '톺아보기',
      url: '/docs',
      active: 'nested-url',
    },
    {
      type: 'main',
      text: '이벤트',
      url: '/events',
      active: 'nested-url',
    },
  ],
}
