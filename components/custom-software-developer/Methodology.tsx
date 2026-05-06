"use client"

import {
  GitBranch,
  Layers3,
  Workflow,
  Rocket,
} from "lucide-react"

const methods = [
  {
    title: "DevOps",
    icon: GitBranch,
    color: "from-cyan-500 to-sky-500",
    desc: "We follow modern DevOps practices to ensure faster deployments, seamless collaboration, and reliable infrastructure management.",
  },

  {
    title: "Scrum",
    icon: Layers3,
    color: "from-fuchsia-500 to-pink-500",
    desc: "Our Scrum-based workflow helps teams break complex goals into manageable sprints for faster and transparent delivery.",
  },

  {
    title: "Agile",
    icon: Workflow,
    color: "from-emerald-500 to-teal-500",
    desc: "Agile methodology enables us to adapt quickly, improve continuously, and align every stage with business requirements.",
  },

  {
    title: "RAD",
    icon: Rocket,
    color: "from-amber-400 to-orange-500",
    desc: "Rapid Application Development allows us to prototype, iterate, and launch scalable solutions efficiently.",
  },
]

export default function Methodology() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] py-28">
      {/* 🔥 BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_50%)]" />

      {/* 🔥 GRID */}
      <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* 🔥 BLOBS */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] rounded-full bg-fuchsia-300/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* 🔥 HEADER */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-5 py-2 text-sm text-slate-600 backdrop-blur-xl shadow-lg">
            Workflow & Methodology
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[0.95] bg-gradient-to-b from-black via-slate-800 to-slate-500 bg-clip-text text-transparent">
            Our Methodology
          </h2>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            We follow a modern development workflow focused
            on collaboration, scalability, transparency, and
            faster product delivery.
          </p>
        </div>

        {/* 🔥 DESKTOP CIRCLE */}
        <div className="relative hidden xl:flex items-center justify-center min-h-[900px] mt-16">
          {/* 🔥 OUTER RING */}
          <div className="absolute w-[760px] h-[760px] rounded-full border border-dashed border-slate-300/70" />

          {/* 🔥 INNER GLOW */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.10)_0%,transparent_70%)] blur-3xl" />

          {/* 🔥 CENTER */}
          <div
            className="
              relative z-20
              w-[430px]
              h-[430px]
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
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_70%)]" />

            <div className="relative z-10">
              <h3 className="text-4xl font-semibold tracking-tight text-black">
                Development
                <br />
                Workflow
              </h3>

              <p className="mt-5 text-slate-500 leading-relaxed">
                Structured methodologies that ensure smooth
                collaboration, scalable systems, and premium
                software delivery.
              </p>
            </div>
          </div>

          {/* 🔥 TOP LEFT */}
          <MethodCard
            item={methods[0]}
            className="absolute left-0 top-0"
          />

          {/* 🔥 TOP RIGHT */}
          <MethodCard
            item={methods[1]}
            className="absolute right-0 top-0"
          />

          {/* 🔥 BOTTOM LEFT */}
          <MethodCard
            item={methods[2]}
            className="absolute left-0 bottom-0"
          />

          {/* 🔥 BOTTOM RIGHT */}
          <MethodCard
            item={methods[3]}
            className="absolute right-0 bottom-0"
          />
        </div>

        {/* 🔥 MOBILE / TABLET */}
        <div className="xl:hidden mt-20 grid gap-6">
          {methods.map((item, i) => {
            const Icon = item.icon

            return (
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
                <div className="absolute inset-0 bg-cyan-500/5 blur-3xl" />

                <div className="relative z-10">
                  {/* top */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`
                        w-14 h-14 rounded-2xl
                        bg-gradient-to-br ${item.color}
                        flex items-center justify-center
                        shadow-lg
                      `}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-semibold text-black">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-5 text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 🔥 BOTTOM FADE */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-[#f5f7fb]" />
    </section>
  )
}

/* 🔥 CARD */

function MethodCard({
  item,
  className,
}: {
  item: any
  className?: string
}) {
  const Icon = item.icon

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
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-cyan-500/5 blur-3xl" />

      {/* light */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_70%)]" />

      <div className="relative z-10">
        {/* icon */}
        <div
          className={`
            w-16 h-16 rounded-2xl
            bg-gradient-to-br ${item.color}
            flex items-center justify-center
            shadow-lg
          `}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* title */}
        <h3 className="mt-6 text-2xl font-semibold text-black">
          {item.title}
        </h3>

        {/* desc */}
        <p className="mt-4 text-slate-500 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  )
}