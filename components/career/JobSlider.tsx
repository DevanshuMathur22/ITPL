"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const jobs = [
  {
    title: "Digital Marketing Analyst",
    exp: "3+ years experience",
    slug: "digital-marketing-analyst",
  },
  {
    title: "Sr. Node JS Developer",
    exp: "2+ years experience",
    slug: "nodejs-developer",
  },
  {
    title: "WordPress Developer",
    exp: "3+ years experience",
    slug: "wordpress-developer",
  },
]

export default function JobSlider() {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % jobs.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + jobs.length) % jobs.length)
  }

  return (
    <section className="py-24 bg-[#f5f5f7]">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-4xl font-semibold text-[#1d1d1f]">
          Current Openings
        </h2>

        <p className="mt-4 text-gray-500">
          We value your talent and skills. Join our team.
        </p>

        {/* CARD */}
        <div className="mt-16 relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="
                bg-white
                rounded-2xl
                shadow-md
                p-10
                text-left
                relative
              "
            >

              {/* LEFT BORDER */}
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-red-500 rounded-full" />

              <h3 className="text-2xl font-semibold text-[#1d1d1f]">
                {jobs[index].title}
              </h3>

              <p className="mt-2 text-blue-600 text-sm">
                {jobs[index].exp}
              </p>

              {/* BUTTON */}
              <Link href={`/about/career/${jobs[index].slug}`}>
  <button className="
    mt-6 px-5 py-2 rounded-full
    bg-black text-white
    text-sm
    hover:scale-105
    transition
  ">
    Read More →
  </button>
</Link>
            </motion.div>
          </AnimatePresence>

          {/* LEFT RIGHT BUTTONS */}
          <div className="flex justify-between mt-8">

            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow hover:scale-110 transition"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow hover:scale-110 transition"
            >
              →
            </button>

          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-6">

            {jobs.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`
                  w-2.5 h-2.5 rounded-full
                  transition
                  ${i === index ? "bg-black scale-125" : "bg-gray-300"}
                `}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}