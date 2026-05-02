"use client"

import { useState } from "react"

const data = [
  {
    title: "Work Culture",
    img: "/image/culture.jpg",
    content: `
Fun, innovative, quirky, and vibrant work with APPNWEB to make life productive and simpler.

We have a straightforward application process. If you spot a position that fits you right, complete our application and submit your resume.

We are a globally connected team focused on innovation and excellence.
    `,
  },
  {
    title: "Qualification & Experience",
    img: "/image/experience.jpg",
    content: `
• A degree in software engineering or equivalent experience  
• Understanding of website architecture  
• Knowledge of WordPress, WooCommerce  
• Experience with PHP, JavaScript, HTML, CSS  
• Familiarity with Git & version control  
. Strong problem-solving and communication skills
. Experience with WordPress plugins and themes is a plus
    `,
  },
  {
    title: "Responsibilities",
    img: "/image/responsibilities.jpg",
    content: `
• Develop and maintain backend systems  
• Collaborate with frontend developers  
• Build UI and backend services  
• Optimize performance and scalability  
• Monitor and improve system efficiency  
. Stay updated with industry trends and best practices

    `,
  },
]

export default function InfoCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {data.map((item, i) => {
          const isOpen = openIndex === i

          return (
            <div
              key={i}
              className={`
                relative rounded-3xl overflow-hidden
                transition-all duration-500
                ${isOpen ? "bg-white p-8 shadow-xl" : "h-[260px]"}
              `}
            >

              {/* 🔥 BG IMAGE (ONLY WHEN CLOSED) */}
              {!isOpen && (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />

                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                </>
              )}

              {/* CONTENT */}
              <div className={`relative z-10 ${isOpen ? "" : "p-6 text-white"}`}>

                <h3 className={`
                  text-xl font-semibold
                  ${isOpen ? "text-[#1d1d1f]" : "text-white"}
                `}>
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className={`
                  mt-4 text-sm leading-relaxed whitespace-pre-line
                  ${isOpen ? "text-[#6e6e73]" : "text-white/80 line-clamp-3"}
                `}>
                  {item.content}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : i)
                  }
                  className={`
                    mt-6 text-sm font-medium
                    ${isOpen ? "text-red-500" : "text-white"}
                  `}
                >
                  {isOpen ? "Show Less ↑" : "Read More →"}
                </button>

              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}