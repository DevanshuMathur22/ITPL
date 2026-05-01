"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"


export default function WhyHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 md:px-16 overflow-hidden">

      {/* 🔥 SOFT GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff5f2] via-white to-[#f5f5f7]" />

      {/* 🔥 LIGHT GLOW */}
      <div className="absolute right-[-150px] top-[-150px] w-[400px] h-[400px] bg-orange-300/20 blur-3xl rounded-full" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-[#6e6e73] mb-4"
          >
            Leading Through Change is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-[#1d1d1f]"
          >
            What Makes Us <br /> Different
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[#6e6e73] max-w-lg"
          >
            We know business is the greatest platform for change. 
            Unveiling the latest breakthroughs and innovations in technology.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex gap-4"
          >
            <Link href="/contact">
              <button className="px-6 py-3 rounded-full bg-black text-white hover:scale-105 transition">
                Contact Us
              </button>
            </Link>

            <Link href="/about">
              <button className="px-6 py-3 rounded-full border border-[#d2d2d7] hover:bg-black hover:text-white transition">
                Learn More
              </button>
            </Link>
          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[320px] md:h-[480px]"
        >

          {/* subtle floating ? */}
          <div className="absolute top-10 left-10 text-[100px] md:text-[160px] font-bold text-orange-500/10">
            ?
          </div>

          <Image
            src="/image/guess.jpg"
            alt="Why Choose Us"
            fill
            className="object-contain"
          />

        </motion.div>

      </div>

    </section>
  )
}