"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const data = [
  {
    title: "Our Values",
    desc: `A jump to APPNWEB. A leap of trust. As a software development company, we help digital changemakers evolve.

We are guided to follow three main values — Obsessed with Innovation. Empowered by Enthusiasm. Expect Transparency.

With an unstoppable rise in AI, ML, IoT, AR, and other technologies, we aim to give our clients end-to-end digital solutions. We’ll make your business into a brand people will love. With our value-driven approach, we believe we can make the world a better place.`,
    image: "/image/team.jpg",
  },
  {
    title: "Mission & Vision",
    desc: `Whatever your industry or requirements, we're here to help your business grow. The story of APPNWEB started in 2009. From bedroom to boardroom, two individuals challenged methods and pushed innovation. We built a team of 70+ dedicated individuals.

Our mission is to create solutions to optimize business processes and help clients become market leaders.

Our vision is to become a global IT service & solutions leader — driving innovation and shaping the future.`,
    image: "/image/work.jpg",
  },
]

export default function Switch() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 md:py-28 px-4 bg-[#f5f5f7]">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-12">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            {data.map((item, i) => (
              <div key={i}>

                <button
                  onClick={() => setActive(i)}
                  className="w-full flex items-center justify-between text-left group"
                >
                 <h3
  className={`
    text-lg md:text-2xl font-semibold transition
    ${i === active ? "text-black" : "text-gray-500 group-hover:text-black"}
  `}
>
  {item.title}
</h3>
                  <ChevronDown
                    className={`transition duration-300 ${
                      i === active ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* CONTENT */}
                <AnimatePresence>
                  {i === active && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-4 space-y-4"
                    >
                      {item.desc.split("\n").map((para, idx) => (
                       <p
  key={idx}
  className="text-[#1d1d1f] leading-relaxed text-sm md:text-base"
>
  {para}
</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="border-b border-[#e5e5e7] mt-6" />

              </div>
            ))}

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[260px] md:h-[420px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={data[active].image}
                  alt=""
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  )
}