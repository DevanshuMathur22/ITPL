"use client"

export default function JobInfo() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* 🔥 GLOBAL GRADIENT BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-[#eef2f7] to-[#f5f5f7]" />

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-400/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-10">

        {/* 🔥 BLOCK 1 */}
        <div className="
          bg-white/70 backdrop-blur-xl
          rounded-3xl p-10
          border border-white/40
          shadow-lg
          hover:shadow-xl transition
        ">
          <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
            Paid Marketing & Campaign Management
          </h2>

          <p className="text-[#6e6e73] leading-relaxed text-lg">
            Develop, implement, and manage paid marketing campaigns across
            platforms like Google Ads and Meta Ads. Continuously monitor
            performance and optimize campaigns to maximize ROI and align
            with business objectives.
          </p>
        </div>

        {/* 🔥 BLOCK 2 */}
        <div className="
          bg-white/70 backdrop-blur-xl
          rounded-3xl p-10
          border border-white/40
          shadow-lg
          hover:shadow-xl transition
        ">
          <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
            Social Media & Content Strategy
          </h2>

          <p className="text-[#6e6e73] leading-relaxed text-lg">
            Manage social media accounts for both in-house and client
            projects. Create engaging visual content including reels,
            graphics, and campaigns. Plan and execute strategies to improve
            brand visibility, engagement, and audience growth.
          </p>
        </div>

        {/* 🔥 BLOCK 3 */}
        <div className="
          bg-white/70 backdrop-blur-xl
          rounded-3xl p-10
          border border-white/40
          shadow-lg
          hover:shadow-xl transition
        ">
          <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
            SEO & Organic Growth
          </h2>

          <p className="text-[#6e6e73] leading-relaxed text-lg">
            Perform complete SEO activities including on-page, off-page,
            and technical SEO. Build high-quality backlinks and implement
            strategies to increase website authority, drive organic traffic,
            and generate leads.
          </p>
        </div>

        {/* 🔥 BLOCK 4 */}
        <div className="
          bg-white/70 backdrop-blur-xl
          rounded-3xl p-10
          border border-white/40
          shadow-lg
          hover:shadow-xl transition
        ">
          <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
            Analytics & Reporting
          </h2>

          <p className="text-[#6e6e73] leading-relaxed text-lg">
            Analyze campaign performance and provide actionable insights.
            Prepare detailed reports covering SEO metrics, paid campaigns,
            and social media engagement to support decision-making and
            growth strategies.
          </p>
        </div>

      </div>
    </section>
  )
}