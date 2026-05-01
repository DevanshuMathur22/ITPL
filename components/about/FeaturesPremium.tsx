"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Wrench, Award, Users } from "lucide-react"

const features = [
  {
    title: "Skilled Techies",
    desc: "We have a super-skilled and dedicated team of doers and believers.",
    icon: Wrench,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Award-Winning",
    desc: "We’re an industry-recognized and awarded web and app development company.",
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Equal Focus",
    desc: "At APPNWEB, we believe every idea deserves attention and execution.",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Trust",
    desc: "We value trust above all. We’re transparent, reliable, and committed to your success.",
    icon: Users,
    color: "from-green-400 to-teal-500",
  },
  {
    title: "End-to-End Solutions",
    desc: "From ideation to deployment, we provide comprehensive solutions for your digital needs.",
    icon: Users,
    color: "from-red-400 to-pink-500",
  },
]

export default function FeaturesPremium() {
  return (
    <section className="py-28 bg-[#f5f5f7] overflow-hidden">

      {/* HEADING */}
      <div className="max-w-6xl mx-auto px-6 mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Become a Next Gen Business with{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            APPNWEB
          </span>
        </h2>
      </div>

      {/* 🔥 AUTO SCROLL */}
      <div className="overflow-hidden">

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40, // speed control (kam = fast)
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
      className="relative w-[300px] md:w-[380px] h-[260px] group shrink-0"
    >

      {/* GLOW */}
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
        bg-white/70 backdrop-blur-xl
        border border-white/40
        p-6 flex flex-col justify-between
        transition duration-300
        group-hover:scale-[1.05]
      ">

        {/* ICON */}
        <div className={`
          w-14 h-14 flex items-center justify-center rounded-2xl
          bg-gradient-to-br ${item.color}
          text-white
        `}>
          <item.icon size={22} />
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