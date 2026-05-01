"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    title: "Website Development",
    desc: "We build fast, scalable and modern web applications tailored for performance and growth.",
  },
  {
    title: "Mobile Friendly Design",
    desc: "Every product is optimized for mobile-first experience with smooth interactions.",
  },
  {
    title: "SEO Optimization",
    desc: "Clean architecture, fast loading and SEO-ready structure for better rankings.",
  },
]

export default function AppleFAQ() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative py-28 px-4 overflow-hidden">

      {/* 🔥 BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5f5f7] to-white" />

      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="
          absolute w-[500px] h-[500px]
          bg-[radial-gradient(circle,_rgba(0,0,0,0.05)_0%,_transparent_70%)]
          blur-3xl
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="relative z-10">

        {/* 🔥 HEADING */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            More to Explore
          </h2>

          <p className="mt-4 text-[#6e6e73]">
            Discover
            <span className="text-black font-medium"> powerful solutions</span>,
            <span className="text-blue-600 font-medium"> modern design</span> and
            <span className="text-green-600 font-medium"> scalable systems</span>
            built for real growth.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="
              rounded-3xl overflow-hidden
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              transition-all duration-500
            "
          >
            {/* IMAGE */}
            <div className="relative w-full h-[180px]">
              <Image
                src="/image/support.png"
                alt="Support"
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#1d1d1f]">
                Support System
              </h3>

              <p className="mt-2 text-sm text-[#6e6e73] leading-relaxed">
                Get help for your products in one place or connect with experts instantly.
              </p>

              <button className="mt-4 text-blue-600 flex items-center gap-1 justify-center">
                Learn more <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="
              rounded-3xl overflow-hidden
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              transition-all duration-500
            "
          >
            {/* IMAGE */}
            <div className="relative w-full h-[180px]">
              <Image
                src="/image/learn.png"
                alt="Learn"
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#1d1d1f]">
                Learn & Build
              </h3>

              <p className="mt-2 text-sm text-[#6e6e73] leading-relaxed">
                Learn, create and build powerful products with guided sessions.
              </p>

              <button className="mt-4 text-blue-600 flex items-center gap-1 justify-center">
                Get started <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>

        </div>

        {/* 🔥 FEATURE CARD */}
        <div className="max-w-4xl mx-auto mb-14">
          <motion.div
            layout
            className="
              rounded-3xl p-10 text-center
              bg-white
              shadow-[0_20px_70px_rgba(0,0,0,0.08)]
            "
          >
            <h3 className="text-2xl md:text-3xl font-semibold">
              {faqs[active].title}
            </h3>

            <p className="mt-3 text-[#6e6e73] max-w-xl mx-auto">
              {faqs[active].desc}
            </p>
          </motion.div>
        </div>

        {/* 🔥 BUTTONS */}
        <div className="flex gap-3 justify-center flex-wrap">
          {faqs.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                px-5 py-2.5 rounded-full text-sm transition
                ${i === active
                  ? "bg-black text-white"
                  : "bg-white border border-[#e5e5e7] text-black"
                }
              `}
            >
              {item.title}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}