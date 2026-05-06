"use client"

import {
  ClipboardList,
  Database,
  Cpu,
  Rocket,
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Initial Planning",
    desc: "We understand your business goals, define project scope, and create a strategic roadmap for smooth execution.",
    icon: ClipboardList,
    color: "from-sky-500 to-blue-500",
  },

  {
    number: "02",
    title: "Gathering Data",
    desc: "We collect and analyze user requirements, technical inputs, and business data to ensure accuracy.",
    icon: Database,
    color: "from-violet-500 to-fuchsia-500",
  },

  {
    number: "03",
    title: "Model Development",
    desc: "We build scalable and modern solutions focused on flexibility, performance, and maintainability.",
    icon: Cpu,
    color: "from-emerald-500 to-teal-500",
  },

  {
    number: "04",
    title: "Deployment & Maintenance",
    desc: "We deploy your solution smoothly and provide continuous monitoring, updates, and support.",
    icon: Rocket,
    color: "from-orange-400 to-amber-500",
  },
]

export default function Methodolog() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] py-28">
      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_50%)]" />

      {/* 🔥 GRID */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* 🔥 BLOBS */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-sky-300/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* 🔥 HEADING */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-5 py-2 text-sm text-slate-600 backdrop-blur-xl shadow-lg">
            Development Workflow
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[0.95] bg-gradient-to-b from-black via-slate-800 to-slate-500 bg-clip-text text-transparent">
            Our Methodology
          </h2>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            We follow a modern and structured workflow to ensure
            seamless execution, better collaboration, and premium
            digital product delivery.
          </p>
        </div>

        {/* 🔥 CIRCLE LAYOUT */}
        <div className="relative mt-28 hidden xl:flex items-center justify-center min-h-[850px]">
          {/* center circle */}
          <div
            className="
              relative z-20
              w-[420px]
              h-[420px]
              rounded-full
              border border-white/30
              bg-white/70
              backdrop-blur-3xl
              shadow-[0_30px_100px_rgba(0,0,0,0.08)]
              flex items-center justify-center
              text-center
              p-10
            "
          >
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent_70%)]" />

            <div className="relative z-10">
              <h3 className="text-4xl font-semibold tracking-tight text-black">
                Process
              </h3>

              <p className="mt-5 text-slate-500 leading-relaxed">
                Every stage is carefully planned to deliver
                scalable, reliable, and visually premium
                digital experiences.
              </p>
            </div>
          </div>

          {/* 🔥 CONNECTING LINES */}
          <div className="absolute w-[700px] h-[700px] rounded-full border border-dashed border-slate-300/70" />

          {/* 🔥 TOP LEFT */}
          <Card
            step={steps[0]}
            className="absolute left-0 top-0"
          />

          {/* 🔥 BOTTOM LEFT */}
          <Card
            step={steps[1]}
            className="absolute left-10 bottom-10"
          />

          {/* 🔥 TOP RIGHT */}
          <Card
            step={steps[2]}
            className="absolute right-0 top-0"
          />

          {/* 🔥 BOTTOM RIGHT */}
          <Card
            step={steps[3]}
            className="absolute right-10 bottom-10"
          />
        </div>

        {/* 🔥 MOBILE / TABLET */}
        <div className="xl:hidden mt-20 grid gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/30
                bg-white/70
                backdrop-blur-2xl
                p-7
                shadow-[0_20px_80px_rgba(0,0,0,0.06)]
              "
            >
              {/* glow */}
              <div className="absolute inset-0 bg-sky-500/5 blur-3xl" />

              <div className="relative z-10">
                {/* top */}
                <div className="flex items-center gap-4">
                  <div
                    className={`
                      w-14 h-14 rounded-2xl
                      bg-gradient-to-br ${step.color}
                      flex items-center justify-center
                      shadow-lg
                    `}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      {step.number}
                    </p>

                    <h3 className="text-xl font-semibold text-black">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 🔥 CARD */

function Card({
  step,
  className,
}: {
  step: any
  className?: string
}) {
  const Icon = step.icon

  return (
    <div
      className={`
        ${className}
        group
        relative
        w-[300px]
        overflow-hidden
        rounded-[32px]
        border border-white/30
        bg-white/70
        backdrop-blur-2xl
        p-8
        shadow-[0_20px_80px_rgba(0,0,0,0.06)]
        transition-all duration-500
        hover:-translate-y-2
      `}
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-sky-500/5 blur-3xl" />

      {/* light */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_70%)]" />

      <div className="relative z-10">
        {/* top */}
        <div className="flex items-center justify-between">
          <div
            className={`
              w-14 h-14 rounded-2xl
              bg-gradient-to-br ${step.color}
              flex items-center justify-center
              shadow-lg
            `}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

          <span className="text-sm text-slate-400">
            {step.number}
          </span>
        </div>

        {/* title */}
        <h3 className="mt-6 text-2xl font-semibold text-black">
          {step.title}
        </h3>

        {/* desc */}
        <p className="mt-4 text-slate-500 leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  )
}