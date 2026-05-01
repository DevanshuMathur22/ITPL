"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  Plane,
  Calendar,
  Video,
  Zap,
  Building2,
  Utensils,
  Code2,
  Database,
} from "lucide-react"
import { useRef } from "react"

/* ================= DATA ================= */

const itemsLeft = [
  { icon: Plane, label: "Travel" },
  { icon: Calendar, label: "Events" },
  { icon: Video, label: "Entertainment" },
  { icon: Zap, label: "Electric Vehicles" },
  { icon: Building2, label: "Real Estate" },
  { icon: Utensils, label: "Food & Hospitality" },
]

const itemsRight = [
  { icon: Code2, label: "Java" },
  { icon: Code2, label: "Golang" },
  { icon: Code2, label: "C#" },
  { icon: Database, label: "SQL Server" },
  { icon: Code2, label: "Flask" },
  { icon: Database, label: "MySQL" },
]

const iconColors = [
  "text-indigo-500",
  "text-emerald-500",
  "text-sky-500",
  "text-violet-500",
]

/* ================= MAIN ================= */

export default function IndustryPremium() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yLeft = useTransform(scrollYProgress, [0, 1], [80, -40])
  const yRight = useTransform(scrollYProgress, [0, 1], [-40, 80])

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-44 px-6 overflow-hidden"
    >

      {/* 🔥 ANIMATED BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8fa] to-[#f1f1f4]" />

      {/* 🔥 MOVING GRADIENT BLOBS */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-indigo-200/30 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-sky-200/30 blur-3xl"
      />

      {/* 🔥 CENTER LIGHT PULSE */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]
        bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">

        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mb-20"
        >
          <h2 className="text-[42px] md:text-[54px] font-semibold tracking-tight text-[#1d1d1f]">
            Industry & Technology
          </h2>

          {/* 🔥 PREMIUM TEXT */}
          <p className="mt-6 text-[19px] text-[#6e6e73] leading-relaxed">
            We craft{" "}
            <span className="text-indigo-500 font-medium">
              scalable platforms
            </span>
            ,{" "}
            <span className="text-emerald-500 font-medium">
              modern solutions
            </span>{" "}
            and{" "}
            <span className="text-sky-500 font-medium">
              powerful systems
            </span>{" "}
            that help businesses{" "}
            <span className="text-black font-semibold">
              grow faster
            </span>.
          </p>
        </motion.div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">

          {/* LEFT */}
          <motion.div style={{ y: yLeft }} className="grid grid-cols-2 gap-6">
            {itemsLeft.map((item, i) => (
              <Card key={i} item={item} index={i} />
            ))}
          </motion.div>

          <div className="hidden md:block" />

          {/* RIGHT */}
          <motion.div style={{ y: yRight }} className="grid grid-cols-2 gap-6">
            {itemsRight.map((item, i) => (
              <Card key={i} item={item} index={i + itemsLeft.length} />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  )
}

/* ================= CARD ================= */

function Card({ item, index }: any) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -12, scale: 1.03 }}
      animate={{ y: [0, -6, 0] }} // floating effect
      className="
        relative group
        h-[140px] rounded-3xl
        bg-white/80 backdrop-blur-xl
        border border-white/60
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        flex flex-col items-center justify-center
        overflow-hidden
        transition-all duration-500
        hover:shadow-[0_30px_80px_rgba(99,102,241,0.2)]
      "
    >

      {/* 🔥 LIGHT SWEEP */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-700
        bg-gradient-to-r from-transparent via-white/70 to-transparent
        -translate-x-[120%] group-hover:translate-x-[120%]
      " />

      {/* 🔥 ICON */}
      <Icon className={`w-7 h-7 mb-3 ${iconColors[index % 4]}`} />

      {/* TEXT */}
      <p className="text-[15px] font-medium text-[#1d1d1f]">
        {item.label}
      </p>

    </motion.div>
  )
}