"use client"

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"

import {
  Plane,
  Calendar,
  Video,
  Zap,
  Building2,
  Utensils,
  Code2,
  Database,
} from "lucide-react"

import { useRef } from "react"

/* ================= DATA ================= */

const itemsLeft = [
  {
    icon: Plane,
    label: "Travel",
    desc: "Booking & trip systems",
  },
  {
    icon: Calendar,
    label: "Events",
    desc: "Modern event platforms",
  },
  {
    icon: Video,
    label: "Entertainment",
    desc: "Streaming experiences",
  },
  {
    icon: Zap,
    label: "EV Systems",
    desc: "Smart charging platforms",
  },
  {
    icon: Building2,
    label: "Real Estate",
    desc: "Property management",
  },
  {
    icon: Utensils,
    label: "Food",
    desc: "Restaurant ecosystems",
  },
]

const itemsRight = [
  {
    icon: Code2,
    label: "Java",
    desc: "Enterprise backend",
  },
  {
    icon: Code2,
    label: "Golang",
    desc: "High performance APIs",
  },
  {
    icon: Code2,
    label: "C#",
    desc: "Scalable systems",
  },
  {
    icon: Database,
    label: "SQL Server",
    desc: "Database architecture",
  },
  {
    icon: Code2,
    label: "Flask",
    desc: "Python microservices",
  },
  {
    icon: Database,
    label: "MySQL",
    desc: "Reliable storage",
  },
]

const iconColors = [
  "text-indigo-500",
  "text-emerald-500",
  "text-sky-500",
  "text-violet-500",
]

/* ================= PARTICLES ================= */

const particles = Array.from({ length: 20 }).map((_, i) => ({
  left: `${(i * 11) % 100}%`,
  top: `${(i * 17) % 100}%`,
}))

/* ================= MAIN ================= */

