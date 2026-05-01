"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function CareerHero() {
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 400], [0, 80])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7])

  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMove = (e: any) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientY / innerHeight - 0.5) * 8
    const y = (e.clientX / innerWidth - 0.5) * -8
    setRotate({ x, y })
  }

  return (
    <section
      onMouseMove={handleMove}
      className="relative min-h-[95vh] flex items-center px-6 md:px-16 overflow-hidden bg-white"
    >

      {/* 🔥 SOFT LIGHT BG */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(120deg, #f5f5f7, #ffffff)",
            "linear-gradient(120deg, #eef1f5, #ffffff)",
            "linear-gradient(120deg, #f5f5f7, #eef1f5)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0"
      />

      {/* 🔥 LIGHT GLOW */}
      <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-orange-400/10 blur-3xl rounded-full" />

      {/* CONTENT */}
      <motion.div
        style={{
          y,
          opacity,
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center"
      >

        {/* LEFT */}
        <div>

          <p className="text-sm text-gray-500 mb-4 tracking-wide">
            Be a Part of Our
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-black">
            Talent{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Network
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-lg text-base md:text-lg leading-relaxed">
            We’re here to guide you toward your dreams with a diversity-
            inclusive culture, real-world projects, and rapid growth opportunities.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">

            {/* PRIMARY */}
            <Link href="/careers">
              <button className="
                px-7 py-3 rounded-full
                bg-gradient-to-r from-orange-500 to-red-500
                text-white font-medium
                hover:scale-105 hover:shadow-xl
                transition
              ">
                Check Openings
              </button>
            </Link>

            {/* SECONDARY */}
            <Link href="/about#team">
              <button className="
                px-7 py-3 rounded-full
                border border-gray-300
                hover:border-orange-500 hover:text-orange-500
                transition
              ">
                Meet Team
              </button>
            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative w-full h-[350px] md:h-[520px] flex items-center justify-center"
>

  {/* 🔥 BACK GLOW */}
  <div className="absolute w-[80%] h-[80%] bg-orange-400/20 blur-[120px] rounded-full" />

  {/* 🔥 GLASS CARD */}
  <div className="
    relative w-full h-full
    rounded-3xl
    bg-white/40 backdrop-blur-xl
    border border-white/30
    shadow-2xl
    overflow-hidden
  ">

    {/* FLOAT IMAGE */}
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute inset-0"
    >
      <Image
        src="/image/talent.jpg"
        alt="Talent"
        fill
        className="object-contain p-6"
      />
    </motion.div>

  </div>

  {/* 🔥 FLOATING DOTS (extra premium feel) */}
  <div className="absolute top-10 left-10 w-3 h-3 bg-orange-500 rounded-full animate-ping" />
  <div className="absolute bottom-10 right-10 w-2 h-2 bg-red-500 rounded-full animate-ping" />

</motion.div>
</motion.div>
      {/* SCROLL */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-400"
      >
        ↓ Scroll
      </motion.div>

    </section>
  )
}