"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const data = [
  {
    title: "We Understand Your Business",
    desc: "Deliver smarter sales and faster support with one app. Boost revenue with AI-driven sales and close deals faster.",
  },
  {
    title: "Simplified Technical Side",
    desc: "We follow a structured development approach. From programming languages to software architecture - we know it all.",
  },
  {
    title: "Transparent Communication",
    desc: "We are always open to honest feedback and transparent communication. Get round-the-clock support services and boost productivity with AI support..",
  },
  
]

export default function Why() {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return
    const width = ref.current.offsetWidth

    ref.current.scrollBy({
      left: dir === "left" ? -width / 1.3 : width / 1.3,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-24 bg-[#f5f5f7]">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <div className="text-center">
          <h2 className="text-5xl font-semibold text-[#1d1d1f]">
           Secure Your Future with Reliable
           <span className="text-red-500"> SaaS Solutions</span>
          </h2>

          <p className="mt-4 text-gray-900 max-w-3xl mx-auto">
            Take the next big leap in your industry with our delightfully robust and platform-agnostic SaaS solutions. End-to-end SaaS services with advanced digital experiences.
          </p>
        </div>

        {/* 🔥 SLIDER */}
        <div className="relative mt-16">

          <div
            ref={ref}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >

            {data.map((item, i) => (
              <div
                key={i}
                className="
                  min-w-[280px] md:min-w-[340px]
                  bg-gradient-to-tr from-white to-gray-300
                  rounded-2xl
                  p-6
                  shadow-sm
                  border
                  hover:shadow-xl transition
                "
              >

                {/* NUMBER */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-green-500 text-green-500 mb-4">
                  {i + 1}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-[#1d1d1f]">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-3 text-gray-900 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

          {/* 🔥 ARROWS */}
          <div className="absolute right-0 -bottom-14 flex gap-3">

            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 bg-white rounded-full shadow hover:scale-110 transition"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 bg-white rounded-full shadow hover:scale-110 transition"
            >
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}