"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MapPin, Users, BarChart3, User, Smartphone } from "lucide-react"

const stats = [
  { title: "Office Locations", value: 4, suffix: "+", icon: MapPin, color: "text-blue-500" },
  { title: "Team Members", value: 70, suffix: "+", icon: Users, color: "text-purple-500" },
  { title: "Years in Business", value: 14, suffix: "+", icon: BarChart3, color: "text-green-500" },
  { title: "Clients", value: 1200, suffix: "+", icon: User, color: "text-pink-500" },
  { title: "Apps Delivered", value: 750, suffix: "+", icon: Smartphone, color: "text-orange-500" },
]

export default function UltraStats() {
  const ref = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // 🔥 parallax movement
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStart(true),
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* 🔥 MOVING BACKGROUND */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-[length:300%_300%] bg-gradient-to-br from-[#f5f5f7] via-[#e8ecf3] to-[#f2f4f8]" />

      {/* 🔥 FLOATING GLOW */}
      <div className="absolute top-[-100px] left-[20%] w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-[20%] w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-3xl" />

      <motion.div
        style={{ y }}
        className="max-w-7xl mx-auto"
      >

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {stats.map((item, i) => (
            <MagneticCard key={i} delay={i * 0.15} start={start}>
              <item.icon className="w-6 h-6 text-[#6e6e73]" />

              <h3 className={`mt-4 text-3xl md:text-4xl font-semibold tracking-tight ${item.color}`}>
                {start ? <Counter end={item.value} /> : 0}{item.suffix}
              </h3>

              <p className="mt-1 text-sm text-[#6e6e73]">
                {item.title}
              </p>
            </MagneticCard>
          ))}

        </div>
      </motion.div>

    </section>
  )
}

/* =========================
   🔥 MAGNETIC CARD
========================= */
function MagneticCard({ children, delay, start }: any) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e: any) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setPos({ x: x * 0.1, y: y * 0.1 })
  }

  const reset = () => setPos({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 60 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`
      }}
      className="
        group relative
        p-6
        rounded-3xl
        backdrop-blur-xl
        bg-white/40
        border border-white/50
        shadow-[0_20px_60px_rgba(0,0,0,0.05)]
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
        transition-all duration-500
      "
    >

      {/* glow */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-500
        rounded-3xl
        bg-gradient-to-tr from-blue-200/20 via-transparent to-purple-200/20
      " />

      {children}

    </motion.div>
  )
}

/* =========================
   🔢 COUNTER
========================= */
function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const step = Math.ceil(end / 60)

    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end])

  return <>{count}</>
}