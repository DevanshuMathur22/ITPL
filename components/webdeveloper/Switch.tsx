"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const data = [
  {
    title: "Web Development Company in London",
    desc: `We have always followed a customer-first mindset.

From day one, our goal has been to build meaningful relationships and deliver solutions that truly help businesses grow.

We focus on creating value-driven products that connect companies with their audience`,
    image: "/image/client.jpg",
  },
  {
    title: "Web Development Company in Manchester",
    desc: `As a trusted web development company in Manchester, we deliver modern and scalable websites for businesses of all sizes. Whether you need a custom website or ecommerce store, our Manchester team ensures high-quality results.`,
    image: "/image/expert.jpg",
  },
]

export default function Switch() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 px-4 bg-[#f5f5f7]">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-sm">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            {data.map((item, i) => (
              <div key={i}>

                {/* TITLE */}
                <button
                  onClick={() => setActive(i)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h3
                    className={`
                      text-xl md:text-2xl font-semibold transition
                      ${i === active ? "text-black" : "text-gray-900 group-hover:text-black"}
                    `}
                  >
                    {item.title}
                  </h3>

                  <ChevronDown
                    className={`transition ${
                      i === active ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* CONTENT */}
                <AnimatePresence>
                  {i === active && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 space-y-3"
                    >
                      {item.desc.split("\n").map((para, idx) => (
                        <p
                          key={idx}
                          className="text-[#424245] leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="border-b border-[#e5e5e7] mt-6" />

              </div>
            ))}

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[260px] md:h-[420px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={data[active].image}
                  alt=""
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
      

    </section>
  )
}