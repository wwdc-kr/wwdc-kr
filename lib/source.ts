import { content } from 'fumadocs-mdx:collections/server'
import { loader } from 'fumadocs-core/source'
import { icons } from 'lucide-react'
import { createElement } from 'react'

function createIconElement(icon: string | undefined) {
  if (!icon) {
    return
  }
  if (icon in icons) {
    return createElement(icons[icon as keyof typeof icons])
  }
}

export const source = loader({
  baseUrl: '/',
  source: content.toFumadocsSource(),
  icon: createIconElement,
})
