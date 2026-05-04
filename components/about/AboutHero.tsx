"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AboutHero() {
  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 400], [0, 80])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7])

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
      className="relative min-h-[95vh] flex items-center px-6 md:px-16 overflow-hidden"
    >

      {/* 🔥 MOVING GRADIENT BG */}
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

      {/* 🔥 GLOW ORBS */}
      <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl" />

      {/* 🔥 CONTENT */}
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-[#6e6e73] mb-4 tracking-wide"
          >
            Enriching Lives
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight"
          >
            Through Tech{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Innovations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[#4a4a4d] max-w-lg text-base md:text-lg leading-relaxed"
          >
            From a one-man band to a worldwide leader in web & app
            development, UI/UX, and E-commerce solutions, APPNWEB
            continues to write history.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <Link href="/contact">
              <button className="
                px-7 py-3 rounded-full
                bg-black text-white
                hover:scale-105 hover:shadow-xl
                transition
              ">
                Contact Us
              </button>
            </Link>

            <Link href="/about#company">
              <button className="
                px-7 py-3 rounded-full
                border border-[#d2d2d7]
                hover:bg-black hover:text-white
                transition
              ">
                Learn More
              </button>
            </Link>
          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[350px] md:h-[520px]"
        >

          {/* FLOATING EFFECT */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0"
          >
            <Image
              src="/image/tech.jpg"
              alt="Team"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

        </motion.div>

      </motion.div>

      {/* 🔥 SCROLL INDICATOR */}
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