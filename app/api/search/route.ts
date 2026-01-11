import { createFromSource } from 'fumadocs-core/search/server'
import { docsSource } from '@/lib/source'

export const dynamic = 'force-static'
export const revalidate = false

// Use staticGET for static exports
export const { staticGET: GET } = createFromSource(docsSource)
