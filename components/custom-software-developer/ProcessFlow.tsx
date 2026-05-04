"use client"

import { motion } from "framer-motion"

const steps = [
  { title: "Define", desc: "We understand your goals and outline a clear roadmap." },
  { title: "Validate", desc: "We test ideas and refine the approach for best results." },
  { title: "Develop", desc: "We build scalable and modern solutions." },
  { title: "Measure", desc: "We track performance and optimize continuously." },
  { title: "Learn", desc: "We improve based on insights and feedback" },
]

export default function ProcessFlow() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#c7c7d5] to-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-semibold text-[#212124]">
            Our Process
          </h2>
        </div>

        {/* SLIDER */}
        <div className="mt-16 overflow-hidden">

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35, // 🔥 slower (pehle 20 tha)
              ease: "linear",
              repeat: Infinity,
            }}
          >

            {[...steps, ...steps].map((item, i) => (
              <div
                key={i}
                className="
                  min-w-[280px] md:min-w-[320px]
                  p-6 rounded-3xl
                  backdrop-blur-xl
                  bg-white/40
                  border border-white/30
                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                  transition-all duration-300
                  
                  hover:scale-105
                  hover:bg-gradient-to-br 
                  hover:from-red-500/20 
                  hover:to-orange-400/20
                  hover:border-red-300
                "
              >

                <h3 className="text-xl font-semibold text-[#22222a]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </motion.div>

        </div>

      </div>

    </section>
  )
}