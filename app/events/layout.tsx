import { baseOptions } from '@/app/layout.config'
import { eventsSource } from '@/lib/source'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={eventsSource.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  )
}
