'use client'

import { Cursor, useCursorState } from 'motion-plus/react'
import { useTheme } from 'next-themes'

export function GlobalCursor() {
  const { resolvedTheme } = useTheme()
  const { zone } = useCursorState()
  const isDark = resolvedTheme === 'dark'
  const isOverlay = zone === 'overlay'

  const getBlendMode = () => {
    if (isOverlay) {
      return 'difference'
    }
    return isDark ? 'screen' : 'multiply'
  }

  const getDefaultColor = () => {
    if (isOverlay) {
      return '#eee'
    }
    return isDark ? '#888' : '#7e7e7e'
  }

  const getPointerColor = () => {
    if (isOverlay) {
      return '#fff'
    }
    return isDark ? '#aaa' : '#ddd'
  }

  return (
    <Cursor
      className="cursor"
      magnetic
      style={{
        borderRadius: 10,
        mixBlendMode: getBlendMode(),
      }}
      variants={{
        default: {
          backgroundColor: getDefaultColor(),
        },
        pointer: {
          backgroundColor: getPointerColor(),
        },
      }}
    />
  )
}
