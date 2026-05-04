"use client"

import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Truck,
  Users,
  Gamepad2,
  Plane,
  Film,
  Home,
  Cloud,
  Newspaper,
  Activity,
  Rocket,
  Calendar,
  BatteryCharging,
  Utensils,
  Factory,
  Video,
  Store,
} from "lucide-react"

const industries = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Finance", icon: Landmark },
  { name: "eCommerce", icon: ShoppingCart },
  { name: "Education", icon: GraduationCap },
  { name: "Logistics", icon: Truck },
  { name: "Social", icon: Users },
  { name: "Games", icon: Gamepad2 },
  { name: "Travel", icon: Plane },
  { name: "Entertainment", icon: Film },
  { name: "Real Estate", icon: Home },
  { name: "SaaS", icon: Cloud },
  { name: "News", icon: Newspaper },
  { name: "Wellness", icon: Activity },
  { name: "Aviation", icon: Rocket },
  { name: "Events", icon: Calendar },
  { name: "EV", icon: BatteryCharging },
  { name: "Food", icon: Utensils },
  { name: "Manufacturing", icon: Factory },
  { name: "Media", icon: Video },
  { name: "Retail", icon: Store },
]

export default function Industries() {
  return (
    <section className="py-24 bg-[#f5f5f7]">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <div className="text-center">
          <h2 className="text-5xl font-semibold text-[#1d1d1f]">
            Industries We Serve
          </h2>
        </div>

        {/* 🔥 GRID */}
        <div className="
          mt-16
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
          gap-y-12 gap-x-6
        ">

          {industries.map((item, i) => {
            const Icon = item.icon

            return (
              <div
                key={i}
                className="
                  group flex flex-col items-center text-center
                  cursor-pointer
                "
              >

                {/* ICON CARD */}
                <div
                  className="
                    w-16 h-16 flex items-center justify-center
                    rounded-2xl
                    bg-white
                    shadow-sm
                    transition
                    group-hover:shadow-xl
                    group-hover:scale-110
                    group-hover:bg-gradient-to-br
                    group-hover:from-orange-400
                    group-hover:to-red-500
                  "
                >
                  <Icon
                    size={28}
                    className="
                      text-orange-500
                      transition
                      group-hover:text-white
                    "
                  />
                </div>

                {/* TEXT */}
                <p className="
                  mt-4 text-sm font-medium text-[#1d1d1f]
                  group-hover:text-black
                ">
                  {item.name}
                </p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}