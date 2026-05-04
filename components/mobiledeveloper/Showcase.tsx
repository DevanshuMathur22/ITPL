"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Showcase() {
  return (
    <section className="relative py-24 md:py-40 bg-[#f5f5f7] overflow-hidden">

      {/* TEXT */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#64793a] bg-blend-hard-light">
          70+ individuals, 5+ countries,
          <br /> 1 reason.
        </h2>
      </div>

      {/* 🔥 MOBILE VIEW (grid) */}
      <div className="mt-12 grid grid-cols-2 gap-4 px-4 md:hidden">

        <Image src="/image/laptop.jpg" alt="" width={300} height={200} className="rounded-xl shadow-lg" />
        <Image src="/image/phone.jpg" alt="" width={150} height={300} className="shadow-lg" />
        <Image src="/image/app.jpg" alt="" width={150} height={300} className="shadow-lg" />
        <Image src="/image/ipad.jpg" alt="" width={300} height={200} className="rounded-xl shadow-lg" />

      </div>

      {/* 🔥 DESKTOP FLOATING */}
      <div className="hidden md:block">

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute left-10 top-10"
        >
          <Image src="/image/laptop.jpg" alt="" width={420} height={260} className="rounded-xl shadow-2xl" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute right-16 top-16"
        >
          <Image src="/image/phone.jpg" alt="" width={180} height={360} className="shadow-2xl" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-0 bottom-20"
        >
          <Image src="/image/app.jpg" alt="" width={220} height={420} className="shadow-2xl" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-0 bottom-10"
        >
          <Image src="/image/ipad.jpg" alt="" width={300} height={220} className="rounded-xl shadow-2xl" />
        </motion.div>

      </div>

    </section>
  )
}