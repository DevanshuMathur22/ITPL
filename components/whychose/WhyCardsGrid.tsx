"use client"

import Image from "next/image"

const data = [
  {
    title: "Agile Methodology",
    desc: "WWe’re getting better, faster, and happier through agile methodology. We leverage agile methodology to improve business knowledge and expertise and cover the competing customer experience. Agile methodology is the perfect way to jack up our modus operandi.",
    image: "/image/metho.jpg",
    dark: true,
  },
  {
    title: "Quick Turnaround",
    desc: "We’re quick in filtering the issues that may have a negative impact on your business and brand reputation. APPNWEB offers end-to-end solutions with an aim to increase business value.",
    image: "/image/quick.jpg",
    dark: true,
  },
  {
    title: "Innovative Solutions",
    desc: "We build future-ready solutions that drive business growth.",
    image: "/image/inno.jpg",
    dark: true,
  },
  {
    title: "Quality Assurance",
    desc: "Providing quality assured services is one of our core values. Your project is our responsibility and we do everything in our power to make sure it helps you enhance your brand reputation while serving your purpose.",
    image: "/image/quility.jpg",
    dark: false,
  },
  {
    title: "Value For Money",
    desc: "Worried your idea is not ready to fight the industry competition? Our team has got you covered. Depending on the complexity of the project, our team will come up with the best suitable solutions within your budget limits.",
    image: "/image/value.jpg",
    dark: true,
  },
  {
    title: "Global Reach",
    desc: "Leverage our solutions globally from the comfort of your home. Shout our name and our team will reach out to you. Every step of your development cycle is strategized with the aim of providing maximum value to end users. This modus operandi is in the atom of our cultural DNA.",
    image: "/image/global.jpg",
    dark: false,
  },
]

export default function AppleLikeGrid() {
  return (
    <section className="py-16 bg-white px-4">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">

        {data.map((item, i) => (
          <div
            key={i}
            className="relative h-[520px] rounded-2xl overflow-hidden group"
          >

            {/* IMAGE */}
            <Image
              src={item.image}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            {/* LIGHT OVERLAY (NO BLUR FEEL) */}
            <div
              className={`
                absolute inset-0
                ${item.dark ? "bg-black/40" : "bg-white/20"}
              `}
            />

            {/* CONTENT (DOWN SHIFTED) */}
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 px-6 text-center">

              <h2
                className={`
                  text-3xl md:text-4xl font-semibold tracking-tight
                  ${item.dark ? "text-white" : "text-black"}
                `}
              >
                {item.title}
              </h2>

              <p
                className={`
                  mt-4 text-base leading-relaxed max-w-xl
                  ${item.dark ? "text-white/90" : "text-gray-800"}
                `}
              >
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}