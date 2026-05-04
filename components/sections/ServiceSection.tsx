"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

/* DATA (2-2 pair me) */
const sections = [
  [
    {
      title: "Web Development",
      desc: "High-performance websites crafted for speed.",
      bg: "bg-[#f5f5f7]",
      image: "/image/web.jpg",
      link: "/services/web-developer",
    },
    {
      title: "Mobile Development",
      desc: "Build fast scalable mobile apps.",
      bg: "bg-black text-white",
      image: "/image/mobiledev.jpg",
      link: "/services/mobile-developer",
    },
  ],
  [
    {
      title: "SaaS Development",
      desc: "Reliable SaaS solutions.",
      bg: "bg-gradient-to-br from-orange-400 to-red-500 text-white",
      image: "/image/saas.jpg",
      link: "/services/saas",
    },
    {
      title: "Ecommerce",
      desc: "Custom ecommerce platforms.",
      bg: "bg-[#f5f5f7]",
      image: "/image/ecommerce.jpg",
      link: "/services/ecommerce",
    },
  ],
]

export default function AppleGrid() {
  return (
    <section className="w-full space-y-6 px-4 md:px-6 py-10">

      {sections.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto"
        >
          {row.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      ))}

    </section>
  )
}

/* CARD */
function Card({ item }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative rounded-3xl overflow-hidden min-h-[500px] group cursor-pointer"
    >

      {/* 🔥 BACKGROUND IMAGE */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover group-hover:scale-105 transition duration-500"
      />

      {/* 🔥 DARK / LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 p-10 h-full flex flex-col justify-between text-white">

        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            {item.title}
          </h2>

          <p className="mt-3 text-sm opacity-80 max-w-md">
            {item.desc}
          </p>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <Link
            href={item.link}
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium"
          >
           Read more
          </Link>

         
        </div>

      </div>

    </motion.div>
  )
}