"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const data = [
  {
    title: "Submit Your Requirements",
    desc: "Let us know your ideas and desires, it’s secure and confidential.",
  },
  {
    title: "Discuss Project Scope",
    desc: "Our team understands your goals and suggests best solutions.",
  },
  {
    title: "Innovation First",
    desc: "We use modern tech like AI, IoT & scalable systems.",
  },
  {
    title: "Design Process",
    desc: "We create UI/UX that fits your business needs perfectly.",
  },
  {
    title: "Development Kickoff",
    desc: "From idea to launch, we handle everything smoothly.",
  },
]

export default function WhyChoose() {
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
            Why Choose Our Web Development Agency
          </h2>

          <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
            Experienced developers • Affordable pricing • SEO friendly • Fast delivery • Ongoing support
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
                  bg-white
                  rounded-2xl
                  p-6
                  shadow-sm
                  border
                  hover:shadow-xl transition
                "
              >

                {/* NUMBER */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-red-500 text-red-500 mb-4">
                  {i + 1}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-[#1d1d1f]">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
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