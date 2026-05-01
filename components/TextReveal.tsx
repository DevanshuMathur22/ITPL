"use client"

import { motion } from "framer-motion"

export default function TextReveal({ text }: { text: string }) {
  return (
    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.03,
            duration: 0.4,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  )
}