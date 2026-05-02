"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function JobHero() {
  const { scrollY } = useScroll()

  // 🔥 BACKGROUND PARALLAX (mobile safe)
  const bgY = useTransform(scrollY, [0, 600], [0, -150])

  // 🔥 CONTENT PARALLAX
  const textY = useTransform(scrollY, [0, 400], [0, 60])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85])

  // 🔥 MOUSE 3D EFFECT
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMove = (e: any) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientY / innerHeight - 0.5) * 10
    const y = (e.clientX / innerWidth - 0.5) * -10
    setRotate({ x, y })
  }

  return (
    <section
      onMouseMove={handleMove}
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >

      {/* 🔥 PARALLAX BACKGROUND IMAGE */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/image/analyst.jpg"
          alt="bg"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* 🔥 GRADIENT OVERLAY (premium feel) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 z-0" />

      {/* 🔥 CONTENT */}
      <motion.div
        style={{
          y: textY,
          opacity,
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6 md:px-16
          grid md:grid-cols-2 gap-12
          items-center w-full
        "
      >

        {/* LEFT */}
        <div>

          <h1 className="
            text-4xl md:text-6xl
            font-semibold
            text-white
            leading-tight
          ">
            Digital Marketing Analyst
          </h1>

          <p className="mt-4 text-white/90 text-lg">
            3+ years experience
          </p>

          <div className="mt-8">
            <Link href="#">
              <button className="
                px-7 py-3 rounded-lg
                bg-white text-red-600 font-medium
                hover:scale-105 hover:shadow-xl
                transition
              ">
                Join Now
              </button>
            </Link>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          style={{
            rotateX: rotate.x,
            rotateY: rotate.y,
          }}
          className="relative w-full h-[350px] md:h-[520px]"
        >

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0"
          >
            <Image
              src="/image/analyst.jpg"
              alt="Analyst"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

        </motion.div>

      </motion.div>

    </section>
  )
}