import { docs } from '@/.source'
import { shuffle } from 'es-toolkit'
import { loader } from 'fumadocs-core/source'
import { i18n } from '@/lib/i18n';

export const source = loader({
  i18n,
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
