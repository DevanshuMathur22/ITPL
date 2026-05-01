"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function ImageParallax() {
  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [200, 600], [0.9, 1])
  const opacity = useTransform(scrollY, [200, 600], [0.5, 1])

  return (
    <section className="py-32 flex justify-center">

      <motion.div
        style={{ scale, opacity }}
        className="w-[90%] h-[400px] rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300"
      />

    </section>
  )
}