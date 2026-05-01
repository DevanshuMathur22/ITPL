"use client"

import {
  Briefcase,
  Users,
  TrendingUp,
  Globe,
  Clock,
  Award
} from "lucide-react"

const data = [
  {
    icon: Briefcase,
    title: "Ownership",
    desc: "Take responsibility and lead your work with confidence.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Users,
    title: "Culture",
    desc: "Collaborative and open environment to grow together.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "Fast learning with real-world experience and projects.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    desc: "Work with clients and users across the world.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Clock,
    title: "Flexible Work",
    desc: "Balance your work and life with flexible schedules.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Award,
    title: "Benefits",
    desc: "Competitive salary, perks, and growth opportunities.",
    color: "bg-pink-50 text-pink-600",
  },
]

export default function WhyJoinGrid() {
  return (
    <section className="py-28 bg-[#f5f5f7]">

      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center  mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f]">
            Why Join 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">ITPL</span>
          </h2>

          <p className="mt-5 text-gray-800 text-lg max-w-2xl mx-auto">
            Build your career with growth, ownership, and real impact.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-28 gap-x-24">

          {data.map((item, i) => {
            const Icon = item.icon

            return (
              <div
                key={i}
                className="
                  group
                  text-center
                  px-4
                  mt-3
                  transition
                  hover:-translate-y-1
                "
              >

                {/* ICON BOX */}
                <div className={`
                  mx-auto
                  w-14 h-14
                  flex items-center justify-center
                  rounded-xl
                  ${item.color}
                  shadow-sm
                  group-hover:scale-110
                  transition mt-3
                `}>
                  <Icon size={24} />
                </div>

                {/* TITLE */}
                <h3 className="mt-14 text-xl font-semibold text-[#1d1d1f]">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-5 text-sm text-gray-800 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}