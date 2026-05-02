"use client"

import { useState } from "react"

const services = [
  {
    title: "Software Consulting Services",
    content: `Work with proficient consultants who will help you plan for new growth and build stand-out experiences. Whether it’s platform strategy, platform adoption, or social commerce we’re available invariably to help you take a significant stride in the industry.

Bring an idea and commission a service or product. Our team of hotshot software consultants will assist you in getting any project off the ground.`,
  },
  {
    title: "Retail Chain Solutions",
    content: `Retail Chain Solutions

An effectively responsive retail chain solution for better customer experience. For over 15 years, we’ve helped the best retailers in the world transform how they connect and sell to their customers. Join our tribe and experience how an integrated supply chain can create a significant retail experience and help your business stay vital.

Orchestrate your supply chain, revolutionize your retail operations, and better understand your customers with APPNWEB, a custom software product development company.`,
  },
  {
    title: "POS Solutions",
    content: `POS Solutions

Start selling, accept payments, and keep track of your sales anytime anywhere with our POS solutions. Access secure payment gateways, easy cancellation of orders, product return, full accounting, and cash drawer. Whether you’re an established enterprise or a SOHO (Small Office/Home Office) business; get insights, real-time reporting on staff, and connect with countless apps.

Accelerate checkout, track sales, and manage your business with ease. With an intuitive and seamless client experience, easy to use for all kinds of businesses, our POS solutions can be set up in a fleet to do just what your business needs.`,
  },
  {
    title: "Route Optimization",
    content: `Route Optimization

Optimize your delivery routes and reduce operational costs with our advanced route optimization solutions. Our technology analyzes traffic patterns, delivery schedules, and vehicle capacities to create the most efficient paths for your fleet. Improve customer satisfaction, reduce fuel consumption, and enhance overall logistics performance.`,
  },
  {
    title: "Real-time Tracking Solutions",
    content: `Real-time Tracking Solutions

Track your shipments in real-time and gain valuable insights into your supply chain. Our tracking solutions provide end-to-end visibility, enabling you to make informed decisions and improve customer satisfaction.`,
  },
  {
    title: "Health Management Systems",
    content: `Health Management Systems

Streamline healthcare operations and improve patient care with our health management systems. Our solutions offer features such as electronic health records, appointment scheduling, and telemedicine capabilities, helping healthcare providers deliver efficient and effective services.`,
  },
]

export default function ServicesTabs() {
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