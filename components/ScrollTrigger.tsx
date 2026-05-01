"use client"

import { useEffect } from "react"

export default function ScrollTrigger() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        document.body.classList.add("scrolled")
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}