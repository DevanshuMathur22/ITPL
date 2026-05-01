"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  {
    name: "Services",
    menu: [
      { name: "Web Development", href: "/services/web" },
      { name: "Mobile Apps", href: "/services/mobile" },
      { name: "SaaS Development", href: "/services/saas" },
      { name: "UI/UX Design", href: "/services/design" },
      { name: "Digital Marketing", href: "/services/marketing" },
    ],
  },
  {
    name: "About", href: "/about",
    menu: [
      { name: "Company", href: "/about" },
      { name: "Team", href: "/about/team" },
      { name: "Careers", href: "/about/career" },
      { name: "Why Us", href: "/about/why" },
    ],
  },
]

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">

      <div
        className="w-full max-w-6xl px-4"
        onMouseLeave={() => setActive(null)}
      >

        {/* NAV */}
        <div className="mt-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm">

          <div className="flex items-center justify-between px-6 py-3">

            <Link href="/" className="font-semibold text-lg">
              ITPL
            </Link>

            <nav className="hidden md:flex gap-10">

              {navItems.map((item) => (
                <div
                  key={item.name}
                  onMouseEnter={() => setActive(item.name)}
                  className="relative text-sm cursor-pointer text-[#1d1d1f] hover:text-black"
                >
                  {item.name}
                </div>
              ))}

            </nav>
          </div>
        </div>

        {/* 🔥 MEGA MENU */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-2 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10"
            >

              <div className="grid grid-cols-3 gap-12">

                {/* LEFT */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">
                    {active}
                  </p>
                  <h2 className="text-3xl font-semibold">
                    Explore {active}
                  </h2>
                </div>

                {/* RIGHT LINKS */}
                <div className="col-span-2 grid grid-cols-2 gap-6">

                  {navItems
                    .find((i) => i.name === active)
                    ?.menu.map((link, i) => (
                      <Link key={i} href={link.href}>
                        <motion.div
                          whileHover={{ x: 8 }}
                          className="text-sm text-[#1d1d1f] hover:text-black cursor-pointer transition"
                        >
                          {link.name}
                        </motion.div>
                      </Link>
                    ))}

                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  )
}