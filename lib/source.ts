import { docs, events } from '@/.source'
import { shuffle } from 'es-toolkit'
import { loader } from 'fumadocs-core/source'

export const docsSource = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFolder(node) {
      if (node.name === '지난 위너들') {
        node.children = shuffle(node.children)
      }
      return node
    },
  },
})

export const eventsSource = loader({
  baseUrl: '/events',
  source: events.toFumadocsSource(),
})
