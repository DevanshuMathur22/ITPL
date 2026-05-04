"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

export default function Hero() {
  const { scrollY } = useScroll()

  const textY = useTransform(scrollY, [0, 400], [0, 60])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9])

  const [open, setOpen] = useState(false) // 🔥 ADD

  return (
    <section
      className="
        relative min-h-[100vh] flex items-center overflow-hidden
        bg-[url('/image/culture.jpg')]
        bg-cover bg-center bg-fixed
      "
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <motion.div
        style={{ y: textY, opacity }}
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6 md:px-16
          grid md:grid-cols-2 gap-12
          items-center w-full
        "
      >

        <div className="text-white">

          <h1 className="text-4xl md:text-6xl font-semibold">
            AI/ML Development Services
          </h1>

          <p className="mt-4 text-white/80">
           Machine Learning Development
           <span>AI/ML Maintenance Services
</span>
<span>
    AI Chatbot Development Services
</span>
<span>AI & ML Mobile App Development</span>
<span>Natural Language Processing</span>
          </p>

          {/* BUTTON */}
          <button
            onClick={() => setOpen(true)}   // 🔥 ADD
            className="
              mt-8 px-7 py-3 rounded-full
              bg-white text-black font-medium
              hover:scale-105 transition
            "
          >
            Book Free Consultation
          </button>

        </div>

        <div />
      </motion.div>

      {/* 🔥 MODAL CARD */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="
              bg-white
              rounded-2xl
              p-6
              w-[90%] max-w-md
              shadow-xl
            "
          >

            <h2 className="text-xl font-semibold mb-4">
              Book Consultation
            </h2>

            <input className="input mb-3" placeholder="Name*" />
            <input className="input mb-3" placeholder="Phone*" />
            <input className="input mb-3" placeholder="Email*" />

            <button className="
              w-full bg-red-600 text-white py-2 rounded mt-3
            ">
              Submit
            </button>

          </div>

        </div>
      )}

    </section>
  )
}