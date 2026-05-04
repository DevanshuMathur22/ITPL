"use client"

import { useRef, useState, useEffect } from "react"

const slides = [
  {
    title: "Standing Out with Award-Winning Design Services",
    subtitle: "SWe develop new solutions and transform the existing ones with a meticulous development process that beats the industry's best timelines. With our UI UX design company solutions expand as a digital consumer experience leader.",
    image: "/image/phone.jpg",
  },
  {
    title: "Enter into a Virtual Reality World.",
    subtitle: "ITPL is a stellar web and app development company. Offering customized SaaS development, AI/ML, Digital marketing, ecommerce solutions, and other custom software development solutions. We offer solutions across all sectors to entrepreneurs and multi-national corporates.",
    image: "/image/real.jpg",
  },
 
]

export default function Standing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  /* 🔥 ACTIVE INDEX DETECT */
  const handleScroll = () => {
    const el = containerRef.current
    if (!el) return

    const width = el.offsetWidth * 0.9
    const index = Math.round(el.scrollLeft / width)
    setActive(index)
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  /* 🔥 DOT NAV */
  const scrollTo = (i: number) => {
    const el = containerRef.current
    if (!el) return

    el.scrollTo({
      left: i * el.offsetWidth * 0.9,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-24">

      {/* 🔥 SLIDER */}
      <div
        ref={containerRef}
        className="
          flex gap-6 overflow-x-auto px-6
          snap-x snap-mandatory scroll-smooth
          no-scrollbar
        "
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="
              snap-center shrink-0
              w-[90%] md:w-[70%]
              h-[500px]
              relative rounded-3xl overflow-hidden
            "
          >
            {/* ✅ IMAGE (NO STRETCH / NO DRAG BUG) */}
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* 🔥 SOFT OVERLAY */}
            <div className="absolute inset-0 bg-black/20" />

            {/* 🔥 TEXT */}
            <div className="absolute bottom-10 left-8 text-amber-50">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-wide">
                {slide.title}
              </h2>
              <p className="mt-2 text-sm md:text-base max-w-md">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 DOTS (APPLE STYLE) */}
      <div className="flex justify-center mt-10 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onMouseEnter={() => scrollTo(i)}
            onClick={() => scrollTo(i)}
            className={`
              h-2.5 rounded-full transition-all duration-300
              ${i === active
                ? "w-8 bg-black"
                : "w-2.5 bg-black/30 hover:bg-black/50"}
            `}
          />
        ))}
      </div>

    </section>
  )
}