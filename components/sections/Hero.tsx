"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const { scrollY } = useScroll()

  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glow, setGlow] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // 🔥 PARALLAX
  const yBg = useTransform(scrollY, [0, 500], [0, 140])
  const yMid = useTransform(scrollY, [0, 500], [0, 80])
  const yText = useTransform(scrollY, [0, 500], [0, 40])

  // 🔥 SCALE
  const scale = useTransform(scrollY, [0, 400], [1, 1.08])

  // 🔥 OPACITY
  const opacity = useTransform(scrollY, [0, 250], [1, 0.8])

  const handleMove = (e: React.MouseEvent) => {
    if (isMobile) return

    const { innerWidth, innerHeight } = window

    const x = (e.clientY / innerHeight - 0.5) * 10
    const y = (e.clientX / innerWidth - 0.5) * -10

    setRotate({ x, y })
    setGlow({ x: e.clientX, y: e.clientY })
  }

  const text = "Build Digital Products That Scale 🚀"

  return (
    <section
      onMouseMove={handleMove}
      style={{ perspective: 1200 }}
      className="relative h-screen overflow-hidden flex items-center justify-center px-6 text-center bg-white"
    >
      {/* 🔥 VIDEO BG */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* 🔥 IMAGE BG */}
      <motion.div
        style={{ y: yBg, scale }}
        className="absolute inset-0 -z-30"
      >
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover opacity-20"
        />
      </motion.div>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] -z-20" />

      {/* 🔥 NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] -z-10" />

      {/* 🔥 GRADIENT BLOBS */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute w-[700px] h-[700px] bg-blue-500/20 blur-3xl top-[-250px] left-[-250px]" />

        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-3xl bottom-[-250px] right-[-250px]" />
      </motion.div>

      {/* 🔥 GRID */}
      <motion.div
        style={{ y: yMid }}
        className="absolute inset-0 opacity-40"
      >
        <div className="w-full h-full bg-[radial-gradient(#00000015_1px,transparent_1px)] [background-size:24px_24px]" />
      </motion.div>

      {/* 🔥 FLOATING CARDS */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="hidden md:block absolute top-24 left-20 w-40 h-40 rounded-[32px] border border-black/10 bg-white/10 backdrop-blur-2xl shadow-2xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="hidden md:block absolute bottom-24 right-20 w-52 h-52 rounded-[40px] border border-black/10 bg-white/10 backdrop-blur-2xl shadow-2xl"
      />

      {/* 🔥 MOUSE GLOW */}
      {!isMobile && (
        <div
          className="pointer-events-none absolute w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            left: glow.x - 200,
            top: glow.y - 200,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          }}
        />
      )}

      {/* 🔥 CONTENT */}
      <motion.div
        style={{
          y: yText,
          opacity,
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
        }}
        className="relative z-20 max-w-6xl mx-auto [transform-style:preserve-3d]"
      >
        {/* 🔥 BADGE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-xl px-5 py-2 text-sm text-slate-700 shadow-xl"
        >
          ✨ Award Winning Digital Agency
        </motion.div>

        {/* 🔥 HEADING */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(12px)",
            clipPath: "inset(0 0 100% 0)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            clipPath: "inset(0 0 0% 0)",
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] max-w-5xl mx-auto"
        >
          <span className="bg-gradient-to-b from-black via-slate-800 to-slate-500 bg-clip-text text-transparent">
            {text}
          </span>
        </motion.h1>

        {/* 🔥 SUBTEXT */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-8 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          We design and develop premium web experiences,
          high-performance products, and immersive interfaces
          for startups and modern brands.
        </motion.p>

        {/* 🔥 CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-5"
        >
          {/* BUTTON 1 */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="px-8 py-4 rounded-full bg-black text-white shadow-2xl"
          >
            Get Started
          </motion.button>

          {/* BUTTON 2 */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
            relative overflow-hidden rounded-full
            border border-black/10
            bg-white/60
            backdrop-blur-xl
            px-8 py-4
            text-black
            shadow-xl
            before:absolute before:inset-0
            before:bg-gradient-to-r
            before:from-transparent
            before:via-white/60
            before:to-transparent
            before:translate-x-[-120%]
            hover:before:translate-x-[120%]
            before:transition-transform
            before:duration-1000
            "
          >
            View Work
          </motion.button>
        </motion.div>

        {/* 🔥 STATS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
          }}
          className="mt-16 flex flex-wrap justify-center gap-10 text-center"
        >
          {[
            {
              value: "50+",
              label: "Projects",
            },
            {
              value: "20+",
              label: "Clients",
            },
            {
              value: "99%",
              label: "Satisfaction",
            },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl font-semibold text-black">
                {item.value}
              </h3>

              <p className="text-slate-500 mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* 🔥 SCROLL */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase">
          Scroll
        </span>

        <ChevronDown size={18} />
      </motion.div>
    </section>
  )
}