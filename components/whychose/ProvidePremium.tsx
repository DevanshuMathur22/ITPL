"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Target, Layers, Zap, Shield } from "lucide-react"

const features = [
  {
    title: "Focus on Product",
    desc: "We invest our time into research to deliver outstanding solutions.",
    icon: Target,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Scalable Architecture",
    desc: "We build systems that grow with your business seamlessly.",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Fast Execution",
    desc: "Speed + quality = our core delivery mindset.",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Secure Systems",
    desc: "Your data and product safety is our priority.",
    icon: Shield,
    color: "from-green-400 to-teal-500",
  },
]

export default function ProvidePremium() {
  return (
    <section className="py-28 bg-[#f5f5f7] overflow-hidden">

      {/* HEADING */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold">
          What We Provide You
        </h2>

        <p className="mt-4 text-[#6e6e73]">
          We are guided by our values and strive to do well in business while doing good in our communities.
        </p>
      </div>

      {/* AUTO SCROLL */}
      <div className="overflow-hidden">

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 w-max px-6"
        >
          {[...features, ...features].map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </motion.div>

      </div>

    </section>
  )
}

/* 🔥 CARD */
function Card({ item }: any) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = (e.clientY - rect.top - rect.height / 2) / 20
    const y = (e.clientX - rect.left - rect.width / 2) / -20

    setRotate({ x, y })
  }

  const reset = () => setRotate({ x: 0, y: 0 })

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        transformPerspective: 1000,
      }}
      className="relative w-[320px] md:w-[420px] h-[220px] group shrink-0"
    >

      {/* 🔥 GLOW BORDER */}
      <div className={`
        absolute -inset-[2px]
        rounded-3xl
        bg-gradient-to-r ${item.color}
        opacity-0 group-hover:opacity-100
        blur-md transition duration-500
      `} />

      {/* CARD */}
      <div className="
        relative h-full w-full
        rounded-3xl
        bg-white/80 backdrop-blur-xl
        border border-white/40
        p-6 flex items-center gap-5
        transition duration-300
        group-hover:scale-[1.03]
      ">

        {/* ICON */}
        <div className={`
          w-14 h-14 flex items-center justify-center rounded-2xl
          bg-gradient-to-br ${item.color}
          text-white
        `}>
          <item.icon size={24} />
        </div>

        {/* TEXT */}
        <div>
          <h3 className="text-xl font-semibold text-[#1d1d1f]">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-[#424245]">
            {item.desc}
          </p>
        </div>

        {/* SHINE */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition duration-700
          bg-gradient-to-r from-transparent via-white/40 to-transparent
          -translate-x-[100%] group-hover:translate-x-[100%]
        " />

      </div>
    </motion.div>
  )
}