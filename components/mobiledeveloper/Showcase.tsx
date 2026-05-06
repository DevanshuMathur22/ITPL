"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const images = [
  {
    src: "/image/laptop.jpg",
    className:
      "w-[340px] md:w-[420px] rounded-[28px]",
    float: [0, -20, 0],
    duration: 6,
  },

  {
    src: "/image/phone.jpg",
    className:
      "w-[160px] md:w-[190px] rounded-[36px]",
    float: [0, 24, 0],
    duration: 7,
  },

  {
    src: "/image/app.jpg",
    className:
      "w-[180px] md:w-[240px] rounded-[36px]",
    float: [0, -28, 0],
    duration: 8,
  },

  {
    src: "/image/ipad.jpg",
    className:
      "w-[260px] md:w-[340px] rounded-[30px]",
    float: [0, 18, 0],
    duration: 6,
  },
]

export default function Showcase() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] py-28 md:py-40">
      {/* 🔥 BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(100,121,58,0.08),transparent_55%)]" />

      {/* 🔥 GRID */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* 🔥 BLOBS */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-lime-300/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 🔥 TEXT */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-5 py-2 text-sm text-slate-600 backdrop-blur-xl shadow-lg">
            Global Digital Team
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            <span className="bg-gradient-to-b from-[#64793a] via-[#52642d] to-[#39451f] bg-clip-text text-transparent">
              70+ individuals,
              <br />
              5+ countries,
              <br />
              1 reason.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            We build premium digital products with a global
            team focused on innovation, scalability, and
            exceptional user experiences.
          </p>
        </div>

        {/* 🔥 MOBILE GRID */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:hidden">
          {images.map((image, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.03,
              }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border border-white/30
                bg-white/60
                backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              <Image
                src={image.src}
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* 🔥 DESKTOP SHOWCASE */}
        <div className="relative hidden md:block h-[900px] mt-10">
          {/* center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(100,121,58,0.12)_0%,transparent_70%)] blur-3xl" />
          </div>

          {/* 🔥 LAPTOP */}
          <motion.div
            animate={{
              y: images[0].float,
            }}
            transition={{
              duration: images[0].duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
              rotate: -1,
            }}
            className="
              absolute
              left-0
              top-12
              group
            "
          >
            <GlassImage
              src={images[0].src}
              width={420}
              height={260}
              className={images[0].className}
            />
          </motion.div>

          {/* 🔥 PHONE */}
          <motion.div
            animate={{
              y: images[1].float,
            }}
            transition={{
              duration: images[1].duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.04,
              rotate: 2,
            }}
            className="
              absolute
              right-20
              top-8
              group
            "
          >
            <GlassImage
              src={images[1].src}
              width={190}
              height={380}
              className={images[1].className}
            />
          </motion.div>

          {/* 🔥 APP */}
          <motion.div
            animate={{
              y: images[2].float,
            }}
            transition={{
              duration: images[2].duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.04,
              rotate: -2,
            }}
            className="
              absolute
              left-10
              bottom-10
              group
            "
          >
            <GlassImage
              src={images[2].src}
              width={240}
              height={440}
              className={images[2].className}
            />
          </motion.div>

          {/* 🔥 IPAD */}
          <motion.div
            animate={{
              y: images[3].float,
            }}
            transition={{
              duration: images[3].duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
              rotate: 1,
            }}
            className="
              absolute
              right-0
              bottom-0
              group
            "
          >
            <GlassImage
              src={images[3].src}
              width={340}
              height={260}
              className={images[3].className}
            />
          </motion.div>

          {/* 🔥 CENTER TEXT */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center max-w-xl">
              <h3 className="text-4xl font-semibold text-black tracking-tight">
                Designed For
                <br />
                Modern Brands
              </h3>

              <p className="mt-5 text-slate-500 leading-relaxed">
                Combining premium design systems, smooth
                interactions, and scalable engineering for
                businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-[#f5f5f7]" />
    </section>
  )
}

/* 🔥 GLASS IMAGE */

function GlassImage({
  src,
  width,
  height,
  className,
}: {
  src: string
  width: number
  height: number
  className?: string
}) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border border-white/30
        bg-white/70
        backdrop-blur-2xl
        p-2
        shadow-[0_25px_100px_rgba(0,0,0,0.12)]
      "
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_70%)]" />

      {/* image */}
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className={className}
      />
    </div>
  )
}