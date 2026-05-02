"use client"

export default function NodeDetails() {
  return (
    <section className="py-24 relative overflow-hidden">

      {/* 🔥 BG GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-[#eef2f7] to-[#f5f5f7]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="
          text-4xl md:text-5xl
          font-semibold
          text-[#1d1d1f]
          tracking-tight
        ">
          Sr. Node JS Developer
        </h1>

        {/* APPLY */}
        <div className="mt-6">
          <button className="
            text-red-500 font-medium
            hover:underline
          ">
            Apply Now →
          </button>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="
            bg-white/70 backdrop-blur-xl
            p-8 rounded-3xl
            shadow-lg border border-white/40
          ">

            <h2 className="
              text-xl font-semibold mb-6
              bg-gradient-to-r from-orange-500 to-red-500
              bg-clip-text text-transparent
            ">
              Responsibilities
            </h2>

            <ul className="space-y-4 text-[#4a4a4d] leading-relaxed">

              <li>Develop and maintain server-side components</li>
              <li>Ensure database performance & responsiveness</li>
              <li>Collaborate with frontend developers</li>
              <li>Design APIs and backend services</li>
              <li>Document processes and systems</li>
              <li>Improve system architecture</li>
              <li>Stay updated with Node.js trends</li>

            </ul>

          </div>

          {/* RIGHT SIDE */}
          <div className="
            bg-white/70 backdrop-blur-xl
            p-8 rounded-3xl
            shadow-lg border border-white/40
          ">

            <h2 className="
              text-xl font-semibold mb-6
              bg-gradient-to-r from-purple-500 to-indigo-500
              bg-clip-text text-transparent
            ">
              Skills
            </h2>

            <ul className="space-y-4 text-[#4a4a4d] leading-relaxed">

              <li>Strong JavaScript & Node.js knowledge</li>
              <li>Experience with REST APIs</li>
              <li>Database: MongoDB / MySQL</li>
              <li>Understanding of HTML5 & CSS3</li>
              <li>Good communication skills</li>
              <li>Problem-solving mindset</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  )
}