export default function IndustryPremium() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yLeft = useTransform(
    scrollYProgress,
    [0, 1],
    [80, -40]
  )

  const yRight = useTransform(
    scrollYProgress,
    [0, 1],
    [-40, 80]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.96, 1]
  )

  return (
    <div ref={ref} className="relative">
      <motion.section
        style={{ scale }}
        className="
          relative
          overflow-hidden
          bg-white
          py-32 md:py-44
          px-6
        "
      >
        {/* 🔥 BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-[#f5f5f7] to-white" />

        {/* 🔥 GRID */}
        <motion.div
          animate={{
            backgroundPosition: [
              "0px 0px",
              "80px 80px",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute inset-0 opacity-[0.3]
            bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]
            bg-[size:40px_40px]
          "
        />

        {/* 🔥 NOISE */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

        {/* 🔥 BLOBS */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[-200px]
            left-[-200px]
            w-[600px]
            h-[600px]
            rounded-full
            bg-indigo-300/20
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-200px]
            right-[-200px]
            w-[600px]
            h-[600px]
            rounded-full
            bg-sky-300/20
            blur-3xl
          "
        />

        {/* 🔥 CENTER GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[900px]
            h-[900px]
            rounded-full
            bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)]
            blur-3xl
          "
        />

        {/* 🔥 PARTICLES */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-1.5
              h-1.5
              rounded-full
              bg-black/20
              blur-[1px]
            "
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto">
          {/* 🔥 HEADING */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              clipPath: "inset(0 0 100% 0)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
            }}
            transition={{
              duration: 1,
            }}
            className="max-w-3xl mb-24"
          >
            <h2
              className="
                text-[46px]
                md:text-[64px]
                leading-[0.95]
                tracking-tight
                font-semibold
                bg-gradient-to-b
                from-black
                via-slate-800
                to-slate-500
                bg-clip-text
                text-transparent
              "
            >
              Industry & Technology
            </h2>

            <p className="mt-7 text-[19px] text-[#6e6e73] leading-relaxed max-w-2xl">
              We craft scalable platforms, premium
              experiences, and powerful systems that
              help businesses grow faster with modern
              digital products.
            </p>
          </motion.div>

          {/* 🔥 GRID */}
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            {/* LEFT */}
            <motion.div
              style={{ y: yLeft }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {itemsLeft.map((item, i) => (
                <Card key={i} item={item} index={i} />
              ))}
            </motion.div>

            {/* 🔥 CENTER MOCKUP */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="hidden lg:flex justify-center relative"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-indigo-500/10 blur-3xl scale-150" />

              {/* device */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  w-[340px]
                  h-[620px]
                  rounded-[42px]
                  border border-white/30
                  ring-1 ring-black/[0.03]
                  bg-white/70
                  backdrop-blur-3xl
                  shadow-[0_30px_100px_rgba(0,0,0,0.12)]
                  overflow-hidden
                "
              >
                {/* top */}
                <div className="p-5 border-b border-black/5 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-black">
                      Analytics
                    </h4>

                    <p className="text-sm text-slate-500">
                      Dashboard overview
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/10" />
                </div>

                {/* graph */}
                <div className="p-6">
                  <div className="h-52 rounded-3xl bg-gradient-to-br from-indigo-500 to-sky-500" />

                  <div className="grid grid-cols-2 gap-4 mt-5">
                    <div className="h-24 rounded-2xl bg-black/[0.03]" />
                    <div className="h-24 rounded-2xl bg-black/[0.03]" />
                  </div>

                  <div className="mt-5 h-40 rounded-3xl bg-black/[0.03]" />
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              style={{ y: yRight }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {itemsRight.map((item, i) => (
                <Card
                  key={i}
                  item={item}
                  index={i + itemsLeft.length}
                />
              ))}
            </motion.div>
          </div>

          {/* 🔥 MARQUEE */}
          <div className="relative overflow-hidden mt-28">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-20 whitespace-nowrap"
            >
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Framer Motion",
                "Node.js",
                "MongoDB",
                "Docker",
                "PostgreSQL",
                "Firebase",
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
              ].map((item, i) => (
                <span
                  key={i}
                  className="
                    text-3xl
                    md:text-5xl
                    font-semibold
                    text-black/10
                  "
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 🔥 BOTTOM FADE */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-white" />
      </motion.section>
    </div>
  )
}

/* ================= CARD ================= */

function Card({
  item,
  index,
}: {
  item: {
    icon: any
    label: string
    desc: string
  }
  index: number
}) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 14,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
        rotateX: -6,
        rotateY: 6,
      }}
      animate={{
        y: [0, -8],
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
        relative
        group
        min-h-[180px]
        rounded-[32px]
        border border-white/30
        ring-1 ring-black/[0.03]
        bg-white/70
        backdrop-blur-2xl
        overflow-hidden
        p-7
        shadow-[0_20px_80px_rgba(0,0,0,0.06)]
      "
    >
      {/* 🔥 GLOW */}
      <div className="absolute inset-0 bg-indigo-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

      {/* 🔥 INNER LIGHT */}
      <div
        className="
          absolute inset-0 rounded-[32px]
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_70%)]
          opacity-0 group-hover:opacity-100
          transition duration-700
        "
      />

      {/* 🔥 LIGHT SWEEP */}
      <div
        className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition duration-1000
          bg-gradient-to-r
          from-transparent
          via-white/70
          to-transparent
          -translate-x-[120%]
          group-hover:translate-x-[120%]
        "
      />

      <div className="relative z-10">
        {/* ICON */}
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          className="
            w-16
            h-16
            rounded-2xl
            bg-black/[0.03]
            flex
            items-center
            justify-center
            mb-5
          "
        >
          <Icon
            className={`w-7 h-7 ${iconColors[index % 4]}`}
          />
        </motion.div>

        {/* TITLE */}
        <h3 className="text-[18px] font-semibold text-black">
          {item.label}
        </h3>

        {/* DESC */}
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {item.desc}
        </p>
      </div>
    </motion.div>
  )
}