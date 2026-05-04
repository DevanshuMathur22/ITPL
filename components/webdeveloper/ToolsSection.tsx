"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  {
    name: "Frontend",
    items: [
      { title: "React" },
      { title: "JavaScript" },
      { title: "TypeScript" },
      { title: "Tailwind" },
      { title: "HTML5" },
      { title: "CSS3" },
    ],
  },
  {
    name: "Backend",
    items: [
      { title: "Node.js" },
      { title: "Express" },
      { title: "MongoDB" },
    ],
  },
  {
    name: "Framework",
    items: [
      { title: "Next.js" },
      { title: "NestJS" },
    ],
  },
    {
    name: "Tools",
    items: [
      { title: "Git" },
      { title: "Docker" },
      { title: "Jenkins" },
    ],
    },
]

export default function ToolsSection() {
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return
    ref.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-24 bg-[#d1dcbd]">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <div className="text-center">
          <h2 className="text-5xl font-semibold text-[#352f39]">
            Tools & Technologies
          </h2>

          <p className="mt-4 text-gray-900 max-w-2xl mx-auto">
            Our in-house designers use the latest technologies to build modern websites.
          </p>
        </div>

        {/* 🔥 CATEGORY TABS */}
        <div className="flex justify-center gap-10 mt-10">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                text-lg transition relative
                ${active === i ? "text-black" : "text-gray-900"}
              `}
            >
              {cat.name}

              {active === i && (
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-red-500 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* 🔥 CARDS */}
        <div className="mt-12 relative">

          {/* ARROWS */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#f5f5f7] shadow rounded-full p-2"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#f5f5f7] shadow rounded-full p-2"
          >
            <ChevronRight size={20} />
          </button>

          {/* SCROLL AREA */}
          <div
            ref={ref}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-10"
          >
            {categories[active].items.map((item, i) => (
              <div
                key={i}
                className="
                  min-w-[220px]
                  bg-gradient-to-tr from-[#bec7b4] to-[#b7b4c6]
                  rounded-3xl
                  p-6
                  shadow-sm
                  hover:shadow-xl
                  transition
                  text-center
                "
              >

                {/* ICON */}
                {/* <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full" /> */}

                <h3 className="font-medium text-lg">
                  {item.title}
                </h3>

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  )
}