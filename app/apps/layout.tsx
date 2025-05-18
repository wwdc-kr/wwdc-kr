import { baseOptions } from '@/app/layout.config'
import { appsSource } from '@/lib/source'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={appsSource.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  )
}
