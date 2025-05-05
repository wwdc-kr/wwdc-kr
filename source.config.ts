import { defineConfig, defineDocs } from 'fumadocs-mdx/config'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

export const docs = defineDocs({
  dir: 'content/docs',
})

export const events = defineDocs({
  dir: 'content/events',
})

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
})
