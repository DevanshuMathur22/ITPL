"use client"

import { useRef } from "react"

const data = [
  {
    no: "01",
    title: "Ring Us Up",
    desc: "Explore the best suitable position where you can make the most impact. Get in touch with our HR team.",
  },
  {
    no: "02",
    title: "Prepare",
    desc: "Sharpen your skills and learn about life at our company. Read team stories and career tips.",
  },
  {
    no: "03",
    title: "Interview",
    desc: "Meet our team and go through a smooth interview process.",
  },
]

export default function HiringSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return

    const width = scrollRef.current.offsetWidth

    scrollRef.current.scrollBy({
      left: dir === "left" ? -width / 1.2 : width / 1.2,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-28 bg-gradient-to-br from-[#f5f5f7] via-[#eef2f7] to-[#f5f5f7]">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#1d1d1f]">
          Easy Hiring{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Process
          </span>
        </h2>

        {/* SLIDER */}
        <div className="relative mt-16">

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth"
          >

            {data.map((item, i) => (
              <div
                key={i}
                className="
                  min-w-[320px] md:min-w-[380px]
                  bg-white
                  rounded-3xl
                  p-8
                  flex-shrink-0
                  relative
                  hover:shadow-xl transition
                "
              >

                {/* NUMBER */}
                <span className="absolute top-6 right-6 text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-20">
                  {item.no}
                </span>

                {/* DOT */}
                <div className="w-3 h-3 border-2 border-blue-500 rounded-full mb-6" />

                {/* TITLE */}
                <h3 className="
                  text-2xl font-semibold
                  bg-gradient-to-r from-gray-900 to-gray-600
                  bg-clip-text text-transparent
                ">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="
                  mt-4
                  text-[15px]
                  text-gray-500
                  leading-relaxed
                ">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

          {/* ARROWS */}
          <div className="absolute right-0 -bottom-12 flex gap-3">

            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 bg-white rounded-full shadow hover:scale-110 transition"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 bg-white rounded-full shadow hover:scale-110 transition"
            >
              →
            </button>

          </div>

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-16">
          {data.map((_, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 bg-gray-400 rounded-full"
            />
          ))}
        </div>

      </div>

    </section>
  )
} 