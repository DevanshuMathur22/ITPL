export default function Methodology() {
  return (
    <section className="py-24 bg-[#dadade]">

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* 🔵 CENTER CIRCLE */}
        <div className="
          mx-auto
          w-[320px] h-[320px] md:w-[420px] md:h-[420px]
          rounded-full
          bg-[#eaf2f7]
          border-2 border-dashed border-blue-300
          flex items-center justify-center
          text-center
          px-6
        ">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Our Methodology
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base">
             As a custom software development agency, we have constructed a process to ensure seamless integration. This ensures no information is overlooked during knowledge transfer.
            </p>
          </div>
        </div>

        {/* 🔵 TOP LEFT */}
        <div className="absolute left-0 top-0 max-w-xs text-center md:text-left">
          <h3 className="text-xl text-cyan-800 font-semibold">DevOps</h3>
          <p className="mt-2 text-gray-800 text-sm">
            All our clients are our strongest asset. Fueled by curiosity, passion, and empathy for delivering products with purpose. We have a team of top-notch developers who follow DevOp
          </p>
        </div>

        {/* 🔵 TOP RIGHT */}
        <div className="absolute right-0 top-0 max-w-xs text-center md:text-right">
          <h3 className="text-xl text-fuchsia-500 font-semibold">Scrum</h3>
          <p className="mt-2 text-gray-600 text-sm">
           Driven by openness, Scrum advises teams to break work into small goals that can be completed within time-boxed iterations, called sprints - lasting from two weeks to no longer than one month.
          </p>
        </div>

        {/* 🔵 BOTTOM LEFT */}
        <div className="absolute left-0 bottom-0 max-w-xs text-center md:text-left">
          <h3 className="text-xl text-emerald-500 font-semibold">Agile</h3>
          <p className="mt-2 text-gray-600 text-sm">
            By carefully identifying the correct obstacles, planning, executing, and evaluating agile methodology works as the perfect bridge to align our offerings to your business requirements
          </p>
        </div>

        {/* 🔵 BOTTOM RIGHT */}
        <div className="absolute right-0 bottom-0 max-w-xs text-center md:text-right">
          <h3 className="text-xl text-amber-500 font-semibold">RAD</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Rapid application development to carefully identify the obstacles and craft high-quality solutions with low investments. It works as a perfect bridge to align our offerings to suit your business requirements.
          </p>
        </div>

      </div>

    </section>
  )
}