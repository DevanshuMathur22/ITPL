"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

const jobs = [
  { title: "Digital Marketing Analyst", subtitle: "Remote", slug: "digital-marketing-analyst" },
  { title: "WordPress Developer", subtitle: "Remote", slug: "wordpress-developer" },
]

export default function MoreOpening() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const interval = setInterval(() => {
      container.scrollBy({
        left: 1.5, // speed control
        behavior: "smooth",
      })

      // infinite loop reset
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      }
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-[#f5f5f7]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-10">
          More Openings
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden"
        >

          {/* 🔥 duplicate for infinite loop */}
          {[...jobs, ...jobs].map((job, i) => (
            <Link
              key={i}
              href={`/about/career/${job.slug}`}
              className="
                min-w-[420px]
                bg-white
                border border-gray-400
                rounded-2xl
                p-8
                flex justify-between items-center
                hover:shadow-lg transition
              "
            >

              <h3 className="text-xl font-medium text-[#1d1d1f]">
                {job.title}
              </h3>

              {/* ARROW */}
              <div className="
                w-12 h-12
                bg-red-500 text-white
                flex items-center justify-center
                rounded-md
              ">
                →
              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  )
}