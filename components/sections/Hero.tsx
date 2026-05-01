"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import MagneticButton from "@/components/MagneticButton"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const { scrollY } = useScroll()

  // 🔥 layered parallax
  const yBg = useTransform(scrollY, [0, 400], [0, 120])
  const yMid = useTransform(scrollY, [0, 400], [0, 60])
  const yText = useTransform(scrollY, [0, 400], [0, 30])

  const opacity = useTransform(scrollY, [0, 200], [1, 0.85])

  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glow, setGlow] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window

    const x = (e.clientY / innerHeight - 0.5) * 12
    const y = (e.clientX / innerWidth - 0.5) * -12

    setRotate({ x, y })
    setGlow({ x: e.clientX, y: e.clientY })
  }

  const text = "Build Digital Products That Scale 🚀"

  return (
    <section
      onMouseMove={handleMove}
      className="relative h-[100vh] flex items-center justify-center text-center px-4 overflow-hidden"
    >

      {/* 🔥 BACK LAYER */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 -z-20"
      >
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-3xl top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl bottom-[-200px] right-[-200px]" />
      </motion.div>

      {/* 🔥 MID LAYER GRID */}
      <motion.div
        style={{ y: yMid }}
        className="absolute inset-0 -z-10 opacity-40"
      >
        <div className="w-full h-full bg-[radial-gradient(#00000015_1px,transparent_1px)] [background-size:22px_22px]" />
      </motion.div>

      {/* 🔥 MOUSE GLOW */}
      <div
        className="pointer-events-none absolute w-[300px] h-[300px] rounded-full bg-white/10 blur-3xl"
        style={{
          left: glow.x - 150,
          top: glow.y - 150,
        }}
      />

      {/* 🔥 CONTENT */}
      <motion.div
        style={{
          y: yText,
          opacity,
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 70 }}
        className="relative z-10"
      >

        {/* 🔥 TEXT */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          {Array.from(text).map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.025,
                duration: 0.4,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* 🔥 SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-[#6e6e73] max-w-xl mx-auto"
        >
          We design and develop high-performance web and mobile solutions
          with modern UI and smooth experience.
        </motion.p>

        {/* 🔥 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 flex justify-center gap-4"
        >
          <MagneticButton>
            <button className="px-7 py-3 rounded-full bg-black text-white hover:scale-105 transition">
              Get Started
            </button>
          </MagneticButton>

          <MagneticButton>
            <button className="px-7 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
              View Work
            </button>
          </MagneticButton>
        </motion.div>

      </motion.div>

      {/* 🔥 SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6e6e73] flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-xs">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>

    </section>
  )
}