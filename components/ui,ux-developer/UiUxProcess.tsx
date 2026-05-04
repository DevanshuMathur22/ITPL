"use client"

const steps = [
  {
    title: "Research",
    desc: "We understand user needs, behaviors and define the product direction.",
    points: [
      "Timeline",
      "User Interview",
      "Empathy Map",
      "User Pain Points",
      "Personas",
      "Problem Statement",
    ],
  },
  {
    title: "Design",
    desc: "We craft intuitive user experiences with structured design systems.",
    points: [
      "Competitor Analysis",
      "Affinity Diagram",
      "UX Research",
      "Information Architecture",
      "Wireframe",
    ],
  },
  {
    title: "Build & Test",
    desc: "We transform ideas into real products with testing and validation.",
    points: [
      "Prototype",
      "Inspiration",
      "Mockups",
      "Testing",
      "Go Live",
    ],
  },
]

export default function UiUxProcess() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f5f5f7] to-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="
            text-4xl md:text-5xl font-semibold
            bg-gradient-to-r from-black via-gray-700 to-gray-500
            bg-clip-text text-transparent
          ">
            From Concept to
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Launch
            </span>,
            <br /> We help you at every stage
          </h2>

          <p className="mt-6 text-gray-500">
            We follow a structured UI/UX process focused on research,
            design, and continuous improvement to deliver exceptional
            digital experiences.
          </p>
        </div>

        {/* 🔥 STEPS */}
        <div className="mt-24 space-y-24">

          {steps.map((step, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-12 items-center"
            >

              {/* LEFT */}
              <div>

                {/* step badge */}
                <span className="
                  inline-block px-3 py-1 text-xs rounded-full
                  bg-black/5 text-gray-900
                ">
                  Step {i + 1}
                </span>

                <h3 className="
                  mt-4 text-2xl md:text-3xl font-semibold
                  text-[#000000]
                ">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-900 max-w-md leading-relaxed">
                  {step.desc}
                </p>

              </div>

              {/* RIGHT */}
              <div className="grid grid-cols-2 gap-4">

                {step.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="
                      group
                      px-4 py-3
                      rounded-xl
                      bg-white/70 backdrop-blur-md
                      border border-gray-200/60
                      text-sm text-[#121213]
                      shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                      hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                      hover:-translate-y-1
                      transition
                    "
                  >

                    {/* dot */}
                    <div className="flex items-center gap-2">
                      <span className="
                        w-2 h-2 rounded-full
                        bg-gradient-to-r from-red-500 to-orange-400
                        group-hover:scale-125 transition
                      " />
                      {point}
                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}