"use client"

import { useState } from "react"

const services = [
  {
    title: "Fast Iterations",
    content: `Fast Iterations

Our agile development process allows us to quickly iterate and adapt to changing requirements. We prioritize rapid prototyping and continuous feedback, ensuring that we can deliver high-quality software solutions in a timely manner.`,
  },
  {
    title: "Expenses Optimization",
    content: `Expenses Optimization

Solution for better customer experience. For over 15 years, we’ve helped the best retailers in the world transform how they connect and sell to their customers. Join our tribe and experience how an integrated supply chain can create a significant retail experience and help your business stay vital.

Orchestrate your supply chain, revolutionize your retail operations, and better understand your customers with APPNWEB, a custom software product development company.`,
  },
  {
    title: "Smart Scaling",
    content: `Smart Scaling

Our smart scaling solutions allow your applications to grow seamlessly with your business needs. Whether you're experiencing sudden traffic spikes or planning for future growth, our scalable infrastructure ensures optimal performance and user experience.`,
  },
  
  {
    title: "SaaS UI & UX",
    content: `
    Get exceptional designs and experiences with our expertly designed user flows, wireframes, and intuitive interfaces. We offer a collection of handpicked designs that exhibit the best-in-class UI/UX. Visual identity and interactive prototypes our goal is to promote user-oriented designs with easy-to-navigate dashboards. Our process of custom SaaS app development ensures the final product reflects an aesthetic appeal.`,
  },
 
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 bg-[#f5f5f7]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* 🔥 LEFT TABS */}
        <div className="space-y-4">

          {services.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`
                cursor-pointer
                rounded-xl px-6 py-5
                border transition
                ${active === i
                  ? "border-red-500 text-red-600 bg-white"
                  : "border-gray-200 text-gray-800 bg-white hover:border-gray-300"}
              `}
            >
              {item.title}
            </div>
          ))}

        </div>

        {/* 🔥 RIGHT CONTENT */}
        <div className="bg-[#ebe7df] rounded-3xl p-10">

          <h2 className="text-3xl font-semibold text-black">
            {services[active].title}
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
            {services[active].content}
          </p>

        </div>

      </div>

    </section>
  )
}