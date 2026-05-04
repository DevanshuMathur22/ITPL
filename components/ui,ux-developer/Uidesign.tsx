"use client"

import { Users, Clock, Wallet } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Visual Design",
    points: [
      "Aesthetic appeal and usability",
      "Suitable image carving",
      "Flawless typography, spacing & layout",
      "Design systems & style guides",
      "Brand identity & logo design",
    ],
  },
  {
    icon: Clock,
    title: "Market & User Research",
    points: [
      "Qualitative & quantitative research",
      "Focus groups",
      "Customer journey mapping",
      "Competitive analysis",
      "User personas & empathy mapping",
    ],
  },
  {
    icon: Wallet,
    title: "UX Audit",
    points: [
      "Rapid prototyping",
      "Illustrations & iconography",
      "Usability issue fixing",
      "Accessibility improvements",
        "Performance optimization",
    ],
  },
]

export default function Uidesign() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-500 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f]">
            Emotionally Intelligent UI/UX Design Services
          </h2>

          <p className="mt-6 text-gray-600">
            We craft intuitive, user-centered designs that enhance engagement
            and elevate your digital experience through research-driven design.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {services.map((item, i) => {
            const Icon = item.icon

            return (
              <div
                key={i}
                className="
                  p-8 rounded-2xl
                  bg-gradient-to-br from-gray-100 to-pink-100
                  border border-gray-200
                  shadow-sm
                  hover:shadow-xl hover:-translate-y-2
                  transition
                "
              >

                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-300">
                  <Icon className="w-7 h-7 text-gray-700" />
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-xl font-semibold text-[#020202]">
                  {item.title}
                </h3>

                {/* POINTS */}
                <ul className="mt-4 space-y-3">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="mt-1 w-2 h-2 bg-black rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}