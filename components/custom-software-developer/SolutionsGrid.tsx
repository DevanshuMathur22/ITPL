export default function SolutionsGrid() {
  const data = [
    {
      title: "Quality Engineering",
      desc: "Get faster responses, greater insights, better experiences, and lower risks through AI-led solutions.",
    },
    {
      title: "Innovation-led Solutions",
      desc: "Reimagine your app and web development with speed and agility.",
    },
    {
      title: "Mobile App Development",
      desc: "Rapidly build and modernize applications with agile migration.",
    },
    {
      title: "Software Security",
      desc: "Creative and customer-responsive designs with advanced functionality.",
    },
    {
      title: "eCommerce Development",
      desc: "Build scalable ecommerce platforms with seamless UX.",
    },
  ]

  return (
    <section className="py-20 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold">
            Software Development Solutions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            To optimize the performance of your software solutions...
          </p>
        </div>

        {/* 🔥 GRID 2 CARDS */}
        <div className="grid md:grid-cols-2 gap-12">

          {data.map((item, i) => (
            <div key={i} className="flex gap-4">

              {/* RED BAR */}
              <div className="w-1 bg-red-600 rounded-full" />

              {/* CONTENT */}
              <div>
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}