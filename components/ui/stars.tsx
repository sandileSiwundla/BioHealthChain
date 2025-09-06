"use client"

import { useEffect, useRef } from "react"

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll(".floating-element")

    elements.forEach((element, index) => {
      const htmlElement = element as HTMLElement
      htmlElement.style.animationDelay = `${index * 0.3}s`
      htmlElement.style.animationDuration = `${2 + Math.random() * 3}s`
    })
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="floating-element absolute animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${8 + Math.random() * 2}px`,
            height: `${8 + Math.random() * 2}px`,
            borderRadius: "50%",
            backgroundColor: "black",
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}
