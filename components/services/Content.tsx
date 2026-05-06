"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const data = [
  {
    title: "Custom Software Development Company",
    desc: `We build fully customizable platforms with advanced features, integrations, and applications to help your business grow. We’re a software product development company developing innovative solutions with evolutionary computation for software development needs.`,
    image: "/image/custom.jpg",
  },
  {
    title: "Mobile App Development Company",
    desc: `Whatever your industry or requirements, we're here to help your business grow. The story of APPNWEB started in 2009. From bedroom to boardroom, two individuals challenged methods and pushed innovation. We built a team of 70+ dedicated individuals.

Our mission is to create solutions to optimize business processes and help clients become market leaders.

Our vision is to become a global IT service & solutions leader — driving innovation and shaping the future`,
    image: "/image/phone.jpg",
  },
  {
    title: "Web Development Company",
    desc: `We are a web development company that creates custom websites and web applications tailored to your business needs. Our team of experienced developers uses the latest technologies to build responsive, user-friendly, and scalable web solutions that help you achieve your online goals. Whether you need a simple website or a complex web application, we have the expertise to deliver high-quality results that exceed your expectations.`,
    image: "/image/web.jpg",
  },
  {
    title: "E-commerce Development Company",
    desc: `We are an e-commerce development company that specializes in creating custom online stores and marketplaces. Our team of skilled developers uses the latest technologies to build secure, scalable, and user-friendly e-commerce solutions that help you grow your online business. Whether you need a simple online store or a complex marketplace, we have the expertise to deliver high-quality results that exceed your expectations.`,
    image: "/image/ecommerce.jpg",
  },
  {
    title: "UI/UX Design Company",
    desc: `We are a UI/UX design company that creates beautiful and functional user interfaces for web and mobile applications. Our team of experienced designers uses the latest design principles and tools to create engaging experiences that help you achieve your business goals.`,
    image: "/image/ui.jpg",
  },
  {
    title: "Digital Marketing Company",
    desc: `We are a digital marketing company that helps businesses grow their online presence and reach their target audience. Our team of experts uses the latest strategies and tools to create effective digital marketing campaigns that drive traffic, increase conversions, and boost sales.`,
    image: "/image/marketing.jpg",
  },
  {
    title: "Saas Development Company",
    desc: `We are a SaaS development company that creates custom software solutions for businesses of all sizes. Our team of experienced developers uses the latest technologies to build scalable, secure, and user-friendly SaaS applications that help you achieve your business goals.`,
    image: "/image/saas.jpg",
  }
]

export default function Content() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 md:py-28 px-4 bg-[#f5f5f7]">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 md:p-12">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            {data.map((item, i) => (
              <div key={i}>

                <button
                  onClick={() => setActive(i)}
                  className="w-full flex items-center justify-between text-left group"
                >
                 <h3
  className={`
    text-lg md:text-2xl font-semibold transition
    ${i === active ? "text-black" : "text-gray-900 group-hover:text-black"}
  `}
>
  {item.title}
</h3>
                  <ChevronDown
                    className={`transition duration-300 ${
                      i === active ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* CONTENT */}
                <AnimatePresence>
                  {i === active && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-4 space-y-4"
                    >
                      {item.desc.split("\n").map((para, idx) => (
                       <p
  key={idx}
  className="text-[#1d1d1f] leading-relaxed text-sm md:text-base"
>
  {para}
</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="border-b border-[#e5e5e7] mt-6" />

              </div>
            ))}

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[260px] md:h-[420px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={data[active].image}
                  alt=""
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  )
}