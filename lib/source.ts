import { docs } from '@/.source'
import { shuffle } from 'es-toolkit'
import { loader } from 'fumadocs-core/source'

export const source = loader({

  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFolder(node) {
      if (node.name === 'Winners') {
        node.children = shuffle(node.children)
      }
      return node
    },
  },
})
