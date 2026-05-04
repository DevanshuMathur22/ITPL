"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const jobs = [
  {
    title: "Digital Marketing Analyst",
    skills: [
      "Proficiency in Paid Marketing tools and platforms",
      "Expertise in SEO",
      "Graphic design skills",
      "Data analysis and reporting",
      "Content creation and copywriting",
      "Knowledge of marketing automation tools",
      "Understanding of customer segmentation and targeting",
      "Familiarity with A/B testing and conversion rate optimization",
    ],
    soft: [
      "Problem solving",
      "Communication",
      "Teamwork",
      "Adaptability",
      "Time management",
      "Creativity",
      "Critical thinking",
      "Attention to detail",
    ],
  },
  {
    title: "Node JS Developer",
    skills: ["Node.js", "API", "Database", "Version Control", "Testing", "Security", "Performance Optimization", "Cloud Services"],
    soft: ["Logic", "Debugging", "Collaboration", "Adaptability", "Time Management", "Creativity", "Critical Thinking", "Attention to Detail"],
  },
]

export default function JobDetails() {
  const [index, setIndex] = useState(0)

  const safeIndex = jobs.length ? index % jobs.length : 0
  const job = jobs[safeIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % jobs.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f5f5f7] via-[#eef2f7] to-[#f5f5f7]">

      {/* glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-400/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <AnimatePresence mode="wait">
          <motion.div
            key={safeIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >

            <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
              {job.title}
            </h1>

            <div className="mt-6">
              <button className="text-red-500 hover:underline">
                Apply Now →
              </button>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-16">

              <div>
                <h2 className="text-xl font-semibold text-blue-500 mb-6">
                  Skills
                </h2>

                <ul className="space-y-2 text-gray-600">
                  {job.skills.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-purple-500 mb-6">
                  Soft Skills
                </h2>

                <ul className="space-y-2 text-gray-600">
                  {job.soft.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}