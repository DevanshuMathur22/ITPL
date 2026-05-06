"use client"

import {
  Search,
  PenTool,
  Code2,
  ShieldCheck,
} from "lucide-react"

const steps = [
  {
    title: "Discovery Phase",
    icon: Search,
    color: "from-red-500 to-orange-400",
    points: [
      "Detailed product vision",
      "Competitor & domain analysis",
      "Requirement prioritization",
      "Tech stack selection",
    ],
  },

  {
    title: "UI/UX Design",
    icon: PenTool,
    color: "from-emerald-500 to-green-400",
    points: [
      "Information architecture",
      "Research & analysis",
      "User experience design",
      "User interface design",
    ],
  },

  {
    title: "Architecture & Development",
    icon: Code2,
    color: "from-sky-500 to-indigo-500",
    points: [
      "Scalable architecture",
      "Cloud deployment",
      "API integration",
      "Performance optimization",
    ],
  },

  {
    title: "Testing & QA",
    icon: ShieldCheck,
    color: "from-amber-400 to-yellow-500",
    points: [
      "Unit testing",
      "Code review",
      "Performance testing",
      "Security & GDPR tests",
    ],
  },
]

export default function Method() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] py-28">
      {/* 🔥 BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_50%)]" />

      {/* 🔥 GRID */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* 🔥 HEADING */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 backdrop-blur-xl px-5 py-2 text-sm text-slate-600 shadow-lg">
            SaaS Development Process
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[0.95] bg-gradient-to-b from-black via-slate-800 to-slate-500 bg-clip-text text-transparent">
            How We Build
            <br />
            Scalable SaaS Products
          </h2>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            We follow a structured development process focused on
            performance, scalability, and seamless user experience.
          </p>
        </div>

        {/* 🔥 TIMELINE */}
        <div className="relative mt-24">
          {/* center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`
                    relative
                    flex
                    flex-col lg:flex-row
                    items-center
                    gap-8
                    ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}
                  `}
                >
                  {/* 🔥 CARD */}
                  <div className="w-full lg:w-[45%]">
                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[32px]
                        border border-white/30
                        bg-white/70
                        backdrop-blur-2xl
                        p-8 md:p-10
                        shadow-[0_20px_80px_rgba(0,0,0,0.06)]
                        transition-all
                        duration-500
                        hover:-translate-y-2
                      "
                    >
                      {/* glow */}
                      <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 blur-3xl transition duration-700" />

                      {/* light */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_70%)]" />

                      <div className="relative z-10">
                        {/* icon */}
                        <div
                          className={`
                            w-16 h-16 rounded-2xl
                            bg-gradient-to-br ${step.color}
                            flex items-center justify-center
                            shadow-lg
                          `}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        {/* title */}
                        <h3 className="mt-6 text-2xl md:text-3xl font-semibold text-black">
                          {step.title}
                        </h3>

                        {/* points */}
                        <div className="mt-6 space-y-4">
                          {step.points.map((point, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3"
                            >
                              <div className="mt-2 w-2 h-2 rounded-full bg-slate-400" />

                              <p className="text-slate-600 leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 🔥 CENTER DOT */}
                  <div className="hidden lg:flex relative z-10 w-16 justify-center">
                    <div
                      className={`
                        w-5 h-5 rounded-full
                        bg-gradient-to-br ${step.color}
                        shadow-[0_0_40px_rgba(59,130,246,0.5)]
                      `}
                    />
                  </div>

                  {/* spacer */}
                  <div className="hidden lg:block lg:w-[45%]" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}