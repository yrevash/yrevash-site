'use client'

import { useState, useEffect, useCallback } from 'react'

export interface TypingLine {
  text: string
  className?: string
}

interface TypingTextProps {
  lines: TypingLine[]
  onComplete?: () => void
  speed?: number
}

export default function TypingText({ lines, onComplete, speed = 45 }: TypingTextProps) {
  const [displayLines, setDisplayLines] = useState<string[]>(lines.map(() => ''))
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [done, setDone] = useState(false)

  const handleComplete = useCallback(() => {
    setDone(true)
    onComplete?.()
  }, [onComplete])

  useEffect(() => {
    if (currentLine >= lines.length) {
      handleComplete()
      return
    }

    const line = lines[currentLine].text

    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayLines((prev) => {
          const next = [...prev]
          next[currentLine] = line.slice(0, currentChar + 1)
          return next
        })
        setCurrentChar((c) => c + 1)
      }, speed)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1)
        setCurrentChar(0)
      }, 180)
      return () => clearTimeout(timer)
    }
  }, [currentLine, currentChar, lines, speed, handleComplete])

  return (
    <div className="space-y-1">
      {lines.map((line, i) => (
        <div key={i} className={line.className}>
          {displayLines[i]}
          {i === currentLine && !done && (
            <span className="animate-blink ml-0.5 inline-block w-0.5 bg-current">&nbsp;</span>
          )}
        </div>
      ))}
    </div>
  )
}
