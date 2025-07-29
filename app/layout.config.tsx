import { KoreanFlag } from '@/lib/flag'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="flex items-center gap-2">
        <KoreanFlag />
        CSS & WWDC Winners Korea
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
    {
      type: 'main',
      text: '위너들의 앱',
      url: '/apps',
      active: 'nested-url',
    },
  ],
}
