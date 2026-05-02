export default function WhatWeOffer() {
  const data = [
    {
      title: "Cost Effective",
      desc: "Work with programmers from APPNWEB and save up to 50% of your development cost by using our in-house resources.",
    },
    {
      title: "Vetted Talent",
      desc: "With over a decade of experience, we have built a team of highly vetted programmers and designers who are experts in their fields and have a proven track record of delivering high-quality work to clients worldwide.",
    },
    {
      title: "Custom Development",
      desc: "Work with the world’s best developers. We have built a versatile team that delivers innovative and scalable solutions tailored to your unique business needs, ensuring your project’s success and growth.",
    },
    {
      title: "Client-Centric Approach",
      desc: "Get developers who use cutting-edge technologies for a superior experience and build impactful digital products that drive your business forward. We prioritize your vision and goals, ensuring that our solutions align perfectly with your business objectives.",
    },
    {
      title: "Strict Confidentiality",
      desc: "We understand the value of your privacy. We sign NDAs and ensure that your data remains secure and confidential, giving you peace of mind while we work together to achieve your goals.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-[#f5f5f7] to-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-12">
          What Do We Offer
        </h2>

        {/* CARDS */}
        <div className="space-y-6">

          {data.map((item, i) => (
            <div
              key={i}
              className="
                bg-[#f4ddee]
                rounded-2xl
                p-8
                transition
                hover:shadow-md
              "
            >

              <h3 className="text-xl font-semibold text-[#17171a]">
                {item.title}
              </h3>

              <p className="mt-3 text-[#5b5b60] leading-relaxed max-w-2xl">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}