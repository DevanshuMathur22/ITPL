"use client"

import { motion } from "framer-motion"
import {
  Briefcase,
  Users,
  Rocket,
  Smile,
  TrendingUp,
} from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  { icon: Briefcase, value: 14, suffix: "+", label: "Years of Experience", bg: "bg-[#e0e7ff]" },   // slightly deeper blue
  { icon: Rocket, value: 1850, suffix: "+", label: "Projects Delivered", bg: "bg-[#dbeafe]" },   // clean sky blue
  { icon: TrendingUp, value: 26, suffix: "M+", label: "Revenue Generated", bg: "bg-[#dcfce7]" }, // soft green but richer
  { icon: Users, value: 70, suffix: "+", label: "Team Members", bg: "bg-[#ffedd5]" },            // warm peach
  { icon: Smile, value: 1200, suffix: "+", label: "Satisfied Clients", bg: "bg-[#fce7f3]" },    // soft pink richer
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1200
    const step = value / (duration / 16)

    const interval = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(interval)
  }, [value])

  return <span>{count}{suffix}</span>
}

export default function AboutSection() {
  return (
    <section className="
      relative
      py-28 px-4
      overflow-hidden
      bg-gradient-to-b
      from-[#eef5ff]
      via-[#f5f7ff]
      to-[#ffffff]
    ">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute top-[-200px] left-1/2 -translate-x-1/2
        w-[700px] h-[700px]
        bg-blue-200/40
        blur-3xl
      " />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* 🔥 HEADING */}
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight"
        >
          Web Development Company in UK, London & Manchester
        </motion.h2>

        {/* 🔥 DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-[15px] md:text-[17px] text-[#6e6e73]"
        >
          We build fast, scalable and modern digital products that help
          businesses grow globally with clean design and strong performance.
        </motion.p>

        {/* 🔥 STATS */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">

          {stats.map((item, i) => {
            const Icon = item.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{
                  y: i % 2 === 0 ? [0, -6, 0] : [0, 6, 0],
                }}
                transition={{
                  delay: i * 0.1,
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`
                  ${item.bg}
                  group
                  rounded-3xl
                  p-6
                  flex flex-col items-center text-center
                  backdrop-blur-xl
                  border border-white/40
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  transition-all duration-300
                  hover:scale-[1.05]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                `}
              >

                {/* ICON */}
                <div className="
                  mb-4
                  w-12 h-12
                  flex items-center justify-center
                  rounded-full
                  bg-white/70
                  backdrop-blur
                ">
                  <Icon className="w-5 h-5 text-[#1d1d1f]" />
                </div>

                {/* COUNT */}
                <h3 className="text-xl md:text-2xl font-semibold">
                  <Counter value={item.value} suffix={item.suffix} />
                </h3>

                {/* LABEL */}
                <p className="text-xs md:text-sm text-[#6e6e73] mt-1">
                  {item.label}
                </p>

              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}