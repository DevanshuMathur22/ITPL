"use client"

import { useEffect, useState } from "react"

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[999]"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    >
      <div className="w-6 h-6 rounded-full bg-black/10 backdrop-blur-md border border-white/40 transition-transform duration-150" />
    </div>
  )
}