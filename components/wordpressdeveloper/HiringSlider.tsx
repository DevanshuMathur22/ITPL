"use client"

import { useRef } from "react"

const steps = [
  {
    no: "01",
    title: "Apply Online",
    desc: "Spotted a position that you’re interested in? Apply now. If the experience aligns we will reach out to you for a detailed conversation.",
  },
  {
    no: "02",
    title: "Technical Interview",
    desc: "The technical round is the process where things get really interesting. Technical rounds are to test your real knowledge.",
  },
  {
    no: "03",
    title: "Get Offer Letter",
    desc: "And we’re done. Time to join APPNWEB and work on projects that matter to you.",
  },
]

export default function HiringSlider() {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return
    const width = ref.current.offsetWidth

    ref.current.scrollBy({
      left: dir === "left" ? -width / 1.2 : width / 1.2,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-20 bg-[#f5f5f7]">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-[#1d1d1f]">
            The Selection Process
          </h2>
          <p className="mt-2 text-[#6e6e73]">
            Looking for young dynamic and bold thinkers.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative mt-14">

          <div
            ref={ref}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {steps.map((item, i) => (
              <div
                key={i}
                className="
                  min-w-[260px] md:min-w-[320px]
                  bg-white
                  rounded-2xl
                  p-6
                  flex-shrink-0
                  shadow-sm
                  hover:shadow-lg
                  transition
                "
              >

                {/* NUMBER */}
                <span className="text-3xl font-bold text-black/10">
                  {item.no}
                </span>

                {/* TITLE */}
                <h3 className="mt-2 text-xl font-semibold text-[#1d1d1f]">
                  {item.title}
                </h3>

                {/* SHORT TEXT */}
                <p className="
                  mt-3 text-sm text-[#6e6e73]
                  leading-relaxed
                  line-clamp-2
                ">
                  {item.desc}
                </p>

              </div>
            ))}
          </div>

          {/* ARROWS */}
          <div className="absolute right-0 -bottom-10 flex gap-3">

            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 bg-white rounded-full shadow hover:scale-110"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 bg-white rounded-full shadow hover:scale-110"
            >
              →
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}