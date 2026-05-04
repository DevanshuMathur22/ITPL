"use client"

import { useState } from "react"

const services = [
  {
    title: "Android App Development",
    content: `Android App Development

Our Android app development services cater to businesses of all sizes, delivering high-quality, scalable, and user-friendly applications. We specialize in creating custom Android apps that align with your business goals and provide an exceptional user experience. Whether you need a simple app or a complex enterprise solution, our team of experienced developers is here to bring your vision to life.`,
  },
  {
    title: "iOS App Development",
    content: `iOS App Development

Our iOS app development services are designed to help businesses create innovative and engaging applications for the Apple ecosystem. We have a proven track record of delivering high-quality iOS apps that meet the unique requirements of our clients. From concept to deployment, we work closely with you to ensure that your iOS app is not only visually appealing but also functional and user-friendly.`,
  },
  {
    title: "Fullter App Development",
    content: `Fullter App Development

ter customer experience. For over 15 years, we’ve helped the best retailers in the world transform how they connect and sell to their customers. Join our tribe and experience how an integrated supply chain can create a significant retail experience and help your business stay vital.

Orchestrate your supply chain, revolutionize your retail operations, and better understand your customers with APPNWEB, a custom software product development company.`,
  },
  
  {
    title: "Icon App Development",
    content: `Icon App Development

Create a distinctive brand identity with our icon app development services. Our team of designers and developers work together to create visually appealing and functional icons that represent your brand and enhance the user experience.`,
  },
  {
    title: "React Native App Development",
    content: `React Native App Development

Build high-performance, cross-platform mobile applications with our React Native app development services. Our experienced developers leverage the power of React Native to create seamless user experiences that work flawlessly on both iOS and Android devices.`,
  },
  {
    title: "Full Stack App Development",
    content: `Full Stack App Development

Our full stack app development services cover both front-end and back-end development, providing end-to-end solutions for your mobile application needs. We utilize the latest technologies and frameworks to build robust, scalable, and secure applications that meet your business requirements.`,
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