import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        🇰🇷 WWDC Winner 모임
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
}
