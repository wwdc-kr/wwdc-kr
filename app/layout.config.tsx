import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { i18n } from '@/lib/i18n';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        🇰🇷 WWDC 위너 모임
      </>
    ),
  },
  links: [
    {
      type: 'main',
      text: '톺아보기',
      url: '/docs',
      active: 'nested-url',
    },
  ],
  i18n,
}
