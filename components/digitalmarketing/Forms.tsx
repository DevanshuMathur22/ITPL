"use client"

export default function Forms() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* 🔥 BG GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-[#eef2f7] to-[#f5f5f7]" />

      {/* 🔥 GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-orange-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-400/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] leading-tight">
            Apply for this <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Position
            </span>
          </h2>

          <p className="mt-6 text-[#6e6e73] text-lg">
            Join our team and build something amazing. Fill the form and we’ll get back to you.
          </p>
        </div>

        {/* FORM */}
        <form className="
          bg-white/70 backdrop-blur-xl
          p-8 rounded-3xl
          shadow-xl border border-white/40
          space-y-5
        ">

          {/* INPUT */}
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full px-5 py-4 rounded-xl bg-[#f5f5f7] focus:bg-white outline-none border border-transparent focus:border-black/20 transition"
          />

          <input
            type="email"
            placeholder="Email*"
            className="w-full px-5 py-4 rounded-xl bg-[#f5f5f7] focus:bg-white outline-none border border-transparent focus:border-black/20 transition"
          />

          {/* PHONE */}
          <div className="flex gap-3">
            <select className="w-1/3 px-4 py-4 rounded-xl bg-[#f5f5f7] outline-none">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>

            <input
              type="text"
              placeholder="Phone Number*"
              className="w-2/3 px-5 py-4 rounded-xl bg-[#f5f5f7] focus:bg-white outline-none border border-transparent focus:border-black/20 transition"
            />
          </div>

          <input
            type="text"
            placeholder="Experience*"
            className="w-full px-5 py-4 rounded-xl bg-[#f5f5f7] focus:bg-white outline-none border border-transparent focus:border-black/20 transition"
          />

          {/* FILE */}
          <div className="flex items-center gap-4">
            <label className="
              px-6 py-3 rounded-full
              bg-black text-white text-sm
              cursor-pointer hover:scale-105 transition
            ">
              Upload CV
              <input type="file" className="hidden" />
            </label>

            <span className="text-sm text-gray-500">
              No file selected
            </span>
          </div>

          <input
            type="text"
            placeholder="LinkedIn URL*"
            className="w-full px-5 py-4 rounded-xl bg-[#f5f5f7] focus:bg-white outline-none border border-transparent focus:border-black/20 transition"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="
              w-full mt-4 py-4 rounded-full
              bg-gradient-to-r from-orange-500 to-red-500
              text-white font-medium
              hover:scale-[1.02] hover:shadow-lg
              transition
            "
          >
            Submit Application →
          </button>

        </form>

      </div>
    </section>
  )
}