"use client"

import { useRef, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Zap,
  ShoppingCart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogs = [
  {
    title: "POS System Cost Breakdown",
    desc: "Understand real pricing, hidden costs, and how modern POS systems scale your retail business in 2025.",
    icon: TrendingUp,
    image: "/image/smart.jpg",
    link: "/blog/pos",
  },
  {
    title: "10 Similar Platforms",
    desc: "Explore powerful alternatives with better features, performance, and flexibility for your next product.",
    icon: Zap,
    image: "/image/ecom.jpg",
    link: "/blog/platforms",
  },
  {
    title: "CRM for Gyms",
    desc: "Boost retention, automate workflows, and grow your fitness business with a smart CRM system.",
    icon: ShoppingCart,
    image: "/image/english.jpg",
    link: "/blog/crm",
  },
]

export default function BlogApple() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return

    const width = ref.current.offsetWidth * 0.9

    if (dir === "left") {
      ref.current.scrollBy({ left: -width, behavior: "smooth" })
      setActive((prev) => Math.max(prev - 1, 0))
    } else {
      ref.current.scrollBy({ left: width, behavior: "smooth" })
      setActive((prev) => Math.min(prev + 1, blogs.length - 1))
    }
  }

  return (
    <section className="py-20 md:py-24 bg-[#f5f5f7]">

      {/* 🔥 HEADING */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#1d1d1f]">
          Our Blogs
        </h2>

        <p className="mt-3 text-sm md:text-base text-[#6e6e73] max-w-xl mx-auto">
          Discover
          <span className="text-black font-medium"> insights</span>,
          <span className="text-blue-600 font-medium"> strategies</span> and
          <span className="text-green-600 font-medium"> growth ideas</span>
          to scale your business.
        </p>
      </div>

      {/* 🔥 SLIDER */}
      <div
        ref={ref}
        className="
          flex gap-4 md:gap-6
          px-4 md:px-6
          overflow-x-auto
          scroll-smooth
        "
      >
        {blogs.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className={`
              relative shrink-0
              w-[90%] sm:w-[70%] md:w-[45%]
              h-[280px] md:h-[420px]
              overflow-hidden
              transition-all duration-500
              ${i === active
                ? "opacity-100 scale-100"
                : "opacity-70 scale-[0.96]"
              }
            `}
          >
            {/* 🔥 IMAGE */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />

            {/* 🔥 CINEMATIC OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* 🔥 TEXT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

              <item.icon className="w-6 h-6 md:w-7 md:h-7 mb-3 text-yellow-300 drop-shadow" />

              <h3 className="text-xl md:text-3xl font-semibold text-white leading-tight drop-shadow-md">
                {item.title}
              </h3>

              <p className="mt-2 text-sm md:text-base text-white/90 max-w-sm drop-shadow-sm">
                {item.desc}
              </p>

            </div>

          </Link>
        ))}
      </div>

      {/* 🔥 ARROWS */}
      <div className="flex justify-center mt-8 md:mt-10 gap-4">
        <button
          onClick={() => scroll("left")}
          className="
            w-10 h-10 bg-white
            flex items-center justify-center
            shadow-md
            hover:scale-110 transition
          "
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="
            w-10 h-10 bg-white
            flex items-center justify-center
            shadow-md
            hover:scale-110 transition
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>

    </section>
  )
}