export default function Methodolog() {
  return (
    <section className="py-24 bg-[#f6f7fb]">

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* 🔵 CENTER CIRCLE */}
        <div className="
          mx-auto
          w-[320px] h-[320px] md:w-[420px] md:h-[420px]
          rounded-full
          bg-gradient-to-br from-blue-100 to-blue-200
          border border-dashed border-blue-300
          shadow-[0_20px_60px_rgba(0,0,0,0.05)]
          flex items-center justify-center
          text-center px-6
        ">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f]">
              Our Methodology
            </h2>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              We follow a structured development process to ensure smooth execution,
              transparency, and efficient delivery. From planning to deployment,
              every step is optimized for quality and performance.
            </p>
          </div>
        </div>

        {/* 🔵 STEP 01 */}
        <div className="absolute left-0 top-0 max-w-xs text-center md:text-left">
          <p className="text-sm text-gray-400 mb-1">01</p>
          <h3 className="text-lg font-semibold text-[#1d1d1f]">
            Initial Planning
          </h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We understand your business goals, define project scope, and create a
            strategic roadmap to ensure successful execution.
          </p>
        </div>

        {/* 🔵 STEP 02 */}
        <div className="absolute left-[15%] bottom-0 max-w-xs text-center md:text-left">
          <p className="text-sm text-gray-400 mb-1">02</p>
          <h3 className="text-lg font-semibold text-[#1d1d1f]">
            Gathering Data
          </h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We collect and analyze all required data, user requirements, and
            technical inputs to ensure accuracy and efficiency.
          </p>
        </div>

        {/* 🔵 STEP 03 */}
        <div className="absolute right-0 top-0 max-w-xs text-center md:text-right">
          <p className="text-sm text-gray-400 mb-1">03</p>
          <h3 className="text-lg font-semibold text-[#1d1d1f]">
            Model Development
          </h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We design and develop scalable solutions using modern technologies,
            ensuring performance and flexibility.
          </p>
        </div>

        {/* 🔵 STEP 04 */}
        <div className="absolute right-[15%] bottom-0 max-w-xs text-center md:text-right">
          <p className="text-sm text-gray-400 mb-1">04</p>
          <h3 className="text-lg font-semibold text-[#1d1d1f]">
            Deployment & Maintenance
          </h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            We deploy your solution smoothly and provide continuous monitoring,
            updates, and maintenance support.
          </p>
        </div>

      </div>

    </section>
  )
}