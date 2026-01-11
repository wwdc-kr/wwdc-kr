import { apps, docs, events } from 'fumadocs-mdx:collections/server'
import { loader } from 'fumadocs-core/source'

export const docsSource = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
})

export const eventsSource = loader({
  baseUrl: '/events',
  source: events.toFumadocsSource(),
})

export const appsSource = loader({
  baseUrl: '/apps',
  source: apps.toFumadocsSource(),
})
