"use client"

const steps = [
  {
    title: "Explore & Requirement",
    desc: "We start by understanding your business needs and defining the roadmap.",
  },
  {
    title: "Build",
    desc: "Our developers build scalable and high-performance solutions.",
  },
  {
    title: "Launch",
    desc: "We deploy your product with full testing and optimization.",
  },
  {
    title: "Support & Maintenance",
    desc: "We ensure long-term support, updates and improvements.",
  },
  {
    title: "Evaluate & Grow",
    desc: "We analyze performance and continuously improve your product.",
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#f5f5f7]">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f]">
            Key Steps in our Development Process
          </h2>

          <p className="mt-6 text-gray-600">
            We follow a structured and streamlined development process to deliver
            high-quality digital solutions from idea to execution and beyond.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {steps.map((item, i) => (
            <div
              key={i}
              className="
                p-6 rounded-2xl
                bg-white
                border border-gray-200
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-1
                transition
              "
            >

              {/* NUMBER */}
              <div className="
                w-10 h-10
                rounded-full
                bg-red-100 text-red-600
                flex items-center justify-center
                font-semibold
              ">
                {i + 1}
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-lg font-semibold text-[#1d1d1f]">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}