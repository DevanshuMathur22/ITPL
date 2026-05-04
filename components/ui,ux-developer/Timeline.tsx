"use client";

const steps = [
  "Interface Architecture",
  "Dynamic Prototype",
  "Editing",
  "Design Review",
  "UI Guidelines",
  "Graphic",
  "Design References",
  "Analysis",
];

export default function Timeline() {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-[#f3e9e9] py-20">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          UX Strategy <span className="text-yellow-300">Timeline</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          A structured journey from idea to execution with clear and efficient design steps.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gray-300 -translate-x-1/2" />

        <div className="flex flex-col gap-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-center w-full ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div className="w-[90%] md:w-[40%] backdrop-blur-xl bg-gradient-to-br from-yellow-100 to-[#f6e8e8] border border-white/40 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                
                <h3 className="text-lg font-semibold text-gray-900">
                  {step}
                </h3>

                <p className="text-gray-900 text-sm mt-2">
                  Structured UX step to improve user experience.
                </p>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}