"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
 "/image/logo1.jpg",
 "/image/logo2.jpg",
 "/image/logo3.jpg",
 "/image/logo4.jpg",
 "/image/logo5.jpg",
 "/image/logo6.jpg",
]

export default function Clients() {
  return (
    <section className="py-28 px-6 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
          >
            Over{" "}
            <span className="text-blue-600">1,200+</span>{" "}
            organizations trust{" "}
            <span className="text-black">ITPL</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[#6e6e73] max-w-lg"
          >
            We help businesses grow with scalable digital solutions,
            strong engineering, and a deep focus on long-term success.
            Our team combines innovation, transparency and trust.
          </motion.p>

          {/* POINTS */}
          <div className="mt-8 space-y-4 text-[#6e6e73]">

            <p className="flex items-start gap-2">
              <span className="text-blue-600">→</span>
              Delivering tailored solutions for real business impact
            </p>

            <p className="flex items-start gap-2">
              <span className="text-purple-600">→</span>
              Data + Team + Trust = scalable growth
            </p>

            <p className="flex items-start gap-2">
              <span className="text-green-600">→</span>
              Empowering leaders and modern businesses
            </p>

          </div>

        </div>

        {/* RIGHT LOGOS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="
            relative
            rounded-3xl
            p-8
            bg-[#f5f5f7]
          "
        >

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {logos.map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="
                  bg-white
                  rounded-xl
                  p-4
                  flex items-center justify-center
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >
                <Image
                  src={logo}
                  alt="client"
                  width={120}
                  height={40}
                  className="object-contain opacity-80 hover:opacity-100 transition"
                />
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  )
}