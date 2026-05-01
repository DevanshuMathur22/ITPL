"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const links = [
  "Website Performance Optimization",
  "Mobile App Bug Fix & Maintenance",
  "UI/UX Redesign Programme",
]

export default function ServicePrograms() {
  return (
  <section className="relative py-24 bg-[#f5f5f7] overflow-hidden">

  {/* BG GLOW */}
  <div className="absolute inset-0">
    <div className="absolute w-[400px] h-[400px] bg-blue-400/20 blur-3xl top-[-100px] left-[-100px]" />
    <div className="absolute w-[300px] h-[300px] bg-purple-400/20 blur-3xl bottom-[-100px] right-[-100px]" />
  </div>

  {/* 🔥 RIGHT ALIGN WRAPPER */}
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-end relative">

    <div className="w-full max-w-3xl">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] text-right">
        Service Programmes
      </h2>

      {/* CARD */}
      <div
        className="
          mt-10
          rounded-3xl
          backdrop-blur-xl
          bg-white/60
          border border-white/40
          shadow-lg
          p-8
        "
      >
        <div className="space-y-5 text-lg md:text-xl">

          {links.map((item, i) => (
            <div
              key={i}
              className="
                group flex items-center justify-between
                text-blue-600 hover:text-blue-700
                transition
              "
            >
              <span className="group-hover:underline">
                {item}
              </span>

              <ChevronRight
                size={18}
                className="opacity-60 group-hover:translate-x-1 transition"
              />
            </div>
          ))}

          {/* SEE ALL */}
          <div className="pt-4 group flex items-center justify-between text-blue-600 font-medium">
            <span className="group-hover:underline">
              See all services
            </span>

            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
  )
}