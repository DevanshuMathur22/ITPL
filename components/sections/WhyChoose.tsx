"use client"

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { useRef, useState } from "react"

/* =========================
   DATA
========================= */
const items = [
  {
    title: "Agile Development",
    desc: "We follow a fast and flexible agile process to launch and scale products efficiently.",
    gradient: "from-[#e0e7ff] to-[#c7d2fe]",
    pos: { top: 0, left: 0 },
  },
  {
    title: "On-Demand Services",
    desc: "Flexible engagement models tailored to your business needs.",
    gradient: "from-[#bae6fd] to-[#7dd3fc]",
    pos: { top: 80, right: 0 },
  },
  {
    title: "Instant Support",
    desc: "24/7 support for smooth and uninterrupted development.",
    gradient: "from-[#ddd6fe] to-[#c4b5fd]",
    pos: { bottom: 100, left: 40 },
  },
  {
    title: "Fast Hiring",
    desc: "Hire top developers quickly and scale your team effortlessly.",
    gradient: "from-[#fbcfe8] to-[#f9a8d4]",
    pos: { bottom: 0, right: 40 },
  },
]

/* =========================
   MAIN
========================= */
export default function WhyChoose() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section ref={ref} className="relative py-40 px-4 overflow-hidden">

      {/* 🔥 Animated Background */}
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Why Choose Us?
          </h2>

         <p className="mt-6 max-w-md leading-relaxed text-[15px] text-[#6e6e73]">
  We deliver{" "}
  <span className="font-medium text-[#1d1d1f]">
    modern, scalable
  </span>{" "}
  and{" "}
  <span className="font-medium text-[#1d1d1f]">
    high-performance
  </span>{" "}
  digital solutions with{" "}
  <span className="font-medium text-[#1d1d1f]">
    clean UI
  </span>{" "}
  and{" "}
  <span className="font-medium text-[#1d1d1f]">
    strong architecture
  </span>{" "}
  designed to grow your business faster.
</p>
        </motion.div>

        {/* RIGHT AREA */}
        <div className="relative h-[520px]">

          {/* 🔥 CONNECT LINE */}
          <ConnectLine progress={scrollYProgress} />

          {items.map((item, i) => (
            <FloatingCard key={i} item={item} y={y} delay={i} />
          ))}

        </div>

      </div>
    </section>
  )
}

/* =========================
   ANIMATED BACKGROUND
========================= */
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          background: [
            "linear-gradient(120deg, #eef5ff, #f5f7ff)",
            "linear-gradient(120deg, #e0f2fe, #eef2ff)",
            "linear-gradient(120deg, #f5f7ff, #eef5ff)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      />

      {/* blobs */}
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-blue-200/30 blur-3xl" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-purple-200/30 blur-3xl" />

    </div>
  )
}

/* =========================
   CONNECT LINE
========================= */
function ConnectLine({ progress }: any) {
  const pathLength = useTransform(progress, [0, 1], [0, 1])

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <motion.path
        d="M40 60 C150 150, 250 0, 380 180 S600 300, 500 450"
        stroke="#c7d2fe"
        strokeWidth="2"
        fill="transparent"
        style={{ pathLength }}
      />
    </svg>
  )
}

/* =========================
   FLOATING CARD
========================= */
function FloatingCard({ item, y, delay }: any) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect()

    setPos({
      x: (e.clientX - rect.left - rect.width / 2) / 12,
      y: (e.clientY - rect.top - rect.height / 2) / 12,
    })
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay: delay * 0.15,
        duration: 0.5,
      }}
      style={{
        y,
        x: pos.x,
        rotateX: pos.y,
        rotateY: pos.x,
        ...item.pos,
      }}
      className={`
        absolute
        w-[260px] md:w-[280px]
        p-6
        rounded-3xl
        bg-gradient-to-br ${item.gradient}
        shadow-[0_25px_80px_rgba(0,0,0,0.1)]
        transition-all duration-300
        cursor-pointer
      `}
    >
      <h3 className="font-semibold text-[#1d1d1f]">
        {item.title}
      </h3>

      <p className="mt-2 text-sm text-[#374151] leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  )
}