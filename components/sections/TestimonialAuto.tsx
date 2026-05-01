"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    text: "APPNWEB delivered a scalable product with clean UI and strong performance.",
    image: "/image/user1.jpg",
  },
  {
    name: "James Carter",
    role: "Product Manager",
    text: "Fast development, clean code and very reliable team.",
    image: "/image/user2.jpg",
  },
  {
    name: "Ananya Verma",
    role: "Business Owner",
    text: "Great experience, improved performance and conversions.",
    image: "/image/user3.jpg",
  },
]

export default function AppleTestimonialsUltra() {
  return (
    <section className="py-28 bg-[#f5f5f7] overflow-hidden">

      {/* HEADING */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Client Testimonials
        </h2>
      </div>

      {/* FLOW */}
      <div className="overflow-hidden">

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 w-max px-6"
        >
          {[...testimonials, ...testimonials].map((item, i) => (
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
      className="relative w-[260px] md:w-[320px] h-[380px] group"
    >

      {/* 🔥 GRADIENT GLOW BORDER */}
      <div className="
        absolute -inset-[2px]
        rounded-3xl
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        opacity-0 group-hover:opacity-100
        blur-md transition duration-500
      " />

      {/* CARD */}
      <div
        className="
          relative
          h-full w-full
          rounded-3xl
          overflow-hidden
          bg-black
        "
      >

        {/* IMAGE */}
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* TEXT */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <p className="text-sm leading-relaxed">
            “{item.text}”
          </p>

          <div className="mt-4">
            <p className="font-semibold">{item.name}</p>
            <p className="text-xs text-white/70">{item.role}</p>
          </div>
        </div>

        {/* 🔥 SHINE EFFECT */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition duration-700
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          -translate-x-[100%] group-hover:translate-x-[100%]
        " />

      </div>
    </motion.div>
  )
}