"use client"

export default function ContactBlock() {
  return (
    <section className="py-28 relative overflow-hidden">

      {/* 🔥 BG GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7] via-white to-[#eef2f7]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="
          text-3xl md:text-5xl
          font-semibold
          tracking-tight
          text-[#1d1d1f]
        ">
          Mail your Resume at{" "}
          <span className="
            bg-gradient-to-r from-orange-500 to-red-500
            bg-clip-text text-transparent
          ">
            hr@appnwebtechnologies.com
          </span>
        </h2>

        {/* SUB TEXT */}
        <p className="
          mt-6 text-lg
          text-[#6e6e73]
        ">
          WhatsApp Contact
        </p>

        {/* PHONE */}
        <p className="
          mt-2 text-xl font-medium
          text-[#1d1d1f]
        ">
          8107388219
        </p>

        {/* BUTTON */}
        <div className="mt-10">
          <a
            href="https://wa.me/918107388219"
            target="_blank"
            className="
              inline-block
              px-8 py-3
              rounded-full
              bg-black text-white
              text-sm font-medium
              hover:scale-105 hover:shadow-xl
              transition
            "
          >
            Chat on WhatsApp →
          </a>
        </div>

      </div>

    </section>
  )
}